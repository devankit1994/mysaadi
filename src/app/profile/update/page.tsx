"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import CommonButton from "../../components/CommonButton";
import { useRouter } from "next/navigation";

export default function UpdateProfilePage() {
  const [form, setForm] = useState<{
    first_name: string;
    last_name: string;
    mobile_number: string;
    dob: string;
    religion: string;
    profile_picture: File | string;
    bio: string;
  }>({
    first_name: "",
    last_name: "",
    mobile_number: "",
    dob: "",
    religion: "",
    profile_picture: "",
    bio: "",
  });

  const router = useRouter();

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

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      if (userError || !userData?.user) {
        alert("Unable to get current user. Please log in again.");
        return;
      }
      const userId = userData.user.id;
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
      if (profileError) {
        console.error("Error fetching profile:", profileError.message);
        return;
      }
      setForm({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
        mobile_number: profile.mobile_number || "",
        dob: profile.dob || "",
        religion: profile.religion || "",
        profile_picture: profile.profile_picture || "",
        bio: profile.bio || "",
      });
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    // Get the current user
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData?.user) {
      alert("Unable to get current user. Please log in again.");
      return;
    }
    const userId = userData.user.id;

    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        first_name: form.first_name,
        last_name: form.last_name,
        mobile_number: form.mobile_number,
        dob: form.dob,
        religion: form.religion,
        profile_picture: imageUrl,
        bio: form.bio,
      })
      .eq("id", userId);

    if (updateError) {
      alert("Failed to update profile: " + updateError.message);
    } else {
      alert("Profile updated successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-orange-50 py-12">
      <div className="w-full max-w-2xl bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "First Name", name: "first_name" },
            { label: "Last Name", name: "last_name" },
            { label: "Mobile Number", name: "mobile_number" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Religion", name: "religion" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name} className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">
                {label}
              </label>
              <input
                type={type}
                name={name}
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 p-3 rounded-lg text-gray-800 placeholder-gray-400 outline-none transition"
                value={(form as any)[name] || ""}
                required
              />
            </div>
          ))}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Profile Picture
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition">
              <input
                type="file"
                name="profile_picture"
                accept=".png,.jpeg,.jpg"
                onChange={handleChange}
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full
                         file:border-0 file:text-sm file:font-semibold
                         file:bg-pink-100 file:text-pink-700
                         hover:file:bg-pink-200 cursor-pointer"
              />
              {form.profile_picture && (
                <div className="mt-4 flex justify-center">
                  <img
                    src={
                      form.profile_picture instanceof File
                        ? URL.createObjectURL(form.profile_picture)
                        : form.profile_picture
                    }
                    alt="Profile Preview"
                    className="w-32 h-32 rounded-full object-cover border"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Bio
            </label>
            <textarea
              name="bio"
              rows={4}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 p-3 rounded-lg text-gray-800 placeholder-gray-400 outline-none transition"
              value={form.bio}
            />
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <CommonButton
              text="Cancel"
              type="button"
              variant="secondary"
              onClick={() => router.push("/profile")}
            />
            <CommonButton text="Save Changes" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
