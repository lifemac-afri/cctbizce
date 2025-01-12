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
        className="content flex gap-10 lg:gap-32 items-center mt-10 lg:mt-20 justify-center"
        id="what-about"
      >
        <div className="uid w-2/5">
          <img
            src={handshake}
            alt="shake"
            className="w-full rounded-2xl shadow "
          />{" "}
        </div>
        <div className="w-fit flex flex-col gap-5 text-start">
          <h4 className="uppercase text-sm tracking-wider text-dark_green font-semibold">
            What about us
          </h4>
          <h1 className="text-5xl font-semibold lg:w-[750px] leading-snug">
            Empowering Your Vision with Expertise and Excellence
          </h1>
          <h3 className="lg:w-[600px] leading-loose">
            CCT Business Consult and Events (CCTBizCE) is your trusted partner
            for professional consultancy and event management. With a steadfast
            commitment to professionalism, integrity, and responsiveness, we
            deliver tailored solutions that drive success.
          </h3>
          <div className="flex gap-10">
            <button className="w-fit btn text-white bg-primary_green hover:bg-dark_green rounded-3xl px-5 py-2">
              know more
            </button>
            <div className="">
              <span className="font-semibold my-2">Get Support </span> <br />
              <span>
                <a
                  href="mailto:info@cctbusiness.com"
                  className="text-dark_green"
                >
                  info@cctbusiness.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatAbout;
