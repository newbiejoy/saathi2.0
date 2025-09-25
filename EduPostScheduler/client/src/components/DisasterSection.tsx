import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DisasterSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  sectionNumber: string;
  id?: string;
}

export default function DisasterSection({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  sectionNumber,
  id 
}: DisasterSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const number = numberRef.current;

    if (!section || !content || !number) return;

    // Parallax effect for background
    gsap.fromTo(section, 
      { backgroundPosition: '50% 100%' },
      {
        backgroundPosition: '50% 0%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    // Content animation
    gsap.fromTo([content, number], 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      data-testid={`disaster-section-${id}`}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Section Number */}
      <div 
        ref={numberRef}
        className="absolute top-8 left-8 text-6xl font-black text-white/20"
        data-testid="section-number"
      >
        {sectionNumber}
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-8 max-w-4xl">
        <h2 className="text-2xl md:text-3xl text-red-400 font-medium mb-4 tracking-wider uppercase">
          {subtitle}
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
          {description}
        </p>
      </div>
    </section>
  );
}