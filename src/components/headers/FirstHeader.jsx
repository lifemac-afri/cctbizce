import { MdMail } from "react-icons/md";
import Pill from "../common/Pill";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

const FirstHeader = () => {
  return (
    <nav className="w-full bg-primary_green bg-opacity-100 shadow px-5 sm:px-20 py-2 md:flex flex-col md:px-10 sm:flex-row sm:justify-between gap-3 sm:gap-0 hidden ">
      <Pill
        icon={<MdMail className="w-5 h-5 fill-green-50" />}
        text={"cctbusinessconsult@gmail.com"}
        aria-label="Email for events"
      />
      <Pill
        icon={<IoIosPin className="w-5 h-5 fill-green-50" />}
        text={"Accra, Kumasi, Ho"}
        aria-label="Office address"
      />
      <Pill
        icon={<FaWhatsapp className="w-5 h-5 fill-green-50" />}
        text={"+233 (0) 242601203"}
        link={"https://wa.link/49ca5k"}
        aria-label="Contact via WhatsApp"
      />
    </nav>
  );
};

export default FirstHeader;
