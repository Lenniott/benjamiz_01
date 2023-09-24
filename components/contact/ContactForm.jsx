import FormInput from "../reusable/FormInput";
import { FiSend, FiMenu } from "react-icons/fi";
import { useState } from "react";

function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        alert("Email sent successfully.");
      } else {
        alert(`An error occurred. ${res.status}`);
      }
    } catch (error) {
      console.error("There was an error sending the email", error);
    }
  };

  function emailMe() {}

  return (
    <div className="w-full lg:w-1/2">
      {showForm}
      <hr className="mt-8 mb-4" />
      {!showForm && (
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={setShowForm(true)}
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg hover:bg-ternary-light hover:text-primary-dark focus:ring-1 focus:ring-primary-dark bg-primary-dark text-primary-light  hover:translate-y-0.5 hover:scale-105 duration-500"
          >
            <FiSend className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
            <span>Contact me</span>
          </button>
        </div>
      )}

      <div className="leading-loose flex  items-center justify-center">
        <form
          autocomplete="off"
          onSubmit={handleSubmit}
          className="w-full max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>

          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
            autocomplete="off"
            value={formData.name}
            onChange={handleInputChange}
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
            autocomplete="off"
            value={formData.email}
            onChange={handleInputChange}
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
            autocomplete="off"
            value={formData.subject}
            onChange={handleInputChange}
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              autocomplete="off"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mt-6">
            <input
              title="Send Message"
              type="submit"
              aria-label="Send Message"
              value="Send"
              className="font-general-medium flex gap-2 justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg hover:bg-ternary-light hover:text-primary-dark focus:ring-1 focus:ring-primary-dark bg-primary-dark text-primary-light  hover:translate-y-0.5 hover:scale-105 duration-500"
            />
          </div>
        </form>
      </div>
      <button label="test email" onClick={emailMe} />
    </div>
  );
}

export default ContactForm;
