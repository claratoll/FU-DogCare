import clara from "../assets/clara.png";
import alice from "../assets/alice.png";
import tom from "../assets/tom.png";

const AboutUs = () => {
  const aboutUs = () => {
    return (
      <div className="content">
        <h1>About Us</h1>
        <p>
          Welcome to the Barktastic Adventures Dog Care Center, where your furry
          friends become part of our family!
        </p>

        <h2>Meet Our Team</h2>
        <h3>Clara - Head Caretaker</h3>
        <p>
          Clara is the heart and soul of our center. With over a decade of
          experience in dog care, shes not just an expert; shes a dog whisperer.
          Claras unwavering passion for dogs led her to create this haven, where
          every dog is treated with the love and care they deserve. Her gentle
          touch and vast knowledge ensure that your beloved pets are always in
          good hands.
        </p>
        <img src={clara} alt={`Clara`} />
        <h3>Alice - Playtime Pro</h3>
        <p>
          Alice is our resident playtime expert. She has an incredible ability
          to turn a regular day into a doggy adventure. With a background in
          animal behavior, she ensures that your pups not only have a blast but
          also learn valuable social skills while they play. Alices infectious
          energy keeps tails wagging and pups coming back for more fun.
        </p>
        <img src={alice} alt={`Alice`} />
        <h3>Tom - Safety Supervisor</h3>
        <p>
          Tom takes safety seriously. As a former vet technician, hes
          well-versed in recognizing any signs of discomfort or illness in dogs.
          His keen eye and quick response make sure that every dogs health and
          well-being are top priorities. Toms dedication to a safe and secure
          environment ensures that you can trust us with your furry family
          members without a second thought.
        </p>
        <img src={tom} alt={`Tom`} />
        <h2>Our Commitment</h2>
        <p>
          At Barktastic Adventures, we understand that your dog is more than
          just a pet; they are a cherished part of your family. Thats why weve
          built a team of dedicated professionals who love dogs as much as you
          do. We promise to provide a loving, safe, and engaging environment for
          your canine companions, making their time with us a true adventure.
        </p>
        <h2>Join Us Today</h2>
        <p>
          Come and experience the Barktastic Adventures difference! Whether you
          need doggy daycare while you work or a reliable place for boarding,
          were here to provide the love and care your dog deserves. Let us
          become your dogs home away from home.
        </p>
      </div>
    );
  };
  return (
    <section>
      <div>{aboutUs()}</div>
    </section>
  );
};

export default AboutUs;
