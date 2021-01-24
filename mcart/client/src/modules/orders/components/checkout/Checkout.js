import React from "react";
import { useSelector } from "react-redux";
import { StaticRouter } from "react-router-dom";

let Checkout = () => {
  //how to read the cartItems Data?
  let cart = useSelector((state) => {
    return state.cart;
  });
  let { cartItems } = cart;
  let P_TAX = 5.0;
  let calcTotal = () => {
    let result = 0;
    if (cartItems.length > 0) {
      for (let item of cartItems) {
        result += item.price * item.qty;
      }
    }
    return result;
  };
  let calcTax = () => {
    return (calcTotal() * P_TAX) / 100;
  };
  let calcGrandTotal = () => {
    return calcTotal() + calcTax();
  };

  return (
    <React.Fragment>
      <pre>{JSON.stringify(cartItems)}</pre>
      <section className="p-3 bg-primary">
        <div className="row">
          <div className="col">
            <p className="h3 text-center"> Check Out Page</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card mt-4">
                <div className="card-header">
                  <p className="h5"> Billing Address</p>
                </div>
                <div className="card-body">
                  <ul>
                    <li> Address</li>
                  </ul>
                </div>
              </div>

              <div className="card mt-5">
                <div className="card-header">
                  <p className="h5">Payment Options</p>
                </div>
                <div className="card-body">
                  <ul>
                    <li> Address</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card mt-4">
                <div className="card-header bg-secondary">
                  <p className="h4 text-white"> Cart Items & Payment</p>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    {cartItems.length > 0 ? (
                      <React.Fragment>
                        {cartItems.map((item) => {
                          return (
                            <li key={item._id} className="list-group-item">
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src={item.image}
                                    alt=""
                                    width="50"
                                    height="75"
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="h6"> {item.name}</p>
                                  <p className="h6"> Qty: {item.qty}</p>
                                  <p className="h6">
                                    Price: &#8377; {item.price}
                                  </p>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </React.Fragment>
                    ) : null}
                  </ul>
                  <ul className="list-group mt-2">
                    <li className="list-group-item">
                      Total: &#8377; {calcTotal()} | Tax: &#8377; {calcTax()}
                    </li>

                    <li className="list-group-item">
                      Grand Total: &#8377; {calcGrandTotal()}
                    </li>
                  </ul>

                  <button className="btn btn-success btn-block btn-sm mt-2">
                    Pay Now &#8377; {calcGrandTotal()}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Checkout;
