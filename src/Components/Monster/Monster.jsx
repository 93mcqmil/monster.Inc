import "../Monster/Monster.css";

const Monster = ({ name, eyes }) => {
  return (
    <>
      <div>MONSTER</div>
      <p>
        Name: {name}, Eyes: {eyes}
      </p>{" "}
    </>
  );
};

export default Monster;
