import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-600 bottom-0 py-8">
      <p className="text-white text-center">
        {" "}
        &copy; copyRight {year}, All Rights Reserved Designed by{" "}
        <a
          href="https://pamtel-portfolio.netlify.app/"
          target="blank"
          rel="noopener noreferre"
          className="text-secondary font-medium"
        >
          Pamtel
        </a>
      </p>
    </div>
  );
};

export default Footer;
