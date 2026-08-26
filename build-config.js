const fs = require('fs');
const path = require('path');

// Try both standard and Next.js prefixed names
const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.error('❌ Missing SUPABASE_URL or SUPABASE_ANON_KEY in environment.');
  console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('SUPABASE')));
  process.exit(1);
}

// ... rest of your file remains the same
