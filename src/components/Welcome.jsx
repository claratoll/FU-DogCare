import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Maps from "./Maps";
import Hamburger from "./Hamburger";

const Welcome = () => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleButtonClick = (text) => {
    setButtonText(text);
  };

  const showTermsAndConditions = () => {
    handleButtonClick(
      "Privacy Policy: Information Collection: We may collect personal information, such as your name and email address, when you interact with our website or services." +
        " Use of Information: We use the collected information to improve our services, personalize your experience, and occasionally send you updates or important notices. " +
        " Data Security: We take data security seriously and employ industry-standard measures to protect your information from unauthorized access or disclosure. " +
        "Third-Party Links: Our website may contain links to third-party sites. Please be aware that we are not responsible for their privacy practices. " +
        "Policy Updates: We may update our privacy policy from time to time, and any changes will be posted on this page. Terms and Conditions: Acceptance of Terms: By using our website or services, you agree to abide by these terms and conditions." +
        " Content Usage: You may use the content on our website for personal and non-commercial purposes, but you may not reproduce or distribute it without our permission.User Conduct: You are responsible for your actions on our site, and you must not engage in any harmful, illegal, or disruptive behavior. " +
        "Disclaimer: We provide information on our website as-is and make no warranties regarding its accuracy or suitability for your needs. " +
        "Governing Law: These terms are governed by the laws of Sweden, and any disputes will be subject to its jurisdiction."
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
            <li
              onClick={() =>
                handleButtonClick("About us - our team - Facilities content")
              }
            >
              About us
            </li>
            <li onClick={() => handleButtonClick("Contact us content")}>
              Contact us
            </li>
            <li onClick={showTermsAndConditions}>Terms and conditions</li>
            <li onClick={() => handleButtonClick("Map content")}>Map</li>
          </ul>
        </div>
      </nav>
      <div className="content">
        {buttonText === "Map content" ? <Maps /> : buttonText}
      </div>

      <div>Copyright</div>
    </section>
  );
};

export default Welcome;
