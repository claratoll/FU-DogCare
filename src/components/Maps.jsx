import React from "react";

const Maps = () => {
  const AddressMap = () => {
    return (
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8721.911263765767!2d14.76703432949385!3d56.87204991367187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4657240fc0c8cc95%3A0x57cdb1ab228d9c42!2sHundrastplats!5e0!3m2!1sen!2sse!4v1695993377617!5m2!1sen!2sse"
          width="400"
          height="350"
          frameBorder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    );
  };
  return (
    <section>
      <div>{AddressMap()}</div>
    </section>
  );
};

export default Maps;
