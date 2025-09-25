import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Shield, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface CallToActionSectionProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export default function CallToActionSection({ onGetStarted, onLearnMore }: CallToActionSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    gsap.fromTo(content.children, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%'
        }
      }
    );

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  const handleGetStarted = () => {
    console.log('Get Started clicked');
    onGetStarted?.();
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked');
    onLearnMore?.();
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center justify-center py-20"
      data-testid="cta-section"
    >
      <div ref={contentRef} className="max-w-4xl mx-auto px-8 text-center">
        <div className="mb-8">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        </div>

        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
          Be Prepared.
          <br />
          <span className="text-red-500">Stay Safe.</span>
        </h2>

        <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
          Access real-time alerts and information with the Natural Disaster Alert System.
          Protect yourself and your loved ones with our comprehensive preparedness resources.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
            onClick={handleGetStarted}
            data-testid="button-get-started"
          >
            <Bell className="w-5 h-5 mr-2" />
            Get Started
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            onClick={handleLearnMore}
            data-testid="button-learn-more"
          >
            <Shield className="w-5 h-5 mr-2" />
            Learn More
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="text-center md:text-left">
            <Bell className="w-8 h-8 text-red-500 mb-4 mx-auto md:mx-0" />
            <h3 className="text-white font-semibold text-lg mb-2">Real-time Alerts</h3>
            <p className="text-white/60">Instant notifications for disasters in your area</p>
          </div>
          
          <div className="text-center md:text-left">
            <Shield className="w-8 h-8 text-red-500 mb-4 mx-auto md:mx-0" />
            <h3 className="text-white font-semibold text-lg mb-2">Safety Resources</h3>
            <p className="text-white/60">Comprehensive guides for disaster preparedness</p>
          </div>
          
          <div className="text-center md:text-left">
            <AlertTriangle className="w-8 h-8 text-red-500 mb-4 mx-auto md:mx-0" />
            <h3 className="text-white font-semibold text-lg mb-2">Emergency Info</h3>
            <p className="text-white/60">Critical information when you need it most</p>
          </div>
        </div>
      </div>
    </section>
  );
}