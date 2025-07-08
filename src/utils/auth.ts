import { supabase } from "@/lib/supabaseClient";

export async function checkLoginStatus() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

export function subscribeToAuthChanges(
  callback: (session: any | null) => void
) {
  const { data: authListener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      callback(session);
    }
  );

  return () => {
    authListener?.subscription.unsubscribe();
  };
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Logout Error:", error);
  }
}
