"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import CommonButton from "../components/CommonButton";

type Profile = {
  first_name: string;
  last_name: string;
  mobile_number: string;
  dob: string;
  religion: string;
  profile_picture: string;
  bio: string;
  email: string;
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);

      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      if (userError || !userData?.user) {
        setError("Unable to get current user. Please log in again.");
        setLoading(false);
        return;
      }

      const user = userData.user;
      const metadata = user.user_metadata || {};

      // Extract name from full_name or name field
      const fullName = metadata.full_name || metadata.name || "";
      const nameParts = fullName.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      // Map authentication data to profile
      const profileData: Profile = {
        first_name: firstName,
        last_name: lastName,
        mobile_number: user.phone || metadata.phone || "",
        dob: metadata.dob || "",
        religion: metadata.religion || "",
        profile_picture: metadata.avatar_url || metadata.picture || "",
        bio: metadata.bio || "",
        email: user.email || "",
      };

      setProfile(profileData);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 py-12 px-4">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Profile
        </h1>

        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        ) : profile ? (
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              {profile.profile_picture ? (
                <img
                  src={profile.profile_picture}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-pink-200 shadow-sm"
                />
              ) : (
                <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border-4 border-gray-100">
                  No Image
                </div>
              )}
              <div className="text-center">
                <div className="font-semibold text-xl text-gray-800">
                  {profile.first_name} {profile.last_name}
                </div>
                <div className="text-gray-600">{profile.email}</div>
                {profile.mobile_number && (
                  <div className="text-gray-600">{profile.mobile_number}</div>
                )}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-gray-700">Date of Birth:</span>{" "}
              <span className="text-gray-800">{profile.dob || "N/A"}</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-gray-700">Religion:</span>{" "}
              <span className="text-gray-800">{profile.religion || "N/A"}</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-gray-700">Bio:</span>
              <div className="mt-2 whitespace-pre-line text-gray-800">
                {profile.bio || "N/A"}
              </div>
            </div>

            <div className="pt-6 flex justify-center">
              <CommonButton
                text="Edit Profile"
                onClick={() => router.push("/profile/update")}
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No profile data found.</p>
        )}
      </div>
    </div>
  );
}
