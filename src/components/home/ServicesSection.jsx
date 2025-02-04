import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { services } from "../common/services";

const ServicesSection = () => {
  return (
    <div className="bg-[#F2EEE6] pt-16 mt-2 pb-32 ">
      <div className="max-w-4xl mx-auto px-6 ">
        <h2 className="text-center text-dark_green text-sm font-semibold mb-4">
          OUR SERVICE
        </h2>
        <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">
          Tailored Solutions For Your Unique Business
        </h3>
        <div className="">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group px-5 py-5 border-b-[1px] border-gray-400 hover:rounded-md overflow-hidden cursor-pointer lg:h-32 flex items-center"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                style={{
                  backgroundImage: service.bgImage,
                }}
              ></div>
              {/* Content */}
              <div className="relative z-10 flex items-center gap-5 justify-between">
                <div className="p-2 text-primary_green  group-hover:text-white transition duration-500 ease-out">
                  {service.icon}
                </div>
                <div className="grid-cols-2 gap-3 hidden lg:grid">
                  <h4 className="font-semibold text-gray-800 group-hover:text-white transition duration-500 ease-out text-lg flex-1 w-full ">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-white transition duration-500 ease-out flex-1">
                    {service.description}
                  </p>
                </div>
                <div className="flex-1 lg:hidden py-2">
                  <h4 className="font-semibold text-gray-800 group-hover:text-white text-lg transition-colors duration-500">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-white mt-1 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
                <div>
                  <Link to={service.link} className="">
                    <div className="w-10 h-10 flex justify-center items-center group-hover:bg-white rounded-full border-[1px] border-dark_green text-dark_green">
                      <FaArrowRight className="" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* Left-to-right overlay animation */}
              <div className="absolute inset-y-0 left-0 w-0 bg-dark_green group-hover:w-full transition-all duration-500 ease-out bg-opacity-85"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
