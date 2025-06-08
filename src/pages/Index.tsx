
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import { TrendingUp, Clock, BookmarkPlus } from "lucide-react";

const Index = () => {
  // Sample data - في التطبيق الحقيقي ستأتي هذه البيانات من قاعدة البيانات
  const featuredArticles = [
    {
      id: "1",
      title: "رحلة في عالم الكتابة الإبداعية",
      excerpt: "الكتابة فن يحتاج إلى صبر وممارسة، وفي هذا المقال نتعرف على أسرار الكتابة الإبداعية وكيفية تطوير مهاراتنا فيها...",
      author: "أحمد الكاتب",
      date: "منذ يومين",
      readTime: "5 دقائق",
      category: "أدب",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      id: "2",
      title: "قصة قصيرة: النافذة الأخيرة",
      excerpt: "في زاوية المقهى الصغير، جلس العجوز ينظر من النافذة المطلة على الشارع، لا يدري أن هذه ستكون نظرته الأخيرة...",
      author: "فاطمة السارد",
      date: "منذ 3 أيام",
      readTime: "3 دقائق",
      category: "قصة قصيرة",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
    },
    {
      id: "3",
      title: "تأملات في جمال الطبيعة",
      excerpt: "عندما نتأمل في جمال الطبيعة من حولنا، نكتشف أن الإبداع الإلهي لا حدود له، وأن كل شيء في هذا الكون له حكمة...",
      author: "سارة المتأملة",
      date: "منذ أسبوع",
      readTime: "4 دقائق",
      category: "تأملات",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    },
  ];

  const recentArticles = [
    {
      id: "4",
      title: "فن إدارة الوقت في عصر التكنولوجيا",
      excerpt: "مع تطور التكنولوجيا وكثرة المشتتات، أصبح من الضروري تعلم فن إدارة الوقت بطريقة فعالة...",
      author: "محمد المنظم",
      date: "منذ 4 أيام",
      readTime: "6 دقائق",
      category: "تطوير ذاتي",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    },
    {
      id: "5",
      title: "ذكريات من الطفولة",
      excerpt: "قصة قصيرة تحكي عن طفل صغير وذكرياته الجميلة في بيت جده الكبير، حيث رائحة الخبز والحنان...",
      author: "علي الحكواتي",
      date: "منذ 5 أيام",
      readTime: "4 دقائق",
      category: "ذكريات",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=600&fit=crop",
    },
    {
      id: "6",
      title: "رسالة إلى الأجيال القادمة",
      excerpt: "في هذا المقال نتحدث عن أهمية ترك أثر إيجابي في هذا العالم وكيف يمكننا أن نكون مصدر إلهام للآخرين...",
      author: "نور الهدى",
      date: "منذ أسبوع",
      readTime: "7 دقائق",
      category: "فكر",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-warm-cream">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Articles Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
                <TrendingUp className="w-6 h-6 text-gold-accent" />
                <h2 className="text-3xl font-bold text-deep-brown">المقالات المميزة</h2>
              </div>
              <p className="text-text-light max-w-2xl mx-auto">
                مجموعة مختارة من أفضل المقالات والقصص التي نشرت مؤخراً على موقعنا
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles Section */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
                <Clock className="w-6 h-6 text-deep-brown" />
                <h2 className="text-3xl font-bold text-deep-brown">أحدث المنشورات</h2>
              </div>
              <p className="text-text-light max-w-2xl mx-auto">
                آخر ما نشر من مقالات وقصص قصيرة على صفحات مجلتنا
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="btn-arabic">
                <BookmarkPlus className="w-5 h-5 ml-2" />
                عرض جميع المقالات
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-deep-brown text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              احصل على أحدث المقالات والقصص القصيرة مباشرة في صندوق بريدك الإلكتروني
            </p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-xl text-deep-brown border-0 focus:ring-2 focus:ring-gold-accent outline-none"
              />
              <button className="px-6 py-3 bg-gold-accent hover:bg-opacity-90 rounded-xl font-medium transition-all duration-200">
                اشترك
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
