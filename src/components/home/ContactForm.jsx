import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      sessionUuid: uuidv4(),
      respondentUuid: uuidv4(),
      responses: {
        "baf41e4e-0bdc-4de5-9571-56c9a6ea49b9": formData.name,
        "2b901166-12b2-4c58-8208-427318a2087c": formData.email,
        "7f12b70e-4b07-4d6e-baab-305de20da248": formData.message,
      },
      captchas: {},
      isCompleted: true,
      password: "",
    };

    try {
      const response = await fetch(
        "https://api.tally.so/forms/3NMyVG/respond",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setErrorMessage(""); // Clear any error message
      } else {
        console.error("Failed to submit form");
        setErrorMessage("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <h2 className="text-2xl font-bold text-dark_green text-center">
          Thank you for reaching out!
        </h2>
        <p className="text-lg text-gray-600 text-center">
          Your message has been successfully submitted. We&apos;ll get back to
          you shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-dark_green text-white py-2 px-4 rounded-md hover:bg-opacity-90"
        >
          Submit Another Response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col justify-center gap-6"
      style={{ minHeight: "420px" }}
    >
      {/* Form Inputs for Name and Email */}
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full name"
          required
          className="mt-1 p-3 w-full bg-[#dfdacf] bg-opacity-20 border-gray-300 rounded-md focus:border-[#F2EEE6] focus:outline-none text-base"
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email address"
          required
          className="mt-1 p-3 w-full bg-[#dfdacf] bg-opacity-20 border-gray-300 rounded-md focus:ring-[#F2EEE6] focus:border-[#F2EEE6] focus:outline-none text-base"
        />
      </div>

      {/* Message Textarea */}
      <div className="w-full flex-1 flex flex-col">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          placeholder="How can we help you?"
          className="flex-1 min-h-[180px] h-full p-3 w-full bg-[#dfdacf] bg-opacity-20 border-gray-300 rounded-md focus:ring-[#F2EEE6] focus:border-[#F2EEE6] resize-none text-base"
          style={{ minHeight: "180px", maxHeight: "260px" }}
        ></textarea>
      </div>

      {/* Error Message Display */}
      {errorMessage && (
        <p className="text-red-500 text-sm text-center w-full">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-dark_green text-white py-3 px-4 rounded-md text-lg font-semibold hover:bg-dark_green focus:outline-none transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
