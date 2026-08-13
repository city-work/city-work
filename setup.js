const fs = require('fs');
const path = require('path');

// Root folder name
const rootFolder = path.join(__dirname, 'ArchiveHub');

// Archives configuration
const archives = [
  { folder: 'events-archive', title: 'Events Archive', icon: 'fa-calendar-check', color: 'blue', desc: 'Special events, logs, and historical records.' },
  { folder: 'lg-masterlist', title: 'LG Masterlist', icon: 'fa-list-check', color: 'emerald', desc: 'Complete database and operational roster for LG.' },
  { folder: 'bravo-masterlist', title: 'Bravo Masterlist', icon: 'fa-clipboard-list', color: 'indigo', desc: 'Roster, logs, and tracking for Bravo operations.' },
  { folder: 'tgirj-masterlist', title: 'TGIRJ Masterlist', icon: 'fa-database', color: 'purple', desc: 'Master database records for TGIRJ.' },
  { folder: 'daily-chores', title: 'Daily Chores', icon: 'fa-broom', color: 'amber', desc: 'Daily task checklists and maintenance tracking.' },
  { folder: 'commercial', title: 'Commercial', icon: 'fa-rectangle-ad', color: 'teal', desc: 'Commercial archives, media, and advertisements.' },
  { folder: 'cps', title: 'CPS', icon: 'fa-shield-halved', color: 'cyan', desc: 'CPS documents, logs, and compliance records.' },
  { folder: 'choice-concert-schedule', title: 'Choice Concert Schedule', icon: 'fa-music', color: 'rose', desc: 'Concert lineups, dates, and event schedules.' },
  { folder: 'weekly-schedule', title: 'Weekly Schedule', icon: 'fa-calendar-days', color: 'sky', desc: 'Weekly operational agendas and timetables.' },
  { folder: 'classic-move-schedules', title: 'Classic Move Schedules', icon: 'fa-film', color: 'orange', desc: 'Schedules and programming for classic moves.' }
];

// ─── GENERATE SELF-CONTAINED HTML ──────────────────────────────────
function generateHTML(item) {
  const { title, icon, color, desc } = item;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} · ArchiveHub</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] },
          colors: {
            brand: { bg: '#F5F5F7', surface: '#FFFFFF', dark: '#0F172A', accent: '#4F46E5' }
          }
        }
      }
    }
  </script>

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    .fade-in { animation: fadeIn 0.25s ease-out; }
    @keyframes fadeIn { 0% { opacity: 0; transform: translateY(6px); } 100% { opacity: 1; transform: translateY(0); } }
    .role-badge-admin { background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd; }
    .role-badge-user { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; }
  </style>
</head>

<body class="h-screen w-screen bg-[#E5E7EB] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden text-slate-800 antialiased font-sans">

