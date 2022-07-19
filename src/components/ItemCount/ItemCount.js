import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ItemCount = ({ stock, initial, setSotckSelected }) => {
  
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setSotckSelected(counter);
  }, [counter]);

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock || stock === 0) return;
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={minusCounter}>
            -
          </Button>
          <Button variant="secondary">{counter}</Button>
          <Button variant="secondary" onClick={plusCounter}>
            +
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ItemCount;
