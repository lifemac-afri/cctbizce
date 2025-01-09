import { Carousel, WhatAbout } from "../components/home";

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="px-10 pt-5">
        <Carousel />
      </div>
      <WhatAbout />
    </div>
  );
};

export default Home;
