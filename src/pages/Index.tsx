
import { useState, useEffect } from 'react';
import damsData, { DamData } from '@/data/damsData';
import { simulateWaterLevelChange } from '@/utils/mapUtils';
import DamMap from '@/components/DamMap';
import DamInfo from '@/components/DamInfo';
import AlertBanner from '@/components/AlertBanner';
import DamsBarGraph from '@/components/DamsBarGraph';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [selectedDam, setSelectedDam] = useState<DamData | null>(null);
  const [dams, setDams] = useState<DamData[]>(damsData);
  const { toast } = useToast();

  // Simulate water level changes and alerts
  useEffect(() => {
    const interval = setInterval(() => {
      setDams(prevDams => {
        return prevDams.map(dam => {
          // Simulate water level changes
          const change = simulateWaterLevelChange();
          let newLevel = dam.currentLevel + change;
          
          // Keep level within bounds
          newLevel = Math.max(10, Math.min(100, newLevel));
          
          // Determine alert level based on water level
          let alertLevel: DamData['alertLevel'] = 'normal';
          if (newLevel > 90) alertLevel = 'critical';
          else if (newLevel > 80) alertLevel = 'warning';
          
          // Show toast for new critical alerts
          if (alertLevel === 'critical' && dam.alertLevel !== 'critical') {
            toast({
              title: "Critical Water Level Alert!",
              description: `${dam.name} water level has risen to ${newLevel.toFixed(1)}%`,
              variant: "destructive",
            });
          }
          
          return {
            ...dam,
            currentLevel: Number(newLevel.toFixed(1)),
            alertLevel
          };
        });
      });
    }, 10000); // Update every 10 seconds
    
    return () => clearInterval(interval);
  }, [toast]);

  const handleSelectDam = (dam: DamData) => {
    setSelectedDam(dam);
  };

  const handleAlertClick = (damId: string) => {
    const dam = dams.find(d => d.id === damId);
    if (dam) {
      setSelectedDam(dam);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 shadow-md">
        <div className="container">
          <h1 className="text-3xl font-bold">India Dam Explorer</h1>
          <p className="text-primary-foreground/80">Interactive map and information system for major dams in India by Logic Layer</p>
        </div>
      </header>
      
      <main className="container py-6">
        <AlertBanner dams={dams} onClickAlert={handleAlertClick} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-[600px]">
            <DamMap 
              dams={dams} 
              selectedDam={selectedDam} 
              onSelectDam={handleSelectDam}
              apiKeyInput="" // Keeping this prop for compatibility
            />
          </div>
          <div className="h-[600px] overflow-y-auto">
            <DamInfo dam={selectedDam} />
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">All Dams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {dams.map(dam => (
              <div 
                key={dam.id} 
                className="border border-border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleSelectDam(dam)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{dam.name}</h3>
                  <div 
                    className={`w-3 h-3 rounded-full ${
                      dam.alertLevel === 'normal' 
                        ? 'bg-alert-low' 
                        : dam.alertLevel === 'warning' 
                          ? 'bg-alert-medium' 
                          : 'bg-alert-high animate-pulse-alert'
                    }`} 
                  />
                </div>
                <p className="text-sm text-muted-foreground">{dam.state}</p>
                <p className="text-sm">River: {dam.river}</p>
                <div className="mt-2 text-sm flex justify-between">
                  <span>Water Level: {dam.currentLevel}%</span>
                  <span>{dam.capacity} million m³</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 mb-6">
          <DamsBarGraph dams={dams} />
        </div>
      </main>
      
      <footer className="bg-muted py-4 mt-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>India Dam Explorer &copy; {new Date().getFullYear()}</p>
          <p className="mt-1">A data visualization project for major water dams of India</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
