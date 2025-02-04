/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaGavel,
  FaHandshake,
  FaLightbulb,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";
import { car2, car3, develop, mission, story } from "../../assets";

// import aboutHero from "/path/to/about-hero.jpg";
// import missionImage from "/path/to/mission.jpg";
// import visionImage from "/path/to/vision.jpg";

const AboutUs = () => {
  const coreValues = [
    {
      icon: FaGavel,
      title: "Professionalism",
      description:
        "We deliver consistent, high-quality, and reliable services.",
    },
    {
      icon: FaHandshake,
      title: "Integrity",
      description:
        "We uphold ethics, honesty, and confidentiality in all our dealings.",
    },
    {
      icon: FaLightbulb,
      title: "Client-Centricity",
      description:
        "We prioritize the needs of our clients with tailored solutions.",
    },
    {
      icon: FaCheckCircle,
      title: "Excellence",
      description:
        "We strive for superior outcomes by continuously improving our processes.",
    },
    {
      icon: FaChartLine,
      title: "Responsiveness",
      description:
        "We act swiftly and effectively to meet and exceed client expectations.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={mission}
          alt="About Us Hero"
          className="w-full h-[650px] object-cover"
        />
        <div className="absolute inset-0 bg-primary_gray bg-opacity-75 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white mb-4">
              About CCT Business Consult & Events
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for professional consultancy and events
              management. We deliver tailored solutions for individuals,
              startups, and established businesses to help turn goals into
              reality.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="py-16 bg-primary_green bg-opacity-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <div className="relative">
            <img
              src={develop}
              alt="Our Vision"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-primary_gray bg-opacity-80 rounded-lg p-[32px]">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white leading-relaxed">
                To be the leading consultancy firm renowned for empowering
                businesses and individuals with innovative solutions and
                unparalleled professionalism.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary_green mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To provide tailored, high-quality consultancy services that equip
              clients to achieve their goals, distinguish themselves in the
              market, and unlock new opportunities for growth and success.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white rounded-lg shadow-md p-12 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Core Values
        </h2>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105 p-6 rounded-lg bg-opacity-10 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-primary_green bg-opacity-10 p-5 rounded-full mb-4 flex justify-center items-center">
                <value.icon className="w-10 h-10 text-primary_green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 place-content-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CCT Business Consult and Events (CCTBizCE) is a professional
              consultancy firm delivering customized solutions for individuals
              and businesses. Guided by principles of professionalism and
              ethics, we specialize in business registration, document
              processing, corporate training, digital marketing, event planning,
              career guidance, and more.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a strong reputation for excellence and reliability, built
              through word-of-mouth referrals, we are committed to equipping our
              clients with the tools and support needed to thrive in a
              competitive market. At CCTBizCE, we don&apos;t just offer
              services—we craft pathways to success.
            </p>
          </div>

          <img
            src={story}
            alt="Our Story"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
