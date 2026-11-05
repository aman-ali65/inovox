import { blogCategories } from '../data/blogData';

export default function BlogFilters({
  categories = blogCategories,
  activeCat = 'all',
  onSelectCat,
}) {
  return (
    <div className="blog-filters-bar">
      <div className="blog-category-chips">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`blog-chip ${activeCat === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCat(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
