"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend, FiMapPin, FiPhone, FiMail, FiInstagram, FiCheckCircle } from "react-icons/fi";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "5bdfbd72-b860-4845-868d-0381f1aa9468",

          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          botcheck: formData.get("botcheck")
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto pt-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          Get in <span className="text-red-500">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="hidden"
                    name="botcheck"
                    value=""
                  />

                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-red-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                      whileHover={{ scale: 1.02 }}
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-red-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                      whileHover={{ scale: 1.02 }}
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="relative"
                  >
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-red-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                      whileHover={{ scale: 1.02 }}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2"
                  >
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6"
              >
                <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  Thank you for contacting us. Well get back to you soon.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-500 to-red-600 p-8 rounded-2xl shadow-xl text-white"
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FiMapPin className="w-6 h-6 text-red-200" />
                <div>
                  <p className="font-medium">Rwanda</p>
                  <p className="text-sm text-red-100">Kigali</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FiPhone className="w-6 h-6 text-red-200" />
                <div>
                  <p className="font-medium">+250 788 689 522</p>
                  <p className="text-sm text-red-100">Mon - Sun, 24hr</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FiMail className="w-6 h-6 text-red-200" />
                <div>
                  <p className="font-medium">max308406@gmail.com</p>
                  <p className="text-sm text-red-100">
                    max308406@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FiInstagram className="w-6 h-6 text-red-200" />
                <div>
                  <p className="font-medium">@imax_best</p>
                  <p className="text-sm text-red-100">Follow us on Instagram</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
