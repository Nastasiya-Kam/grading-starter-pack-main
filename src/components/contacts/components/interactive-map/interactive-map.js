import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapSetting, PinSize } from 'const/map';
import pointer from 'assets/img/icon-location.svg';
import * as S from './interactive-map.styled';

const InteractiveMap = ({onLoaded}) => {
  const pointerIcon = new L.Icon({
    iconUrl: pointer,
    iconRetinaUrl: pointer,
    iconSize: PinSize.Icons,
    iconAnchor: PinSize.Anchors,
  });

  return (
  <S.MapWrapper>
    <MapContainer
      center={MapSetting.Position}
      zoom={MapSetting.Zoom}
      scrollWheelZoom={false}
      whenReady={() => onLoaded(true)}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={MapSetting.Position} icon={pointerIcon}>
        <Popup>
          мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5
        </Popup>
      </Marker>
    </MapContainer>
  </S.MapWrapper>
)};

export default InteractiveMap;
