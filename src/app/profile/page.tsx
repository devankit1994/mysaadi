"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CommonButton from "../components/CommonButton";
import { useRouter } from "next/navigation";

type Profile = {
  first_name: string;
  last_name: string;
  mobile_number: string;
  dob: string;
  religion: string;
  profile_picture: string;
  bio: string;
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

      // Get current user
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      if (userError || !userData?.user) {
        setError("Unable to get current user. Please log in again.");
        setLoading(false);
        return;
      }
      const userId = userData.user.id;

      // Fetch profile
      const { data, error: profileError } = await supabase
        .from("profiles")
        .select(
          "first_name, last_name, mobile_number, dob, religion, profile_picture, bio"
        )
        .eq("id", userId)
        .single();

      if (profileError) {
        setError("Failed to fetch profile: " + profileError.message);
        setLoading(false);
        return;
      }

      setProfile(data as Profile);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : profile ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              {profile.profile_picture ? (
                <img
                  src={profile.profile_picture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <div>
                <div className="font-semibold text-lg">
                  {profile.first_name} {profile.last_name}
                </div>
                <div className="text-gray-600">{profile.mobile_number}</div>
              </div>
            </div>
            <div>
              <span className="font-medium">Date of Birth:</span>{" "}
              {profile.dob || "N/A"}
            </div>
            <div>
              <span className="font-medium">Religion:</span>{" "}
              {profile.religion || "N/A"}
            </div>
            <div>
              <span className="font-medium">Bio:</span>
              <div className="mt-1 whitespace-pre-line">
                {profile.bio || "N/A"}
              </div>
            </div>

            <div className="pt-4">
              <CommonButton
                text="Edit Profile"
                onClick={() => router.push("/profile/update")}
              />
            </div>
          </div>
        ) : (
          <p>No profile data found.</p>
        )}
      </div>
    </div>
  );
}
