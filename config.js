// config.js - All content, text, and dynamic data
const design = {
  header: {
    logoText: "archivehub",
    navLinks: [
      { label: "Vaults", active: true },
      { label: "Tools" },
      { label: "Learn" },
      { label: "Virtual Sandbox" },
      { label: "Public Drive" },
      { label: "Analytics" }
    ]
  },
  metrics: {
    storage: { total: "2,450.00 GB", used: "842.10 GB", free: "1,607.90 GB" },
    files: { count: "14,280", change: "+12.4% this week" },
    vaults: { count: "8 Active", change: "+2 new added" },
    encryption: { status: "100% Secure", badge: "Verified" }
  },
  vaults: [
    { name: "Financial Records", size: "124.5 GB", files: "3,410 Files", tag: "PDFs", tagColor: "cyan" },
    { name: "Media Archives", size: "450.2 GB", files: "8,920 Files", tag: "RAW/PNG", tagColor: "yellow" },
    { name: "Database Dumps", size: "267.4 GB", files: "1,950 Files", tag: "SQL/JSON", tagColor: "purple" }
  ],
  tags: [
    { label: "$DOCS", color: "cyan" },
    { label: "$TAX", color: "red" },
    { label: "$IMG", color: "yellow" },
    { label: "$SQL", color: "emerald" }
  ],
  feed: [{
    author: "System Bot",
    avatar: "AH",
    time: "10 mins ago",
    message: 'Automated monthly snapshot generated for <span class="text-cyan-400">#Financial_Vault_2026</span>. Compression ratio reached 3:1.',
    snapshot: "SNAPSHOT COMPLETE",
    snapshotDetail: "4.2 GB Encrypted & Uploaded",
    likes: 42,
    comments: 8,
    views: "1.2k"
  }],

  // ═══ ALL 10 SUBFOLDERS ═══
  archiveModules: [
    { folder: 'events-archive', title: 'Events Archive', desc: 'Special events, logs, and historical records.', color: 'blue', icon: 'fa-calendar-check' },
    { folder: 'lg-masterlist', title: 'LG Masterlist', desc: 'Complete database and operational roster for LG.', color: 'emerald', icon: 'fa-list-check' },
    { folder: 'bravo-masterlist', title: 'Bravo Masterlist', desc: 'Roster, logs, and tracking for Bravo operations.', color: 'indigo', icon: 'fa-clipboard-list' },
    { folder: 'tgirj-masterlist', title: 'TGIRJ Masterlist', desc: 'Master database records for TGIRJ.', color: 'purple', icon: 'fa-database' },
    { folder: 'daily-chores', title: 'Daily Chores', desc: 'Daily task checklists and maintenance tracking.', color: 'amber', icon: 'fa-broom' },
    { folder: 'commercial', title: 'Commercial', desc: 'Commercial archives, media, and advertisements.', color: 'teal', icon: 'fa-rectangle-ad' },
    { folder: 'cps', title: 'CPS', desc: 'CPS documents, logs, and compliance records.', color: 'cyan', icon: 'fa-shield-halved' },
    { folder: 'choice-concert-schedule', title: 'Choice Concert Schedule', desc: 'Concert lineups, dates, and event schedules.', color: 'rose', icon: 'fa-music' },
    { folder: 'weekly-schedule', title: 'Weekly Schedule', desc: 'Weekly operational agendas and timetables.', color: 'sky', icon: 'fa-calendar-days' },
    { folder: 'classic-move-schedules', title: 'Classic Move Schedules', desc: 'Schedules and programming for classic moves.', color: 'orange', icon: 'fa-film' }
  ]
};