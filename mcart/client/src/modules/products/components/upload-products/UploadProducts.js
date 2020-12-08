/*
API : http://localhost:8000/product/upload
*/

import React, { useState } from "react";
import { uploadProduct } from "./../../../../redux/products/products.actions";
import { useDispatch } from "react-redux";

let UploadProducts = () => {
  let dispatch = useDispatch();
  let [product, setProduct] = useState({
    name: "",
    brand: "",
    image: "",
    price: "",
    qty: "",
    category: "",
    description: "",
    usage: "",
  });
  let inputHandler = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };
  let imageHandler = (event) => {
    let imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener("load", () => {
      if (reader.result) {
        setProduct({
          ...product,
          image: reader.result,
        });
      }
    });
  };
  let submitHandler = (event) => {
    event.preventDefault();
    //view - dispatching action.
    dispatch(uploadProduct(product));
    //console.log(product);
  };
  return (
    <React.Fragment>
      <section className="container">
        <div className="row animated zoomInLeft">
          <div className="col">
            <p className="h3"> Upload Products</p>
            <pre>{JSON.stringify(product)}</pre>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-3">
          <div className="card">
            <div className="card-header bg-dark text-center">
              <p className="h3 text-white"> Upload Here</p>
            </div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={inputHandler}
                    placeholder="Product Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    name="image"
                    onChange={imageHandler}
                    placeholder="Product Image"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="brand"
                    onChange={inputHandler}
                    placeholder="Brand"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="qty"
                    onChange={inputHandler}
                    placeholder="QTY"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    onChange={inputHandler}
                    name="category"
                    value={product.category}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Mens">Mens Collections</option>
                    <option value="Womens">Women Collection</option>
                    <option value="Kids">Kids Collections</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    onChange={inputHandler}
                    placeholder="Price"
                    name="price"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    row="5"
                    placeholder="Product Description"
                    className="form-control"
                    onChange={inputHandler}
                    name="description"
                  ></textarea>
                </div>
                <div className="form-group">
                  <textarea
                    row="5"
                    placeholder="Product Usage"
                    className="form-control"
                    name="usage"
                    onChange={inputHandler}
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default UploadProducts;
