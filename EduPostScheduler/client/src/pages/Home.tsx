import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import NavigationHeader from '@/components/NavigationHeader';
import DisasterSection from '@/components/DisasterSection';
import StatisticsSection from '@/components/StatisticsSection';
import EducationalBlock from '@/components/EducationalBlock';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';
import ContentSection from '@/components/ContentSection';
import DisasterDetailsSection from '@/components/DisasterDetailsSection';
import EmergencyModeToggle from '@/components/EmergencyModeToggle';

// Import disaster images
import earthquakeImage from '@assets/stock_images/dramatic_earthquake__9e40240d.jpg';
import floodImage from '@assets/stock_images/massive_flood_waters_6e537294.jpg';
import tsunamiImage from '@assets/stock_images/enormous_tsunami_wav_a6615789.jpg';
import wildfireImage from '@assets/stock_images/raging_wildfire_flam_aa6cf50c.jpg';
import hurricaneImage from '@assets/stock_images/hurricane_eye_view_f_c980e62f.jpg';
import tornadoImage from '@assets/stock_images/tornado_funnel_cloud_e40d9cb2.jpg';

// Import icons for detail sections  
import { Clock, MapPin, TrendingUp, Droplets, Waves, Flame, Wind, Zap, AlertCircle } from 'lucide-react';

