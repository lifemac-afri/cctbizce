// src/pages/forms/PassportApplicationForm.jsx
import React, { useState } from "react";
import { supabase } from "../../supabase/supabaseClient"; // Adjust the import path as needed

const PassportApplicationForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState({
    proof_of_occupation: null,
    ghana_card: null,
    birth_certificate: null,
    old_passport: null,
  });
  const [step, setStep] = useState(1);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles({ ...files, [name]: fileList[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Upload files to Supabase Storage
      const fileUploads = Object.entries(files).map(async ([key, file]) => {
        if (file) {
          const filePath = `passport_uploads/${Date.now()}_${file.name}`;
          const { data, error } = await supabase.storage
            .from("passport_uploads")
            .upload(filePath, file);
  
          if (error) throw error;
  
          // Generate the public URL for the uploaded file
          const { data: publicUrlData } = supabase.storage
            .from("passport_uploads")
            .getPublicUrl(filePath);
  
          return { [key]: publicUrlData.publicUrl }; // Save the public URL
        }
        return { [key]: null };
      });
  
      // Wait for all file uploads to complete
      const uploadedFiles = await Promise.all(fileUploads);
      const fileUrls = uploadedFiles.reduce((acc, curr) => ({ ...acc, ...curr }), {});
  
      // Insert data into the passport_applications table
      const { data, error } = await supabase
        .from("passport_applications")
        .insert([{ ...formData, ...fileUrls }]);
  
      if (error) throw error;
  
      console.log("Data inserted successfully:", data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Failed to submit form: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Function to go to the next step
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo({top: 0, behavior: "auto"})
  };

  // Function to go to the previous step
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({top: 0, behavior: "auto"})
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Passport Application Details
      </h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <form className="space-y-10" onSubmit={handleSubmit}>
          {/* Personal Details */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Personal Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="first_name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="First Names"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="surname"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Surname"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="previous_names"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Previous Names (if any)"
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="date_of_birth"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Date of Birth"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="place_of_birth"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Place of Birth"
                  onChange={handleChange}
                  required
                />
                <select
                  name="gender"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  name="height"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Height"
                  onChange={handleChange}
                  required
                />
                <select
                  name="marital_status"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
                <input
                  type="text"
                  name="occupation"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Occupation"
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="mobile_number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mobile Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Email Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="voter_id"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Voter ID"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="ghana_card_number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Ghana Card Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="ssnit_number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="SSNIT Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="postal_address"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Postal Address"
                  onChange={handleChange}
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
                  name="building_name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Building or Landlord Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="landmark"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Landmark"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="house_number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="digital_address"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Digital Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="suburb"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Suburb"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="city_of_residence"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="City of Residence"
                  onChange={handleChange}
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
                  name="school_name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Name of School"
                  onChange={handleChange}
                  required
                />
                <input
                  type="month"
                  name="school_start_date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Start Month & Year"
                  onChange={handleChange}
                  required
                />
                <input
                  type="month"
                  name="school_end_date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="End Month & Year"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="school_postal_address"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Postal Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="school_city"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="City"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="school_region"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Region"
                  onChange={handleChange}
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
                    name="mother_name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mother’s Name"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="mother_hometown"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mother’s Hometown"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="mother_building_name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="House or Building Name"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="mother_house_number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="House Number"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="mother_digital_address"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Digital Address"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="mother_mobile_number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="mother_postal_address"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Postal Address"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="mother_nationality"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nationality"
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="mother_is_living"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Is Mother Living?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Father's Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="father_name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Father’s Name"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="father_hometown"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Father’s Hometown"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="father_building_name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="House or Building Name"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="father_house_number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="House Number"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="father_digital_address"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Digital Address"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="father_mobile_number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="father_postal_address"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Postal Address"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="father_nationality"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nationality"
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="father_is_living"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    onChange={handleChange}
                    required
                  >
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
                      name={`sibling${index + 1}_name`}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Name ${index + 1}`}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name={`sibling${index + 1}_occupation`}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Occupation ${index + 1}`}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name={`sibling${index + 1}_building_name`}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`House or Building Name ${index + 1}`}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name={`sibling${index + 1}_house_number`}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`House Number ${index + 1}`}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name={`sibling${index + 1}_digital_address`}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Digital Address ${index + 1}`}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="tel"
                      name={`sibling${index + 1}_mobile_number`}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Mobile Number ${index + 1}`}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name={`sibling${index + 1}_postal_address`}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Postal Address ${index + 1}`}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name={`sibling${index + 1}_relationship`}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder={`Relationship ${index + 1}`}
                      onChange={handleChange}
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
                  name="grandparent_name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="grandparent_hometown"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Hometown"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="grandparent_building_name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House or Building Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="grandparent_house_number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="grandparent_digital_address"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Digital Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="grandparent_mobile_number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Mobile Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="grandparent_postal_address"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Postal Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="grandparent_nationality"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Nationality"
                  onChange={handleChange}
                  required
                />
                <select
                  name="grandparent_is_living"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  onChange={handleChange}
                  required
                >
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
                    name="witness_name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="witness_occupation"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Occupation"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="witness_position"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Position"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="witness_business_number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Business Number"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="witness_personal_number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Personal Number"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="witness_ghana_card_number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Ghana Card Number"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="date"
                    name="witness_date_of_issue"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Date of Issue"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="witness_place_of_issue"
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
                    name="witness_business_co"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="C/O"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="witness_business_po_box"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="P. O. Box"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="witness_business_prefix"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Prefix"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="witness_business_city"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="City"
                    onChange={handleChange}
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
                  name="witness_residential_building_name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Building or Landlord Name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="witness_residential_landmark"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Landmark"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="witness_residential_house_number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="House Number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="witness_residential_digital_address"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Digital Address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="witness_residential_suburb"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Suburb"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="witness_residential_city"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="City of Residence"
                  onChange={handleChange}
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
                  name="proof_of_occupation"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  onChange={handleFileChange}
                />

                <label className="block text-gray-700 font-bold mb-2">
                  Ghana Card
                </label>
                <input
                  type="file"
                  name="ghana_card"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  onChange={handleFileChange}
                  required
                />

                <label className="block text-gray-700 font-bold mb-2">
                  Birth Certificate
                </label>
                <input
                  type="file"
                  name="birth_certificate"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  onChange={handleFileChange}
                  required
                />

                <label className="block text-gray-700 font-bold mb-2">
                  Old Passport
                </label>
                <input
                  type="file"
                  name="old_passport"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  onChange={handleFileChange}
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
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassportApplicationForm;