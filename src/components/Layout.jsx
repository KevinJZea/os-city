import React, { useEffect, useContext } from 'react';
import AppContext from "../context/AppContext";
import Header from "./Header";

import "../styles/containers/Layout.css";

const Layout = ( { children } ) => {
  const { state, addYear, removeYear, addDataToStates, updateIDH } = useContext(AppContext);


  useEffect(() => {

    /* Creating Years Starts */
    const maxYear = 2050;
    const minYear = 1940;
    const maxNum = 10;
    const minNum = 6;

    const randomYear = Math.round(Math.random() * (maxYear - minYear) + minYear);
    const randomNumberOfYears = Math.round(
      Math.random() * (maxNum - minNum) + minNum
    );

    removeYear();

    for (let i = 0; i < randomNumberOfYears; i += 1) {
      const newYear = {
        id: i,
        title: `${randomYear + i}`,
        value: `${randomYear + i}`,
      };
      addYear(newYear);
    }
    /* Creating Years Ends */

    /* Adding IDH to States Starts */


    const mexicanStatesLength = state.mexicanStates.data.length;
    const mexicanStates = [];
    let sumOfIDH = 0;
    let minOfIDH;
    let maxOfIDH;

    for (let i = 0; i < mexicanStatesLength; i += 1) {
      const randomIDH = Math.random();
      parseFloat(randomIDH);
      sumOfIDH += randomIDH;

      if (i === 0) {
        minOfIDH = randomIDH;
        maxOfIDH = randomIDH;
      } else {

        if (randomIDH < minOfIDH) {
          minOfIDH = randomIDH;
        }

        if (randomIDH > maxOfIDH) {
          maxOfIDH = randomIDH;
        }

      }

      const mexicanState = {
        id: i,
        title: state.mexicanStates.data[i].title,
        value: state.mexicanStates.data[i].value,
        idh: randomIDH,
      }
      mexicanStates.push(mexicanState);
    }

    const averageOfIDH = (sumOfIDH / mexicanStatesLength).toFixed(2);
    minOfIDH = minOfIDH.toFixed(2);
    maxOfIDH = maxOfIDH.toFixed(2);
    console.log(averageOfIDH, sumOfIDH, mexicanStatesLength);

    updateIDH(averageOfIDH, minOfIDH, maxOfIDH);
    addDataToStates(mexicanStates);

    /* Adding IDH to States Ends */

  }, []);

  return (
  <>
    <Header />
    <main className="main">
      {children}
    </main>
  </>
  );
};

export default Layout;
