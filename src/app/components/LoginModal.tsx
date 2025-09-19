"use client";
import { supabase } from "@/lib/supabaseClient";
import React, { useState } from "react";
import Image from "next/image";
import EmailPasswordLoginForm from "./EmailPasswordLoginForm";
import EmailPasswordSignupForm from "./EmailPasswordSignupForm";

const LoginModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);
  const [error] = useState("");
  const [loading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });

    if (error) {
      console.error("Google login failed:", error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-4xl rounded-3xl bg-white/95 dark:bg-[#18181b]/95 shadow-2xl border border-pink-200/50 dark:border-pink-900/50 backdrop-blur-xl transition-all duration-300 animate-in fade-in-0 zoom-in-95 flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-200 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full w-8 h-8 flex items-center justify-center hover:bg-pink-50 dark:hover:bg-pink-900/20"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Left Side (Brand) */}
        <div className="w-full md:w-1/2 p-6 md:p-8 py-10 md:py-16 flex flex-col items-center justify-center">
          <div className="mb-6 flex flex-col items-center justify-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-lg">
                <Image
                  src="/wedding-rings.svg"
                  alt="MySaadi Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 drop-shadow-md"
                  priority
                />
              </div>
            </div>
            <div className="text-center">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide mb-2 block">
                MySaadi
              </span>
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 tracking-tight">
                Welcome Back
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1 block">
                Sign in to continue your journey
              </span>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-6 md:p-8 py-10 md:py-16">
          {/* Google Sign-In */}
          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-center gap-3 rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-700 text-gray-700 dark:text-gray-200 py-4 font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none group cursor-pointer"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <Image
                src="https://img.icons8.com/color/512/google-logo.png"
                alt="Google logo"
                width={20}
                height={20}
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                unoptimized
              />
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400/30 border-t-gray-600 dark:border-t-gray-300 rounded-full animate-spin"></div>
                  Signing in...
                </span>
              ) : (
                "Continue with Google"
              )}
            </button>
          </div>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-pink-200/60 dark:border-pink-800/60"></div>
            <span className="mx-4 text-gray-500 dark:text-gray-400 font-medium text-sm bg-white/80 dark:bg-gray-900/80 px-3 py-1 rounded-full">
              OR
            </span>
            <div className="flex-grow border-t border-pink-200/60 dark:border-pink-800/60"></div>
          </div>

          {/* Forms */}
          {isLogin ? (
            <EmailPasswordLoginForm
              onClose={onClose}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              formLoading={formLoading}
              setFormLoading={setFormLoading}
              formError={formError}
              setFormError={setFormError}
            />
          ) : (
            <EmailPasswordSignupForm
              onClose={onClose}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              formLoading={formLoading}
              setFormLoading={setFormLoading}
              formError={formError}
              setFormError={setFormError}
            />
          )}

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-2xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800/50 px-4 py-3 text-red-700 dark:text-red-300 text-sm font-medium shadow-sm animate-in fade-in-0 slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </div>
            </div>
          )}

          {/* Toggle Link */}
          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            {isLogin ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="font-semibold text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 focus:outline-none focus:underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="font-semibold text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 focus:outline-none focus:underline"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
