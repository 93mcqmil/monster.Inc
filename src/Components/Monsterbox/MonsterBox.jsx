import "./MonsterBox.css";
import monster from "./monster.json";
import Monster from "../Monster/Monster";

const MonsterBox = () => {
  const data = monster.data;

  return (
    <>
      {data.map((monster) => {
        return <Monster name={monster.name} eyes={monster.eyes} />;
      })}
    </>
  );
};

export default MonsterBox;
