const HeaderMenu = () => {
  return (
    <header
      style={{
        backgroundColor: "#332f2d",
        color: "#333333",
        padding: "24px 0px 35px",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", maxWidth: "1200px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "0 auto",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#b2b2b2",
              listStyle: "none",
              justifyContent: "center",
            }}
          >
            <a style={{ textDecoration: "none", color: "inherit" }} href="">
              레드버튼 소개
            </a>
            <a style={{ textDecoration: "none", color: "inherit" }} href="">
              레드버튼 멤버십 앱
            </a>
            <a style={{ textDecoration: "none", color: "inherit" }} href="">
              연혁
            </a>
            <a style={{ textDecoration: "none", color: "inherit" }} href="">
              채용안내
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#b2b2b2",
              listStyle: "none",
              justifyContent: "center",
            }}
          >
            <a style={{ textDecoration: "none", color: "inherit" }} href="">
              레드버튼 전용 앱
            </a>
            <a style={{ textDecoration: "none", color: "inherit" }} href="">
              보드게임 찾기
            </a>
          </div>
          <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default HeaderMenu;
