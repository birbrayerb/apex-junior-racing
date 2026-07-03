import type { Metadata } from "next";
import { Season } from "@/components/Season";

export const metadata: Metadata = {
  title: "Season",
  description:
    "The Apex Junior Racing race calendar and results — spring stage races, national championships, and summer criteriums.",
};

export default function SeasonPage() {
  return (
    <div className="pt-14 md:pt-20">
      <Season />
    </div>
  );
}
