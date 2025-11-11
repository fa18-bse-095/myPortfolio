import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
// import * as khan from "../Utility/Animation";

const Contact = () => {
  return (
    <>
      {/* Contact Info Section */}
      <div >
        {/* Uncomment if you want motion animations */}
        {/* <motion.h1
          variants={khan.Fadup(0)}
          initial="hidden"
          whileInView="visible"
          className="text-center text-3xl md:text-4xl font-bold capitalize my-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Get in touch
        </motion.h1>
        <motion.div
          variants={khan.Fadup(0.5)}
          initial="hidden"
          whileInView="visible"
          className="text-center tracking-tighter"
        >
          <p className="my-2">{CONTACT.address}</p>
          <h2>{CONTACT.email}</h2>
          <h1>{CONTACT.phoneNo}</h1>
        </motion.div> */}
      </div>

      {/* Contact Form */}
      <section className="w-full flex justify-center items-center py-10 bg-transparent">
        <form
          action="https://formsubmit.co/yasinahmad919@gmail.com"
          method="POST"
          className="w-full max-w-2xl bg-gray-800 bg-opacity-50 rounded-2xl shadow-lg p-8 md:p-10"
        >
          <h2 className="text-3xl font-semibold text-center text-indigo-400 mb-8">
            Contact Me
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Name */}
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="peer w-full rounded-md border border-gray-700 bg-gray-900 bg-opacity-60 py-3 px-4 text-base text-gray-100 placeholder-transparent outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 transition-all duration-200"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-5 text-sm text-indigo-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-400"
              >
                Name
              </label>
            </div>

            {/* Email */}
            <div className="w-full md:w-1/2 relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="peer w-full rounded-md border border-gray-700 bg-gray-900 bg-opacity-60 py-3 px-4 text-base text-gray-100 placeholder-transparent outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 transition-all duration-200"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-5 text-sm text-indigo-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-400"
              >
                Email
              </label>
            </div>
          </div>

          {/* Subject */}
          <div className="relative mb-6">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="peer w-full rounded-md border border-gray-700 bg-gray-900 bg-opacity-60 py-3 px-4 text-base text-gray-100 placeholder-transparent outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 transition-all duration-200"
              required
            />
            <label
              htmlFor="subject"
              className="absolute left-4 -top-5 text-sm text-indigo-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-400"
            >
              Subject
            </label>
          </div>

          {/* Message */}
          <div className="relative mb-6">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="peer h-36 w-full resize-none rounded-md border border-gray-700 bg-gray-900 bg-opacity-60 py-3 px-4 text-base text-gray-100 placeholder-transparent outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 transition-all duration-200"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 -top-5 text-sm text-indigo-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-400"
            >
              Message
            </label>
          </div>

          {/* Button */}
          <div className="w-full text-center">
            <button
              type="submit"
              onClick={() => alert("Thank you for contacting us!")}
              className="rounded-md bg-indigo-500 py-3 px-10 text-lg font-medium text-white hover:bg-indigo-600 hover:shadow-lg transition-all duration-200 focus:outline-none"
            >
              Send Message
            </button>
          </div>

          {/* Hidden fields for FormSubmit */}
          {/* <input type="hidden" name="_subject" value="New contact message!" /> */}
          {/* <input type="hidden" name="_captcha" value="false" /> */}
          {/* <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> */}
        </form>
      </section>
    </>
  );
};

export default Contact;
