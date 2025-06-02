"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited && pathname !== "/welcome") {
      router.replace("/welcome");
    }
  }, [pathname, router]);

  return <>{children}</>;
}
