"use client";

import { useEffect, useRef } from "react";

export default function ChurchMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const loadMap = async () => {
      const L = (await import("leaflet")).default;

      await import("leaflet/dist/leaflet.css");

      const churchLat = 6.3798;
      const churchLng = 5.6658;

      const map = L.map(mapRef.current!, {
        center: [churchLat, churchLng],
        zoom: 18,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const churchIcon = L.divIcon({
        html: `
          <div style="position: relative; width: 50px; height: 60px;">
            <svg viewBox="0 0 24 36" width="50" height="60" style="filter: drop-shadow(0 3px 6px rgba(0,0,0,0.4));">
              <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="#C41E3A"/>
              <circle cx="12" cy="12" r="6" fill="white"/>
              <path d="M12 6v12M6 12h12" stroke="#C41E3A" stroke-width="2.5"/>
            </svg>
          </div>
        `,
        className: "church-marker",
        iconSize: [50, 60],
        iconAnchor: [25, 60],
        popupAnchor: [0, -60],
      });

      L.marker([churchLat, churchLng], { icon: churchIcon })
        .addTo(map)
        .bindPopup(
          `
          <div style="text-align: center; padding: 12px; min-width: 280px; font-family: system-ui, sans-serif;">
            <div style="background: #C41E3A; color: white; padding: 8px 12px; border-radius: 8px; margin-bottom: 10px;">
              <strong style="font-size: 16px;">Turning Point Gospel Center Int'l</strong>
            </div>
            <div style="background: #f8f8f8; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
              <p style="margin: 0; font-size: 13px; color: #333; line-height: 1.5;">
                <strong>No. 16 Irabor Street</strong><br/>
                off Ewan Street<br/>
                Upper Mission Extension, Uteh<br/>
                Benin City, Edo State, Nigeria
              </p>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=6.3798,5.6658" 
               target="_blank" 
               style="display: inline-block; padding: 10px 20px; background: #C41E3A; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">
              📍 Get Directions
            </a>
          </div>
        `,
          { maxWidth: 320 }
        )
        .openPopup();

      mapInstanceRef.current = map;
    };

    loadMap();

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-full"
      style={{ minHeight: "400px" }}
    />
  );
}
