"use client";
import { useState } from "react";

const formFields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "company", label: "Company", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  {
    name: "weAre",
    label: "We are",
    type: "select",
    required: true,
    options: ["Agency", "Brand", "Partner"],
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white py-16 px-4 flex justify-center items-center text-black">
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Contact Us Today!</h2>
          <p className="mt-2">We will be back in touch with you shortly</p>
        </div>

        {formFields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-1">
              {field.label} {field.required && "*"}
            </label>

            {field.type === "select" ? (
              <select
                name={field.name}
                required={field.required}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none"
              >
                <option value="">Select</option>
                {field.options.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none"
              />
            )}
          </div>
        ))}

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#243666] text-white font-bold py-3 px-10 rounded-full hover:bg-[#1a2b54] transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
