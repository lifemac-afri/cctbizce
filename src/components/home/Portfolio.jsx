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
  };

  // const truncate = (data) => data.substring(0, 70);
  return (
    <div className="w-screen h-fit px-4 lg:px-32 pb-10">
      <div className="w-full min-h-[800px] bg-[#F2EEE6] rounded-md shadow flex flex-col items-center pb-10">
        <div className="w-full text-center py-10 flex flex-col gap-3">
          <h4 className="text-sm font-semibold text-dark_green uppercase">
            Testimonial
          </h4>
          <h3 className="text-3xl font-bold text-gray-800">
            Proven Results from Satisfied <br /> Clients Worldwide
          </h3>
        </div>
        <div className="px-5 h-full lg:h-[400px] w-full lg:w-[1000px] flex flex-col lg:flex-row gap-5 ">
          <div className="w-full lg:w-[400px]">
            <img
              src={side}
              alt="Side view of a business setting"
              className="w-full h-full rounded-md shadow object-cover object-center"
            />
          </div>
          <div className="flex-1 bg-white rounded-md shadow">
            <Slider {...settings} className="h-full w-full">
              <div className="w-full p-10 flex flex-col">
                <div className="max-h-fit flex-1 tracking-wider leading-loose">
                  I had an amazing experience working with CCT Business Consult!
                  They made the process of securing my passport and refining my
                  CV smooth and stress-free. I highly recommend their services
                  to anyone in need of reliable and trustworthy support.
                </div>
                <div className="bg-dark_green w-full border-[1px] border-dark_green opacity-55 my-5"></div>
                <div className="flex items-center gap-3">
                  <img
                    src={sandra}
                    alt="Client profile"
                    className="w-14 h-14 rounded-full shadow object-cover object-center"
                  />
                  <div>
                    <h1 className="font-medium capitalize text-lg">
                      Sandra Bansah
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-full p-10 flex flex-col">
                <div className="max-h-fit flex-1 tracking-wider leading-loose">
                  3 working days! That was all it took for me to get my business
                  registration documents. Your speed of delivery, your customer
                  service and your valuable insight that guided me are truly
                  immense. Thank you, CCT.
                </div>
                <div className="bg-dark_green w-full border-[1px] border-dark_green opacity-55 my-5"></div>
                <div className="flex items-center gap-3">
                  <img
                    src={moses}
                    alt="Client profile"
                    className="w-14 h-14 rounded-full shadow object-cover object-center"
                  />
                  <div>
                    <h1 className="font-medium capitalize text-lg">
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
