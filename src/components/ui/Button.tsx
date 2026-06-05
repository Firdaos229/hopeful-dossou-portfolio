import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-inter font-medium transition-all duration-200 rounded cursor-pointer";

  const variants = {
    primary:
      "bg-[#007BFF] text-white hover:bg-[#0056D6] shadow-glow-sm hover:shadow-glow-md border border-[#007BFF]",
    outline:
      "bg-transparent text-[#EAF2FF] border border-[#007BFF]/50 hover:border-[#007BFF] hover:bg-[#007BFF]/10 hover:shadow-glow-sm",
    ghost:
      "bg-transparent text-[#9CA3AF] hover:text-[#EAF2FF] hover:bg-white/5 border border-transparent",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
