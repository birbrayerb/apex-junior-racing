import type { ReactNode } from "react";

/** Consistent section shell: anchor id, generous vertical rhythm, max width. */
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 md:py-36 ${className}`}>
      <div className="mx-auto max-w-shell px-6 md:px-10">{children}</div>
    </section>
  );
}
