// src/pages/forms/CompanyForm.jsx
import React, { useState } from "react";

const CompanyForm = () => {
  const [step, setStep] = useState(1); // Track the current step

  // Function to go to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Function to go to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Requirement for Company</h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <form className="space-y-6">
          {/* Step 1: Proposed Business Name and Nature of Business */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Proposed Business Name</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder={`Proposed Business Name ${index}`}
                  />
                ))}
              </div>

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Nature of Business</h2>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Describe the nature of your business"
              />
            </div>
          )}

          {/* Step 2: Business Address and Postal Address */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Business Address</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House or Landlord’s Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House Number"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Digital Address"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Street Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Landmark"
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
              </div>

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Business Postal Address</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="C/O"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Box Number"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Prefix"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Town"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                />
              </div>
            </div>
          )}

          {/* Step 3: Business Contact and Stated Capital */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Business Contact</h2>
              <div className="space-y-4">
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Phone Number"
                />
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mobile Number"
                />
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Email"
                />
              </div>

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Stated Capital</h2>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter stated capital"
              />
            </div>
          )}

          {/* Step 4: Company Director Details */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Company Director Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Full Name"
                />
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Place of Birth"
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Birth"
                />
                <input
                  type="tel"
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
          )}

          {/* Step 5: Residential and Occupational Address */}
          {step === 5 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Residential Address</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House or Landlord’s Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House Number"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Digital Address"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Street Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Landmark"
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
              </div>

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Occupational Address</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House or Landlord’s Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House Number"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Digital Address"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Street Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Landmark"
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
              </div>
            </div>
          )}

          {/* Step 6: Percentage of Share and Attachments */}
          {step === 6 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Percentage of Share</h2>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter percentage of share"
              />

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Attachments</h2>
              <div className="space-y-4">
                <label className="block text-gray-700 font-bold mb-2">
                  1. Front and Back of your Ghana Card
                </label>
                <input type="file" className="w-full p-2 border border-gray-300 rounded-lg" />

                <label className="block text-gray-700 font-bold mb-2">
                  2. Your Signature on a Plain Sheet
                </label>
                <input type="file" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-evenly mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Previous
              </button>
            )}
            {step < 6 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Next
              </button>
            )}
            {step === 6 && (
              <button
                type="submit"
                className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyForm;1