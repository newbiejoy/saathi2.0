import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Clock, MapPin, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface DisasterDetail {
  icon: any;
  title: string;
  description: string;
}

interface DisasterDetailsSectionProps {
  disasterType: string;
  overview: string;
  details: DisasterDetail[];
  warnings: string[];
  backgroundColor?: 'dark' | 'light';
}

export default function DisasterDetailsSection({ 
  disasterType, 
  overview, 
  details, 
  warnings,
  backgroundColor = 'dark' 
}: DisasterDetailsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const contentEl = contentRef.current;

    if (!section || !contentEl) return;

    // Content animation
    gsap.fromTo(contentEl.querySelectorAll('.detail-item'), 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%'
        }
      }
    );

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  const bgClass = backgroundColor === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = backgroundColor === 'dark' ? 'text-white' : 'text-gray-900';
  const cardClass = backgroundColor === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';

  return (
    <section 
      ref={sectionRef}
      className={`py-20 ${bgClass}`}
      data-testid="disaster-details-section"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div ref={contentRef}>
          {/* Header */}
          <div className="detail-item text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-black ${textClass} mb-6`}>
              {disasterType} Deep Dive
            </h2>
            <p className={`text-xl ${backgroundColor === 'dark' ? 'text-white/80' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              {overview}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {details.map((detail, index) => {
              const IconComponent = detail.icon;
              return (
                <div 
                  key={index}
                  className={`detail-item p-6 rounded-lg border ${cardClass}`}
                  data-testid={`detail-card-${index}`}
                >
                  <IconComponent className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className={`text-xl font-semibold ${textClass} mb-3`}>
                    {detail.title}
                  </h3>
                  <p className={`${backgroundColor === 'dark' ? 'text-white/70' : 'text-gray-600'} leading-relaxed`}>
                    {detail.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Warning Section */}
          <div className="detail-item">
            <div className={`p-8 rounded-lg border-l-4 border-red-500 ${backgroundColor === 'dark' ? 'bg-red-900/20' : 'bg-red-50'}`}>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                <h3 className={`text-xl font-semibold ${textClass}`}>
                  Critical Safety Information
                </h3>
              </div>
              <ul className="space-y-3">
                {warnings.map((warning, index) => (
                  <li 
                    key={index}
                    className="flex items-start space-x-3"
                    data-testid={`warning-${index}`}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                    <span className={`${backgroundColor === 'dark' ? 'text-white/80' : 'text-gray-700'} leading-relaxed`}>
                      {warning}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}