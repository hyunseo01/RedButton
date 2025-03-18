"use client";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";

const Header = ({ onBrandHover }: { onBrandHover: () => void }) => {
  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);
  const toggleBrandMenu = () => {
    setIsBrandMenuOpen((prev) => !prev);
  };

  const handleMouseEnter = () => setIsBrandMenuOpen(true);
  const handleMouseLeave = () => setIsBrandMenuOpen(false);
  return (
    <header style={{ backgroundColor: "#272422" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1200px",
          color: "#EDECEA",
          flexDirection: "row",
          margin: "0 auto",
          padding: "25px",
        }}
      >
        <Link href={"/"}>
          <img
            style={{ width: "90px" }}
            src="https://redbutton.co.kr/wp-content/uploads/2021/03/GNB_logo.png"
            alt=""
          />
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0px 20px 0px 48px",
          }}
          onMouseEnter={onBrandHover}
        >
          <ul className="flex">
            <Link
              style={{
                color: "inherit",
                textDecoration: "none",
                padding: "13px 20px",
                fontSize: "20px",
              }}
              href={"/brand"}
            >
              BRAND
            </Link>
            <Link
              style={{
                color: "inherit",
                textDecoration: "none",
                padding: "13px 20px",
                fontSize: "20px",
              }}
              href={"/boardgame"}
            >
              BOARD GAME
            </Link>
            <Link
              style={{
                color: "inherit",
                textDecoration: "none",
                padding: "13px 20px",
                fontSize: "20px",
              }}
              href={"/menu"}
            >
              MENU
            </Link>
            <Link
              style={{
                color: "inherit",
                textDecoration: "none",
                padding: "13px 20px",
                fontSize: "20px",
              }}
              href={"/store"}
            >
              STORE
            </Link>
            <Link
              style={{
                color: "inherit",
                textDecoration: "none",
                padding: "13px 20px",
                fontSize: "20px",
              }}
              href={"/contact"}
            >
              CONTACT
            </Link>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            margin: "0 auto",
            maxWidth: "1200px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#605549",
              padding: "7px 20px 9px 17px",
              color: "#ffffff",
              borderRadius: "5px",
            }}
          >
            가맹사업 안내
          </div>
          <div
            style={{
              backgroundColor: "#4c4c4c",
              padding: "7px 10px 9px 10px",
              borderRadius: "5px",
              color: "#999999",
            }}
          >
            KOR
            <IoIosArrowDown style={{ margin: "0 auto", fontSize: "20px" }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
