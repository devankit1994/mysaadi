"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ProfileCard from "../components/ProfileCard";

interface Profile {
  id: string;
  first_name: string;
  last_name: string;
  mobile_number: string;
  dob: string;
  religion: string;
  profile_picture: string;
  bio: string;
}

export default function FindYourMatchPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      const { data, error } = await supabase.from("profiles").select("*");
      if (error) {
        alert("Error fetching profiles: " + error.message);
      } else {
        setProfiles(data || []);
      }
      setLoading(false);
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading profiles...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Find Your Match</h1>

      {profiles.length === 0 ? (
        <p className="text-center text-gray-600">No profiles found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
}
