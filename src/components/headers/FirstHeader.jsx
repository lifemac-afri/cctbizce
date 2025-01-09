import { MdMail } from "react-icons/md";
import Pill from "../common/Pill";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

const FirstHeader = () => {
  return (
    <nav className="w-full bg-primary_green bg-opacity-100 shadow px-20 py-2 flex justify-between">
      <Pill
        icon={<MdMail className="w-4 h-4 fill-green-50" />}
        text={"cctbizconsult.events@gmail.com"}
      />
      <Pill
        icon={<MdMail className="w-4 h-4 fill-green-50" />}
        text={"info@cctbusiness.com"}
      />

      <Pill
        icon={<IoIosPin className="w-4 h-4 fill-green-50" />}
        text={"20 Ho Poly St - Ho, Ghana"}
      />
      <Pill
        icon={<FaWhatsapp className="w-4 h-4 fill-green-50" />}
        text={"+233 (0) 242601203"}
        link={"https://wa.link/49ca5k"}
      />
    </nav>
  );
};

export default FirstHeader;
