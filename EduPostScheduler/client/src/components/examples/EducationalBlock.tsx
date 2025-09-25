import EducationalBlock from '../EducationalBlock';
import floodImage from '@assets/stock_images/massive_flood_waters_6e537294.jpg';

export default function EducationalBlockExample() {
  return (
    <EducationalBlock 
      title="Understanding Flood Risks"
      content="Floods are one of the most common and devastating natural disasters. They can occur rapidly due to heavy rainfall, dam failures, or coastal storm surges. Understanding flood zones and evacuation routes in your area is crucial for safety."
      image={floodImage}
      imageAlt="Flood waters in urban area"
      tips={[
        "Know your evacuation routes and practice them regularly",
        "Keep emergency supplies in waterproof containers",
        "Never drive through flooded roads - turn around, don't drown",
        "Move to higher ground immediately if flooding begins"
      ]}
    />
  );
}