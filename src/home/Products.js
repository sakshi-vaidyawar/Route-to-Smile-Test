import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { Row, Card, Col, Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function Products() {
  const navigate = useNavigate();
  const params = useParams();
  const [products, setProducts] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (params.category) {
      getAllProducts(params.category);
    } else {
      getAllProducts("/");
    }
  }, [location]);

  const getAllProducts = (category) => {
    console.log(category);
    const url = "https://dummyjson.com/products";

    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  };

  const dispatch = useDispatch();
  const add = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col md={3} sm={6} xs={12} key={product.id}>
              <Card>
                <img
                  src={product.thumbnail}
                  alt=""
                  style={{ margineTop: "5px" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      add(product);
                    }}
                    style={{
                      background: "blue",
                      margine: "5px",
                      fontStyle: "normal",
                      fontSize: "20px",
                    }}
                  >
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Products;
