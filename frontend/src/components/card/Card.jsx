import "./Card.scss";
import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <a href={`/:${item.id}`} className="image-container">
        <img src={item.img} alt="" />
      </a>
      <div className="text-container">
        <h2 className="title">
          <a href={`/:${item.id}`}>{item.title}</a>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="pin" />
          <span> {item.address} </span>
        </p>
        <p className="price">₹ {item.price} </p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span> {item.bedroom} bedroom </span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span> {item.bathroom} bathroom </span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="save" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
