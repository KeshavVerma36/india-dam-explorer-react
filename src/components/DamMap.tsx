
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { DamData } from '@/data/damsData';
import { INDIA_CENTER, DEFAULT_ZOOM, getAlertColor, getFlyToOptions } from '@/utils/mapUtils';
import { MapPin } from 'lucide-react';

interface DamMapProps {
  dams: DamData[];
  selectedDam: DamData | null;
  onSelectDam: (dam: DamData) => void;
  apiKeyInput: string;
}

const DamMap = ({ dams, selectedDam, onSelectDam, apiKeyInput }: DamMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const [apiKey, setApiKey] = useState<string>(apiKeyInput || '');
  const [mapInitialized, setMapInitialized] = useState<boolean>(false);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || mapInitialized || !apiKey) return;

    mapboxgl.accessToken = apiKey;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: INDIA_CENTER,
        zoom: DEFAULT_ZOOM,
        minZoom: 3,
        maxZoom: 12,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

      map.current.on('load', () => {
        setMapInitialized(true);
      });

      return () => {
        map.current?.remove();
        map.current = null;
      };
    } catch (error) {
      console.error("Error initializing map:", error);
      return;
    }
  }, [apiKey, mapInitialized]);

  // Add markers for dams
  useEffect(() => {
    if (!map.current || !mapInitialized || dams.length === 0) return;

    // Clear existing markers
    Object.values(markers.current).forEach(marker => marker.remove());
    markers.current = {};

    // Add markers for each dam
    dams.forEach(dam => {
      // Create custom marker element
      const el = document.createElement('div');
      el.className = `dam-marker ${dam.alertLevel !== 'normal' ? 'dam-marker-alert' : ''}`;
      el.style.backgroundColor = getAlertColor(dam.alertLevel);

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
        .setHTML(`<div class="font-medium">${dam.name}</div><div class="text-xs">${dam.state}</div>`);

      // Create marker
      const marker = new mapboxgl.Marker(el)
        .setLngLat(dam.coordinates)
        .setPopup(popup)
        .addTo(map.current!);

      // Add click event
      marker.getElement().addEventListener('click', () => {
        onSelectDam(dam);
      });

      markers.current[dam.id] = marker;
    });
  }, [dams, mapInitialized, onSelectDam]);

  // Handle selected dam changes
  useEffect(() => {
    if (!map.current || !selectedDam) return;
    
    map.current.flyTo(getFlyToOptions(selectedDam.coordinates));
    
    // Show popup for selected dam
    if (markers.current[selectedDam.id]) {
      markers.current[selectedDam.id].togglePopup();
    }
  }, [selectedDam]);

  // Handle API key input
  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById('mapbox-api-key') as HTMLInputElement;
    if (input && input.value) {
      setApiKey(input.value);
    }
  };

  if (!apiKey) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-4 bg-muted/40 rounded-lg border border-border">
        <MapPin className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2">Mapbox API Key Required</h3>
        <p className="text-muted-foreground text-sm mb-4 text-center">
          To display the map, please enter your Mapbox public token
        </p>
        <form onSubmit={handleApiKeySubmit} className="w-full max-w-md">
          <div className="flex gap-2">
            <input
              id="mapbox-api-key"
              type="text"
              placeholder="Enter your Mapbox public token"
              className="w-full p-2 rounded-md border border-input"
              defaultValue={apiKeyInput}
              required
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Load Map
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Get your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden border border-border shadow-sm">
      <div ref={mapContainer} className="w-full h-full" />
      {!mapInitialized && (
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
