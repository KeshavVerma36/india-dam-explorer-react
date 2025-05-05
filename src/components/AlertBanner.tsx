
import { useState, useEffect } from 'react';
import { DamData } from '@/data/damsData';
import { getAlertDams } from '@/utils/mapUtils';
import { AlertTriangle } from 'lucide-react';

interface AlertBannerProps {
  dams: DamData[];
  onClickAlert: (damId: string) => void;
}

const AlertBanner = ({ dams, onClickAlert }: AlertBannerProps) => {
  const [alertDams, setAlertDams] = useState<DamData[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setAlertDams(getAlertDams(dams));
  }, [dams]);

  if (alertDams.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-md">
      <div 
        className={`bg-background border border-border p-4 rounded-lg shadow-lg transition-all duration-300 ${
          expanded ? 'max-h-96 overflow-y-auto' : 'max-h-24 overflow-hidden'
        }`}
      >
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setExpanded(!expanded)}>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-alert-high animate-pulse-alert" />
            <h3 className="font-semibold text-lg">
              Water Level Alerts ({alertDams.length})
            </h3>
          </div>
          <button className="text-sm text-muted-foreground hover:text-foreground">
            {expanded ? 'Close' : 'View All'}
          </button>
        </div>
        
        <div className="mt-2">
          {alertDams.map(dam => (
            <div 
              key={dam.id}
              className={`p-2 my-1 rounded-md cursor-pointer hover:bg-accent transition-colors ${
                dam.alertLevel === 'critical' ? 'bg-alert-high/10' : 'bg-alert-medium/10'
              }`}
              onClick={() => onClickAlert(dam.id)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{dam.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  dam.alertLevel === 'critical' 
                    ? 'bg-alert-high text-white' 
                    : 'bg-alert-medium text-black'
                }`}>
                  {dam.alertLevel === 'critical' ? 'CRITICAL' : 'WARNING'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Water Level: {dam.currentLevel}% ({dam.alertLevel === 'critical' ? 'Rising' : 'Stable'})
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;
