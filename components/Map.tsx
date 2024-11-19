import { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  address: string;
  lat: number;
  lng: number;
}

const Map: React.FC<MapProps> = ({ address, lat, lng }) => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: lat,
    lng: lng,
  };

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
      >
        <Marker position={center} title={address} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
