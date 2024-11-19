import Head from "next/head";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const locations = [
  { name: "Matsukura Yata Store", lat: 34.6137, lng: 135.5023 },
  // Add other locations
];

const Locations = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 34.6937,
    lng: 135.5023,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Store Locations - Matsukura Eyewear</title>
        <meta
          name="description"
          content="Find Matsukura Eyewear store locations"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-8">Our Locations</h1>

      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      <div className="mt-8">
        {locations.map((location, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold">{location.name}</h2>
            <p>
              Latitude: {location.lat}, Longitude: {location.lng}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
