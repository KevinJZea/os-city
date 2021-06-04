import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addNewYears = (newYears) => {
    setState((prevState) => ({
      ...prevState,
      years: {
        ...prevState.years,
        data: newYears,
      },
    }));
  };

  const updateSelectedIDH = (newSelectedData) => {
    setState((prevState) => ({
      ...prevState,

      selectedData: {
        ...prevState.selectedData,
        idh: newSelectedData,
      },
    }));
  };

  const updateSelectedMexicanState = (newMexicanState) => {
    setState((prevState) => ({
      ...prevState,

      selectedData: {
        ...prevState.selectedData,
        mexicanState: newMexicanState,
      },
    }));
  };

  const updateSelectedYear = (newYear) => {
    setState((prevState) => ({
      ...prevState,

      selectedData: {
        ...prevState.selectedData,
        year: newYear,
      },
    }));
  };

  const updateSelectedSort = (newSort) => {
    setState((prevState) => ({
      ...prevState,

      selectedData: {
        ...prevState.selectedData,
        sort: newSort,
      },
    }));
  };

  return {
    addNewYears,
    updateSelectedIDH,
    updateSelectedMexicanState,
    updateSelectedYear,
    updateSelectedSort,
    state,
  };

  // const addToCart = (payload) => {
  //   setState({
  //     ...state,
  //     cart: [...state.cart, payload],
  //   });
  // };

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
