import { FaArrowDown } from "react-icons/fa6";

import "./WhatAbout.css";
import { car2, develop, engage } from "../../assets";
const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Engage",
      description:
        "We start by understanding your unique business needs and goals, ensuring our strategies align perfectly with your vision.",
      image: engage,
      icon: "📊",
    },
    {
      id: 2,
      title: "Develop",
      description:
        "Using insights gained, we design and develop tailored solutions that drive innovation and business growth.",
      image: develop,
      icon: "🔧",
    },
    {
      id: 3,
      title: "Succeed",
      description:
        "We deliver results that empower your business to succeed, with measurable impact and sustained progress.",
      image: car2,
      icon: "🏆",
    },
  ];
  return (
    <div className="what-about-container pb-20">
      <div className="semi-circle bg-gray-50">
        <a href="#process">
          <div className="center-circle  bg-primary_green">
            <FaArrowDown className="fill-white w-9 h-9" />
          </div>
        </a>
      </div>

      <div
        className="content flex gap-10 lg:gap-32 items-center mt-2 justify-center"
        id="process"
      >
        <section className="pt-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h4 className="text-sm font-semibold text-dark_green uppercase">
              Our Process
            </h4>
            <h3 className="text-3xl font-bold text-gray-800 ">
              Creative Solutions for Every Client
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-start gap-12 mt-20">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Circular Image */}
                  <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md">
                      <span className="text-xl text-green-600">
                        {step.icon}
                      </span>
                    </div>
                  </div>

                  {/* Step Indicator */}
                  <span className="absolute top-0 left-1/2 transform -translate-y-2/3 -translate-x-1/2 bg-dark_green text-white text-xs font-semibold py-1 px-3 rounded-md">
                    STEP {step.id}
                  </span>

                  {/* Title and Description */}
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Process;
