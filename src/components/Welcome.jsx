import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Maps from "./Maps";
import Hamburger from "./Hamburger";
import AboutUs from "./AboutUs";
import Terms from "./Terms";

const Welcome = () => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [content, setContent] = useState("");

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleClick = (text) => {
    setContent(text);
  };

  const showMaps = () => {
    return (
      <div>
        <Maps />
      </div>
    );
  };

  const showAboutUs = () => {
    return (
      <div>
        <AboutUs />
      </div>
    );
  };

  const showTerms = () => {
    return (
      <div>
        <Terms />
      </div>
    );
  };

  return (
    <section>
      <nav className="navbar">
        <div>
          <ul className={`ul ${hamburgerOpen ? "open" : ""}`}>
            <div className="hamburger" onClick={toggleHamburger}>
              <Hamburger isOpen={hamburgerOpen} />
            </div>

            <li onClick={() => navigate("/dogs")}>Meet our dogs</li>

            <li onClick={() => handleClick(showAboutUs())}>About us</li>

            <li onClick={() => handleClick(showTerms())}>
              Terms and conditions
            </li>

            <li onClick={() => handleClick(showMaps())}>Find us</li>
          </ul>
        </div>
      </nav>
      <div>{content}</div>
    </section>
  );
};

export default Welcome;
