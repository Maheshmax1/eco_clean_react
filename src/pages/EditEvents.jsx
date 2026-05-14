import React, { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Image,
  FileText,
  Type,
} from "lucide-react";

import { useFormik } from "formik";
import * as yup from "yup";

import { useNavigate, useParams } from "react-router-dom";
import { ENDPOINTS } from "../api/constants";

function EditEvents() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // Validation
  const validationSchema = yup.object({

    EventTitle: yup
      .string()
      .required("Title is required"),

    EventDesciption: yup
      .string()
      .required("Description is required"),

    EventLocation: yup
      .string()
      .required("Location is required"),

    EventDateAndTime: yup
      .string()
      .required("Date is required"),

    EventStartTime: yup
      .string()
      .required("Start time required"),

    EventEndTime: yup
      .string()
      .required("End time required"),
  });

  const formik = useFormik({

    initialValues: {

      EventTitle: "",

      EventDesciption: "",

      EventLocation: "",

      EventDateAndTime: "",

      EventStartTime: "",

      EventEndTime: "",

      EventImage: null,
    },

    validationSchema,

    onSubmit: async (values) => {

      try {

        let imageUrl = "";

        // Upload image if selected
        if (values.EventImage) {

          const CLOUDINARY_URL =
            "https://api.cloudinary.com/v1_1/def2x8hlo/image/upload";

          const CLOUDINARY_UPLOAD_PRESET =
            "Fullstack_Ecoclean";

          const imageData = new FormData();

          imageData.append("file", values.EventImage);

          imageData.append(
            "upload_preset",
            CLOUDINARY_UPLOAD_PRESET
          );

          const cloudinaryResponse = await fetch(
            CLOUDINARY_URL,
            {
              method: "POST",
              body: imageData,
            }
          );

          const cloudinaryData =
            await cloudinaryResponse.json();

          imageUrl = cloudinaryData.secure_url;
        }

        // Update Event
        const response = await fetch(ENDPOINTS.EVENTS.UPDATE(id), {

          method: "PUT",

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
          alert(data.detail || "Failed to update");
          return;
        }

        alert("Event Updated Successfully");

        navigate("/events");

      } catch (error) {

        console.log(error);

        alert("Something went wrong");
      }
    },
  });

  // Fetch Single Event
  useEffect(() => {

    const FetchEvent = async () => {

      try {
        const response = await fetch(ENDPOINTS.EVENTS.DETAIL(id));

        const data = await response.json();

        console.log(data);

        formik.setValues({

          EventTitle: data.title || "",

          EventDesciption: data.description || "",

          EventLocation: data.location || "",

          EventDateAndTime: data.event_date || "",

          EventStartTime: data.start_time || "",

          EventEndTime: data.end_time || "",

          EventImage: null,
        });

        setLoading(false);

      } catch (error) {

        console.log(error);

        setLoading(false);
      }
    };

    FetchEvent();

  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (

    <div className="py-12 bg-white min-h-screen">

      <div className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-md p-8 border border-emerald-200">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-bold transition-colors cursor-pointer"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">

          <Calendar className="text-emerald-600" />

          Edit Event

        </h1>

        <form
          onSubmit={formik.handleSubmit}
          className="space-y-5"
        >

          {/* Title */}
          <div>

            <label className="flex items-center gap-2 font-semibold mb-2">

              <Type size={16} />

              Event Title

            </label>

            <input
              type="text"
              name="EventTitle"
              value={formik.values.EventTitle}
              onChange={formik.handleChange}
              className="w-full border-2 border-gray-300 rounded-lg p-3"
            />

          </div>

          {/* Description */}
          <div>

            <label className="flex items-center gap-2 font-semibold mb-2">

              <FileText size={16} />

              Description

            </label>

            <textarea
              rows="4"
              name="EventDesciption"
              value={formik.values.EventDesciption}
              onChange={formik.handleChange}
              className="w-full border-2 border-gray-300 rounded-lg p-3"
            />

          </div>

          {/* Location */}
          <div>

            <label className="flex items-center gap-2 font-semibold mb-2">

              <MapPin size={16} />

              Location

            </label>

            <input
              type="text"
              name="EventLocation"
              value={formik.values.EventLocation}
              onChange={formik.handleChange}
              className="w-full border-2 border-gray-300 rounded-lg p-3"
            />

          </div>

          {/* Date */}
          <div>

            <label className="flex items-center gap-2 font-semibold mb-2">

              <Calendar size={16} />

              Event Date

            </label>

            <input
              type="date"
              name="EventDateAndTime"
              value={formik.values.EventDateAndTime}
              onChange={formik.handleChange}
              className="w-full border-2 border-gray-300 rounded-lg p-3"
            />

          </div>

          {/* Time */}
          <div className="grid grid-cols-2 gap-4">

            <div>

              <label className="flex items-center gap-2 font-semibold mb-2">

                <Clock size={16} />

                Start Time

              </label>

              <input
                type="time"
                name="EventStartTime"
                value={formik.values.EventStartTime}
                onChange={formik.handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3"
              />

            </div>

            <div>

              <label className="flex items-center gap-2 font-semibold mb-2">

                <Clock size={16} />

                End Time

              </label>

              <input
                type="time"
                name="EventEndTime"
                value={formik.values.EventEndTime}
                onChange={formik.handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3"
              />

            </div>

          </div>

          {/* Image */}
          <div>

            <label className="flex items-center gap-2 font-semibold mb-2">

              <Image size={16} />

              Upload New Image

            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {

                formik.setFieldValue(
                  "EventImage",
                  e.target.files[0]
                );
              }}
            />

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Update Event
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditEvents;