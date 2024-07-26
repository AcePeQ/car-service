import { createContext, useContext, useReducer } from "react";
import { carTypesData } from "../../../utils/CarTypes";

const ServiceContext = createContext();

const initialState = {
  carTypes: carTypesData,
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "service/nextService":
      return { ...state, index: state.index + 1 };
    case "service/previousService":
      return { ...state, index: state.index - 1 };
    case "service/start":
      return { ...state, index: 0 };
    case "service/end":
      return { ...state, index: state.carTypes.length - 1 };
    default:
      throw new Error("Something went wrong");
  }
}

function ServiceProvider({ children }) {
  const [{ carTypes, index }, dispatch] = useReducer(reducer, initialState);
  const currentCarType = carTypes[index];
  const currentServices = currentCarType.services;
  const currentImage = currentCarType.imageURL;
  const currentImageAlt = currentCarType.imageAlt;

  return (
    <ServiceContext.Provider
      value={{
        currentCarType,
        currentServices,
        currentImage,
        currentImageAlt,
        index,
        carTypes,
        dispatch,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

function useService() {
  const value = useContext(ServiceContext);
  if (!value)
    throw new Error("ServiceContext was used outside ServiceProvider");
  return value;
}

export { ServiceProvider, useService };
