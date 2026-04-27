import React from "react";

function SupportForm() {
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
        
        <form className="grid md:grid-cols-2 gap-6">
          
          {/* Full Name */}
          <div>
            <label className="block mb-2 font-semibold text-green-800">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-green-800">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-semibold text-green-800">
              Phone Number *
            </label>
            <input
              type="text"
              placeholder="+91 98765 43210"
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold text-green-800">
              Support Category *
            </label>
            <select className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>Select a category</option>
              <option>General Inquiry</option>
              <option>Technical Issue</option>
              <option>Feedback</option>
              <option>Complaint</option>
            </select>
          </div>

          {/* Subject */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-green-800">
              Subject *
            </label>
            <input
              type="text"
              placeholder="Brief description of your inquiry"
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-green-800">
              Detailed Message *
            </label>
            <textarea
              rows="5"
              placeholder="Please provide as much detail as possible about your inquiry..."
              className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          {/* Priority */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-green-800">
              Priority Level *
            </label>
            <select className="w-full border-2 border-green-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>Select priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="md:col-span-2 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Submit Support Request
          </button>

        </form>
      </div>
    </div>
  );
}

export default SupportForm;