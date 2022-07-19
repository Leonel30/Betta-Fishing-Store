import React from "react";
import Item from "../Item/Item";
import { Row } from "react-bootstrap";

const ItemList = ({ products, id }) => {
 
  const filterProducts = products.filter(({ category }) => category === id);

  return (
    <div className="container">
      <Row className="justify-content-between">
        {!id &&
          products.map((prod) => <Item key={prod.id} prod={prod} id={id} />)}

        {id &&
          filterProducts.map((prod) => (
            <Item key={prod.id} prod={prod} id={id} />
          ))}
      </Row>
    </div>

            



  );
};
export default ItemList;
