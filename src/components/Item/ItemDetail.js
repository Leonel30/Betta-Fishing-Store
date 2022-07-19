import React, { useContext, useState } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ prod }) => {
  const [showBottom, setShowBottom] = useState(true);

  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext)

  const handleAddToCart = () => {
    addItem({
      item: prod,
      quantity,
    });
    setShowBottom(false);
  };
 

  return (
    <Card className="card shadow mb-4 mt-0" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={prod && prod.img} />
      <Card.Body>
        <Card.Title>
          <h2>{prod && prod.name}</h2>
        </Card.Title>
        <Card.Text>
          <h4>Descripción:</h4>
          {prod && prod.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Categoria: {prod && prod.category}</ListGroupItem>
        <ListGroupItem>Stock Disponible: {prod && prod.stock}</ListGroupItem>
        <ListGroupItem>Precio : $ {prod && prod.price}</ListGroupItem>

        {showBottom ? (
          <div>
            <ListGroupItem>
              <ItemCount stock={prod && prod.stock} initial={1} setSotckSelected={setQuantity} />{" "}
              <Button variant="primary" onClick={handleAddToCart}>
                Agregar Cantidad
              </Button>
            </ListGroupItem>
          </div>
        ) : (
          <div className="d-flex justify-content-evenly">
            <Button className="mb-1 mt-1 " variant="primary">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`/cart`}>
                Ir al carrito
              </Link>
            </Button>
            <Button className="mb-1 mt-1 " variant="primary">
              <Link style={{ color: "white", textDecoration: "none" }} to={`/`}>
                Seguir comprando
              </Link>
            </Button>
          </div>
        )}
      </ListGroup>
    </Card>
  );
};

export default Item;
