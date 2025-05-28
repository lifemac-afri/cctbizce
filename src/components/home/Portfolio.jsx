import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { moses, sandra, side } from "../../assets";

const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
  };

  return (
    <div className="w-screen h-fit px-4 lg:px-32 pb-10">
      <div className="w-full min-h-[800px] bg-[#F2EEE6] rounded-md shadow flex flex-col items-center pb-10">
        <div className="w-full text-center py-10 flex flex-col gap-3 px-4">
          <h4 className="text-sm font-semibold text-dark_green uppercase">
            Testimonial
          </h4>
          <h3 className="text-3xl font-bold text-gray-800">
            Proven Results from Satisfied <br /> Clients Worldwide
          </h3>
        </div>

        <div className="w-full px-4 lg:px-5 flex flex-col lg:flex-row gap-5 max-w-[1000px]">
          <div className="w-full lg:w-[50%] rounded-md shadow overflow-hidden flex">
            <img
              src={side}
              alt="Side view of a business setting"
              className="w-full h-auto object-cover self-stretch"
            />
          </div>

          <div className="w-full lg:w-[50%] bg-white rounded-md shadow">
            <Slider {...settings} className="h-full">
              <div className="w-full p-6 lg:p-8 flex flex-col">
                <div className="flex-1 tracking-wider leading-relaxed text-gray-700">
                  <p className="break-words">
                    I had an amazing experience working with CCT Business
                    Consult! They made the process of securing my passport and
                    refining my CV smooth and stress-free. I highly recommend
                    their services to anyone in need of reliable and trustworthy
                    support.
                  </p>
                </div>
                <div className="bg-dark_green w-full border-[1px] border-dark_green opacity-55 my-4"></div>
                <div className="flex items-center gap-3">
                  <img
                    src={sandra}
                    alt="Client profile"
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow object-cover object-center"
                  />
                  <div>
                    <h1 className="font-medium capitalize text-base lg:text-lg">
                      Sandra Bansah
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-full p-6 lg:p-8 flex flex-col">
                <div className="flex-1 tracking-wider leading-relaxed text-gray-700">
                  <p className="break-words">
                    3 working days! That was all it took for me to get my
                    business registration documents. Your speed of delivery,
                    your customer service and your valuable insight that guided
                    me are truly immense. Thank you, CCT.
                  </p>
                </div>
                <div className="bg-dark_green w-full border-[1px] border-dark_green opacity-55 my-4"></div>
                <div className="flex items-center gap-3">
                  <img
                    src={moses}
                    alt="Client profile"
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow object-cover object-center"
                  />
                  <div>
                    <h1 className="font-medium capitalize text-base lg:text-lg">
                      Moses O. Olalowo
                    </h1>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
