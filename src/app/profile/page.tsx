"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ProfilePage() {
  const [form, setForm] = useState<{
    first_name: string;
    last_name: string;
    mobile_number: string;
    email: string;
    dob: string;
    religion: string;
    profile_picture: File | string;
    bio: string;
  }>({
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
    dob: "",
    religion: "",
    profile_picture: "",
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "profile_picture" && files && files[0]) {
      const file = files[0];
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        alert("Only PNG, JPEG, and JPG files are allowed.");
        return;
      }
      setForm((prev) => ({ ...prev, profile_picture: file }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageUrl = "";

    if (form.profile_picture instanceof File) {
      const fileExt = form.profile_picture.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from("profile-pictures")
        .upload(fileName, form.profile_picture);

      if (error) {
        alert("Image upload failed: " + error.message);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("profile-pictures").getPublicUrl(data.path);

      imageUrl = publicUrl;
    }

    const { error: insertError } = await supabase.from("profiles").insert({
      first_name: form.first_name,
      last_name: form.last_name,
      mobile_number: form.mobile_number,
      email: form.email,
      dob: form.dob,
      religion: form.religion,
      profile_picture: imageUrl,
      bio: form.bio,
    });

    if (insertError) {
      alert("Failed to save profile: " + insertError.message);
    } else {
      alert("Profile saved successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "First Name", name: "first_name" },
            { label: "Last Name", name: "last_name" },
            { label: "Mobile Number", name: "mobile_number" },
            { label: "Email", name: "email", type: "email" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Religion", name: "religion" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label className="block font-medium">{label}</label>
              <input
                type={type}
                name={name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          ))}
          <div>
            <label className="block font-medium mb-1">Profile Picture</label>
            <div className="border border-gray-300 rounded p-2">
              <input
                type="file"
                name="profile_picture"
                accept=".png,.jpeg,.jpg"
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-medium">Bio</label>
            <textarea
              name="bio"
              rows={4}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
