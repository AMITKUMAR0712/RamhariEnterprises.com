"use client";

import { usePathname } from "next/navigation";
import WhatsAppButton from "./whatapp";

export default function WhatsAppWrapper() {
  const pathname = usePathname();
  return pathname === "/" ? <WhatsAppButton /> : null;
}
