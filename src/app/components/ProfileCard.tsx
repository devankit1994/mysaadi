"use client";

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

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-rose-100 border border-rose-200 shadow-lg rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={profile.profile_picture || "/default-avatar.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-rose-400 object-cover mb-4"
          />
          <span className="absolute bottom-2 right-2 bg-rose-600 text-white text-xs px-2 py-1 rounded-full shadow">
            Match 💖
          </span>
        </div>
        <h2 className="text-2xl font-bold text-rose-800">
          {profile.first_name} {profile.last_name}
        </h2>
        <p className="text-gray-600 italic">{profile.religion}</p>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-semibold text-rose-700">📱 Mobile:</span>{" "}
          {profile.mobile_number}
        </p>
        <p>
          <span className="font-semibold text-rose-700">🎂 Date of Birth:</span>{" "}
          {profile.dob}
        </p>
        <p>
          <span className="font-semibold text-rose-700">📝 Bio:</span>{" "}
          {profile.bio || "No bio available"}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-6 text-center">
        <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:from-rose-600 hover:to-pink-600 transition">
          Connect 💌
        </button>
      </div>
    </div>
  );
}
