import React from "react";
const ProductForm = (props) => {
  return (
    <form className="">
      <label> Product Name:</label>

      <input type="text" />
      <br />
      <label> Product Desc:</label>
      <textarea cols="40" rows="4"></textarea>

      <br />
      <button> Add2Cart</button>
    </form>
  );
};
export default ProductForm;
