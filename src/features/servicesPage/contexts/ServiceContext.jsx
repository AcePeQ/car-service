import { createContext, useContext, useReducer } from "react";
const carTypesData = [
  {
    type: "Samochód osobowy",
    imageURL: "/src/assets/car-bg-1.png",
    imageAlt: "Car type 1",
    services: [
      {
        title: "Naprawa Opon",
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

  {
    type: "Samochód Ciężarowy",
    imageURL: "/src/assets/car-bg-1.png",
    services: [
      {
        title: "Naprawa Opon",
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

  console.log(carTypes, index, currentCarType);

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
