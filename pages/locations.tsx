import { useState } from "react";
import Head from "next/head";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";

const locations = [
  {
    name: "新大阪時計眼鏡店 (Main Store)",
    description: "High-end frames with exceptional quality.",
    address: "大阪市淀川区西三国1-13-7",
    hours: "Regular: AM 10:00 – PM 6:30\nClosed: December 31 (afternoon) – January 3",
    phone: "06-6393-0836",
    lat: 34.7262,
    lng: 135.5032,
  },
  {
    name: "松倉めがね くだら店",
    description: "The original '3-pair set' store with a wide selection of frames and skilled staff.",
    address: "大阪市生野区林寺4-18-19",
    hours: "Regular: AM 10:00 – PM 6:00\nClosed: December 31 – January 3",
    phone: "06-6714-0464",
    lat: 34.6473,
    lng: 135.5235,
  },
  {
    name: "松倉めがね 矢田店",
    description: "Small store with a rich variety of frames.",
    address: "大阪市東住吉区矢田6-3-3",
    hours: "Regular: AM 10:00 – PM 6:00\nClosed: December 31 – January 3",
    phone: "06-6608-3168",
    website: "https://matsukura-megane.co.jp/yata/",
    lat: 34.6137,
    lng: 135.5321,
  },
  {
    name: "松倉めがね 鳳店",
    description: "Beautiful displays and an inviting atmosphere make glasses selection easy.",
    address: "堺市 西区 上 714-1 朝日医療ビル鳳南２Ｆ",
    hours: "Regular: AM 10:00 – PM 7:00\nClosed: Every Tuesday, December 31 – January 3",
    phone: "072-289-6910",
    website: "https://matsukura-megane.co.jp/ootori/",
    lat: 34.5305,
    lng: 135.4568,
  },
  {
    name: "めがね空間 園田店",
    description: "Affordable yet high-grade glasses, also sells hearing aids.",
    address: "尼崎市東園田町3-33-13",
    hours: "Regular: AM 10:00 – PM 7:00\nClosed: Every Tuesday, December 31 – January 3",
    phone: "06-6423-7511",
    website: "http://www.megane-kuukan.jp/",
    lat: 34.7364,
    lng: 135.4276,
  },
  {
    name: "楽天ショップ GLASS-M",
    description: "Wide range of frames and lenses, available for online purchase.",
    website: "https://www.rakuten.ne.jp/gold/glass-m-shop/",
    phone: "06-6654-3142",
    hours: "Regular: AM 10:00 – PM 6:00\nClosed: Every Sunday, Holidays, December 31 – January 4",
    isOnlineOnly: true,
  },
];

const Locations = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const handleLocationChange = (index) => {
    setSelectedIndex(index);
  };

  const selectedLocation = locations[selectedIndex];

  return (
    <Box className="container" mx="auto" px={4} py={8}>
      <Head>
        <title>Store Locations - Matsukura Eyewear</title>
        <meta name="description" content="Find Matsukura Eyewear store locations" />
      </Head>

      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Store Locations
      </Typography>

      <Grid container spacing={4}>
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <List>
            {locations.map((location, index) => (
              <ListItemButton
                key={index}
                selected={selectedIndex === index}
                onClick={() => handleLocationChange(index)}
              >
                <ListItemText
                  primary={index === 5 ? <b>{location.name}</b> : location.name}
                />
              </ListItemButton>
            ))}
          </List>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {selectedLocation.name}
              </Typography>
              <Typography>{selectedLocation.description}</Typography>
              <Typography variant="body2" color="text.secondary" mt={2}>
                {selectedLocation.address && (
                  <>
                    <strong>Address:</strong> {selectedLocation.address}
                    <br />
                  </>
                )}
                <strong>Phone:</strong> {selectedLocation.phone}
                <br />
                <strong>Hours:</strong> {selectedLocation.hours}
                <br />
                {selectedLocation.website && (
                  <>
                    <strong>Website:</strong>{" "}
                    <a href={selectedLocation.website} target="_blank" rel="noopener noreferrer">
                      {selectedLocation.website}
                    </a>
                    <br />
                  </>
                )}
              </Typography>
              {!selectedLocation.isOnlineOnly && (
                <LoadScript googleMapsApiKey="AIzaSyAYtS8h1hFeQuoOh4OKgH5izpZNM0Pdwew">
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={{
                      lat: selectedLocation.lat,
                      lng: selectedLocation.lng,
                    }}
                    zoom={14}
                  >
                    <Marker
                      position={{
                        lat: selectedLocation.lat,
                        lng: selectedLocation.lng,
                      }}
                    />
                  </GoogleMap>
                </LoadScript>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Locations;
