"use client";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";

const Header = ({ onBrandHover }: { onBrandHover: () => void }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleLangMenu = () => {
    setIsLangMenuOpen((prev) => !prev);
  };

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
          justifyContent: "space-between",
        }}
      >
        {/* 로고 */}
        <Link href={"/"}>
          <img
            style={{ width: "90px" }}
            src="https://redbutton.co.kr/wp-content/uploads/2021/03/GNB_logo.png"
            alt="Logo"
          />
        </Link>

        {/* 네비게이션 메뉴 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0px 20px 0px 48px",
          }}
          onMouseEnter={onBrandHover}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {[
              { name: "BRAND", href: "/brand" },
              { name: "BOARD GAME", href: "/boardgame" },
              { name: "MENU", href: "/menu" },
              { name: "STORE", href: "/store" },
              { name: "CONTACT", href: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  padding: "13px 20px",
                  fontSize: "20px",
                  marginLeft: index === 0 ? "0px" : "10px",
                }}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* 가맹사업 & 언어 선택 */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* 가맹사업 안내 버튼 */}
          <div
            style={{
              width: "120px",
              height: "30px",
              fontSize: "16px",
              backgroundColor: "#605549",
              padding: "7px 20px 9px 17px",
              color: "#ffffff",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            가맹사업 안내
          </div>

          {/* 언어 선택 버튼 */}
          <div
            style={{
              width: "70px",
              height: "30px",
              backgroundColor: "#4c4c4c",
              padding: "7px 10px 9px 10px",
              borderRadius: "5px",
              color: "#999999",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={toggleLangMenu}
          >
            KOR
            <IoIosArrowDown
              style={{
                fontSize: "20px",
                transition: "transform 0.3s",
                transform: isLangMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>

          {/* 드롭다운 메뉴 */}
          {isLangMenuOpen && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                width: "100px",
                backgroundColor: "#4c4c4c",
                color: "#ffffff",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                zIndex: 10,
              }}
            >
              <ul style={{ listStyle: "none", padding: "5px 0", margin: 0 }}>
                <li
                  style={{
                    padding: "8px 15px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  KOR
                </li>
                <li
                  style={{
                    padding: "8px 15px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  ENG
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
