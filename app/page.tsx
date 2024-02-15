import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { PageInfo, Project, Skill, Social } from "@/typings";


type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}
export default function Home({pageInfo, projects, skills, socials}: Props) {
  return (
    <main className="">

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}

      {/* Experience*/}

      {/* Skills */}

      {/* Projects */}

      {/* Contacts Me */}
    </main>
  );
}