<div class="bg-[#F5F5F7] w-full max-w-[1440px] h-full max-h-[920px] rounded-[28px] shadow-2xl flex border border-slate-300/80 overflow-hidden relative">

    <!-- ─── LEFT RAIL ─── -->
    <aside class="w-16 sm:w-20 bg-white border-r border-slate-200 flex flex-col items-center justify-between py-6 shrink-0 z-20">
        <div class="flex flex-col items-center space-y-5 w-full">
            <a href="../index.html" class="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-white mb-2 shadow-md hover:scale-105 transition">
                <i class="fa-solid fa-box-archive text-lg text-[#4F46E5]"></i>
            </a>
            <a href="../index.html" class="w-10 h-10 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition flex items-center justify-center" title="Back to Dashboard">
                <i class="fa-solid fa-arrow-left text-base"></i>
            </a>
            <span class="w-8 h-8 rounded-xl bg-${color}-50 text-${color}-600 flex items-center justify-center text-sm font-bold border border-${color}-100 mt-1" title="${title}">
                <i class="fa-solid ${icon}"></i>
            </span>
        </div>
        <div class="flex flex-col items-center space-y-3 w-full px-2">
            <a href="../log in page.html" onclick="localStorage.removeItem('archivehub_user');" class="w-10 h-10 rounded-xl text-rose-400 hover:bg-rose-50 transition flex items-center justify-center" title="Log Out">
                <i class="fa-solid fa-arrow-right-from-bracket text-base"></i>
            </a>
        </div>
    </aside>

    <!-- ─── MAIN CONTENT ─── -->
    <div class="flex-1 flex flex-col h-full overflow-hidden relative bg-[#F8FAFC]">

        <header class="px-6 sm:px-8 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200/80 flex items-center justify-between shrink-0 z-10">
            <div class="flex items-center space-x-3">
                <a href="../index.html" class="text-lg font-extrabold tracking-tight text-[#0F172A]">
                    Archive<span class="text-[#4F46E5]">Hub</span>
                </a>
                <span class="text-slate-300">/</span>
                <span class="text-[11px] font-semibold bg-${color}-50 text-${color}-700 px-3 py-1 rounded-full border border-${color}-100">${title}</span>
                <span id="roleBadge" class="text-[10px] font-bold px-2.5 py-1 rounded-full role-badge-user">👤 User</span>
            </div>
            <div class="flex items-center space-x-3">
                <a href="../index.html" class="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#0F172A] text-white hover:bg-slate-800 transition shadow-sm">Main Hub</a>
            </div>
        </header>

        <main class="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
            <div class="max-w-5xl mx-auto">

                <!-- Page Header -->
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-14 h-14 rounded-2xl bg-${color}-50 text-${color}-600 flex items-center justify-center text-3xl border border-${color}-100">
                        <i class="fa-solid ${icon}"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight">${title}</h1>
                        <p class="text-xs text-slate-500">${desc}</p>
                    </div>
                </div>

                <!-- Content Placeholder -->
                <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center text-slate-500">
                    <i class="fa-solid ${icon} text-4xl text-slate-300 mb-4 block"></i>
                    <p class="font-medium text-slate-700">Ready for your content</p>
                    <p class="text-xs text-slate-400 mt-1">Add your custom data, tables, or tools here.</p>
                    
                    <div class="mt-6 pt-6 border-t border-slate-100 text-left">
                        <p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Quick Links</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-[10px] bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 text-slate-600">📊 Add data</span>
                            <span class="text-[10px] bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 text-slate-600">📋 Import</span>
                            <span class="text-[10px] bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 text-slate-600">🔧 Configure</span>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
</div>

<script>
// ─── SUPABASE ──────────────────────────────────────────────────────
const SUPABASE_URL = 'https://yffqtbqnzrcctfnjibbo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmZnF0YnFuenJjY3RmbmppYmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwOTM0ODUsImV4cCI6MjEwMTY2OTQ4NX0.sDW6Emj2esXIsg8QGQ30A6DKqMJZ2aYunuTdOP8iiDE';

let supabase = null;
if (window.supabase && typeof window.supabase.createClient === 'function') {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// ─── CHECK SESSION ──────────────────────────────────────────────────
async function checkUserSession() {
    try {
        const saved = localStorage.getItem('archivehub_user');
        if (saved) {
            const userData = JSON.parse(saved);
            if (supabase) {
                const { data } = await supabase.auth.setSession(userData.session);
                if (data.user) {
                    updateUI(userData.role || 'user');
                    return;
                }
            } else {
                updateUI(userData.role || 'user');
                return;
            }
        }

        if (!supabase) {
            window.location.href = '../log in page.html';
            return;
        }

        const { data } = await supabase.auth.getSession();
        if (data.session) {
            const { data: profile } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', data.session.user.id)
                .single();

            const role = profile?.role || 'user';
            const userData = {
                id: data.session.user.id,
                email: data.session.user.email,
                role: role,
                session: data.session
            };
            localStorage.setItem('archivehub_user', JSON.stringify(userData));
            updateUI(role);
        } else {
            window.location.href = '../log in page.html';
        }
    } catch (err) {
        console.error('Session check error:', err);
        window.location.href = '../log in page.html';
    }
}

function updateUI(role) {
    const badge = document.getElementById('roleBadge');
    if (role === 'admin') {
        badge.textContent = '👑 Admin';
        badge.className = 'text-[10px] font-bold px-2.5 py-1 rounded-full role-badge-admin';
    } else {
        badge.textContent = '👤 User';
        badge.className = 'text-[10px] font-bold px-2.5 py-1 rounded-full role-badge-user';
    }
}

document.addEventListener('DOMContentLoaded', checkUserSession);
</script>
</body>
</html>`;
}

// ─── RUN CREATION ──────────────────────────────────────────────────
if (!fs.existsSync(rootFolder)) {
    fs.mkdirSync(rootFolder, { recursive: true });
}

archives.forEach(item => {
    const dirPath = path.join(rootFolder, item.folder);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(path.join(dirPath, 'index.html'), generateHTML(item));
    console.log(`✅ Created: /ArchiveHub/${item.folder}/index.html`);
});

console.log('\n🎉 All subfolder modules generated successfully!');