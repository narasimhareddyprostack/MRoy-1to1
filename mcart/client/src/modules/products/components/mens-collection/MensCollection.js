import React, { useEffect } from "react";
import imageOne from "../../../../assets/img/products/mens/men_1.jpg";

import { useSelector, useDispatch } from "react-redux";
import { getMensCollection } from "./../../../../redux/products/products.actions";

let MensCollection = () => {
  let mensCollection = useSelector((state) => {
    return state["mproducts"];
  });
  let { products } = mensCollection;
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMensCollection());
  }, []);

  return (
    <React.Fragment>
      <section className="p-3 bg-warning text-center">
        <div className="container">
          <div className="row animated zoomInLeft">
            <div className="col">
              <p className="h3"> Men's Collection</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <pre>{JSON.stringify(products)}</pre>
          <div className="row animated zoomInLeft">
            {products.map((product) => {
              return (
                <div className="col-md-3">
                  <div className="card text-center">
                    <div className="card-header bg-white">
                      <img src={product.image} alt="" className="image-fluid" />
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">{product.name}</li>
                        <li className="list-group-item">
                          &#8377; {product.price}
                        </li>
                      </ul>

                      <button className="btn btn-primary btn-sm mt-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default MensCollection;
