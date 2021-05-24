import React from 'react';
import { Link } from "react-router-dom";

import "../styles/containers/NotFound.css";

const NotFound = () => (
  <>
  <header className="not-found-header">
    <Link to="/">
      <p>Regresar</p>
    </Link>
  </header>
  <h1 className="not-found-title">NotFound</h1>
  </>
);


export default NotFound;
