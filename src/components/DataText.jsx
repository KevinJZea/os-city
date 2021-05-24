import React from 'react';

import "../styles/components/DataText.css";

const DataText = ( { title, value } ) => (
  <p className="data-text">
    <strong>
      {title}:
    </strong>
    {value}
  </p>
);

export default DataText;
