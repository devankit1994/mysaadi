import { supabase } from "@/lib/supabaseClient";

export async function checkLoginStatus() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return !!session;
}

export function subscribeToAuthChanges(
  callback: (isLoggedIn: boolean) => void
) {
  const { data: authListener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      callback(!!session);
    }
  );

  return () => {
    authListener?.subscription.unsubscribe();
  };
}
