
import { useState } from "react";
import { Menu, X, BookOpen, FileText, Star, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "الرئيسية", path: "/", icon: Home },
    { name: "المقالات", path: "/articles", icon: FileText },
    { name: "القصص القصيرة", path: "/stories", icon: BookOpen },
    { name: "المميزة", path: "/featured", icon: Star },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-warm-brown/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-deep-brown">مجلة الكلمات</h1>
              <p className="text-xs text-text-light">منصة المقالات والقصص</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-gold-accent/10 text-deep-brown font-medium"
                      : "text-text-light hover:text-deep-brown hover:bg-soft-beige"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-soft-beige transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-deep-brown" />
            ) : (
              <Menu className="w-6 h-6 text-deep-brown" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-warm-brown/10 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 space-x-reverse px-3 py-3 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? "bg-gold-accent/10 text-deep-brown font-medium"
                        : "text-text-light hover:text-deep-brown hover:bg-soft-beige"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
