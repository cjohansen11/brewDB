import React from "react";
import GoogleMapReact from "google-map-react";

export type GoogleMapProps = {
  lat: number;
  lng: number;
  name: string;
  zoom?: number;
};

const Marker = ({ text }) => (
  <div className="bg-orange w-20 h-20 rounded-full opacity-50"></div>
);

export default function GoogleMap({
  lat,
  lng,
  name,
  zoom = 12,
}: GoogleMapProps) {
  return (
    <div className="h-full w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
        defaultCenter={{ lat, lng }}
        defaultZoom={zoom}
      >
        <Marker text={name} />
      </GoogleMapReact>
    </div>
  );
}
