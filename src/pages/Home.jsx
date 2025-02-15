import {
  Carousel,
  Contact,
  Portfolio,
  Process,
  ServicesSection,
  WhatAbout,
} from "../components/home";
import SEO from "../components/seo/SEO";

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      <SEO
        title="CCT Business Consult & Events | Professional Consultancy and Event Management"
        description="Explore professional consultancy and event management services tailored for individuals and businesses to achieve success."
        name="CCT Business Consult & Events"
        type="website"
      />

      <div className="px-2 lg:px-10 pt-10">
        <Carousel />
      </div>
      <div className="px-2 pt-5 pb-10 ">
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
