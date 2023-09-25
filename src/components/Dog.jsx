const Dog = (props) => {
  return (
    <section>
      <p>Display one dog</p>
      <button onClick={props.backToMain}>GoBackToMain</button>
    </section>
  );
};

export default Dog;
