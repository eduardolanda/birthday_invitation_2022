import { GuestInterface } from "~/interfaces";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl: string = "https://jhjinyxrpxcdlkstbysf.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoamlueXhycHhjZGxrc3RieXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY4NzYyNzQsImV4cCI6MTk2MjQ1MjI3NH0.kYWNTJHR3Y39g2v7l47stLIis-bcYTl1ZVZr_7LCgU4";
const supabase = createClient(supabaseUrl, supabaseKey);

export const getGuest = async (id: string): Promise<GuestInterface | null> => {
  return id
    ? await supabase
        .from<GuestInterface>("guest") // Message maps to the type of the row in your database.
        .select("*")
        .eq("code", id)
        .single()
        .then((response) => response.data)
    : null;
};
