import { car1, car2, car3 } from "../../assets";
import Slider from "react-slick";

const text = [
  {
    intro: "Unlock Your Business Potential",
    main_content: "Tailored Consultancy Services for Every Stage of Growth",
    additional_info:
      "Our expert consultants craft solutions that accelerate your success, from startups to established enterprises. We’re with you every step of the way.",
    cta: "Get Started Today",
    background: car1,
  },
  {
    intro: "Stay Ahead of the Curve",
    main_content: "Customized Solutions to Elevate Your Brand",
    additional_info:
      "Our tailored strategies ensure you maintain a competitive edge in your industry, making opportunities work for you.",
    cta: "Learn More",
    background: car3,
  },
  {
    intro: "Transform Your Vision into Reality",
    main_content: "End-to-End Event Management for Every Occasion",
    additional_info:
      "From corporate conferences to unforgettable celebrations, we manage every detail to ensure your event exceeds expectations.",
    cta: "Plan Your Event Now",
    background: car2,
  },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };
  return (
    <Slider {...settings}>
      {text.map((item, index) => (
        <div
          key={index}
          className="w-full h-[500px] md:h-[700px] overflow-hidden bg-cover bg-center relative rounded-xl shadow"
        >
          <img
            src={item.background}
            alt="carousel-slide"
            className="w-full object-cover object-center -z-10 h-full"
          />

          <div
            className="absolute z-20 inset-0 w-full h-full flex items-center px-5 sm:px-10 md:container md:px-10 lg:px-28"
            style={{
              background:
                "linear-gradient(to right, white 45%, transparent 100%)",
            }}
          >
            <div className="w-full md:w-fit -mt-6 md:-mt-12 flex flex-col gap-3 md:gap-5">
              <h4 className="uppercase text-xs md:text-sm tracking-wider text-dark_green font-semibold">
                {item.intro}
              </h4>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold md:leading-snug">
                {item.main_content}
              </h1>
              <h3 className="text-sm md:text-base lg:w-[600px]">
                {item.additional_info}
              </h3>
              <button className="w-fit btn text-white bg-primary_green hover:bg-dark_green rounded-3xl px-4 py-2 md:px-5 md:py-2">
                {item.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
