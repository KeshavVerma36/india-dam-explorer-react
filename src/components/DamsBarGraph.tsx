
import { useState } from 'react';
import { DamData } from '@/data/damsData';
import { formatNumber } from '@/utils/mapUtils';
import { ChartContainer } from '@/components/ui/chart';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DamsBarGraphProps {
  dams: DamData[];
}

const DamsBarGraph = ({ dams }: DamsBarGraphProps) => {
  const [graphType, setGraphType] = useState<'waterLevel' | 'capacity' | 'height'>('waterLevel');
  
  // Format data for the chart
  const formatData = () => {
    return dams.map(dam => ({
      name: dam.name,
      value: graphType === 'waterLevel' ? dam.currentLevel : 
             graphType === 'capacity' ? dam.capacity : 
             dam.height,
      alertLevel: dam.alertLevel
    }));
  };
  
  // Determine bar color based on alert level and graph type
  const getBarFill = (entry: any) => {
    if (graphType !== 'waterLevel') return '#1EAEDB';
    
    const { alertLevel } = entry;
    return alertLevel === 'critical' ? '#F44336' : 
           alertLevel === 'warning' ? '#FFC107' : '#4CAF50';
  };
  
  const getYAxisLabel = () => {
    switch(graphType) {
      case 'waterLevel': return 'Current Level (%)';
      case 'capacity': return 'Capacity (million m³)';
      case 'height': return 'Height (meters)';
      default: return '';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Dam Statistics</CardTitle>
        <CardDescription>Visualized comparative data of major dams in India</CardDescription>
        
        <Tabs defaultValue="waterLevel" onValueChange={(value) => setGraphType(value as any)} className="mt-2">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="waterLevel">Water Level</TabsTrigger>
            <TabsTrigger value="capacity">Capacity</TabsTrigger>
            <TabsTrigger value="height">Height</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={formatData()}
              margin={{ top: 5, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end"
                height={70}
                interval={0}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                label={{ 
                  value: getYAxisLabel(), 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle' }
                }}
              />
              <Tooltip 
                formatter={(value) => [
                  graphType === 'waterLevel' ? `${value}%` : 
                  graphType === 'capacity' ? `${formatNumber(value as number)} million m³` : 
                  `${value} meters`
                ]}
              />
              <Legend />
              <Bar 
                dataKey="value" 
                name={graphType === 'waterLevel' ? 'Water Level' : 
                     graphType === 'capacity' ? 'Capacity' : 'Height'}
                fill="#1EAEDB" 
                fillOpacity={0.8}
                stroke="#1A1F2C"
                strokeWidth={1}
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
                animationEasing="ease-in-out"
                isAnimationActive={true}
                fill={(entry) => getBarFill(entry)}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DamsBarGraph;
