// src/pages/forms/SoleProprietorshipForm.jsx
import React from "react";

const SoleProprietorshipForm = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Requirement for Sole Proprietorship</h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <form className="space-y-10">
          {/* Proposed Business Name */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Proposed Business Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter business name"
            />
          </div>

          {/* Nature of Business */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Nature of Business</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Describe the nature of your business"
            />
          </div>

          {/* Details of the Proprietor */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Details of the Proprietor</h2>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Gender"
              />
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Date of Birth"
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Phone Number"
              />
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Postal Address"
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="City"
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="District"
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Region"
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="TIN"
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Ghana Card Number"
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Occupation"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SoleProprietorshipForm;