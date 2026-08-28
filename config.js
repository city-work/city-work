// ============================================================
//  config.js – City Work Configuration
//  Supabase credentials for the app
// ============================================================

const design = {
  supabase: {
    url: "https://kqombshcwbqgtwszfycv.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxb21ic2hjd2JxZ3R3c3pmeWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTY1ODMsImV4cCI6MjEwMzMzMjU4M30.F90RlAyc7DSJPjeJ9zpTKlMP5aPa8Nzgwxmw23hZ3qM"
  }
};

// Expose globally so your HTML files can access it
if (typeof window !== 'undefined') {
  window.design = design;
}
