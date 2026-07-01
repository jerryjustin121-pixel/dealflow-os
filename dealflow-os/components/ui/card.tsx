import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-[18px] border border-[var(--border)] bg-[rgba(15,23,42,0.92)] p-4 shadow-panel sm:p-4",
        className,
      )}
    >
      {children}
    </article>
  );
}
