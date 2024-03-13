import "./Pin.scss";
import { Marker, Popup } from "react-leaflet";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="pop-up">
          <img src={item.img} alt="" />
          <div className="text-container">
            <a href={`/${item.title}`}>{item.title} </a>
            <span> {item.beadroom} beadroom </span>
            <b> {item.price} </b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
