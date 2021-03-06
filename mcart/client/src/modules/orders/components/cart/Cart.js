import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrCartItem,
  incrCartItem,
  deleteCartItem,
} from "../../../../redux/orders/orders.actions";

let Cart = () => {
  let product_Tax = 5.0;

  let dispatch = useDispatch();
  let cartData = useSelector((state) => {
    return state.cart;
  });
  let { cartItems } = cartData;

  let calItemsTotal = () => {
    let result = 0;
    for (let item of cartItems) {
      result = result + item.price;
    }
    return result;
  };
  let calTax = () => {
    return 0;
  };
  let grandTotal = () => {
    return calTax() + calItemsTotal();
  };
  let decrQtyHandler = (productId) => {
    //dispatch action
    dispatch(decrCartItem(productId));
  };
  let incrQtyHandler = (productId) => {
    //dispatch action
    dispatch(incrCartItem(productId));
  };
  let deleteClickHandler = (productId) => {
    dispatch(deleteCartItem(productId));
  };
  return (
    <React.Fragment>
      <section className="p-3 bg-warning text-center">
        <div className="row animated zoomInLeft">
          <div className="col">
            <p className="h3 text-white">Cart Page</p>
          </div>
        </div>
      </section>
      <section className="p-3 ">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header bg-dark text-brains">
                  <p className="h4 text-white"> Cart Items</p>
                </div>
                <div className="card-body">
                  <table className="table  text-center table-hover table-striped">
                    <thead>
                      <tr>
                        <th>Prodcut</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th> Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    {cartItems.map((cartItem) => {
                      return (
                        <tbody key={cartItem._id}>
                          <tr>
                            <td>
                              <img
                                src={cartItem.image}
                                alt=""
                                width="50"
                                height="80"
                              />
                            </td>
                            <td>{cartItem.name}</td>
                            <td>
                              <i
                                className="fa fa-minus-circle mx-2"
                                onClick={decrQtyHandler.bind(
                                  this,
                                  cartItem._id
                                )}
                              >
                                {cartItem.qty}
                              </i>
                              <i
                                className="fa fa-plus-circle mx-2"
                                onClick={incrQtyHandler.bind(
                                  this,
                                  cartItem._id
                                )}
                              ></i>
                            </td>

                            <td>&#8377; {cartItem.price}</td>
                            <td>&#8377; {cartItem.qty * cartItem.price} </td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={deleteClickHandler.bind(
                                  this,
                                  cartItem._id
                                )}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-dark text-brains">
                  <p className="h4 text-white"> Total Price</p>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Total: {calItemsTotal()}
                    </li>
                    <li className="list-group-item">GST:</li>
                    <li className="list-group-item">
                      Grand Total:{grandTotal()}
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link
                      to="/orders/checkout"
                      className="btn btn-success btn-sm mx-3"
                    >
                      Check Out
                    </Link>

                    <Link to="/" className="btn btn-info btn-sm mx-3">
                      Continue...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Cart;
