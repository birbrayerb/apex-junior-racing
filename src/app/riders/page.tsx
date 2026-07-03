import type { Metadata } from "next";
import { Roster } from "@/components/Roster";

export const metadata: Metadata = {
  title: "Riders",
  description:
    "Meet the Apex Junior Racing roster — U15 to U19 climbers, sprinters, and all-rounders racing the American road calendar.",
};

export default function RidersPage() {
  return (
    <div className="pt-14 md:pt-20">
      <Roster />
    </div>
  );
}
