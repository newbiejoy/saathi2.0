import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import disasterHeroImage from '@assets/stock_images/dramatic_earthquake__9e40240d.jpg';

interface HeroSectionProps {
  onScrollToNext?: () => void;
}

export default function HeroSection({ onScrollToNext }: HeroSectionProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
      "-=0.6"
    )
    .fromTo(arrowRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 
      "-=0.3"
    );

    // Floating arrow animation
    gsap.to(arrowRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }, []);

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${disasterHeroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <div ref={titleRef} className="mb-6">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none tracking-tight">
            Natural Disaster
            <br />
            <span className="text-red-500">Alert System</span>
          </h1>
        </div>
        
        <div ref={subtitleRef} className="mb-12">
          <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
            Stay Alert, Stay Safe
          </p>
        </div>

        <div 
          ref={arrowRef}
          className="cursor-pointer"
          onClick={onScrollToNext}
          data-testid="scroll-arrow"
        >
          <ChevronDown className="w-12 h-12 text-white/80 mx-auto hover:text-white transition-colors" />
          <p className="text-white/60 text-sm mt-2 tracking-wider uppercase">Learn More</p>
        </div>
      </div>
    </section>
  );
}