import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { car3, side } from "../../assets";

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

  // const slides = [
  //   {
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas ad minus magni sed saepe? Alias id ut dicta eligendi dolor inventore, velit maxime officiis consequuntur aliquid accusamus, molestiae nam fuga deserunt adipisci, iusto similique consectetur error. Nisi aliquid temporibus, tenetur sint ullam expedita incidunt ad quam veritatis obcaecati perspiciatis.",
  //     imgSrc: car3,
  //     title: "Lorem, ipsum.",
  //     subtitle: "Lorem, ipsum dolor.",
  //   },
  //   {
  //     content:
  //       "Another example of content for the carousel, with similar styling to the first slide.",
  //     imgSrc: car3,
  //     title: "Slide 2 Title",
  //     subtitle: "Slide 2 Subtitle.",
  //   },
  //   {
  //     content:
  //       "Yet another slide content to demonstrate the carousel functionality.",
  //     imgSrc: car3,
  //     title: "Slide 3 Title",
  //     subtitle: "Slide 3 Subtitle.",
  //   },
  // ];

  return (
    <div className="w-screen h-fit pb-10 px-32">
      <div className="w-full min-h-[800px] bg-[#F2EEE6] rounded-md shadow flex flex-col items-center">
        <div className="w-full text-center py-10 flex flex-col gap-3">
          <h4 className="text-sm font-semibold text-dark_green uppercase">
            Testimonial
          </h4>
          <h3 className="text-3xl font-bold text-gray-800">
            Proven Results from Satisfied <br /> Clients Worldwid
          </h3>
        </div>
        <div className=" h-[400px] w-[1000px] flex gap-5 ">
          <div>
            <img
              src={side}
              alt="side image"
              className="w-[400px] h-full rounded-md shadow object-cover object-center"
            />
          </div>
          <div className=" flex-1 bg-white rounded-md shadow">
            <Slider {...settings} className=" h-full w-full ">
              <div className=" h-[395px] w-full p-10 flex flex-col ">
                {/* content */}

                <div className="min-h-3/5 flex-1 tracking-wider leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae quas ad minus magni sed saepe? Alias id ut dicta
                  eligendi dolor inventore, velit maxime officiis consequuntur
                  aliquid accusamus, molestiae nam fuga deserunt adipisci, iusto
                  similique consectetur error. Nisi aliquid temporibus, tenetur
                  sint ullam expedita incidunt ad quam veritatis obcaecati
                  perspiciatis.
                </div>
                <div className="bg-dark_green w-full border-[1px] border-dark_green opacity-55 my-5"></div>
                {/* who */}
                <div className=" flex items-center gap-3">
                  <img
                    src={car3}
                    alt="who"
                    className="w-14 h-14 rounded-full shadow object-cover object-center"
                  />
                  <div className="">
                    <h1 className="font-medium capitalize text-lg">
                      Lorem, ipsum.
                    </h1>
                    <h4 className="text-dark_green text-xs uppercase font-light">
                      Lorem, ipsum dolor.
                    </h4>
                  </div>
                  {/* custom react-slick dots */}
                  <div></div>
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
