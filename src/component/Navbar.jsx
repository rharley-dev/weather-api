import React from 'react';

function Navbar() {
  return (
    <div className="row pt-4 text-light px-3">
      <div className="col-2 mt-2 ml-3 text-light">
        <a href="https://rharley-dev.github.io/">
          <button className="btn btn-outline-light">Portfolio</button>
        </a>
      </div>
      <h1 className="col-8 font-weight-bold">Your Weather</h1>
    </div>
  );
}

export default Navbar;
