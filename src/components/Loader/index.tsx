import React from 'react';
import { PacmanLoader } from 'react-spinners';
import './index.css';

function Loader() {
  return (
    <div className="loader">
      <div className="text">Loading</div>
      <PacmanLoader size={100} color="#FFEE00" />
    </div>
  );
}

export default Loader;
