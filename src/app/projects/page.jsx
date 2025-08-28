import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main id="main">
      <section id="portfolio" className="portfolio py-5">
        <div className="container">
          <div className="row gy-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
