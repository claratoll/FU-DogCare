import clara from "../assets/clara.png";

const Terms = () => {
  const terms = () => {
    return (
      <div className="content">
        <h1>Terms and conditions</h1>
        <h2>Privacy Policy</h2>
        <p>
          Information Collection: We may collect personal information, such as
          your name and email address, when you interact with our website or
          services.
        </p>
        <h2>Use of Information</h2>
        <p>
          We use the collected information to improve our services, personalize
          your experience, and occasionally send you updates or important
          notices.
        </p>
        <h2>Data Security</h2>
        <p>
          We take data security seriously and employ industry-standard measures
          to protect your information from unauthorized access or disclosure.
        </p>
        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. Please be aware
          that we are not responsible for their privacy practices.
        </p>
        <h2>Policy Updates</h2>
        <p>
          We may update our privacy policy from time to time, and any changes
          will be posted on this page.
        </p>
        <h2>Terms and Conditions</h2>
        <p>
          Acceptance of Terms: By using our website or services, you agree to
          abide by these terms and conditions.
        </p>
        <h2>Content Usage</h2>
        <p>
          You may use the content on our website for personal and non-commercial
          purposes, but you may not reproduce or distribute it without our
          permission.
        </p>
        <h2>User Conduct</h2>
        <p>
          You are responsible for your actions on our site, and you must not
          engage in any harmful, illegal, or disruptive behavior.
        </p>
        <h2>Disclaimer</h2>
        <p>
          We provide information on our website as-is and make no warranties
          regarding its accuracy or suitability for your needs.
        </p>
        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of Sweden, and any disputes will
          be subject to its jurisdiction.
        </p>
        <img src={clara} alt={`Clara`} />
      </div>
    );
  };
  return (
    <section>
      <div>{terms()}</div>
    </section>
  );
};

export default Terms;
