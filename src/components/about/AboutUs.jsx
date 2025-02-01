/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaGavel,
  FaHandshake,
  FaLightbulb,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

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
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            About CCT Business Consult & Events
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Your trusted partner for professional consultancy and events
            management. We deliver tailored solutions for individuals, startups,
            and established businesses to help turn goals into reality.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary_green mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading consultancy firm renowned for empowering
              businesses and individuals with innovative solutions and
              unparalleled professionalism.
            </p>
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

        {/* Core Values */}
        <div className="bg-white rounded-lg shadow-md p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
              >
                <div className="bg-primary_green bg-opacity-10 p-5 rounded-full mb-4">
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
        <div className="mt-16 bg-white rounded-lg shadow-md p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Story
          </h2>
          <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-center">
            CCT Business Consult and Events (CCTBizCE) is a professional
            consultancy firm delivering customized solutions for individuals and
            businesses. Guided by principles of professionalism and ethics, we
            specialize in business registration, document processing, corporate
            training, digital marketing, event planning, career guidance, and
            more.
          </p>
          <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-center mt-6">
            With a strong reputation for excellence and reliability, built
            through word-of-mouth referrals, we are committed to equipping our
            clients with the tools and support needed to thrive in a competitive
            market. At CCTBizCE, we don&apos;t just offer services — we craft
            pathways to success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
