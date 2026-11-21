"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

export default function SiteAnalytics({ id }: { id: string }) {
  const path = usePathname();
  if (path === "/reviews/leave" || path === "/reviews/manage") return null;
  return <GoogleAnalytics gaId={id} />;
}
