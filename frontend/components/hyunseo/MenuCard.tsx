import Image from "next/image";
import Link from "next/link";
import PickMenu from "../pick/subcomponents/PickMenu";

type MenuCardProps = {
  image: string;
  nameKo: string;
  nameEN: string;
};

const MenuCard = ({ image, nameKo, nameEN }: MenuCardProps) => {
  return <PickMenu image={image} KoName={nameKo} EnName={nameEN}></PickMenu>;
};

export default MenuCard;
