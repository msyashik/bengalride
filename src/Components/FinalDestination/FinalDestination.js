import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import fakeData from "../../MOCK_DATA.json";
import { useParams } from "react-router-dom";
import personImage from "../../images/peopleicon.png";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const FinalDestination = () => {
  const { transportType } = useParams();
  const { passData } = useContext(UserContext);
  const [passengerData, setPassengerData] = passData;
  const { from, to, person, date } = passengerData;
  const [fakeDataUse, setFakeDataUse] = useState([]);
  useEffect(() => {
    setFakeDataUse(fakeData);
  }, []);
  let currentData, currentImage;
  const searchingImage = () => {
    currentData = fakeData.find(
      (currentData) => currentData.transport === transportType
    );
    currentImage = currentData.image;
  };
  searchingImage();
  console.log(currentImage);
  //console.log(currentImage);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-4">
            <div className="row">
              <div className="col-sm-12">
                <div className="card" style={{ backgroundColor: "orange" }}>
                  <div className="card-body">
                    <h5 className="card-text">{from}</h5>
                    <h5 className="card-text" style={{ color: "white" }}>
                      To
                    </h5>
                    <h5 className="card-text">{to}</h5>
                  </div>
                  <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex justify-content-between align-items-center">
                    <img src={currentImage} className="w-25 h-25" alt="" />
                    <p>{transportType}</p>
                    <p>
                      <FontAwesomeIcon icon={faUserFriends} />
                      {person}
                    </p>
                    <p>${115}</p>
                  </div>
                  <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex justify-content-between align-items-center">
                    <img src={currentImage} className="w-25 h-25" alt="" />
                    <p>{transportType}</p>
                    <p>
                      <FontAwesomeIcon icon={faUserFriends} />
                      {person}
                    </p>
                    <p>${155}</p>
                  </div>
                  <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex justify-content-between align-items-center">
                    <img src={currentImage} className="w-25 h-25" alt="" />
                    <p>{transportType}</p>
                    <p>
                      <FontAwesomeIcon icon={faUserFriends} />
                      {person}
                    </p>
                    <p>${225}</p>
                  </div>
                  <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex justify-content-between align-items-center">
                    <img src={currentImage} className="w-25 h-25" alt="" />
                    <p>{transportType}</p>
                    <p>
                      <FontAwesomeIcon icon={faUserFriends} />
                      {person}
                    </p>
                    <p>${175}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  );
};

export default FinalDestination;
