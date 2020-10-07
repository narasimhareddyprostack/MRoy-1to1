import React from "react";
import ProductForm from "./ProductForm.jsx";
import ProductList from "./ProductList.jsx";
import { Container, Row, Col } from "reactstrap";

const Products = () => {
  const addProd = (data) =>{
    console.log(data)
  }
  return (
    <Row>
      <Col>
        <ProductForm addProd={addProd}/>
      </Col>
      <Col>
        <ProductList />
      </Col>
    </Row>
  );
};
export default Products;

//<div className="row"> </div> === <Row></Row>;
