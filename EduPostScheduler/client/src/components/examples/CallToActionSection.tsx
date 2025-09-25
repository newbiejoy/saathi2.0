import CallToActionSection from '../CallToActionSection';

export default function CallToActionSectionExample() {
  return (
    <CallToActionSection 
      onGetStarted={() => console.log('Get Started clicked')}
      onLearnMore={() => console.log('Learn More clicked')}
    />
  );
}