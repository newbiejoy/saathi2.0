import EmergencyModeToggle from '../EmergencyModeToggle';

export default function EmergencyModeToggleExample() {
  return (
    <div className="h-screen bg-gray-900 relative">
      <div className="p-8 text-white">
        <h1 className="text-2xl mb-4">Emergency Mode Toggle Example</h1>
        <p>The toggle should appear on the left side of the screen.</p>
      </div>
      
      <EmergencyModeToggle 
        onToggle={(isEmergency) => console.log('Emergency mode:', isEmergency)}
      />
    </div>
  );
}