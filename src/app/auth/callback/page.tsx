"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        router.push("/dashboard"); // or "/"
      } else {
        router.push("/");
      }
    };

    checkSession();
  }, [router]);

  return <p className="text-center mt-10">Logging you in...</p>;
}
