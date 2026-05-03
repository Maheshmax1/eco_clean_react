import React from "react";
import { Calendar, MapPin, Clock, Image, FileText, Type } from "lucide-react";
import * as yup from "yup";
import { useFormik } from "formik";

function EditOrAddEvent({ }) {
  const UpdateEventForm = yup.object({
    EventTitle: yup
      .string()
      .min(5)
      .max(20)
      .matches(/^[A-Za-z]+$/g)
      .required(),
    EventDesciption: yup.string().min(10).max(200).required(),
    EventLocation: yup.string().required(),
    EventDateAndTime: yup.string(),
    EventStartTime: yup.string(),
    EventEndTime: yup.string(),
    EventImage: yup.Image(),
  });


  const formik = useFormik({
    initialValues: {
      EventTitle: "",
      EventDesciption: "",
      EventLocation: "",
      EventDateAndTime: "",
      EventStartTime: "",
      EventEndTime: "",
      EventImage: "",
    },
    validationSchema: UpdateEventForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


  }


  return (
    <div className="bg-emerald-50 min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-emerald-700 flex items-center gap-2">
          <Calendar /> {event ? "Edit Event" : "Add New Event"}
        </h1>

        <p className="text-gray-600 mt-2">
          Create a new EcoClean community event. Fill in all details accurately.
        </p>

        <hr className="mt-4" />
      </div>

      {/* Form Card */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <form className="flex flex-col gap-6">
          {/* Event Title */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2">
              <Type size={18} /> Event Title *
            </label>

            <input
              type="text"
              placeholder="e.g. Beach Cleanup Drive"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2">
              <FileText size={18} /> Description *
            </label>

            <textarea
              rows="4"
              placeholder="Describe the event activity, goals, and what volunteers should bring..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2">
              <MapPin size={18} /> Location *
            </label>

            <input
              type="text"
              placeholder="e.g. Marina Beach, North End"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Date + Time */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Date */}
            <div>
              <label className="flex items-center gap-2 font-medium mb-2">
                <Calendar size={18} /> Date *
              </label>

              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            {/* Start Time */}
            <div>
              <label className="flex items-center gap-2 font-medium mb-2">
                <Clock size={18} /> Start Time *
              </label>

              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            {/* End Time */}
            <div>
              <label className="flex items-center gap-2 font-medium mb-2">
                <Clock size={18} /> End Time *
              </label>

              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2">
              <Image size={18} /> Event Image
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center text-gray-500 hover:border-emerald-400 transition cursor-pointer">
              Click to upload or drag & drop
              <p className="text-sm mt-1">JPG, PNG, WEBP up to 5 MB</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition shadow-md"
            >
              + Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditOrAddEvent;
