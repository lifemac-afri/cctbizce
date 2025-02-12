// src/pages/forms/PassportApplicationForm.jsx
import React, { useState } from "react";

const PassportApplicationForm = () => {
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
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Passport Application Details
      </h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <form className="space-y-10">
          {/* Personal Details */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Personal Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="First Names"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Surname"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Previous Names (if any)"
                />
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Birth"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Place of Birth"
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
                  placeholder="Height"
                />
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Occupation"
                />
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mobile Number"
                />
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Voter ID"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Ghana Card Number"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="SSNIT Number"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Postal Address"
                />
              </div>
            </div>
          )}

          {/* Residential Address */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Residential Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Building or Landlord Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Landmark"
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
                  placeholder="Suburb"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="City of Residence"
                />
              </div>
            </div>
          )}

          {/* Last School Attended */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Last School Attended
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Name of School"
                />
                <input
                  type="month"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Start Month & Year"
                />
                <input
                  type="month"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="End Month & Year"
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
                  placeholder="Region"
                />
              </div>
            </div>
          )}

          {/* Parents' Details */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Parents' Details
              </h2>
              <div className="space-y-6">
                {/* Mother's Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mother’s Name"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mother’s Hometown"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="House or Building Name"
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
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mobile Number"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Postal Address"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nationality"
                  />
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Is Mother Living?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Father's Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Father’s Name"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Father’s Hometown"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="House or Building Name"
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
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mobile Number"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Postal Address"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nationality"
                  />
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Is Father Living?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Two Siblings or Cousins */}
          {step === 5 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Two Siblings or Cousins
              </h2>
              <div className="space-y-6">
                {[...Array(2)].map((_, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Name ${index + 1}`}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Occupation ${index + 1}`}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`House or Building Name ${index + 1}`}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`House Number ${index + 1}`}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Digital Address ${index + 1}`}
                    />
                    <input
                      type="tel"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Mobile Number ${index + 1}`}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Postal Address ${index + 1}`}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Relationship ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grandparent Details */}
          {step === 6 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Grandparent Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Hometown"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House or Building Name"
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
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mobile Number"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Postal Address"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Nationality"
                />
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Is Grandparent Living?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          )}

          {/* Witness Details */}
          {step === 7 && (
            <>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Witness Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Occupation"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Position"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Business Number"
                  />
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Personal Number"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Ghana Card Number"
                  />
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Date of Issue"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Place of Issue"
                    defaultValue="Accra"
                    readOnly
                  />
                </div>
              </div>
              {/* Witness' Business Address */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Witness’ Business Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="C/O"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="P. O. Box"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Prefix"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="City"
                  />
                </div>
              </div>
            </>
          )}

          

          {/* Witness’ Residential Address */}
          {step === 8 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Witness’ Residential Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Building or Landlord Name"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Landmark"
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
                  placeholder="Suburb"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="City of Residence"
                />
              </div>
            </div>
          )}

          {/* Attachments */}
          {step === 9 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Attachments
              </h2>
              <div className="space-y-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Proof of Occupation
                </label>
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />

                <label className="block text-gray-700 font-bold mb-2">
                  Ghana Card
                </label>
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />

                <label className="block text-gray-700 font-bold mb-2">
                  Birth Certificate
                </label>
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />

                <label className="block text-gray-700 font-bold mb-2">
                  Old Passport
                </label>
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
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
            {step < 9 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary_green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Next
              </button>
            )}
            {step === 9 && (
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

export default PassportApplicationForm;
