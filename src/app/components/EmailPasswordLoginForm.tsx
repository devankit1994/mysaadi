"use client";

import { supabase } from "@/lib/supabaseClient";
import React, { FormEvent } from "react";

interface EmailPasswordLoginFormProps {
  onClose: () => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  formLoading: boolean;
  setFormLoading: (loading: boolean) => void;
  formError: string;
  setFormError: (error: string) => void;
}

const EmailPasswordLoginForm: React.FC<EmailPasswordLoginFormProps> = ({
  onClose,
  email,
  setEmail,
  password,
  setPassword,
  formLoading,
  setFormLoading,
  formError,
  setFormError,
}) => {
  const handleEmailPasswordSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setFormError("");
    setFormLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setFormError(error.message);
      } else {
        onClose();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setFormError(err.message);
      } else {
        setFormError("An unexpected error occurred.");
      }
    }
    setFormLoading(false);
  };

  return (
    <>
      <form onSubmit={handleEmailPasswordSignIn} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
          disabled={formLoading}
        >
          {formLoading ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Signing in...
            </span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
      {formError && (
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
            {formError}
          </div>
        </div>
      )}
    </>
  );
};

export default EmailPasswordLoginForm;
