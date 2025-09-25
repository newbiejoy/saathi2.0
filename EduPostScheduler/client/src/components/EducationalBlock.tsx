import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EducationalBlockProps {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tips?: string[];
}

export default function EducationalBlock({ 
  title, 
  content, 
  image, 
  imageAlt, 
  reverse = false,
  tips = []
}: EducationalBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const block = blockRef.current;
    const imageEl = imageRef.current;
    const contentEl = contentRef.current;

    if (!block || !imageEl || !contentEl) return;

    // Image parallax effect
    gsap.fromTo(imageEl, 
      { y: 50, scale: 1.1 },
      {
        y: -50,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: block,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    // Content animation
    gsap.fromTo(contentEl.children, 
      { x: reverse ? 50 : -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 70%'
        }
      }
    );

    return () => {
      ScrollTrigger.killAll();
    };
  }, [reverse]);

  return (
    <section 
      ref={blockRef}
      className="py-20 bg-gray-900"
      data-testid="educational-block"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Image */}
          <div 
            ref={imageRef}
            className={`relative overflow-hidden ${reverse ? 'lg:col-start-2' : ''}`}
          >
            <img 
              src={image}
              alt={imageAlt}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              data-testid="educational-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {content}
            </p>

            {tips.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Safety Tips:
                </h3>
                <ul className="space-y-3">
                  {tips.map((tip, index) => (
                    <li 
                      key={index}
                      className="flex items-start space-x-3"
                      data-testid={`tip-${index}`}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                      <span className="text-white/70">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}