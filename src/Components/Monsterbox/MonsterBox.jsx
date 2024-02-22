import "./MonsterBox.css";
import monster from "./monster.json";
import Monster from "../Monster/Monster";

const MonsterBox = () => {
  const data = monster.data;

  return (
    <>
      {data.map((monster, id) => {
        return (
          <Monster
            key={id}
            name={monster.name}
            eyes={monster.eyes}
            diet={monster.diet}
            behaviour={monster.behaviour}
            teeth={monster.teeth}
          />
        );
      })}
    </>
  );
};

export default MonsterBox;
