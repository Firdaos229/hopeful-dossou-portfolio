import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type {
  Project,
  Skill,
  Experience,
  Certification,
} from "@/types";

// ─── Client ─────────────────────────────────────────────────────────────────
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getProp(page: PageObjectResponse, key: string) {
  return (page.properties as Record<string, any>)[key];
}

function getRichText(page: PageObjectResponse, key: string): string {
  const prop = getProp(page, key);
  return prop?.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
}

function getTitle(page: PageObjectResponse): string {
  const prop = Object.values(page.properties as Record<string, any>).find(
    (p: any) => p.type === "title"
  );
  return prop?.title?.map((t: any) => t.plain_text).join("") ?? "";
}

function getSelect(page: PageObjectResponse, key: string): string {
  return getProp(page, key)?.select?.name ?? "";
}

function getMultiSelect(page: PageObjectResponse, key: string): string[] {
  return getProp(page, key)?.multi_select?.map((s: any) => s.name) ?? [];
}

function getCheckbox(page: PageObjectResponse, key: string): boolean {
  return getProp(page, key)?.checkbox ?? false;
}

function getNumber(page: PageObjectResponse, key: string): number {
  return getProp(page, key)?.number ?? 0;
}

function getUrl(page: PageObjectResponse, key: string): string | undefined {
  return getProp(page, key)?.url ?? undefined;
}

function getDate(page: PageObjectResponse, key: string): string {
  return getProp(page, key)?.date?.start ?? "";
}

function getCover(page: PageObjectResponse): string | undefined {
  if (page.cover?.type === "external") return page.cover.external.url;
  if (page.cover?.type === "file") return page.cover.file.url;
  return undefined;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ─── Projects ────────────────────────────────────────────────────────────────
export async function getProjects(): Promise<Project[]> {
  const dbId = process.env.NOTION_PROJECTS_DB_ID!;
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: dbId,
    filter: { property: "Published", checkbox: { equals: true } },
    sorts: [{ property: "CreatedAt", direction: "descending" }],
  });

  return response.results
    .filter((p): p is PageObjectResponse => p.object === "page")
    .map((page) => ({
      id: page.id,
      slug: getRichText(page, "Slug") || slugify(getTitle(page)),
      title: getTitle(page),
      description: getRichText(page, "Description"),
      tags: getMultiSelect(page, "Tags"),
      category: getSelect(page, "Category") as Project["category"],
      githubUrl: getUrl(page, "GitHub"),
      demoUrl: getUrl(page, "Demo"),
      coverImage: getCover(page),
      featured: getCheckbox(page, "Featured"),
      status: getSelect(page, "Status") as Project["status"],
      createdAt: getDate(page, "CreatedAt") || page.created_time,
    }));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export async function getProjectContent(pageId: string): Promise<string> {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdBlocks);
  return mdString.parent;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((p) => p.featured).slice(0, 3);
}

// ─── Skills ──────────────────────────────────────────────────────────────────
export async function getSkills(): Promise<Skill[]> {
  const dbId = process.env.NOTION_SKILLS_DB_ID!;
  const response = await notion.databases.query({
    database_id: dbId,
    sorts: [{ property: "Category", direction: "ascending" }],
  });

  return response.results
    .filter((p): p is PageObjectResponse => p.object === "page")
    .map((page) => ({
      id: page.id,
      name: getTitle(page),
      category: getSelect(page, "Category") as Skill["category"],
      level: getNumber(page, "Level"),
      icon: getRichText(page, "Icon"),
    }));
}

export async function getSkillsByCategory(): Promise<
  Record<string, Skill[]>
> {
  const skills = await getSkills();
  return skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );
}

// ─── Experiences ─────────────────────────────────────────────────────────────
export async function getExperiences(): Promise<Experience[]> {
  const dbId = process.env.NOTION_EXPERIENCES_DB_ID!;
  const response = await notion.databases.query({
    database_id: dbId,
    sorts: [{ property: "StartDate", direction: "descending" }],
  });

  return response.results
    .filter((p): p is PageObjectResponse => p.object === "page")
    .map((page) => {
      const startDate = getDate(page, "StartDate");
      const year = startDate ? new Date(startDate).getFullYear().toString() : "";
      return {
        id: page.id,
        title: getTitle(page),
        company: getRichText(page, "Company"),
        type: getSelect(page, "Type") as Experience["type"],
        startDate,
        endDate: getDate(page, "EndDate") || undefined,
        description: getRichText(page, "Description"),
        year,
      };
    });
}

// ─── Certifications ──────────────────────────────────────────────────────────
export async function getCertifications(): Promise<Certification[]> {
  const dbId = process.env.NOTION_CERTIFICATIONS_DB_ID!;
  const response = await notion.databases.query({
    database_id: dbId,
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results
    .filter((p): p is PageObjectResponse => p.object === "page")
    .map((page) => ({
      id: page.id,
      name: getTitle(page),
      issuer: getRichText(page, "Issuer"),
      date: getDate(page, "Date"),
      credentialUrl: getUrl(page, "CredentialURL"),
      badge: getCover(page),
    }));
}
