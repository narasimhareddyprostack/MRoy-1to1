import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrAction, decrAction } from "../redux/product/product.action";
let Product = () => {
  let dispatch = useDispatch();

  let product = useSelector((state) => {
    return state.product;
  });

  let incrHandler = () => {
    dispatch(incrAction());
  };
  let decrHandler = () => {
    console.log("inside ... incr");
    dispatch(decrAction());
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <pre>{JSON.stringify(product)}</pre>
          <div className="col-md-10">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">No of Product</th>

                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{product.product_Name}</th>
                  <td>
                    <img src={product.image} height="50%" width="50%" />
                  </td>
                  <td>{product.price}</td>
                  <td>
                    {product.qty < 1 ? (
                      <i
                        class="fa fa-minus-circle"
                        aria-hidden="true"
                        onClick={decrHandler}
                      ></i>
                    ) : (
                      <i
                        class="fa fa-minus-circle"
                        aria-hidden="true"
                        onClick={decrHandler}
                        disabled
                      ></i>
                    )}

                    {product.qty}
                    <i
                      class="fa fa-plus-circle"
                      aria-hidden="true"
                      onClick={incrHandler}
                    ></i>
                  </td>

                  <td>{product.price * product.qty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
