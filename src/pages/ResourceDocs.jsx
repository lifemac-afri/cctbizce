/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

// Import background images for each form preview
import companyBg from "../assets/handshake.png";
import solePropBg from "../assets/engage.png";
import birthCertBg from "../assets/documents.png";
import passportBg from "../assets/passport.jpg";
import SEO from "../components/seo/SEO";

const ResourceDocsPage = () => {
  const forms = [
    {
      id: 1,
      title: "Requirement for Company",
      description:
        "Register your business with ease! This form guides you through the process of setting up a company, including business details, director information, and required attachments. Perfect for entrepreneurs looking to formalize their operations.",
      link: "/forms/company",
      background: companyBg,
    },
    {
      id: 2,
      title: "Requirement for Sole Proprietorship",
      description:
        "Start your sole proprietorship journey here! This form simplifies the process of registering your business, capturing essential details about the proprietor, business address, and necessary documents. Ideal for individual business owners.",
      link: "/forms/sole_proprietorship",
      background: solePropBg,
    },
    {
      id: 3,
      title: "Requirements for Birth Certificate",
      description:
        "Apply for a birth certificate effortlessly! This form collects all the necessary details about the child, parents, and informant, ensuring a smooth application process. Essential for parents and guardians.",
      link: "/forms/birth_certificate",
      background: birthCertBg,
    },
    {
      id: 4,
      title: "Passport Application Details",
      description:
        "Get your passport application started! This form captures personal details, contact information, and supporting documents required for a new or renewed passport. Your gateway to international travel.",
      link: "/forms/passport_application",
      background: passportBg,
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <SEO
        title="Resources for Business and Career Growth | CCT Business Consult"
        description="Explore business toolkits, career advice, and compliance guides to equip you for success."
        name="CCT Business Consult & Events"
        type="website"
      />

      <h1 className="text-3xl font-bold text-gray-800 mb-8">Resource Docs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map((form) => (
          <Link
            to={form.link}
            key={form.id}
            className="transform transition-all duration-300 hover:scale-105"
          >
            <div
              className="relative bg-cover bg-center h-64 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-end p-6"
              style={{ backgroundImage: `url(${form.background})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"></div>
              <div className="relative z-10 text-white">
                <h2 className="text-xl font-bold mb-2">{form.title}</h2>
                <p className="text-sm mb-4">{form.description}</p>
                <span className="text-primary_green font-semibold hover:underline">
                  Start Form →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourceDocsPage;
