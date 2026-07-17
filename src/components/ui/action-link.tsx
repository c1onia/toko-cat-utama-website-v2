import Link from "next/link";
import type { ReactNode } from "react";

type ActionLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
  className?: string;
};

export function ActionLink({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}: ActionLinkProps) {
  const classes = `button button--${variant} ${className}`.trim();

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
