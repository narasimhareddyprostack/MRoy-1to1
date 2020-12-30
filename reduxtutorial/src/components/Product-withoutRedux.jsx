import React, { Component } from "react";

class Product extends Component {
  state = {
    product: {
      product_Name: "Philips BT40 Portable Bluetooth Speaker",
      image:
        "https://rukminim1.flixcart.com/image/224/224/jb6tksw0/speaker/mobile-tablet-speaker/v/u/7/philips-in-bt40bk-94-original-imafyhffk49hxvga.jpeg?q=90",
      qty: 1,
      price: 1299,
    },
  };
  incrHandler = () => {
    console.log("inside ... incr");
    this.setState({
      product: {
        ...this.state.product,
        qty: this.state.product.qty + 1,
      },
    });
  };
  decrHandler = () => {
    console.log("inside ... incr");
    this.setState({
      product: {
        ...this.state.product,
        qty: this.state.product.qty - 1,
      },
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
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
                    <th scope="row">{this.state.product.product_Name}</th>
                    <td>
                      <img
                        src={this.state.product.image}
                        height="50%"
                        width="50%"
                      />
                    </td>
                    <td>{this.state.product.price}</td>
                    <td>
                      <i
                        class="fa fa-minus-circle"
                        aria-hidden="true"
                        onClick={this.decrHandler}
                      ></i>
                      {this.state.product.qty}
                      <i
                        class="fa fa-plus-circle"
                        aria-hidden="true"
                        onClick={this.incrHandler}
                      ></i>
                    </td>

                    <td>{this.state.product.price * this.state.product.qty}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
