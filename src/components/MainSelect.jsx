import React, { useContext } from 'react';
import AppContext from "../context/AppContext";

import "../styles/components/MainSelect.css";

const MainSelect = ( { title, name, data } ) => {
  const { state, updateSelectedIDH, updateSelectedMexicanState, updateSelectedYear, updateSelectedSort } = useContext(AppContext);
  const { years, mexicanStates, orderData } = state;


  const handleChange = () => {
    if (name === years.name) {
      const valueSelected = document.getElementById(name).value;
      let valueFound = true;
      let pass = 0;

      if (valueSelected === "no-selection") {
        const noSelectedData = {
          averageIDH: 'Sin datos',
          lowestIDH: 'Sin datos',
          highestIDH: 'Sin datos',
          mexicanStatesData: [],
        }
        updateSelectedIDH(noSelectedData);
        const noSelectedYear = {};
        updateSelectedYear(noSelectedYear);
        valueFound = false;
      }

      while (valueFound) {
        if (valueSelected === years.data[pass].value) {
          updateSelectedIDH(years.data[pass].yearData);
          updateSelectedYear(years.data[pass]);
          valueFound = false;
        }
        pass += 1;
      }
    } else if (name === orderData.name) {
      const valueSelected = document.getElementById(name).value;
      let valueFound = true;
      let pass = 0;

      while (valueFound) {
        if (valueSelected === orderData.data[pass].value) {
          updateSelectedSort(orderData.data[pass]);
          valueFound = false;
        }
        pass += 1;
      }
    } else if (name === mexicanStates.name) {
      const valueSelected = document.getElementById(name).value;
      let valueFound = true;
      let pass = 0;

      if (valueSelected === "no-selection") {
        const noSelectedMexicanState = {};
        updateSelectedMexicanState(noSelectedMexicanState);
        valueFound = false;
      }

      while (valueFound) {
        if (valueSelected === mexicanStates.data[pass].value) {
          const selectedState = mexicanStates.data[pass];
          const yearsLength = years.data.length;
          const mexicanStatesLength = mexicanStates.data.length; // 32 States

          let sumOfIDH = 0;
          let lowestOfIDH;
          let highestOfIDH;

          for (let i = 0; i < yearsLength; i += 1) {
            let stateIDH;
            const yearBeingChecked = years.data[i];

            for (let j = 0; j < mexicanStatesLength; j += 1) {
              if (yearBeingChecked.yearData.mexicanStatesData[j].value === valueSelected) {
                stateIDH = years.data[i].yearData.mexicanStatesData[j].idh;
              }
            }

            sumOfIDH += parseFloat(stateIDH);

            if (i === 0) {
              lowestOfIDH = stateIDH;
              highestOfIDH = stateIDH;
            } else {
              if (lowestOfIDH > stateIDH) {
                lowestOfIDH = stateIDH;
              }

              if (highestOfIDH < stateIDH) {
                highestOfIDH = stateIDH;
              }
            }
          }

          const averageOfIDH = (sumOfIDH / yearsLength).toFixed(2);

          const newMexicanState = {
            id: selectedState.id,
            title: selectedState.title,
            shortTitle: selectedState.shortTitle,
            value: selectedState.value,
            idh: {
              averageIDH: averageOfIDH,
              lowestIDH: lowestOfIDH,
              highestIDH: highestOfIDH,
            },
          }
          updateSelectedMexicanState(newMexicanState);
          valueFound = false;
        }
        pass += 1;
      }
    }
  };

  return (
    <div className="main-select-container">
      <label className="main-select--label" htmlFor={name}>{title}</label>

      <select className="main-select" name={name} id={name} onChange={handleChange}>
        {name !== orderData.name
          ? (<option value="no-selection">--------</option>)
          : (<></>)
        }
        {data.map((dataValue) => (
          <option key={dataValue.id} value={dataValue.value}>
            {dataValue.title}
          </option>
        ))}
      </select>
    </div>
    );

};

export default MainSelect;
