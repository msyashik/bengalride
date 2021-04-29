import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import Header from "../Header/Header";

const DestinationSearch = () => {
  const history = useHistory();
  const { transportType } = useParams();
  const { passData } = useContext(UserContext);
  const [passengerData, setPassengerData] = passData;
  const { register, errors, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    const userDestination = {
      from: data.from,
      to: data.to,
      date: data.date,
      person: data.passenger,
    };
    setPassengerData(userDestination);

    const goToDestination = () => {
      history.push(`/destinationFixed/${transportType}`);
    };
    goToDestination();
  };
  return (
    <div>
      <Header></Header>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="from">From</label>
                    <input
                      className="form-control"
                      type="text"
                      name="from"
                      placeholder="Chittagong"
                      ref={register({ required: true })}
                    ></input>
                  </div>
                  <div style={{ color: "red", fontSize: "15px" }}>
                    {errors.from && "*This is required"}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="to">To</label>
                    <input
                      className="form-control"
                      type="text"
                      name="to"
                      placeholder="Dhaka"
                      ref={register({ required: true })}
                    ></input>
                  </div>
                  <div style={{ color: "red", fontSize: "15px" }}>
                    {errors.to && "*This is required"}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="passenger">Passenger</label>
                    <input
                      className="form-control"
                      type="number"
                      name="passenger"
                      placeholder="Number of passenger"
                      ref={register({ required: true })}
                    ></input>
                  </div>
                  <div style={{ color: "red", fontSize: "15px" }}>
                    {errors.passenger && "*This is required"}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="data">Date</label>
                    <input
                      className="form-control"
                      type="date"
                      name="date"
                      placeholder=""
                      ref={register({ required: true })}
                    ></input>
                  </div>
                  <div style={{ color: "red", fontSize: "15px" }}>
                    {errors.date && "*This is required"}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Button type="Submit" className="btn btn-success mt-2 w-50">
                    Go
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496723.66068468!2d85.84616609221882!3d23.442075849009655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1616220108015!5m2!1sen!2sbd"
                  width="800"
                  height="600"
                  title="bangladesh"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DestinationSearch;
