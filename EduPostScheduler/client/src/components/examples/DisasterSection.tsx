import DisasterSection from '../DisasterSection';
import earthquakeImage from '@assets/stock_images/dramatic_earthquake__9e40240d.jpg';

export default function DisasterSectionExample() {
  return (
    <DisasterSection 
      title="Earthquake"
      subtitle="Ground Shaking"
      description="Earthquakes can strike without warning, causing devastating damage to buildings and infrastructure. Understanding the risks and preparing emergency kits can save lives."
      backgroundImage={earthquakeImage}
      sectionNumber="01"
      id="earthquake"
    />
  );
}