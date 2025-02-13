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
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Surname"
                  required
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
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Place of Birth"
                  required
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
                  required
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
                  required
                />
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mobile Number"
                  required
                />
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Voter ID"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Ghana Card Number"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="SSNIT Number"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Postal Address"
                  required
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
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Landmark"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House Number"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Digital Address"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Suburb"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="City of Residence"
                  required
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
                  required
                />
                <input
                  type="month"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Start Month & Year"
                  required
                />
                <input
                  type="month"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="End Month & Year"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Postal Address"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="City"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                  required
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
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mother’s Hometown"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="House or Building Name"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="House Number"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Digital Address"
                    required
                  />
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mobile Number"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Postal Address"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nationality"
                    required
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
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Father’s Hometown"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="House or Building Name"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="House Number"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Digital Address"
                    required
                  />
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mobile Number"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Postal Address"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nationality"
                    required
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
                      required
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Occupation ${index + 1}`}
                      required
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`House or Building Name ${index + 1}`}
                      required
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`House Number ${index + 1}`}
                      required
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Digital Address ${index + 1}`}
                      required
                    />
                    <input
                      type="tel"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Mobile Number ${index + 1}`}
                      required
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Postal Address ${index + 1}`}
                      required
                    />
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Relationship ${index + 1}`}
                      required
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
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Hometown"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House or Building Name"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House Number"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Digital Address"
                  required
                />
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mobile Number"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Postal Address"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Nationality"
                  required
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
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Occupation"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Position"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Business Number"
                    required
                  />
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Personal Number"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Ghana Card Number"
                    required
                  />
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Date of Issue"
                    required
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
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="P. O. Box"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Prefix"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="City"
                    required
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
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Landmark"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House Number"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Digital Address"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Suburb"
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="City of Residence"
                  required
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
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />

                <label className="block text-gray-700 font-bold mb-2">
                  Ghana Card
                </label>
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />

                <label className="block text-gray-700 font-bold mb-2">
                  Birth Certificate
                </label>
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
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
