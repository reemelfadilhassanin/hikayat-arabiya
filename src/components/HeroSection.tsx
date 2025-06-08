
import { BookOpen, PenTool, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center gradient-warm overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 text-6xl text-deep-brown">📚</div>
        <div className="absolute top-40 left-32 text-4xl text-gold-accent">✨</div>
        <div className="absolute bottom-32 right-1/3 text-5xl text-warm-brown">📖</div>
        <div className="absolute bottom-20 left-20 text-4xl text-deep-brown">✍️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-deep-brown mb-6 animate-fade-in">
            مرحباً بك في
            <span className="block text-gold-accent">مجلة الكلمات</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-light mb-8 leading-relaxed animate-slide-up">
            منصة متخصصة في نشر المقالات والقصص القصيرة باللغة العربية
            <br />
            <span className="text-deep-brown font-medium">حيث تلتقي الكلمات بالمعاني</span>
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-slide-up">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 card-hover">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-deep-brown mb-2">مقالات متنوعة</h3>
              <p className="text-text-light text-sm">
                مقالات في مختلف المجالات مكتوبة بأسلوب شيق وممتع
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 card-hover">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-deep-brown mb-2">قصص قصيرة</h3>
              <p className="text-text-light text-sm">
                قصص قصيرة مؤثرة تحمل معاني عميقة وتجارب إنسانية
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 card-hover">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-deep-brown mb-2">محتوى مميز</h3>
              <p className="text-text-light text-sm">
                محتوى حصري ومختار بعناية ليناسب جميع الأذواق
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button className="btn-arabic text-lg">
              ابدأ القراءة الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
