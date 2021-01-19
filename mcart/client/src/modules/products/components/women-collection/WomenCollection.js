import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addToCart } from "./../../../../redux/orders/orders.actions";
import { useSelector, useDispatch } from "react-redux";
import { getWomensCollection } from "./../../../../redux/products/products.actions";
import { Link } from "react-router-dom";
let MensCollection = () => {
  //read the redux store state data
  let mensCollection = useSelector((state) => {
    return state["mproducts"];
  });

  let history = useHistory();
  let clickAddToCart = (selectedproduct) => {
    dispatch(addToCart(selectedproduct, "1", history));
  };

  let { products } = mensCollection;
  //dispatch the actions
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWomensCollection());
  }, []);

  return (
    <React.Fragment>
      <section className="p-3 bg-warning text-center">
        <div className="container">
          <div className="row animated zoomInLeft">
            <div className="col">
              <p className="h3"> Women's Collection</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          {/* <pre>{JSON.stringify(products)}</pre> */}
          <div className="row animated zoomInLeft">
            {products.map((product) => {
              return (
                <div className="col-md-3" key={product._id}>
                  <div className="card text-center">
                    <div className="card-header bg-white">
                      <Link to={`/product/${product._id}`}>
                        <img
                          src={product.image}
                          alt=""
                          className="image-fluid"
                        />
                      </Link>
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">{product.name}</li>
                        <li className="list-group-item">
                          &#8377; {product.price}
                        </li>
                      </ul>

                      <button
                        className="btn btn-primary btn-sm mt-3"
                        onClick={clickAddToCart.bind(this, product)}
                      >
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
