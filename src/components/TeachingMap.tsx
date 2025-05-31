"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


const DefaultIcon = L.icon({
    iconUrl: '/pin.svg',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
});

export default function TeachingMap() {
    return (
        <MapContainer center={[51.505, 2]} zoom={2} scrollWheelZoom={false} worldCopyJump={false} maxBounds={[
            [-85, -180], // Southwest corner
            [85, 180],   // Northeast corner
        ]}
            maxBoundsViscosity={1.0} dragging={true} zoomControl={false} doubleClickZoom={false} keyboard={false} className="w-full rounded-xl z-0" style={{ height: "calc(100vh - 200px)" }}>
            <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={[37.7749, -122.4194]
            } icon={DefaultIcon}>
                <Popup>
                    7 middle schools in San Francisco, CA <br /> as well as 6 assisted living facilities!
                </Popup>
            </Marker>
            <Marker position={[44.5588, -72.5778]} icon={DefaultIcon}>
                <Popup>
                    Online class in Vermont!
                </Popup>
            </Marker>
            <Marker position={[43.7696, 11.2558]} icon={DefaultIcon}>
                <Popup>
                    Online class in Italy!
                </Popup>
            </Marker>
            <Marker position={[-16.2902, -63.5887]} icon={DefaultIcon}>
                <Popup>
                    Online class in Bolivia!
                </Popup>
            </Marker>
            <Marker position={[20.5937, 78.9629]} icon={DefaultIcon}>
                <Popup>
                    Online class in India!
                </Popup>
            </Marker>
            <Marker position={[13.7942, -88.8965]} icon={DefaultIcon}>
                <Popup>
                    Online class offered in El Salvador in August!
                </Popup>
            </Marker>
            <Marker position={[-22.3285, 24.6849]} icon={DefaultIcon}>
                <Popup>
                    Online classes in Botswana!
                </Popup>
            </Marker>
            <Marker position={[18.1096, -77.2975]} icon={DefaultIcon}>
                <Popup>
                    Online classes in Jamaica!
                </Popup>
            </Marker>
            <Marker position={[38.9875, -118.5311]} icon={DefaultIcon}>
                <Popup>
                    Online classes for students in Marin!
                </Popup>
            </Marker>


        </MapContainer>
    );
};




