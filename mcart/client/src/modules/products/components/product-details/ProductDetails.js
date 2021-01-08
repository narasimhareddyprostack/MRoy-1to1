import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getSingleProduct } from "../../../../redux/products/products.actions";

let ProductDetails = () => {
  const { id } = useParams();
  let dispatch = useDispatch();
  //read redux store data
  let singleProduct = useSelector((state) => {
    return state["mproducts"];
  });

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);
  let { selectedProducts } = singleProduct;
  return (
    <React.Fragment>
      <pre>{JSON.stringify(id)}</pre>
      <pre>{JSON.stringify(selectedProducts)}</pre>
      <h1> ProductDetails Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={selectedProducts.image}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductDetails;
