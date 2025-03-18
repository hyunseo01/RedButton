import Image from "next/image";
import Link from "next/link";

type MenuCardProps = {
  image: string;
  nameKo: string;
  nameEN: string;
};

const MenuCard = ({ image, nameKo, nameEN }: MenuCardProps) => {
  return (
    <div>
      <Image src={image} alt="none" width="240" height="270"></Image>
      <h1>{nameKo}</h1>
      <span>{nameEN}</span>
    </div>
  );
};

export default MenuCard;
