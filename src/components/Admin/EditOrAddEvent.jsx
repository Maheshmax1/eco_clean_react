import React,{useContext} from "react";
import { Calendar, MapPin, Clock, Image, FileText, Type } from "lucide-react";
import { EventContext } from "../../Context/EventContext";

import * as yup from "yup";
import { useFormik } from "formik";

function EditOrAddEvent({ event }) {
  const API_URL = "https://full-stack-eco-clean.vercel.app/api/events";
   
  const {fetchEvents}=useContext(EventContext);
  // Validation
  const UpdateEventForm = yup.object({
    EventTitle: yup
      .string()
      .min(5, "Minimum 5 characters")
      .max(50, "Maximum 50 characters")
      .required("Title is required"),

    EventDesciption: yup
      .string()
      .min(10, "Minimum 10 characters")
      .max(300, "Maximum 300 characters")
      .required("Description is required"),

    EventLocation: yup.string().required("Location is required"),

    EventDateAndTime: yup.string().required("Date is required"),

    EventStartTime: yup.string().required("Start time required"),

    EventEndTime: yup.string().required("End time required"),

    EventImage: yup.mixed(),
  });

  const formik = useFormik({
    initialValues: {
      EventTitle: "",
      EventDescription: "",
      EventLocation: "",
      EventDateAndTime: "",
      EventStartTime: "",
      EventEndTime: "",
      EventImage: null,
    },

    validationSchema: UpdateEventForm,

    onSubmit: async (values, { resetForm }) => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("Please login first");
          return;
        }

        // Cloudinary
        const CLOUDINARY_URL =
          "https://api.cloudinary.com/v1_1/def2x8hlo/image/upload";

        const CLOUDINARY_UPLOAD_PRESET = "Fullstack_Ecoclean";

        let imageUrl = "";

        // Upload image
        if (values.EventImage) {
          const imageData = new FormData();

          imageData.append("file", values.EventImage);

          imageData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

          const cloudinaryResponse = await fetch(CLOUDINARY_URL, {
            method: "POST",
            body: imageData,
          });

          const cloudinaryData = await cloudinaryResponse.json();

          console.log(cloudinaryData);

          imageUrl = cloudinaryData.secure_url;
        }

        // Backend Request
        const response = await fetch(API_URL, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            title: values.EventTitle,

            description: values.EventDesciption,

            location: values.EventLocation,

            event_date: values.EventDateAndTime,

            start_time: values.EventStartTime,

            end_time: values.EventEndTime,

            image_url: imageUrl,
          }),
        });

        const data = await response.json();

        console.log(data);

        if (!response.ok) {
          alert(data.detail || "Failed to add event");
          return;
        }

        alert("Event Added Successfully");

        resetForm();
        fetchEvents();
        

      } catch (error) {
        console.log(error);

        alert("Something went wrong");
      }
    },
  });

  return (
    <div className="py-12 bg-white rounded-lg shadow-lg">
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-md p-8 border border-emerald-200">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Calendar className="text-emerald-600" />

          {event ? "Edit Event" : "Create New Event"}
        </h1>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
              <Type size={16} />
              Event Title
            </label>

            <input
              type="text"
              name="EventTitle"
              placeholder="Enter event title"
              value={formik.values.EventTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {formik.touched.EventTitle && formik.errors.EventTitle && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.EventTitle}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
              <FileText size={16} />
              Description
            </label>

            <textarea
              rows="4"
              name="EventDesciption"
              placeholder="Event description"
              value={formik.values.EventDesciption}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />

            {formik.touched.EventDesciption &&
              formik.errors.EventDesciption && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.EventDesciption}
                </p>
              )}
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
              <MapPin size={16} />
              Location
            </label>

            <input
              type="text"
              name="EventLocation"
              placeholder="Enter location"
              value={formik.values.EventLocation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {formik.touched.EventLocation && formik.errors.EventLocation && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.EventLocation}
              </p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
              <Calendar size={16} />
              Event Date
            </label>

            <input
              type="date"
              name="EventDateAndTime"
              value={formik.values.EventDateAndTime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <Clock size={16} />
                Start Time
              </label>

              <input
                type="time"
                name="EventStartTime"
                value={formik.values.EventStartTime}
                onChange={formik.handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <Clock size={16} />
                End Time
              </label>

              <input
                type="time"
                name="EventEndTime"
                value={formik.values.EventEndTime}
                onChange={formik.handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
              <Image size={16} />
              Upload Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                formik.setFieldValue("EventImage", e.target.files[0]);
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Save Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditOrAddEvent;
