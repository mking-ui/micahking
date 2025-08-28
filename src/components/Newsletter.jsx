export default function Newsletter() {
  return (
    <div className="newsletter text-center my-5">
      <h2>Subscribe to our Newsletter</h2>
      <p className="mb-3">Stay updated with the latest articles and insights.</p>

      <form
        action="mailto:micahenoch3@gmail"  // <-- replace with your real email
        method="POST"
        encType="text/plain"
      >
        <div className="input-group w-75 mx-auto">
          <input
            type="email"
            className="form-control"
            name="Email"
            placeholder="Enter your email"
            required
          />
          <button className="btn btn-primary" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
