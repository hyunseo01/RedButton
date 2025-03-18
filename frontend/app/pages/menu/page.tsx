"use client";
import React, { useEffect, useState } from "react";
import MenuCard from "@/components/hyunseo/MenuCard";

const MenuPage = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/menu/findall.do")
      .then((r) => r.json())
      .then((data) => setMenuData(data))
      .catch((e) => console.error("Error : ", e));
  }, []);

  console.log(menuData);

  return (
    <div>
      {menuData.map((v) => (
        <MenuCard
          key={v.menuno}
          image={v.image}
          nameKo={v.koname}
          nameEN={v.enname}
        />
      ))}
    </div>
  );
};

export default MenuPage;
