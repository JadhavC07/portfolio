import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await emailjs.send(
          "service_7d96cjr",
          "template_6jsy3vn",
          formData,
          "3g7fmoqhPZJraRgJ4"
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Handle successful form submission
        console.log("Form submitted successfully");
        toast.success("Form submitted successfully", {
          position: "top-center",
        });
      } catch (error) {
        toast.error("Error submitting form", {
          position: "top-center",
        });

        // Handle error
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-950 p-8 rounded-lg border dark:border-lime-500  shadow-md w-full sm:max-w-lg">
        <div className="flex flex-col">
          <div>
            <h2 className="text-2xl dark:text-white font-semibold mb-4">
              Contact Me
            </h2>
          </div>
          <div>
            <ToastContainer />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 dark:text-white font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.name && "border-red-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 dark:text-white font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.email && "border-red-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-600 dark:text-white font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.subject && "border-red-500"
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-600 dark:text-white font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.message && "border-red-500"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-500 dark:bg-indigo-900 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
