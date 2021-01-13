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
      {/* <pre>{JSON.stringify(id)}</pre> */}
      {/* <pre>{JSON.stringify(selectedProducts)}</pre> */}
      <section className="p-3 bg-warning text-center">
        <div className="container">
          <div className="row animated zoomInLeft">
            <div className="col">
              <p className="h3"> Details: {selectedProducts.name}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5">
            <img src={selectedProducts.image} />
          </div>
          <div className="col-md-5 mt-7">
            <h4> {selectedProducts.name}</h4>
            <h5> {selectedProducts.brand}</h5>
            <h5>&#8377; {selectedProducts.price}</h5>

            <button className="btn btn-primary btn-sm">Add to Cart</button>
            <p>{selectedProducts.description}</p>
            <p>{selectedProducts.usage}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductDetails;
