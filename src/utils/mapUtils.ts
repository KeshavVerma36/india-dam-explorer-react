
import { DamData } from '@/data/damsData';

export const INDIA_CENTER: [number, number] = [20.5937, 78.9629]; // Note: Leaflet uses [lat, lng] format
export const DEFAULT_ZOOM = 5;

export const getAlertColor = (alertLevel: DamData['alertLevel']): string => {
  switch (alertLevel) {
    case 'critical':
      return '#F44336'; // alert-high
    case 'warning':
      return '#FFC107'; // alert-medium
    case 'normal':
      return '#4CAF50'; // alert-low
    default:
      return '#2196F3'; // water default
  }
};

export const getWaterLevelDescription = (level: number): string => {
  if (level >= 90) return 'Very High';
  if (level >= 75) return 'High';
  if (level >= 50) return 'Moderate';
  if (level >= 25) return 'Low';
  return 'Very Low';
};

export const simulateWaterLevelChange = () => {
  // This would be replaced with real-time data in a production app
  return Math.random() * 10 - 5; // Random change between -5 and +5 percent
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-IN');
};

export const getFlyToOptions = (coordinates: [number, number], zoom = 7) => {
  return {
    center: coordinates,
    zoom,
    speed: 1.2,
    curve: 1.5,
    essential: true
  };
};

export const getAlertDams = (dams: DamData[]): DamData[] => {
  return dams.filter(dam => dam.alertLevel !== 'normal');
};

// Convert Leaflet coordinates [lat, lng] to the format used in our data [lng, lat]
export const convertToLeafletCoords = (coords: [number, number]): [number, number] => {
  return [coords[1], coords[0]]; // Convert [lng, lat] to [lat, lng]
};

// Convert Leaflet coordinates to dam data coordinates
export const convertToDamCoords = (coords: [number, number]): [number, number] => {
  return [coords[1], coords[0]]; // Convert [lat, lng] to [lng, lat]
};

