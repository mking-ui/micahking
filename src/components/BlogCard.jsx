export default function BlogCard({ image, category, title, excerpt, author, date }) {
  return (
    <div className="card shadow-sm" data-aos="fade-up">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <span className="badge bg-primary mb-2">{category}</span>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{excerpt}</p>
        <div className="author">
          <img src="./images/author.png" width="40" height="40" alt={author} />
          <div>
            <small className="d-block fw-semibold">{author}</small>
            <small className="text-muted">{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
