import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { listData } from "../../lib/dummydata";
import "./ListPage.scss";
import React from "react";

const ListPage = () => {
  const data = listData;
  return (
    <div className="list-page">
      <div className="list-container">
        <div className="wraper">
          <Filter />
          {data.map((list) => (
            <Card key={list.id} item={list} />
          ))}
        </div>
      </div>
      <div className="map-container">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
