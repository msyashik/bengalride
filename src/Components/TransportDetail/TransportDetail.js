import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TransportDetail = (props) => {
  const { transport, image, startDest, endDest } = props.transport;

  return (
    <div className="col-md-3 mt-2">
      <Link
        to={`/destination/${transport}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card
          className="w-100 h-100"
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Img variant="top" src={image} className="w-50 h-50 mt-4" />
          <Card.Body>
            <Card.Title>{transport}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default TransportDetail;
