import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { TeamStory } from "@/components/TeamStory";
import { Roster } from "@/components/Roster";
import { Season } from "@/components/Season";
import { Sponsors } from "@/components/Sponsors";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TeamStory />
        <Roster />
        <Season />
        <Sponsors />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
