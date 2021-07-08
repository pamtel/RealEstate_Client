import React from "react";
import { Link } from "react-router-dom";
import HouseListingForm from "../components/HouseListingForm";

const SellProperty = () => {
  return (
    <div>
      {/* Banner */}
      <div className="banner text-white flex justify-center text-center items-center px-5">
        <div>
          <h3 className="text-2xl md:text-4xl font-medium pb-1">
            Sell Property
          </h3>
          <h4 className="font-medium">
            <Link to="/" className="text-secondary italic">
              Home
            </Link>{" "}
            {">"} Sell Property
          </h4>
        </div>
      </div>
      <HouseListingForm />
    </div>
  );
};

export default SellProperty;
