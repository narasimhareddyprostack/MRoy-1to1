import React from "react";
import ProductForm from "./ProductForm.jsx";
import ProductList from "./ProductList.jsx";
import { Container, Row, Col } from "reactstrap";

const Products = () => {
  return (
    <Row>
      <Col>
        <ProductForm />
      </Col>
      <Col>
        <ProductList />
      </Col>
    </Row>
  );
};
export default Products;

//<div className="row"> </div> === <Row></Row>;
