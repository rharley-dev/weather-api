import React from 'react';
import '../styles/form.css';

function Form(props) {
  return (
    <div className="container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadWeather}>
        <div className="row ml-1">
          <div className="col-md-3 offset-md-2">
            <input
              list="cityNames"
              type="text"
              className="form-control"
              placeholder="City..."
              name="city"
              autoComplete="off"
            />
            <datalist id="cityNames">
              {' '}
              <option value='home'/>
            </datalist>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country(US)..."
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-2 mt-md-0">
            <button className="btn btn-outline-light">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
}

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country.
    </div>
  );
}

export default Form;
