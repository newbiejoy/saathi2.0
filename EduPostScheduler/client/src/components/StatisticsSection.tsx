import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Statistic {
  value: string;
  label: string;
  description: string;
}

interface StatisticsSectionProps {
  statistics?: Statistic[];
}

export default function StatisticsSection({ statistics }: StatisticsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const defaultStats: Statistic[] = [
    {
      value: "60,000+",
      label: "Annual Deaths",
      description: "Lives lost to natural disasters worldwide each year"
    },
    {
      value: "$200B+",
      label: "Economic Losses",
      description: "Global economic impact from natural disasters annually"
    },
    {
      value: "200M+",
      label: "People Affected",
      description: "Individuals impacted by natural disasters each year"
    }
  ];

  const statsToUse = statistics || defaultStats;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Text animations only
    gsap.fromTo(section.querySelectorAll('.stat-item'), 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
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

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center justify-center py-20"
      data-testid="statistics-section"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 stat-item">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            The Impact
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Natural disasters affect millions of lives and cause billions in damage worldwide each year
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {statsToUse.map((stat, index) => (
            <div 
              key={index}
              className="text-center stat-item"
              data-testid={`statistic-${index}`}
            >
              <div 
                className="text-6xl md:text-8xl font-black text-red-500 mb-4"
                data-testid={`counter-${index}`}
              >
                {stat.value}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide uppercase">
                {stat.label}
              </h3>
              
              <p className="text-white/60 text-lg leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}