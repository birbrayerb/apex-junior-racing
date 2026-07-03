import type { Metadata } from "next";
import { TeamStory } from "@/components/TeamStory";

export const metadata: Metadata = {
  title: "Team",
  description:
    "How Apex Junior Racing develops junior road racers — a small U19 squad run like a pro team, with structure, standards, and taste.",
};

export default function TeamPage() {
  return (
    <div className="pt-14 md:pt-20">
      <TeamStory />
    </div>
  );
}
