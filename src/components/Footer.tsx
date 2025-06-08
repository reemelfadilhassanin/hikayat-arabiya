
import { BookOpen, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-deep-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">مجلة الكلمات</h3>
                <p className="text-sm text-white/70">منصة المقالات والقصص</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              منصة متخصصة في نشر المقالات والقصص القصيرة باللغة العربية، نهدف إلى نشر المحتوى 
              القيم والمفيد الذي يثري الفكر ويغذي الروح.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4 space-x-reverse mt-6">
              <span className="text-sm text-white/70">تابعنا على:</span>
              <div className="flex space-x-3 space-x-reverse">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-accent transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-accent transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-accent transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-white/70 hover:text-white transition-colors">
                  المقالات
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-white/70 hover:text-white transition-colors">
                  القصص القصيرة
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-white/70 hover:text-white transition-colors">
                  المحتوى المميز
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Mail className="w-4 h-4 text-gold-accent" />
                <span className="text-white/70 text-sm">info@kalimat-mag.com</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                لأي استفسارات أو اقتراحات، لا تترددوا في التواصل معنا
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © 2024 مجلة الكلمات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
