const Welcome = (props) => {
  return (
    <section>
      <menu>Navigation menu?</menu>
      <button onClick={props.nextScreen}>Book a visit today</button>
      <button onClick={props.nextScreenToDogs}>Meet our dogs</button>
    </section>
  );
};

export default Welcome;
