import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://anqnqrbhzliziioogeuu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFucW5xcmJoemxpemlpb29nZXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1Nzg5ODYsImV4cCI6MjEwMzE1NDk4Nn0.lJkTNlhfwANVyDw9b_DWua2kjBvCskqo2NTsaQ5x2RE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


