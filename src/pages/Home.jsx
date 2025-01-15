import {
  Carousel,
  Contact,
  Portfolio,
  Process,
  ServicesSection,
  WhatAbout,
} from "../components/home";

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="px-10 pt-10">
        <Carousel />
      </div>
      <div className="px-10 pt-5 pb-10 ">
        <WhatAbout />
      </div>
      <ServicesSection />
      <Process />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
