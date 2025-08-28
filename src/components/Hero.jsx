export default function Hero() {
  return (
    <section className="hero text-center text-lg-start" data-aos="fade-up">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5">
        {/* Left Section */}
        <div className="left col-lg-6">
          <h1 className="h1 fw-bold">
            Hi, I'm <b>MicahKing</b>.
            <br />
            Web Developer
          </h1>

          <p className="h3">
            Specialized in <abbr title="Accessibility">Frontend</abbr> and Core Web Vitals
          </p>

          <div className="btn-group mt-3">
            <a href="#" className="btn btn-primary btn-lg">
              Contact Me <i className="bi bi-envelope-fill ms-2"></i>
            </a>
            <a href="#" className="btn btn-outline-secondary btn-lg">
              About Me <i className="bi bi-person-lines-fill ms-2"></i>
            </a>
          </div>
        </div>

        {/* Right Section (Image + Shapes) */}
        <div className="right col-lg-6 text-center" data-aos="zoom-in">
          <div className="pattern-bg"></div>
          <div className="img-box position-relative">
            <img
              src="/images/micah.jpg"
              alt="Sir Jimmy"
              className="hero-img img-fluid rounded shadow"
            />
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
