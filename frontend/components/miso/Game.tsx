import { IoIosArrowForward } from "react-icons/io";

const Game = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#dcba94",
          padding: "7px 0px",
          display: "flex",
          justifyContent: "end",
          gap: "10px",
        }}
      >
        <span style={{ color: "#5a432e" }}>홈</span>
        <span>
          <IoIosArrowForward />
        </span>
        <span style={{ color: "#5a432e" }}>BRAND</span>
        <span>
          <IoIosArrowForward />
        </span>
        <span style={{ color: "#5a432e" }}>레드버튼 소개</span>
        <div style={{ width: "350px" }}></div>
      </div>
    </div>
  );
};

export default Game;
