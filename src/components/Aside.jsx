import Newsletter from "./Newsletter";

export default function Aside() {
  return (
    <aside className="aside" data-aos="fade-left">
      <div className="container">
        <section className="mb-4">
          <h2 className="h5">Popular Topics</h2>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center">
                <i className="bi bi-code-slash me-2"></i> Programming
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center">
                <i className="bi bi-brush me-2"></i> Design
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center">
                <i className="bi bi-cpu me-2"></i> AI & ML
              </a>
            </li>
            <li>
              <a href="#" className="d-flex align-items-center">
                <i className="bi bi-lightning me-2"></i> Startups
              </a>
            </li>
          </ul>
        </section>

        <section>
          <Newsletter />
        </section>
      </div>
    </aside>
  );
}
