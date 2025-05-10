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
import { car1 } from "../../assets";

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
      value: "cctbusinessconsult@gmail.com",
      link: "mailto:cctbusinessconsult@gmail.com",
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

  const businessHours = [
    { day: "Mon - Fri", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <div className="relative h-[350px] mb-8 flex items-center justify-center">
        <img
          src={car1}
          alt="Contact Us Header"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Contact Our Business Team
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6">
            Empowering your business with expert consulting and event solutions.
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-primary_green text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Book a Consultation
          </a>
        </div>
      </div>

      {/* Benefits Row */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow p-6 flex-1 min-w-[220px]"
            >
              <div className="bg-primary_green bg-opacity-10 p-4 rounded-full mr-4">
                <benefit.icon className="w-8 h-8 text-primary_green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Bento Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 mb-12 grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-6">
        {/* Contact Form - tall left card */}
        <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col justify-center row-span-2 md:row-span-2 col-span-1 md:col-span-2 order-1 md:order-none">
          <h2 className="text-2xl font-bold text-primary_green mb-6 text-center">
            Send Us a Message
          </h2>
          <div className="flex-1 flex items-center justify-center">
            <ContactForm />
          </div>
        </div>
        {/* Contact Details - top right */}
        <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-center order-2 md:order-none">
          <h2 className="text-xl font-bold text-primary_green mb-4 text-center">
            Get in Touch
          </h2>
          <div className="space-y-4 mb-2">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 hover:bg-gray-50 p-3 rounded-lg transition duration-300"
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
                    target={detail.link.startsWith("http") ? "_blank" : "_self"}
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
        </div>
        {/* Why Contact Us - bottom right */}
        <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-center order-3 md:order-none">
          <h2 className="text-xl font-bold text-primary_green mb-4 text-center">
            Why Contact Us?
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            <li>Personalized business solutions</li>
            <li>Expert event management</li>
            <li>Transparent and timely communication</li>
            <li>Trusted by businesses in Ghana</li>
          </ul>
          {/* Business Hours */}
          <div className="mt-4">
            <h4 className="font-semibold text-gray-700 mb-2">Business Hours</h4>
            <ul className="text-gray-600 text-sm">
              {businessHours.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between border-b last:border-b-0 py-1"
                >
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Map - full width bottom */}
        <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col justify-center col-span-1 md:col-span-3 row-span-1 order-4 md:order-none">
          <h2 className="text-xl font-bold text-primary_green mb-4 text-center">
            Our Location
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.423325912955!2d0.469248775989212!3d6.594191793399522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102725ef627b3335%3A0x94e91c33f4c15d35!2sTorchbearers%20Books%20and%20Stationery%20Services%20-%20%23TBSSGh!5e0!3m2!1sen!2sgh!4v1738673596410!5m2!1sen!2sgh"
            width="100%"
            height="160"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-40 object-cover rounded"
            title="Business Location Map"
          ></iframe>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="w-full bg-primary_green py-3 flex justify-center gap-8 mt-auto">
        <a
          href="https://www.facebook.com/cctbizce"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://x.com/cctbizce"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/cctbizce/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/cctbizce/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactPageComponent;
