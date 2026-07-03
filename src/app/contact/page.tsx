import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get involved with Apex Junior Racing — ride for the team as a young athlete, or become a partner.",
};

export default function ContactPage() {
  return (
    <div className="pt-14 md:pt-20">
      <Contact />
    </div>
  );
}
