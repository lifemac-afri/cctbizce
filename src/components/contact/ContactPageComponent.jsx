/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaWhatsapp,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import ContactForm from "../home/ContactForm";

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

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            Contact Us
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            We&apos;re here to help! Reach out to us for inquiries,
            consultations, or service requests. Our team is ready to support
            you.
          </p>
        </div>

        {/* Contact Information and Form Container */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details Section */}
          <div className="bg-white rounded-lg shadow-md p-10">
            <h2 className="text-2xl font-bold text-primary_green mb-8 text-center">
              Get in Touch
            </h2>

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

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                We typically respond within 1-2 business days.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-md p-10">
            <h2 className="text-2xl font-bold text-primary_green mb-8 text-center">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Connect with Us on Social Media
          </h3>
          <div className="flex justify-center space-x-6">
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
                className="text-gray-700 hover:text-primary_green transition duration-300 transform hover:scale-110"
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
