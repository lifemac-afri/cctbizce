import { FaArrowDown } from "react-icons/fa6";
import "./WhatAbout.css"; // Import the CSS file

const WhatAbout = () => {
  return (
    <div className="what-about-container">
      <div className="semi-circle bg-white">
        <div className="center-circle  bg-primary_green">
          <FaArrowDown className="fill-white w-9 h-9" />
        </div>
      </div>

      <div className="content">
        <h2>What About Us?</h2>
        <p>
          We provide expert consultancy and innovative event management
          solutions. Our team is dedicated to helping businesses grow and
          succeed.
        </p>
      </div>
    </div>
  );
};

export default WhatAbout;
