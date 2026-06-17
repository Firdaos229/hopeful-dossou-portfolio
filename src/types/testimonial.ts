export type Testimonial = {
  id: string;
  name: string;
  company?: string;
  role: string;
  message: string;
  rating: number; // 1-5
  project?: string;
  approved: boolean;
};
