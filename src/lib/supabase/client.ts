import { createBrowserClient } from "@supabase/ssr"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lkswnhesndtnzyhkjfqi.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrc3duaGVzbmR0bnp5aGtqZnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNTI1NjQsImV4cCI6MjA4MDYyODU2NH0.1z5GlxwHyHZdFwKaxABr2ITI_5Os9WGVi4acNL8pWQc";

export function createClient() {
  return createBrowserClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      db: {
        schema: 'off_script_learning'
      }
    }
  )
}
