
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DamData } from '@/data/damsData';
import { INDIA_CENTER, DEFAULT_ZOOM, getAlertColor, convertToLeafletCoords } from '@/utils/mapUtils';
import { MapPin } from 'lucide-react';

interface DamMapProps {
  dams: DamData[];
  selectedDam: DamData | null;
  onSelectDam: (dam: DamData) => void;
  apiKeyInput: string; // We'll keep this prop for compatibility but won't use it
}

// Component to handle flying to selected dam
const FlyToMarker = ({ selectedDam }: { selectedDam: DamData | null }) => {
  const map = useMap();
  
  useEffect(() => {
    if (selectedDam) {
      const leafletCoords = convertToLeafletCoords(selectedDam.coordinates);
      map.flyTo(leafletCoords, 8, {
        animate: true,
        duration: 1.5
      });
    }
  }, [selectedDam, map]);
  
  return null;
};

const DamMap = ({ dams, selectedDam, onSelectDam }: DamMapProps) => {
  // We don't need API key for Leaflet
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    // Fix icon path issues with Leaflet in React
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
    
    setMapReady(true);
  }, []);

  const createDamIcon = (dam: DamData) => {
    const alertColor = getAlertColor(dam.alertLevel);
    const alertClass = `dam-marker-${dam.alertLevel}`;
    const pulseClass = dam.alertLevel !== 'normal' ? 'dam-marker-pulse' : '';
    
    return L.divIcon({
      className: `dam-marker ${alertClass} ${pulseClass}`,
      html: `<div style="background-color: ${alertColor}"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });
  };

  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden border border-border shadow-sm">
      {mapReady && (
        <MapContainer 
          center={INDIA_CENTER} 
          zoom={DEFAULT_ZOOM} 
          style={{ height: '100%', width: '100%' }}
          zoomControl={true}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {dams.map((dam) => (
            <Marker
              key={dam.id}
              position={convertToLeafletCoords(dam.coordinates)}
              icon={createDamIcon(dam)}
              eventHandlers={{
                click: () => onSelectDam(dam),
              }}
            >
              <Popup>
                <div>
                  <div className="font-medium">{dam.name}</div>
                  <div className="text-xs">{dam.state}</div>
                </div>
              </Popup>
            </Marker>
          ))}
          
          <FlyToMarker selectedDam={selectedDam} />
        </MapContainer>
      )}
      
      {!mapReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <span className="mt-4">Loading map...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DamMap;
