import React, { useContext } from 'react';
import AppContext from "../context/AppContext";

import MainSelect from "../components/MainSelect";
import BarChart from "../components/BarChart";
import DataText from "../components/DataText";

import "../styles/containers/Home.css";

const Home = () => {
  const { state } = useContext(AppContext);
  const { mexicanStates, years, orderData, selectedData } = state;

  return (
    <>
      <section className="selects-container">
        <MainSelect
          title={mexicanStates.title}
          name={mexicanStates.name}
          data={mexicanStates.data}
        />
        <MainSelect
          title={years.title}
          name={years.name}
          data={years.data}
        />
        <MainSelect
          title={orderData.title}
          name={orderData.name}
          data={orderData.data}
        />
      </section>

      <section className="main-graphic-container">
        <BarChart
          data={selectedData.idh.mexicanStatesData}
          selectedState={selectedData.mexicanState}
          selectedYear={selectedData.year}
          sort={selectedData.sort}
          />
      </section>

      <section className="datatext-main-container">
        <div className="datatext-container">
          {selectedData.year.title
          ? (<>
              <DataText
                title={`Promedio IDH de ${selectedData.year.title}`}
                value={selectedData.idh.averageIDH ? selectedData.idh.averageIDH : "Sin datos"}
              />
              <DataText
                title={`IDH más bajo de ${selectedData.year.title}`}
                value={selectedData.idh.lowestIDH ? selectedData.idh.lowestIDH : " Sin datos"}
              />
              <DataText
                title={`IDH más alto de ${selectedData.year.title}`}
                value={selectedData.idh.highestIDH ? selectedData.idh.highestIDH : "Sin datos"}
              />
            </>)
            : (<></>)
          }
        </div>

        <div className="datatext-container">
          {selectedData.mexicanState.idh
            ? (<>
              <DataText
                title={`Promedio IDH de ${selectedData.mexicanState.title}`}
                value={selectedData.mexicanState ? selectedData.mexicanState.idh.averageIDH : "Sin datos"}
              />
              <DataText
                title={`IDH más bajo de ${selectedData.mexicanState.title}`}
                value={selectedData.mexicanState ? selectedData.mexicanState.idh.lowestIDH : "Sin datos"}
              />
              <DataText
                title={`IDH más alto de ${selectedData.mexicanState.title}`}
                value={selectedData.mexicanState ? selectedData.mexicanState.idh.highestIDH : "Sin datos"}
              />
            </>)
            : (<></>)
          }
        </div>
      </section>
    </>
  );

};

export default Home;
