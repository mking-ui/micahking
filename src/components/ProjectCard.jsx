"use client";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
        <img
          src={project.images[0]}
          className="img-fluid rounded"
          alt={project.title}
        />
        <div className="portfolio-links">
          <Link href={`/projects/${project.id}`}>
            <i className="bi bi-link"></i>
          </Link>
        </div>
      </div>
      <h4 className="mt-2">{project.title}</h4>
    </div>
  );
}
