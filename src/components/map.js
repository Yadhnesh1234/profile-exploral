import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'wvI4S5fBjjPewqkK8TEh';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/streets/style.json?key=wvI4S5fBjjPewqkK8TEh',
      center: [78.9629,20.5937], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    // Clean up
    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default Map;
