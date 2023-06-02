import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import vite from "../assets/vite.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

function Menubar() {
  const navigate = useNavigate();
  const [cats, setCats] = useState([]);
  const cartProductsCount = useSelector((state) => state.cart.length);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCats(res.data));
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate(`/`)}>
            <h1>Products</h1>
            {/* <img
              src={vite}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            /> */}
          </Navbar.Brand>
          {/* <Nav className="me-auto" style={{ textTransform: "uppercase" }}>
            {cats.map((cat) => (
              <Nav.Link
                onClick={() => navigate(`/${cat}`)}
                key={cat}
                className="text-light"
              >
                {cat}
              </Nav.Link>
            ))}
          </Nav> */}
          <Nav>
            <Nav.Link onClick={() => navigate(`/cart`)} className="text-light">
              Cart ({cartProductsCount})
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menubar;
