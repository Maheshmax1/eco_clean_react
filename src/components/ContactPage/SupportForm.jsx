import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

import { ENDPOINTS } from "../../api/constants";

function SupportForm() {

  const [loading, setLoading] = useState(false);

  // Validation Schema
  const SupportValidation = yup.object({

    name: yup
      .string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Name is required"),

    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),

    phone: yup
      .string()
      .matches(
        /^[0-9+\-\s]+$/,
        "Invalid phone number"
      )
      .required("Phone number is required"),

    category: yup
      .string()
      .required("Category is required"),

    subject: yup
      .string()
      .min(5, "Minimum 5 characters")
      .required("Subject is required"),

    message: yup
      .string()
      .min(10, "Minimum 10 characters")
      .required("Message is required"),

    priority: yup
      .string()
      .required("Priority is required"),
  });

  const formik = useFormik({

    initialValues: {
      name: "",
      email: "",
      phone: "",
      category: "",
      subject: "",
      message: "",
      priority: "",
    },

    validationSchema: SupportValidation,

    onSubmit: async (values, { resetForm }) => {

      try {

        setLoading(true);

        const response = await fetch(ENDPOINTS.CONTACT.SUBMIT, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(values),
        });

        const data = await response.json();

        console.log(data);

        if (!response.ok) {
          alert(data.detail || "Failed to send message");
          return;
        }

        alert("Support request submitted successfully");

        resetForm();

      } catch (error) {

        console.log(error);

        alert("Something went wrong");

      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="bg-emerald-50 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-emerald-900 mb-3">
          Customer Support Request
        </h2>

        <div className="w-20 h-1 bg-emerald-700 mx-auto mb-4 rounded"></div>

        <p className="text-slate-600">
          Fill out the form below and we'll get back to you as soon as possible
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-white border-2 border-green-600 rounded-2xl p-8 shadow-sm">

        <form
          onSubmit={formik.handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >

          {/* Full Name */}
          <div>
            <label className="block mb-2 font-semibold text-green-800">
              Full Name *
            </label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-green-800">
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-semibold text-green-800">
              Phone Number *
            </label>

            <input
              type="text"
              name="phone"
              placeholder="+91 98765 43210"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.phone}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold text-green-800">
              Support Category *
            </label>

            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select a category</option>
              <option value="General Inquiry">
                General Inquiry
              </option>
              <option value="Technical Issue">
                Technical Issue
              </option>
              <option value="Feedback">
                Feedback
              </option>
              <option value="Complaint">
                Complaint
              </option>
            </select>

            {formik.touched.category &&
              formik.errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.category}
                </p>
              )}
          </div>

          {/* Subject */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-green-800">
              Subject *
            </label>

            <input
              type="text"
              name="subject"
              placeholder="Brief description of your inquiry"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {formik.touched.subject &&
              formik.errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.subject}
                </p>
              )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-green-800">
              Detailed Message *
            </label>

            <textarea
              rows="5"
              name="message"
              placeholder="Please provide as much detail as possible about your inquiry..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>

            {formik.touched.message &&
              formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
          </div>

          {/* Priority */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-green-800">
              Priority Level *
            </label>

            <select
              name="priority"
              value={formik.values.priority}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            {formik.touched.priority &&
              formik.errors.priority && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.priority}
                </p>
              )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            {loading
              ? "Submitting..."
              : "Submit Support Request"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default SupportForm;