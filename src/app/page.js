
import Hero from "@/components/Hero";
import BlogList from "@/components/BlogList";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import ProjectsPage from "./projects/page";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
     <Navbar/>
      <main className="container my-5">
        <div className="row g-5">
          <div className="col-lg-12">
            <Hero />
            
          </div>
        <ProjectsPage/>
          <div className="col-lg-8"><BlogList /></div>

          <div className="col-lg-4">
            <Aside />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
