import { Link } from 'react-router-dom';

export default function ProjectCard({ project, onPreviewClick }) {
  const handleLivePreview = (e) => {
    e.preventDefault();
    if (project.previewUrl) {
      window.open(project.previewUrl, '_blank', 'noopener,noreferrer');
    } else if (onPreviewClick) {
      onPreviewClick(project);
    }
  };

  return (
    <article className="portfolio-card">
      {/* 1. Large Landscape Image (16:9, object-fit: cover, rounded top corners) */}
      <div className="portfolio-card-media">
        <img
          src={project.image}
          alt={project.name}
          className="portfolio-card-img"
          loading="lazy"
        />
      </div>

      {/* Card Content Body */}
      <div className="portfolio-card-body">
        {/* 2. Small Project Category */}
        <div className="portfolio-card-meta">
          <span className="portfolio-category-pill">{project.category}</span>
        </div>

        {/* 3. Project Title */}
        <h3 className="portfolio-card-title">{project.name}</h3>

        {/* 4. Short Description (Max 2 lines) */}
        <p className="portfolio-card-desc">{project.shortDesc}</p>

        {/* 5. Technology Tags (Max 3-4) */}
        <div className="portfolio-card-tech">
          {project.techTags.slice(0, 4).map((tech, idx) => (
            <span className="portfolio-tech-tag" key={idx}>
              {tech}
            </span>
          ))}
        </div>

        {/* 6. Two Action Buttons */}
        <div className="portfolio-card-actions">
          <Link
            to={`/portfolio/${project.slug}`}
            className="btn-view-details"
            aria-label={`View details for ${project.name}`}
          >
            View Details
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <button
            type="button"
            onClick={handleLivePreview}
            className="btn-live-preview"
            aria-label={`Live preview of ${project.name}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Live Preview
          </button>
        </div>
      </div>
    </article>
  );
}
