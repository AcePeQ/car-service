import { GiCarWheel } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { FaOilCan } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";

const ICON_SIZE = 96;

export const carTypesData = [
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
        title: "Naprawa Opny2",
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
];
