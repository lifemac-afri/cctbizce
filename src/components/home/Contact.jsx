import { dotted, dottedw } from "../../assets";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center bg-opacity-30"
      style={{ backgroundImage: `url(${dottedw})` }}
    >
      {/* Overlay for blur */}
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative w-full lg:px-32 mx-auto text-center flex uid py-10 flex-col z-10">
        <div className="flex flex-col justify-center items-start w-full">
          <h4 className="text-sm font-semibold text-dark_green uppercase">
            Get in Touch
          </h4>
          <h3 className="text-3xl font-bold text-gray-800">
            We&apos;re Here to Help
          </h3>
        </div>

        <div className="flex py-6 gap-5">
          <div className="flex-1 w-full justify-center flex items-center">
            <ContactForm />
          </div>
          <div className="w-full uid flex justify-center">
            <img src={dotted} alt="dot" className="w-72 uid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
