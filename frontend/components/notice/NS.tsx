import GameSearch from "./subcomponents/GameSearch";
import Notice from "./subcomponents/Notice";

const NS = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ width: "50%" }}>
        <Notice />
      </div>
      <div style={{ width: "50%" }}>
        <GameSearch />
      </div>
    </div>
  );
};

export default NS;
