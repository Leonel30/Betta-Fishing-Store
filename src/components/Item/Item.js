import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  
  const { id, name, price, description, img } = prod;

  return (
    <Card className="card shadow mb-4" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Img variant="top" src={img} />
      </Card.Body>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
      </Card.Header>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{description}</ListGroupItem>
        <ListGroupItem>Precio: ${price}</ListGroupItem>
      </ListGroup>
      <Card.Footer>
        <Button
          className="mb-1 mt-1 d-flex justify-content-center"
          variant="primary"
        >
          <Link
            to={`/item/${id}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            Detalle
          </Link>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Item;
