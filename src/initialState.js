const initialState = {
  orderData: {
    title: 'Ordenar Datos',
    name: 'order-data',
    data: [
      {
        id: 1,
        title: 'Ascendente',
        value: 'ascendente',
      },
      {
        id: 2,
        title: 'Descendente',
        value: 'descendente',
      },
      {
        id: 3,
        title: 'Alfabéticamente',
        value: 'alfabeticamente',
      },
    ],
  },
  years: {
    title: 'Años',
    name: 'years',
    data: [
      {
        id: 1,
        title: '1995',
        value: '1995',
      },
    ],
  },
  mexicanStates: {
    title: 'Estados',
    name: 'mexican-states',
    data: [
      {
        id: 1,
        title: 'Aguascalientes',
        value: 'aguascalientes',
        idh: 0,
      },
      {
        id: 2,
        title: 'Baja California Norte',
        value: 'baja-california-norte',
        idh: 0,
      },
      {
        id: 3,
        title: 'Baja California Sur',
        value: 'baja-california-sur',
        idh: 0,
      },
      {
        id: 4,
        title: 'Campeche',
        value: 'campeche',
        idh: 0,
      },
      {
        id: 5,
        title: 'Chiapas',
        value: 'chiapas',
        idh: 0,
      },
      {
        id: 6,
        title: 'Chihuahua',
        value: 'chihuahua',
        idh: 0,
      },
      {
        id: 7,
        title: 'Ciudad de México',
        value: 'ciudad-de-mexico',
        idh: 0,
      },
      {
        id: 8,
        title: 'Coahuila',
        value: 'coahuila',
        idh: 0,
      },
      {
        id: 9,
        title: 'Colima',
        value: 'colima',
        idh: 0,
      },
      {
        id: 10,
        title: 'Durango',
        value: 'durango',
        idh: 0,
      },
      {
        id: 11,
        title: 'Estado de México',
        value: 'estado-de-mexico',
        idh: 0,
      },
      {
        id: 12,
        title: 'Guanajuato',
        value: 'guanajuato',
        idh: 0,
      },
      {
        id: 13,
        title: 'Guerrero',
        value: 'guerrero',
        idh: 0,
      },
      {
        id: 14,
        title: 'Hidalgo',
        value: 'hidalgo',
        idh: 0,
      },
      {
        id: 15,
        title: 'Jalisco',
        value: 'jalisco',
        idh: 0,
      },
      {
        id: 16,
        title: 'Michoacán',
        value: 'michoacan',
        idh: 0,
      },
      {
        id: 17,
        title: 'Morelos',
        value: 'morelos',
        idh: 0,
      },
      {
        id: 18,
        title: 'Nayarit',
        value: 'Nayarit',
        idh: 0,
      },
      {
        id: 19,
        title: 'Nuevo León',
        value: 'nuevo-leon',
        idh: 0,
      },
      {
        id: 20,
        title: 'Oaxaca',
        value: 'oaxaca',
        idh: 0,
      },
      {
        id: 21,
        title: 'Puebla',
        value: 'puebla',
        idh: 0,
      },
      {
        id: 22,
        title: 'Querétaro',
        value: 'queretaro',
        idh: 0,
      },
      {
        id: 23,
        title: 'Quintana Roo',
        value: 'quintana-roo',
        idh: 0,
      },
      {
        id: 24,
        title: 'San Luis Potosí',
        value: 'san-luis-potosi',
        idh: 0,
      },
      {
        id: 25,
        title: 'Sinaloa',
        value: 'sinaloa',
        idh: 0,
      },
      {
        id: 26,
        title: 'Sonora',
        value: 'sonora',
        idh: 0,
      },
      {
        id: 27,
        title: 'Tabasco',
        value: 'tabasco',
        idh: 0,
      },
      {
        id: 28,
        title: 'Tamaulipas',
        value: 'tamaulipas',
        idh: 0,
      },
      {
        id: 29,
        title: 'Tlaxcala',
        value: 'tlaxcala',
        idh: 0,
      },
      {
        id: 30,
        title: 'Veracruz',
        value: 'veracruz',
        idh: 0,
      },
      {
        id: 31,
        title: 'Yucatán',
        value: 'yucatan',
        idh: 0,
      },
      {
        id: 32,
        title: 'Zacatecas',
        value: 'zacatecas',
        idh: 0,
      },
    ],
  },
  idh: {
    averageIDH: 0,
    minIDH: 0,
    maxIDH: 0,
  },
};

/* const creatingYears = () => {
  const maxYear = 2050;
  const minYear = 1950;
  const maxNum = 10;
  const minNum = 6;

  const randomYear = Math.round(Math.random() * (maxYear - minYear) + minYear);
  const randomNumberOfYears = Math.round(
    Math.random() * (maxNum - minNum) + minNum
  );

  for (let i = 0; i < randomNumberOfYears; i += 1) {
    let newYear = {
      id: i,
      title: `${randomYear + i}`,
      value: `${randomYear + i}`,
    };
    initialState.years.data.push(newYear);
  }
};

creatingYears(); */

/*

const creatingIDH = () => {
  const randomIDH = Math.round(Math.random(), 2);

  for (let i = 0; i < randomNumberOfYears; i += 1) {
    let newYear = {
      id: i,
      title: `${randomYear + i}`,
      value: `${randomYear + i}`,
    };
    initialState.years.data.push(newYear);
  }
};

creatingIDH();
*/

export default initialState;
