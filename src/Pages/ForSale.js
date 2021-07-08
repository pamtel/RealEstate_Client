import React from "react";
import { Link } from "react-router-dom";

const ForSale = () => {
  return (
    <div>
    {/* Banner */}
      <div className="banner text-white flex justify-center text-center items-center px-5">
        <div>
          <h3 className="text-2xl md:text-4xl font-medium pb-1">For Sale</h3>
          <h4 className="font-medium">
            <Link to="/" className="text-secondary italic">
              Home
            </Link>{" "}
            {'>'} For Sale
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ForSale;
