import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const remove = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div>
      <h1>{cartProducts.length > 0 ? "Cart Items" : "Cart is Empty"}</h1>

      {cartProducts.map((product, index) => {
        return (
          <Card>
            <Card.Img
              variant="top"
              style={{
                padding: "10px",
                maxHeight: "200px",
                maxWidth: "fit-content",
                margin: "auto",
              }}
              src={product.thumbnail}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button
                variant="danger"
                onClick={() => {
                  remove(index);
                }}
                style={{
                  backgroundColor: "red",
                  font: "bold",
                  textColor: "white",
                  padding: "2px",
                  fontSize: "22px",
                }}
              >
                Remove from Cart
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Cart;
