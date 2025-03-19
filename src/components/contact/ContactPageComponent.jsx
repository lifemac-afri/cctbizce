/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaWhatsapp,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaComments,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import ContactForm from "../home/ContactForm";
import { car1, car2 } from "../../assets";

const ContactPageComponent = () => {
  const contactDetails = [
    {
      icon: FaPhone,
      title: "Phone",
      value: "+233 (0) 24 2601 203",
      link: "tel:+233242601203",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+233 (0) 24 2601 203",
      link: "https://wa.link/49ca5k",
    },
    {
      icon: FaMailBulk,
      title: "Email",
      value: "info@cctbusiness.com",
      link: "mailto:info@cctbusiness.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      value: "20 Ho Poly St - Ho, Ghana",
      link: "https://maps.google.com/?q=20+Ho+Poly+St,+Ho,+Ghana",
    },
  ];

  const benefits = [
    {
      icon: FaClock,
      title: "Quick Response",
      description: "Get responses within 24 hours",
    },
    {
      icon: FaComments,
      title: "Professional Support",
      description: "Expert consultation and guidance",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] mb-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={car1}
            alt="Contact Us Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Transform your business vision into reality with CCT Business
            Consult & Events
          </p>

          <div className="flex space-x-4 mt-16">
            <a
              href="https://www.facebook.com/cctbizce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary_green"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.x.com/cctbizce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary_green"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.instagram.com/cctbizce/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary_green"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/cctbizce/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary_green"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-primary_green bg-opacity-10 p-4 rounded-full">
                  <benefit.icon className="w-8 h-8 text-primary_green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-primary_green p-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Get in Touch
              </h2>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition duration-300"
                  >
                    <div className="bg-primary_green bg-opacity-10 p-3 rounded-full">
                      <detail.icon className="w-6 h-6 text-primary_green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {detail.title}
                      </h3>
                      <a
                        href={detail.link}
                        className="text-gray-600 hover:text-primary_green transition"
                        target={
                          detail.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          detail.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {detail.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.423325912955!2d0.469248775989212!3d6.594191793399522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102725ef627b3335%3A0x94e91c33f4c15d35!2sTorchbearers%20Books%20and%20Stationery%20Services%20-%20%23TBSSGh!5e0!3m2!1sen!2sgh!4v1738673596410!5m2!1sen!2sgh"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-48 object-cover"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-primary_green p-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Send Us a Message
              </h2>
            </div>
            <div className="p-8">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 bg-white rounded-xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Connect with Us
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Facebook", url: "https://www.facebook.com/cctbizce" },
              { name: "Instagram", url: "https://www.instagram.com/cctbizce/" },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/cctbizce/",
              },
              { name: "X (Twitter)", url: "https://x.com/cctbizce" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-4 bg-gray-50 rounded-lg hover:bg-primary_green hover:text-white transition duration-300 transform hover:scale-105"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComponent;
