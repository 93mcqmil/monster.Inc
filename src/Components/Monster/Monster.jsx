import "../Monster/Monster.css";

const Monster = ({ name, eyes, diet, behaviour, teeth }) => {
  return (
    <>
      <div className='wrapper'>
        <div>MONSTER</div>
        <p>
          Name: {name}
          <br></br> Eyes: {eyes}
          <br></br> Diet: {diet}
          <br></br> Behaviour: {behaviour}
          <br></br> Teeth: {teeth}
        </p>
      </div>
    </>
  );
};

export default Monster;
