import { FaArrowDown } from "react-icons/fa6";
import "./WhatAbout.css"; // Import the CSS file
import { handshake } from "../../assets";

const WhatAbout = () => {
  return (
    <div className="what-about-container">
      <div className="semi-circle bg-gray-50">
        <a href="#what-about">
          <div className="center-circle  bg-primary_green">
            <FaArrowDown className="fill-white w-9 h-9" />
          </div>
        </a>
      </div>

      <div
        className="content grid lg:grid-cols-2 gap-10  items-center mt-10 lg:mt-20 justify-center"
        id="what-about"
      >
        <div className="lg:ml-32 w-full lg:w-4/5">
          <img
            src={handshake}
            alt="shake"
            className="w-full rounded-2xl shadow col-span-1"
          />{" "}
        </div>
        <div className="w-fit flex flex-col gap-5 text-start">
          <h4 className="uppercase text-xs sm:text-sm tracking-wider text-dark_green font-semibold">
            What about us
          </h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug lg:w-[750px]">
            Empowering Your Vision with Expertise and Excellence
          </h1>
          <h3 className="lg:w-[600px] text-sm sm:text-base leading-loose">
            CCT Business Consult and Events (CCTBizCE) is your trusted partner
            for professional consultancy and event management. With a steadfast
            commitment to professionalism, integrity, and responsiveness, we
            deliver tailored solutions that drive success.
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 mt-4">
            <button className="btn text-white bg-primary_green hover:bg-dark_green rounded-3xl px-4 py-2">
              Know More
            </button>
            <div className="mt-4 sm:mt-0 text-center sm:text-left">
              <span className="block font-semibold">Get Support</span>
              <a
                href="mailto:info@cctbusiness.com"
                className="text-dark_green underline"
              >
                info@cctbusiness.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatAbout;
