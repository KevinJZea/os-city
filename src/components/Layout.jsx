import React, { useEffect, useContext } from 'react';
import AppContext from "../context/AppContext";
import Header from "./Header";

import "../styles/components/Layout.css";

const Layout = ( { children } ) => {
  const { state, addNewYears } = useContext(AppContext);

  useEffect(() => {

    /* Creating Complete Years Starts */
    const maxYear = 2050;
    const minYear = 1940;
    const maxNum = 10;
    const minNum = 6;

    const randomYear = Math.round(Math.random() * (maxYear - minYear) + minYear);
    const randomNumberOfYears = Math.round(
      Math.random() * (maxNum - minNum) + minNum
    );

    const newYears = [];

    for (let i = 0; i < randomNumberOfYears; i += 1) {
      const mexicanStatesList = [];
      const mexicanStatesLength = state.mexicanStates.data.length; // 32 states

      /* In yearData, data for each mexicanState is created */

      let sumOfIDH = 0;
      let lowestOfIDH;
      let highestOfIDH;

      for (let j = 0; j < mexicanStatesLength; j += 1) {

        const randomIDH = Math.random().toFixed(2);
        sumOfIDH += parseFloat(randomIDH);

        if (j === 0) {
          lowestOfIDH = randomIDH;
          highestOfIDH = randomIDH;
        } else {
          if (lowestOfIDH > randomIDH) {
            lowestOfIDH = randomIDH;
          }

          if (highestOfIDH < randomIDH) {
            highestOfIDH = randomIDH;
          }
        }

        const newState = {
          id: j + 1,
          title: state.mexicanStates.data[j].title,
          shortTitle: state.mexicanStates.data[j].shortTitle,
          value: state.mexicanStates.data[j].value,
          idh: randomIDH,
        };

        mexicanStatesList.push(newState);
      }

      const averageOfIDH = (sumOfIDH / mexicanStatesLength).toFixed(2);

      const newYear = {
        id: i,
        title: `${randomYear + i}`,
        value: `${randomYear + i}`,
        yearData: {
          averageIDH: averageOfIDH,
          lowestIDH: lowestOfIDH,
          highestIDH: highestOfIDH,
          mexicanStatesData: mexicanStatesList,
        },
      };

      newYears.push(newYear);
    }

    addNewYears(newYears);
    /* Creating Complete Years Ends */
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
