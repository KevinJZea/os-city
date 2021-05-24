import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const addYear = (newYear) => {
    setState((prevState) => ({
      ...prevState,
      years: {
        ...prevState.years,
        data: [...prevState.years.data, newYear],
      },
    }));
  };

  const removeYear = () => {
    setState((prevState) => ({
      ...prevState,
      years: {
        ...prevState.years,
        data: [],
      },
    }));
  };

  const addDataToStates = (mexicanStates) => {
    setState((prevState) => ({
      ...prevState,

      mexicanStates: {
        ...prevState.mexicanStates,

        data: mexicanStates,
      },
    }));
  };

  const updateIDH = (averageOfIDH, minOfIDH, maxOfIDH) => {
    setState((prevState) => ({
      ...prevState,

      idh: {
        averageIDH: averageOfIDH,
        minIDH: minOfIDH,
        maxIDH: maxOfIDH,
      },
    }));
  };

  return {
    addToCart,
    addYear,
    removeYear,
    addDataToStates,
    updateIDH,
    state,
  };

  //   const removeFromCart = (payload, indexToRemove) => {
  //     setState({
  //       ...state,
  //       cart: state.cart.filter(
  //         (_items, indexCurrent) => indexCurrent !== indexToRemove
  //       ),
  //     });
  //   };

  //   const addToBuyer = (payload) => {
  //     setState({
  //       ...state,
  //       buyer: [...state.buyer, payload],
  //     });
  //   };

  //   const addNewOrder = (payload) => {
  //     setState({
  //       ...state,
  //       orders: [...state.orders, payload],
  //     });
  //   };

  //   return {
  //     addToCart,
  //     removeFromCart,
  //     addToBuyer,
  //     addNewOrder,
  //     state,
  //   };
};

export default useInitialState;
