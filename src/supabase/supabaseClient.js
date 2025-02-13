// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nbmyrphiulbqwfyguilw.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibXlycGhpdWxicXdmeWd1aWx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxOTM4MjMsImV4cCI6MjA1NDc2OTgyM30.-y5AS9wKJbAWuMbQIVKTGLUe_SWwhKxngNckhOWPWH4"; // Replace with your Supabase public API key

export const supabase = createClient(supabaseUrl, supabaseKey);