import type { Metadata } from "next";
import { Sponsors } from "@/components/Sponsors";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The partners behind Apex Junior Racing — and how your brand can back a fast, well-run junior development team.",
};

export default function PartnersPage() {
  // Sponsors already carries generous top padding (!pt-32) and its angular
  // clip-diagonal top edge, so it needs no extra wrapper padding.
  return <Sponsors />;
}
