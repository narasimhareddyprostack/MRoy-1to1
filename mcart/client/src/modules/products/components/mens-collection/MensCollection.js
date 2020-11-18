import React from "react";
import imageOne from "../../../../assets/img/products/mens/men_1.jpg";

import imageTwo from "../../../../assets/img/products/mens/men_2.jpg";
import imageThree from "../../../../assets/img/products/mens/men_3.jpg";
import imageFour from "../../../../assets/img/products/mens/men_4.jpg";

let MensCollection = () => {
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
          <div className="row animated zoomInLeft">
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-header bg-white text-center">
                  <img src={imageOne} alt="" className="image-fluid" />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Men's Fit Shirt</li>
                    <li className="list-group-item">&#8377; 500.00</li>
                  </ul>

                  <button className="btn btn-primary btn-sm mt-3">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-header bg-white">
                  <img src={imageTwo} alt="" className="image-fluid" />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Men's Fit Shirt</li>
                    <li className="list-group-item">&#8377; 500.00</li>
                  </ul>

                  <button className="btn btn-primary btn-sm mt-3">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-header bg-white">
                  <img src={imageThree} alt="" className="image-fluid" />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Men's Fit Shirt</li>
                    <li className="list-group-item">&#8377; 500.00</li>
                  </ul>

                  <button className="btn btn-primary btn-sm mt-3">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-header bg-white">
                  <img src={imageFour} alt="" className="image-fluid" />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Men's Fit Shirt</li>
                    <li className="list-group-item">&#8377; 500.00</li>
                  </ul>

                  <button className="btn btn-primary btn-sm mt-3">
                    Add to Cart
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
export default MensCollection;
