"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
type Props = {
  children: React.ReactNode;
  href: string;
};

function MenuItem({ children, href }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link className={cn("block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground", isActive && "bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground")} href={href}>
      {children}
    </Link>
  );
}

export default MenuItem;
