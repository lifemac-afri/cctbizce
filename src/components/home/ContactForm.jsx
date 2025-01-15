import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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
      } else {
        console.error("Failed to submit form");
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-[500px] flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold text-dark_green">
          Thank you for reaching out!
        </h2>
        <p className="text-lg text-gray-600">
          Your message has been successfully submitted. We’ll get back to you
          shortly.
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
      className="w-[500px] flex flex-col items-start gap-5"
    >
      <div className="w-full flex gap-4 items-center justify-center">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="full name"
          required
          className="mt-1 p-2 w-full bg-[#dfdacf] bg-opacity-20  border-gray-300 rounded-md focus:border-[#F2EEE6]"
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="email address"
          required
          className="mt-1 p-2 w-full bg-[#dfdacf] bg-opacity-20 border-gray-300 rounded-md focus:ring-[#F2EEE6] focus:border-[#F2EEE6]"
        />
      </div>

      <div className="w-full">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          placeholder="how can we help you?"
          className="h-64 p-2 w-full bg-[#dfdacf] bg-opacity-20 border-gray-300 rounded-md focus:ring-[#F2EEE6] focus:border-[#F2EEE6] resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-fit bg-dark_green text-white py-2 px-4 rounded-md hover:bg-dark_green"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
