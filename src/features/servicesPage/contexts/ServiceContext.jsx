import { createContext, useContext, useReducer } from "react";

import { GiCarWheel } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { FaOilCan } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";

const ICON_SIZE = 96;

const carTypesData = [
  {
    type: "Samochód osobowy",
    imageURL: "/src/assets/car-bg-1.png",
    imageAlt: "Car type 1",
    services: [
      {
        title: "Naprawa Opon",
        additionalText: "Tutaj dodatkowy tekst",
        icon: <GiCarWheel size={ICON_SIZE} />,
      },
      {
        title: "Naprawa Opony",
        additionalText: "Tutaj dodatkowy tekst",
        icon: <PiEngineFill size={ICON_SIZE} />,
      },
      {
        title: "Naprawa Opony",
        additionalText: "Tutaj dodatkowy tekst",
        icon: <FaOilCan size={ICON_SIZE} />,
      },
      {
        title: "Naprawa Opony",
        additionalText: "Tutaj dodatkowy tekst",
        icon: <GiFlatTire size={ICON_SIZE} />,
      },
      {
        title: "Naprawa Opony",
        additionalText: "Tutaj dodatkowy tekst",
        icon: <GiCarDoor size={ICON_SIZE} />,
      },
    ],
  },

  {
    type: "Samochód Ciężarowy",
    imageURL: "/src/assets/truck2.png",
    services: [
      {
        title: "Naprawa Op",
        additionalText: "Tutaj dodatkowy tekst",
      },
      {
        title: "Naprawa Opony",
        additionalText: "Tutaj dodatkowy tekst",
      },
      {
        title: "Naprawa Opony",
        additionalText: "Tutaj dodatkowy tekst",
      },
      {
        title: "Naprawa Opony",
        additionalText: "Tutaj dodatkowy tekst",
      },
      {
        title: "Naprawa Opony",
        additionalText: "Tutaj dodatkowy tekst",
      },
    ],
  },
];

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
