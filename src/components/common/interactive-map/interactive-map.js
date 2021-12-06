import { MapSetting } from 'const';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as S from './interactive-map.styled';

const InteractiveMap = ({onLoaded}) => (
  <S.MapWrapper>
    <MapContainer
      center={MapSetting.Position}
      zoom={MapSetting.Zoom}
      scrollWheelZoom={false}
      whenReady={() => {
        onLoaded(true)
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={MapSetting.Position}>
        <Popup>
          мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5
        </Popup>
      </Marker>
    </MapContainer>
  </S.MapWrapper>
);

export default InteractiveMap;
