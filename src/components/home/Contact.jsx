import { dottedw, person_on_call } from "../../assets";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="relative bg-no-repeat bg-cover bg-center pb-20">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md z-0">
        <img
          src={dottedw}
          alt="Background pattern"
          className="w-full opacity-10 max-h-[600px] object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative w-full lg:px-32 px-6 mx-auto text-center flex flex-col py-10 z-10">
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
          {/* Left Section: Contact Form */}
          <div className="flex flex-col justify-center items-start w-full lg:w-fit mb-10">
            <h4 className="text-sm font-semibold text-dark_green uppercase mb-2">
              Get in Touch
            </h4>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              We&apos;re Here to Help
            </h3>
            <div className=" w-full">
              <ContactForm />
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="flex justify-center lg:-mt-20 mt-8">
            <img
              src={person_on_call}
              alt="Person on call"
              className="w-full max-w-[400px] h-auto object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
