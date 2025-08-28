export default function Newsletter() {
  return (
    <div className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p className="mb-3">Stay updated with the latest articles and insights.</p>
      <form>
        <div className="input-group">
          <input
            type="email"
            className="form-control"
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
