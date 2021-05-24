import React from 'react';

import "../styles/components/MainSelect.css";

const MainSelect = ( { title, name, data } ) => (
  <div className="main-select-container">
    <label className="main-select--label" htmlFor={name}>{title}</label>

    <select className="main-select" name={name} id={name}>
      <option value="no-selected">--------</option>
      {data.map((dataValue) => (
        <option key={dataValue.id} value={dataValue.value}>
          {dataValue.title}
        </option>
      ))}
    </select>
  </div>
  );

export default MainSelect;
