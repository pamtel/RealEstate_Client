import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="mapouter bg-primary">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=10%20Admiralty%20Way,%20Eti-Osa%20100246,%20Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="map"
          ></iframe>
          <a href="https://putlocker-is.org">putlocker</a>
          <br />
          <a href="https://www.embedgooglemap.net">google maps for website</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
