"use client";
import { useEffect } from "react";
import Link from "next/link";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function ProjectDetails({ project }) {
  useEffect(() => {
    new Swiper(".portfolio-details-slider", {
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  }, []);

  return (
    <section id="portfolio-details" className="portfolio-details py-5 position-relative">
      {/* Close Button */}
      <div className="position-absolute top-0 end-0 p-3">
        <Link href="/projects" className="btn-close" aria-label="Close"></Link>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Image Slider */}
          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                {project.images.map((img, i) => (
                  <div className="swiper-slide" key={i}>
                    <img src={img} alt={project.title} />
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          {/* Project Info */}
          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: {project.category}</li>
                <li><strong>Client</strong>: {project.client}</li>
                <li><strong>Project date</strong>: {project.date}</li>
                <li>
                  <strong>Project URL</strong>:{" "}
                  <a href={project.url} target="_blank">{project.url}</a>
                </li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
