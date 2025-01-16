import { dottedw, person_on_call } from "../../assets";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center pb-20"
      //   style={{ backgroundImage: `url(${dottedw})` }}
    >
      {/* Overlay for blur */}
      <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md z-0">
        <img
          src={dottedw}
          alt=""
          className="w-full opacity-10 max-h-[600px] object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative w-full lg:px-32 mx-auto text-center flex  py-10 flex-col z-10">
        <div className="flex py-6 gap-10 justify-center items-center">
          <div className="justify-center flex items-center flex-col ">
            <div className="flex flex-col justify-center items-start w-full mb-10">
              <h4 className="text-sm font-semibold text-dark_green uppercase">
                Get in Touch
              </h4>
              <h3 className="text-3xl font-bold text-gray-800">
                We&apos;re Here to Help
              </h3>
            </div>
            <ContactForm />
          </div>
          <div className="flex justify-center -mt-20 ">
            <img
              src={person_on_call}
              alt="dot"
              className="w-96 h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
