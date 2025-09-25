import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

interface EmergencyModeToggleProps {
  onToggle?: (isEmergency: boolean) => void;
}

export default function EmergencyModeToggle({ onToggle }: EmergencyModeToggleProps) {
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);

  const handleToggle = () => {
    const newMode = !isEmergencyMode;
    setIsEmergencyMode(newMode);
    onToggle?.(newMode);
    console.log(`Emergency Mode ${newMode ? 'ACTIVATED' : 'DEACTIVATED'}`);
  };

  return (
    <div 
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
      data-testid="emergency-mode-toggle"
    >
      <button
        onClick={handleToggle}
        className={`
          flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-300 hover-elevate
          ${isEmergencyMode 
            ? 'bg-red-600 border-red-400 text-white shadow-red-500/25 shadow-lg' 
            : 'bg-black/80 border-white/20 text-white/80 hover:text-white backdrop-blur-md'
          }
        `}
        data-testid="emergency-toggle-button"
      >
        <AlertTriangle 
          className={`w-6 h-6 mb-2 transition-all duration-300 ${
            isEmergencyMode ? 'animate-pulse text-white' : 'text-red-500'
          }`} 
        />
        
        <span className="text-xs font-bold tracking-wider uppercase leading-tight text-center">
          Emergency
          <br />
          Mode
        </span>
        
        <div className={`
          w-8 h-4 rounded-full mt-2 relative transition-all duration-300
          ${isEmergencyMode ? 'bg-red-400' : 'bg-white/20'}
        `}>
          <div className={`
            absolute top-0.5 w-3 h-3 rounded-full transition-all duration-300
            ${isEmergencyMode 
              ? 'right-0.5 bg-white' 
              : 'left-0.5 bg-white/60'
            }
          `} />
        </div>
      </button>
      
      {isEmergencyMode && (
        <div className="absolute top-full left-0 mt-2 bg-red-600 text-white text-xs px-3 py-2 rounded shadow-lg animate-pulse">
          <div className="font-bold">EMERGENCY MODE ACTIVE</div>
          <div className="opacity-90">High contrast alerts enabled</div>
        </div>
      )}
    </div>
  );
}