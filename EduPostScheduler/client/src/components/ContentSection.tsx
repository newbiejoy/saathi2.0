import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  content: string[];
  backgroundColor?: 'dark' | 'light';
  centerText?: boolean;
}

export default function ContentSection({ 
  title, 
  subtitle, 
  content, 
  backgroundColor = 'light',
  centerText = false 
}: ContentSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const contentEl = contentRef.current;

    if (!section || !contentEl) return;

    // Content animation
    gsap.fromTo(contentEl.children, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
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

  const bgClass = backgroundColor === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textClass = backgroundColor === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleClass = backgroundColor === 'dark' ? 'text-red-400' : 'text-red-600';

  return (
    <section 
      ref={sectionRef}
      className={`py-20 ${bgClass}`}
      data-testid="content-section"
    >
      <div className="max-w-4xl mx-auto px-8">
        <div ref={contentRef} className={centerText ? 'text-center' : ''}>
          {subtitle && (
            <p className={`text-lg font-medium ${subtitleClass} mb-4 tracking-wider uppercase`}>
              {subtitle}
            </p>
          )}
          
          <h2 className={`text-4xl md:text-5xl font-black ${textClass} mb-8 leading-tight`}>
            {title}
          </h2>
          
          <div className="space-y-6">
            {content.map((paragraph, index) => (
              <p 
                key={index}
                className={`text-lg md:text-xl ${backgroundColor === 'dark' ? 'text-white/80' : 'text-gray-700'} leading-relaxed`}
                data-testid={`content-paragraph-${index}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}