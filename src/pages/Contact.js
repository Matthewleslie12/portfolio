import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const emailInput = e.target.elements.from_email.value;

    if (!emailRegex.test(emailInput)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);

    const messageInput = e.target.elements.message.value;
    if (messageInput.trim() === "") {
      setMessageError(true);
      return;
    }

    setMessageError(false);

    emailjs
      .sendForm(
        "service_ida1omc",
        "template_i3mw69k",
        e.target,
        "gpt8iBgUp4zQbDAEP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="">
      <div className="bg-red-300 rounded-full"></div>
      <h1>Get In Touch</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="from_name"
            className="block text-gray-700 font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Jon Doe"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#9EC9BA]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="from_email"
            className="block text-gray-700 font-bold mb-2"
          >
            Email:
          </label>
          <input
            id="from_email"
            name="from_email"
            placeholder="Jondoe@gmail.com"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#9EC9BA] ${
              emailError ? "border-red-500" : ""
            }`}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">Invalid email address</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-[#9EC9BA] ${
              messageError ? "border-red-500" : ""
            }`}
          ></textarea>
          {messageError && (
            <p className="text-red-500 text-sm mt-1">Must include a message</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-red-300 hover:bg-red-400 text-lg font-bold py-2 px-4 w-full rounded-lg focus:outline-none focus:shadow-outline mb-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
