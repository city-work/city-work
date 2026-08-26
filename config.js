// ============================================================
//  config.js – City Work Configuration
//  Supabase credentials for the app
// ============================================================

const design = {
  supabase: {
    url: "https://yffqtbqnzrcctfnjibbo.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmZnF0YnFuenJjY3RmbmppYmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwOTM0ODUsImV4cCI6MjEwMTY2OTQ4NX0.sDW6Emj2esXIsg8QGQ30A6DKqMJZ2aYunuTdOP8iiDE"
  }
};

// Expose globally so your HTML files can access it
if (typeof window !== 'undefined') {
  window.design = design;
}
