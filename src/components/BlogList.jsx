import BlogCard from "./BlogCard";

export default function BlogList() {
  const posts = [
    
  {
    image: "./images/project-1.png",
    category: "Web Development",
    title: "Budget Planner & Expense Tracker",
    excerpt: "A full-stack app for managing personal finances, built with React Native and Firebase.",
    author: "Sir Jimmy",
    date: "Jan 2025",
  },
  {
    image: "./images/project-2.png",
    category: "AI & ML",
    title: "Student Result Prediction System",
    excerpt: "Machine learning-powered platform that predicts and visualizes student performance trends.",
    author: "Sir Jimmy",
    date: "Mar 2025",
  },
  {
    image: "./images/project-3.png",
    category: "Web App",
    title: "Email Scraper Tool",
    excerpt: "A Flask-based web application to extract and validate email addresses from websites.",
    author: "Sir Jimmy",
    date: "May 2025",
  },
  {
    image: "./images/project-4.png",
    category: "IoT",
    title: "Smart Agriculture System",
    excerpt: "IoT-based project monitoring soil moisture, temperature, and automating irrigation.",
    author: "Sir Jimmy",
    date: "Jul 2025",
  },
  {
    image: "./images/project-5.png",
    category: "Startup",
    title: "Tech Blog Platform",
    excerpt: "A Next.js 14 blogging platform with newsletter integration, animations, and responsive design.",
    author: "Sir Jimmy",
    date: "Aug 2025",
  },
  {
    image: "./images/project-6.png",
    category: "Freelance",
    title: "Typing & Document Formatting",
    excerpt: "Completed multiple freelance typing projects including academic papers, reports, and ebooks.",
    author: "Sir Jimmy",
    date: "2024",
  },
  {
    image: "./images/project-7.png",
    category: "Freelance",
    title: "Image to Text Conversion",
    excerpt: "Converted scanned documents and images into editable text for clients using OCR tools.",
    author: "Sir Jimmy",
    date: "2024",
  },
  {
    image: "./images/project-8.png",
    category: "Graphics Design",
    title: "Logos, Posters & Flyers",
    excerpt: "Designed modern logos, social media flyers, and posters using Photoshop & Canva.",
    author: "Sir Jimmy",
    date: "2023 - 2025",
  },


  ];

  return (
    <div className="row g-4">
      {posts.map((post, i) => (
        <div key={i} className="col-md-6">
          <BlogCard {...post} />
        </div>
      ))}
    </div>
  );
}
