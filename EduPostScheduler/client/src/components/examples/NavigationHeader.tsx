import NavigationHeader from '../NavigationHeader';

export default function NavigationHeaderExample() {
  return (
    <div className="h-screen bg-gray-900">
      <NavigationHeader 
        onNavigate={(section) => console.log(`Navigate to ${section}`)}
      />
      <div className="pt-20 p-8">
        <p className="text-white">Scroll down to see the header background change</p>
      </div>
    </div>
  );
}