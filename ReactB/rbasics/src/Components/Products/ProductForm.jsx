import React from "react";
import { Form, FormGroup, Label, Button,Input } from "reactstrap";
const ProductForm = (props) => {

  props.addProd.data({})
  var name = document.getElementById('prodName')
  
  return (
    
    <>
      <Form>
        <FormGroup>
          <Label> Product Name</Label>
          <Input id="prodName"></Input>
        </FormGroup>
        <FormGroup>
          <Label> Product Desc</Label>
          <Input id="prodDesc"></Input>
        </FormGroup>
        <Button> Add Product</Button>
      </Form>
    </>
  );
};
export default ProductForm;
