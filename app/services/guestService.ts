import { GuestInterface } from "~/interfaces";
import { createClient } from "@supabase/supabase-js";

export const getGuest = async (id: string): Promise<GuestInterface | null> => {
  const supabaseUrl: string = process.env.SUPABASE_API_URL ?? "";
  const supabaseKey: string = process.env.SUPABASE_KEY ?? "";
  const supabase = createClient(supabaseUrl, supabaseKey);
  return id
    ? await supabase
        .from<GuestInterface>("guest") // Message maps to the type of the row in your database.
        .select("*")
        .eq("code", id)
        .single()
        .then((response) => response.data)
    : null;
};
