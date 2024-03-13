import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import "./SinglePage.scss";
import Map from "../../components/map/Map";
const SinglePage = () => {
  return (
    <section className="single-page">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1> {singlePostData.title} </h1>
                <div className="addres">
                  <img src="/pin.png" alt="" />
                  <span> {singlePostData.address} </span>
                </div>
                <div className="price"> {singlePostData.price} </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span> {userData.name} </span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="list-verticle">
            <div className="features">
              <img src="/utility.png" alt="" />
              <div className="feature-text">
                <span>Utilites</span>
                <p> Rent is responsible</p>
              </div>
            </div>

            <div className="features">
              <img src="/pet.png" alt="" />
              <div className="feature-text">
                <span> Pets Policy</span>
                <p> Pets Allowed</p>
              </div>
            </div>

            <div className="features">
              <img src="/fee.png" alt="" />
              <div className="feature-text">
                <span> Property Fees</span>
                <p> Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>88sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bath</span>
            </div>
          </div>
          <p className="title">Nerby Places</p>
          <div className="list-hor">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div>
                <span>School</span>
                <p>150m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="/bus.png" alt="" />
              <div>
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div>
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="map-container">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Saved the place
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
