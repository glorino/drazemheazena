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

      const churchLat = 6.3837;
      const churchLng = 5.6128;

      const map = L.map(mapRef.current!, {
        center: [churchLat, churchLng],
        zoom: 17,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const churchIcon = L.divIcon({
        html: `
          <div style="position: relative; width: 40px; height: 50px;">
            <svg viewBox="0 0 24 36" width="40" height="50" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
              <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="#C41E3A"/>
              <circle cx="12" cy="12" r="6" fill="white"/>
              <path d="M12 6v12M6 12h12" stroke="#C41E3A" stroke-width="2"/>
            </svg>
          </div>
        `,
        className: "church-marker",
        iconSize: [40, 50],
        iconAnchor: [20, 50],
        popupAnchor: [0, -50],
      });

      L.marker([churchLat, churchLng], { icon: churchIcon })
        .addTo(map)
        .bindPopup(
          `
          <div style="text-align: center; padding: 8px; min-width: 200px;">
            <strong style="font-size: 14px; color: #C41E3A;">Turning Point Gospel Center International</strong>
            <br/>
            <span style="font-size: 12px; color: #333;">
              16 Irabor Street off Ewan Street<br/>
              Upper Mission Extension, Uteh<br/>
              Benin City, Edo State, Nigeria
            </span>
            <br/>
            <a href="https://www.google.com/maps/dir/?api=1&destination=16+Irabor+Street+off+Ewan+Street+Upper+Mission+Extension+Uteh+Benin+City+Nigeria" 
               target="_blank" 
               style="display: inline-block; margin-top: 8px; padding: 6px 12px; background: #C41E3A; color: white; text-decoration: none; border-radius: 4px; font-size: 12px;">
              Get Directions
            </a>
          </div>
        `
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
