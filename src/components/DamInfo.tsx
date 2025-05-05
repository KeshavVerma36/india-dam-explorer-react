
import { DamData } from '@/data/damsData';
import { formatNumber, getAlertColor, getWaterLevelDescription } from '@/utils/mapUtils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

interface DamInfoProps {
  dam: DamData | null;
}

const DamInfo = ({ dam }: DamInfoProps) => {
  if (!dam) {
    return (
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>Dam Information</CardTitle>
          <CardDescription>Select a dam on the map to view detailed information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Click on a dam marker to view details</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Determine the appropriate color based on alert level
  const getProgressColor = () => {
    switch(dam.alertLevel) {
      case 'critical':
        return 'bg-alert-high';
      case 'warning':
        return 'bg-alert-medium';
      default:
        return 'bg-water-default';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{dam.name}</CardTitle>
            <CardDescription className="text-lg">{dam.state}</CardDescription>
          </div>
          <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
            dam.alertLevel === 'normal' 
              ? 'bg-alert-low' 
              : dam.alertLevel === 'warning' 
                ? 'bg-alert-medium' 
                : 'bg-alert-high animate-pulse-alert'
          }`}>
            {dam.alertLevel === 'normal' ? 'NORMAL' : dam.alertLevel.toUpperCase()}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-2">
        {dam.imageUrl && (
          <div className="mb-4 overflow-hidden rounded-md h-56">
            <img 
              src={dam.imageUrl} 
              alt={dam.name} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Water Level</h3>
          <div className="flex justify-between mb-1">
            <span className="text-sm">{getWaterLevelDescription(dam.currentLevel)}</span>
            <span className="text-sm font-medium">{dam.currentLevel}%</span>
          </div>
          <Progress 
            value={dam.currentLevel} 
            className={`h-2.5 ${getProgressColor()}`}
          />
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">River</h4>
            <p>{dam.river}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Year Completed</h4>
            <p>{dam.yearCompleted}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Height</h4>
            <p>{dam.height} meters</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Length</h4>
            <p>{dam.length} meters</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Type</h4>
            <p>{dam.type}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Capacity</h4>
            <p>{formatNumber(dam.capacity)} million m³</p>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Purpose</h3>
          <div className="flex flex-wrap gap-2">
            {dam.purpose.map((purpose, index) => (
              <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {purpose}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-muted-foreground">{dam.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DamInfo;
