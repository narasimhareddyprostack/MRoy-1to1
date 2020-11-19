import React from "react";

let UploadProducts = () => {
  return (
    <React.Fragment>
      <section className="container">
        <div className="row animated zoomInLeft">
          <div className="col">
            <p className="h3"> Upload Products</p>
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
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    placeholder="Product Image"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Brand"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="QTY"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option value="Mens">Mens Collections</option>
                    <option value="Womens">Women Collection</option>
                    <option value="Kids">Kids Collections</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Price"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    row="5"
                    placeholder="Product Description"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group">
                  <textarea
                    row="5"
                    placeholder="Product Usage"
                    className="form-control"
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
