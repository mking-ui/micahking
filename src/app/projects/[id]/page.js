import projects from "@/data/projects";
import ProjectDetails from "@/components/ProjectDetails";

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.id === params.id);

  console.log("Selected project:", project);

  if (!project) {
    return <h2 className="text-center py-5">Project not found</h2>;
  }

  return (
    <main id="main">
      <ProjectDetails project={project} />
    </main>
  );
}
