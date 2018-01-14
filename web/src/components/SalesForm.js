import React from "react";

function SalesForm({
  productPrice,
  products,
  submitTitle,
  onSubmit,
  onChangeTitle,
  onChangePrice
}) {
  return (
    <div className="col">
      <h1 className="text-center mb-5">New Sales</h1>
      {products && (
        <form
          className=""
          onSubmit={event => {
            // Prevent old-school form submission
            event.preventDefault();

            const form = event.target;
            const elements = form.elements; // Allows looking up fields using their 'name' attributes
            // Get entered values from fields
            const brandName = elements.brandName.value;
            const name = elements.name.value;

            // Pass this information along to the parent component
            onSubmit({ brandName, name });
          }}
        >
          <fieldset>
            <div className="form-group">
              <div className="col-md-6">
                <label className="control-label mr-3">Date</label>
                <i className="fa fa-calendar mr-1" />
                <input type="date" defaultValue="2000-05-05" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-8">
                <label className="control-label">Product</label>
                <select
                  name="brandName"
                  className="form-control"
                  onChange={e => {
                    onChangeTitle(e.target.value);
                  }}
                >
                  {products.map(m => <option>{m.title}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                <label className="control-label">Sold for</label>
                <div className="input-group">
                  <input
                    name="mobile"
                    className="form-control"
                    value={productPrice ? productPrice : "0"}
                    type="number"
                    onChange={e => {
                      onChangePrice(e);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                <label className="control-label">Quantity</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    defaultValue="1"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-6">
                <i className="fa fa-plus-circle mr-2" />
                <span>Add more</span>
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block info"
                >
                  Save
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      )}
    </div>
  );
}

export default SalesForm;
