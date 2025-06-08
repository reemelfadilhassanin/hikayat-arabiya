
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  featured?: boolean;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  featured = false,
}: ArticleCardProps) => {
  return (
    <article
      className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden card-hover ${
        featured ? "border-2 border-gold-accent/20" : "border border-warm-brown/10"
      }`}
    >
      {/* Image */}
      {image && (
        <div className="relative overflow-hidden h-48 md:h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {featured && (
            <div className="absolute top-4 right-4 bg-gold-accent text-white px-3 py-1 rounded-full text-sm font-medium">
              مميز
            </div>
          )}
          <div className="absolute top-4 left-4 bg-deep-brown/80 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-deep-brown mb-3 line-clamp-2 group-hover:text-gold-accent transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-text-light text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-text-light mb-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center space-x-1 space-x-reverse">
              <User className="w-3 h-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 space-x-reverse">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Read More Link */}
        <Link
          to={`/article/${id}`}
          className="inline-flex items-center space-x-2 space-x-reverse text-deep-brown hover:text-gold-accent font-medium text-sm transition-colors group"
        >
          <span>اقرأ المزيد</span>
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
