import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Location() {
    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 13);
        const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; Fashion Fusion Contributions',
        }).addTo(map);
        return () => {
            map.remove();
            tileLayer.remove();
        };
    }, []);
    return <div className='my-10' id="map" style={{ width: '100%', height: '400px' }}></div>;
}

export default Location;
