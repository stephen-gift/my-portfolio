import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { PageInfo, Project, Skill, Social } from "@/typings";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
export default function Home({ pageInfo, projects, skills, socials }: Props) {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}

      {/* Experience*/}

      {/* Skills */}

      {/* Projects */}

      {/* Contacts Me */}
    </main>
  );
}