export default function Home() {
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    // Apply emergency mode class to document
    if (isEmergencyMode) {
      document.documentElement.classList.add('emergency-mode');
    } else {
      document.documentElement.classList.remove('emergency-mode');
    }
    
    return () => {
      document.documentElement.classList.remove('emergency-mode');
    };
  }, [isEmergencyMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    scrollToSection('disasters');
  };

  const handleGetStarted = () => {
    console.log('Redirecting to alert signup...');
    // In a real app, this would navigate to a signup/alert configuration page
  };

  const handleLearnMore = () => {
    scrollToSection('preparedness');
  };

  const disasters = [
    {
      id: 'earthquake',
      title: 'Earthquake',
      subtitle: 'Ground Shaking',
      description: 'Sudden release of energy in the Earth\'s crust creates seismic waves that can cause devastating damage to buildings and infrastructure in seconds.',
      backgroundImage: earthquakeImage,
      sectionNumber: '01'
    },
    {
      id: 'flood',
      title: 'Flood',
      subtitle: 'Rising Waters',
      description: 'Overflowing water submerges normally dry land, often due to heavy rainfall, dam failures, or coastal storm surges, threatening lives and property.',
      backgroundImage: floodImage,
      sectionNumber: '02'
    },
    {
      id: 'tsunami',
      title: 'Tsunami',
      subtitle: 'Ocean Waves',
      description: 'Massive ocean waves triggered by underwater earthquakes or volcanic eruptions can travel across entire oceans at incredible speeds.',
      backgroundImage: tsunamiImage,
      sectionNumber: '03'
    },
    {
      id: 'wildfire',
      title: 'Wildfire',
      subtitle: 'Spreading Flames',
      description: 'Uncontrolled fires spread rapidly through vegetation, consuming everything in their path and creating dangerous conditions for evacuation.',
      backgroundImage: wildfireImage,
      sectionNumber: '04'
    },
    {
      id: 'hurricane',
      title: 'Hurricane',
      subtitle: 'Tropical Cyclone',
      description: 'Powerful rotating storm systems with sustained winds over 74 mph bring destructive winds, storm surge, and flooding to coastal areas.',
      backgroundImage: hurricaneImage,
      sectionNumber: '05'
    },
    {
      id: 'tornado',
      title: 'Tornado',
      subtitle: 'Rotating Winds',
      description: 'Violently rotating columns of air extend from thunderstorms to the ground, creating the most intense winds on Earth in a narrow path.',
      backgroundImage: tornadoImage,
      sectionNumber: '06'
    }
  ];

  const educationalContent = [
    {
      title: 'Earthquake Preparedness',
      content: 'Earthquakes can strike without warning. The key to survival is preparation and knowing what to do when the shaking starts. Drop, Cover, and Hold On is the recommended action during earthquake shaking.',
      image: earthquakeImage,
      imageAlt: 'Earthquake damage to buildings and infrastructure',
      tips: [
        'Secure heavy furniture and appliances to walls',
        'Keep emergency supplies in multiple locations',
        'Practice Drop, Cover, and Hold On regularly',
        'Identify safe spots in each room of your home'
      ]
    },
    {
      title: 'Flood Safety Measures',
      content: 'Floods are the most common natural disaster. Understanding your flood risk and having an evacuation plan can save your life. Never underestimate the power of moving water.',
      image: floodImage,
      imageAlt: 'Flood waters in urban area',
      reverse: true,
      tips: [
        'Know your evacuation routes and practice them',
        'Keep emergency supplies in waterproof containers',
        'Never drive through flooded roads',
        'Move to higher ground immediately when flooding begins'
      ]
    },
    {
      title: 'Wildfire Protection',
      content: 'Create defensible space around your property and have multiple evacuation routes planned. Wildfires can move incredibly fast, leaving little time for escape once they approach your area.',
      image: wildfireImage,
      imageAlt: 'Wildfire consuming forest landscape',
      tips: [
        'Clear vegetation within 30 feet of structures',
        'Keep emergency bags packed and ready',
        'Sign up for local emergency alerts',
        'Have multiple evacuation routes planned'
      ]
    }
  ];

  return (
    <div className="relative" data-testid="home-page">
      {/* Emergency Mode Toggle */}
      <EmergencyModeToggle onToggle={setIsEmergencyMode} />
      
      {/* Navigation */}
      <NavigationHeader onNavigate={scrollToSection} />

      {/* Hero Section */}
      <HeroSection onScrollToNext={scrollToNext} />

      {/* Introduction Content */}
      <ContentSection 
        title="Understanding Natural Disasters"
        subtitle="Knowledge Saves Lives"
        content={[
          "Natural disasters are extreme weather events or geological phenomena that can cause significant damage to property, infrastructure, and human life. Every year, these events affect millions of people worldwide and cause billions of dollars in economic losses.",
          "From earthquakes that strike without warning to hurricanes that can be tracked for days, each type of disaster requires specific knowledge and preparation strategies. The key to survival often lies in advance planning and quick, informed decision-making when disaster strikes.",
          "This comprehensive guide will help you understand the six most common types of natural disasters, their characteristics, warning signs, and most importantly - how to stay safe when they occur."
        ]}
        backgroundColor="light"
        centerText={true}
      />

      {/* Disaster Sections with Details */}
      <div id="disasters">
        {/* Earthquake */}
        <DisasterSection
          id="earthquake"
          title="Earthquake"
          subtitle="Ground Shaking"
          description="Sudden release of energy in the Earth's crust creates seismic waves that can cause devastating damage to buildings and infrastructure in seconds."
          backgroundImage={earthquakeImage}
          sectionNumber="01"
        />
        
        <DisasterDetailsSection 
          disasterType="Earthquake"
          overview="Earthquakes are sudden releases of energy in the Earth's crust that create seismic waves. Understanding their mechanics, warning signs, and safety protocols can save lives when the ground starts shaking."
          details={[
            {
              icon: Clock,
              title: "Duration & Timing",
              description: "Most earthquakes last only 10-30 seconds, but aftershocks can continue for weeks or months. They can occur any time without warning."
            },
            {
              icon: MapPin,
              title: "Geographic Risk",
              description: "Areas near fault lines face higher risk. Building codes and soil composition determine damage levels in any location."
            },
            {
              icon: TrendingUp,
              title: "Magnitude Scale",
              description: "Measured on the Richter scale from 1-10, with each number representing a 10-fold increase in seismic wave amplitude."
            }
          ]}
          warnings={[
            "Drop, Cover, and Hold On immediately when shaking starts - do not run outside",
            "Stay away from windows, mirrors, and heavy objects that could fall",
            "If outdoors, move away from buildings, trees, and power lines",
            "After shaking stops, check for injuries and hazards before moving",
            "Be prepared for aftershocks which can be almost as strong as the main quake"
          ]}
          backgroundColor="dark"
        />

        {/* Flood */}
        <DisasterSection
          id="flood"
          title="Flood"
          subtitle="Rising Waters"
          description="Overflowing water submerges normally dry land, often due to heavy rainfall, dam failures, or coastal storm surges, threatening lives and property."
          backgroundImage={floodImage}
          sectionNumber="02"
        />
        
        <DisasterDetailsSection 
          disasterType="Flood"
          overview="Floods are the most common natural disaster worldwide. They can develop slowly over days or occur suddenly within minutes, making them particularly dangerous for unprepared communities."
          details={[
            {
              icon: Droplets,
              title: "Water Sources",
              description: "Floods result from heavy rainfall, snowmelt, dam failures, storm surges, or blocked drainage systems in urban areas."
            },
            {
              icon: Clock,
              title: "Development Speed",
              description: "Flash floods can occur within minutes, while river floods may develop over several days, allowing more time for evacuation."
            },
            {
              icon: AlertCircle,
              title: "Hidden Dangers",
              description: "Just 6 inches of moving water can knock you down, and 12 inches can carry away a vehicle. Water may hide debris and electrical hazards."
            }
          ]}
          warnings={[
            "Never drive through flooded roads - 'Turn Around, Don't Drown'",
            "Move to higher ground immediately when flooding begins in your area",
            "Avoid walking in moving water - even shallow water can be dangerous",
            "Stay away from downed power lines and electrical equipment in water",
            "Don't drink flood water - it may contain sewage and dangerous chemicals"
          ]}
          backgroundColor="light"
        />

        {/* Continue with other disasters... */}
        <DisasterSection
          id="tsunami"
          title="Tsunami"
          subtitle="Ocean Waves"
          description="Massive ocean waves triggered by underwater earthquakes or volcanic eruptions can travel across entire oceans at incredible speeds."
          backgroundImage={tsunamiImage}
          sectionNumber="03"
        />
        
        <DisasterDetailsSection 
          disasterType="Tsunami"
          overview="Tsunamis are giant ocean waves caused by underwater earthquakes, volcanic eruptions, or landslides. They can travel at jet speeds across oceans and grow to enormous heights when they reach shallow coastal waters."
          details={[
            {
              icon: Waves,
              title: "Wave Mechanics",
              description: "Tsunami waves can travel 400-500 mph across deep ocean and reach heights of 100+ feet when hitting coastlines."
            },
            {
              icon: Clock,
              title: "Warning Time",
              description: "Distant tsunamis may provide hours of warning, but local tsunamis can arrive within minutes of the triggering event."
            },
            {
              icon: MapPin,
              title: "Risk Zones",
              description: "Pacific Rim countries face highest risk, but any coastal area can be affected. Low-lying coastal regions are most vulnerable."
            }
          ]}
          warnings={[
            "If you feel an earthquake near the coast, move to high ground immediately",
            "If ocean water recedes unusually far, this is a natural tsunami warning",
            "Stay away from beaches and harbors after an earthquake anywhere in the Pacific",
            "A tsunami is not just one wave - multiple waves will continue for hours",
            "Never go to the beach to watch a tsunami - waves move faster than you can run"
          ]}
          backgroundColor="dark"
        />

        <DisasterSection
          id="wildfire"
          title="Wildfire"
          subtitle="Spreading Flames"
          description="Uncontrolled fires spread rapidly through vegetation, consuming everything in their path and creating dangerous conditions for evacuation."
          backgroundImage={wildfireImage}
          sectionNumber="04"
        />
        
        <DisasterDetailsSection 
          disasterType="Wildfire"
          overview="Wildfires are uncontrolled fires that spread rapidly through vegetation. Climate change and drought conditions have made them more frequent and severe, threatening both wilderness areas and communities."
          details={[
            {
              icon: Flame,
              title: "Fire Behavior",
              description: "Fires can spread at 14+ mph in grasslands and jump roads, rivers, and firebreaks when conditions are right."
            },
            {
              icon: Wind,
              title: "Weather Impact",
              description: "Wind speed, humidity, and temperature dramatically affect fire spread. Red flag warnings indicate dangerous fire weather."
            },
            {
              icon: MapPin,
              title: "Wildland Interface",
              description: "Areas where homes meet wildland vegetation face the highest risk. Defensible space around properties is critical."
            }
          ]}
          warnings={[
            "Create defensible space by clearing vegetation within 30 feet of structures",
            "Have multiple evacuation routes planned - fires can move faster than traffic",
            "Keep emergency supplies and important documents ready for immediate evacuation",
            "Sign up for local emergency alert systems for early warnings",
            "Never ignore evacuation orders - wildfires can change direction rapidly"
          ]}
          backgroundColor="light"
        />

        <DisasterSection
          id="hurricane"
          title="Hurricane"
          subtitle="Tropical Cyclone"
          description="Powerful rotating storm systems with sustained winds over 74 mph bring destructive winds, storm surge, and flooding to coastal areas."
          backgroundImage={hurricaneImage}
          sectionNumber="05"
        />
        
        <DisasterDetailsSection 
          disasterType="Hurricane"
          overview="Hurricanes are massive rotating storm systems that form over warm ocean waters. They bring multiple threats including destructive winds, storm surge, flooding, and tornadoes to coastal and inland areas."
          details={[
            {
              icon: Wind,
              title: "Wind Categories",
              description: "Category 1 (74-95 mph) to Category 5 (157+ mph). Even Category 1 storms can cause significant damage and power outages."
            },
            {
              icon: Waves,
              title: "Storm Surge",
              description: "Wind-driven ocean water can push 20+ feet inland. Storm surge is often the deadliest part of a hurricane."
            },
            {
              icon: Clock,
              title: "Season & Tracking",
              description: "Atlantic season runs June-November. Modern forecasting provides several days of warning for preparation."
            }
          ]}
          warnings={[
            "Evacuate if ordered - storm surge and flooding can be deadly",
            "Prepare for extended power outages lasting days or weeks",
            "Stay indoors during the storm - winds can turn debris into projectiles",
            "Beware the eye of the storm - winds will return from the opposite direction",
            "Don't venture out immediately after - downed power lines and flooding remain dangerous"
          ]}
          backgroundColor="dark"
        />

        <DisasterSection
          id="tornado"
          title="Tornado"
          subtitle="Rotating Winds"
          description="Violently rotating columns of air extend from thunderstorms to the ground, creating the most intense winds on Earth in a narrow path."
          backgroundImage={tornadoImage}
          sectionNumber="06"
        />
        
        <DisasterDetailsSection 
          disasterType="Tornado"
          overview="Tornadoes are violently rotating columns of air that form during severe thunderstorms. While they affect smaller areas than other disasters, they produce the strongest winds on Earth and can be extremely deadly."
          details={[
            {
              icon: Wind,
              title: "Wind Speeds",
              description: "EF0 (65-85 mph) to EF5 (over 200 mph). EF4 and EF5 tornadoes can level well-built homes and throw cars hundreds of yards."
            },
            {
              icon: Clock,
              title: "Warning Time",
              description: "Tornado warnings typically provide 13 minutes average lead time. Some tornadoes form rapidly with little warning."
            },
            {
              icon: MapPin,
              title: "Tornado Alley",
              description: "Central US sees most activity, but tornadoes can occur anywhere. Peak season is April-June, typically late afternoon/evening."
            }
          ]}
          warnings={[
            "Seek shelter in a basement or lowest floor interior room away from windows",
            "Cover yourself with mattresses, blankets, or furniture to protect from debris",
            "Stay away from large roof spans like gyms, auditoriums, and shopping centers",
            "If in a vehicle, do not try to outrun a tornado - abandon the car and lie flat in a ditch",
            "Listen for updated warnings - tornado watches can quickly become tornado emergencies"
          ]}
          backgroundColor="light"
        />
      </div>

      {/* Statistics Section */}
      <div id="statistics">
        <StatisticsSection />
      </div>

      {/* Educational Content */}
      <div id="preparedness">
        {educationalContent.map((content, index) => (
          <EducationalBlock
            key={index}
            title={content.title}
            content={content.content}
            image={content.image}
            imageAlt={content.imageAlt}
            reverse={content.reverse}
            tips={content.tips}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div id="alerts">
        <CallToActionSection 
          onGetStarted={handleGetStarted}
          onLearnMore={handleLearnMore}
        />
      </div>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}