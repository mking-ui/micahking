"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="container my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Get in Touch</h2>
        <p className="text-muted">
          I’m always open to collaborations, opportunities, or just a friendly hello.  
          Reach me easily through email, WhatsApp, or a quick phone call.
        </p>
      </div>

      <div className="row text-center">
        {/* Email */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <i className="bi bi-envelope-fill fs-1 text-primary mb-3"></i>
              <h5>Email</h5>
              <p className="text-muted">micahenoch3@gmail.com</p>
              <Link
                href="mailto:micahenoch3@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you"
                className="btn btn-primary"
              >
                Send Email
              </Link>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <i className="bi bi-whatsapp fs-1 text-success mb-3"></i>
              <h5>WhatsApp</h5>
              <p className="text-muted">+234 907 676 1102</p>
              <Link
                href="https://wa.me/2349076761102"
                target="_blank"
                className="btn btn-success"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <i className="bi bi-telephone-fill fs-1 text-info mb-3"></i>
              <h5>Phone</h5>
              <p className="text-muted">+234 907 676 1102</p>
              <Link href="tel:+234 9076761102" className="btn btn-info text-white">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
