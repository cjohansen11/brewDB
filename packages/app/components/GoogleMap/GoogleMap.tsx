import React from "react";
import GoogleMapReact from "google-map-react";

export type GoogleMapProps = {
  name: string;
  latLng?: { lat: number; lng: number };
  zoom?: number;
};

const Marker = () => (
  <div className="bg-orange w-20 h-20 rounded-full opacity-50"></div>
);

export default function GoogleMap({ latLng, name, zoom = 12 }: GoogleMapProps) {
  return (
    <div className="h-full w-full">
      {latLng ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
          }}
          defaultCenter={latLng}
          defaultZoom={zoom}
        >
          <Marker />
        </GoogleMapReact>
      ) : (
        <div className="flex justify-center">
          <div className="text-3xl text-orange pt-12">
            No available location data
          </div>
        </div>
      )}
    </div>
  );
}
