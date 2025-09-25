import DisasterDetailsSection from '../DisasterDetailsSection';
import { Clock, MapPin, TrendingUp } from 'lucide-react';

export default function DisasterDetailsSectionExample() {
  return (
    <DisasterDetailsSection 
      disasterType="Earthquake"
      overview="Earthquakes are sudden releases of energy in the Earth's crust that create seismic waves. Understanding their mechanics, warning signs, and safety protocols can save lives when the ground starts shaking."
      details={[
        {
          icon: Clock,
          title: "Duration",
          description: "Most earthquakes last only seconds to minutes, but aftershocks can continue for weeks or months after the main event."
        },
        {
          icon: MapPin,
          title: "Location Impact",
          description: "Proximity to fault lines, building codes, and soil composition determine the level of damage and safety in any given area."
        },
        {
          icon: TrendingUp,
          title: "Magnitude Scale",
          description: "The Richter scale measures earthquake intensity from 1-10, with each number representing a 10-fold increase in seismic energy."
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
  );
}