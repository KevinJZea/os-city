import React, { useContext } from 'react';
import AppContext from "../context/AppContext";

import MainSelect from "../components/MainSelect";
import MainGraphic from "../components/MainGraphic";
import DataText from "../components/DataText";

import "../styles/containers/Home.css";

const Home = () => {
  const { state } = useContext(AppContext);
  const { mexicanStates, years, orderData, idh } = state;

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
        <MainGraphic />
      </section>

      <DataText title="Promedio IDH" value={idh.averageIDH} />
      <DataText title="IDH m&aacute;s bajo" value={idh.minIDH} />
      <DataText title="IDH m&aacute;s alto" value={idh.maxIDH} />
    </>
  );

};

export default Home;
