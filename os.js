// ── Touch / mobile detection ────────────────────────────────────────────────
const isTouchDevice = window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;

// ── Icon SVGs (small: titlebar / taskbar) ──────────────────────────────────
const WIN98_ICONS = {
    folder: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><path d="M2,6 L12,6 L15,9 L30,9 L30,26 L2,26 Z" fill="#ffd700" stroke="#000" stroke-width="1"/><path d="M2,9 L30,9" stroke="#fff" stroke-width="1"/><path d="M4,11 L28,11 L28,24 L4,24 Z" fill="#ffe680"/></svg>`,
    notepad: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><rect x="4" y="2" width="22" height="28" fill="#fff" stroke="#000" stroke-width="1"/><rect x="2" y="4" width="22" height="26" fill="#fff" stroke="#000" stroke-width="1"/><line x1="6" y1="8" x2="20" y2="8" stroke="#000080" stroke-width="2"/><line x1="6" y1="12" x2="20" y2="12" stroke="#808080" stroke-width="1"/><line x1="6" y1="16" x2="20" y2="16" stroke="#808080" stroke-width="1"/><line x1="6" y1="20" x2="20" y2="20" stroke="#808080" stroke-width="1"/><line x1="6" y1="24" x2="16" y2="24" stroke="#808080" stroke-width="1"/><path d="M22,18 L28,24 L24,28 L18,22 Z" fill="#f00" stroke="#000" stroke-width="1"/></svg>`,
    recycleBin: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><rect x="8" y="8" width="16" height="20" rx="1" fill="#c0c0c0" stroke="#000" stroke-width="1"/><line x1="6" y1="8" x2="26" y2="8" stroke="#000" stroke-width="2"/><rect x="12" y="5" width="8" height="3" fill="#c0c0c0" stroke="#000" stroke-width="1"/><line x1="12" y1="12" x2="12" y2="24" stroke="#808080" stroke-width="1"/><line x1="16" y1="12" x2="16" y2="24" stroke="#808080" stroke-width="1"/><line x1="20" y1="12" x2="20" y2="24" stroke="#808080" stroke-width="1"/></svg>`,
    help: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><circle cx="16" cy="16" r="12" fill="#000080" stroke="#000" stroke-width="1"/><circle cx="16" cy="16" r="6" fill="#fff"/><text x="16" y="21" font-family="sans-serif" font-weight="bold" font-size="14" fill="#000080" text-anchor="middle">?</text></svg>`,
    settings: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><rect x="2" y="6" width="28" height="20" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="4" y="8" width="24" height="3" fill="#000080"/><circle cx="12" cy="18" r="5" fill="#808080" stroke="#000" stroke-width="1"/><rect x="18" y="14" width="8" height="8" fill="#fff" stroke="#000" stroke-width="1"/></svg>`,
    apply: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><rect x="6" y="2" width="20" height="28" fill="#fff" stroke="#000" stroke-width="1"/><line x1="10" y1="8" x2="22" y2="8" stroke="#808080" stroke-width="1"/><line x1="10" y1="12" x2="22" y2="12" stroke="#808080" stroke-width="1"/><polyline points="10,18 14,22 22,12" fill="none" stroke="#008000" stroke-width="2"/></svg>`,
    map: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><polygon points="4,8 12,4 20,8 28,4 28,24 20,28 12,24 4,28" fill="#fff" stroke="#000" stroke-width="1"/><polyline points="12,4 12,24" stroke="#000" stroke-width="1"/><polyline points="20,8 20,28" stroke="#000" stroke-width="1"/><circle cx="16" cy="12" r="3" fill="#f00" stroke="#000" stroke-width="1"/></svg>`,
    datalog: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><ellipse cx="16" cy="8" rx="10" ry="4" fill="#c0c0c0" stroke="#000" stroke-width="1"/><path d="M6,8 L6,16 A10,4 0 0,0 26,16 L26,8" fill="#c0c0c0" stroke="#000" stroke-width="1"/><path d="M6,16 L6,24 A10,4 0 0,0 26,24 L26,16" fill="#c0c0c0" stroke="#000" stroke-width="1"/></svg>`,
    image: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><rect x="2" y="6" width="28" height="20" fill="#fff" stroke="#000" stroke-width="1"/><circle cx="10" cy="12" r="3" fill="#ffd700"/><polygon points="2,26 12,16 20,24 24,20 30,26" fill="#008000" stroke="#000" stroke-width="1"/></svg>`,
    browser: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><circle cx="16" cy="16" r="14" fill="#2a6fb0" stroke="#000" stroke-width="1"/><path d="M16,2 A14,14 0 0,0 16,30" fill="none" stroke="#bfe6ff" stroke-width="1"/><path d="M2,16 A14,14 0 0,0 30,16" fill="none" stroke="#bfe6ff" stroke-width="1"/><path d="M6,7 A14,14 0 0,1 26,7 M6,25 A14,14 0 0,0 26,25" fill="none" stroke="#bfe6ff" stroke-width="1"/><text x="16" y="21" font-family="sans-serif" font-weight="bold" font-size="15" fill="#fff" text-anchor="middle">e</text></svg>`,
    committees: `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><rect x="2" y="4" width="28" height="24" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="2" y="4" width="28" height="5" fill="#000080"/><line x1="2" y1="9" x2="30" y2="9" stroke="#fff" stroke-width="0.5"/><circle cx="16" cy="17" r="3.5" fill="#000" stroke="#000" stroke-width="0.8"/><path d="M10,25 Q10,20 16,20 Q22,20 22,25" fill="#000" stroke="#000" stroke-width="0.8"/><circle cx="7.5" cy="18" r="2.5" fill="#000" stroke="#000" stroke-width="0.8"/><path d="M3,25 Q3,21 7.5,21 Q9.5,21 10.5,22" fill="#000" stroke="#000" stroke-width="0.8"/><circle cx="24.5" cy="18" r="2.5" fill="#000" stroke="#000" stroke-width="0.8"/><path d="M29,25 Q29,21 24.5,21 Q22.5,21 21.5,22" fill="#000" stroke="#000" stroke-width="0.8"/></svg>`
};

// ── Icon SVGs (large: desktop) ─────────────────────────────────────────────
const WIN98_DESKTOP_ICONS = {
    folder: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><path d="M2,6 L12,6 L15,9 L30,9 L30,26 L2,26 Z" fill="#ffd700" stroke="#000" stroke-width="1"/><path d="M2,9 L30,9" stroke="#fff" stroke-width="1"/><path d="M4,11 L28,11 L28,24 L4,24 Z" fill="#ffe680"/></svg>`,
    notepad: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="4" y="2" width="22" height="28" fill="#fff" stroke="#000" stroke-width="1"/><rect x="2" y="4" width="22" height="26" fill="#fff" stroke="#000" stroke-width="1"/><line x1="6" y1="8" x2="20" y2="8" stroke="#000080" stroke-width="2"/><line x1="6" y1="12" x2="20" y2="12" stroke="#808080" stroke-width="1"/><line x1="6" y1="16" x2="20" y2="16" stroke="#808080" stroke-width="1"/><line x1="6" y1="20" x2="20" y2="20" stroke="#808080" stroke-width="1"/><line x1="6" y1="24" x2="16" y2="24" stroke="#808080" stroke-width="1"/><path d="M22,18 L28,24 L24,28 L18,22 Z" fill="#f00" stroke="#000" stroke-width="1"/></svg>`,
    recycleBin: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="20" rx="1" fill="#c0c0c0" stroke="#000" stroke-width="1"/><line x1="6" y1="8" x2="26" y2="8" stroke="#000" stroke-width="2"/><rect x="12" y="5" width="8" height="3" fill="#c0c0c0" stroke="#000" stroke-width="1"/><line x1="12" y1="12" x2="12" y2="24" stroke="#808080" stroke-width="1"/><line x1="16" y1="12" x2="16" y2="24" stroke="#808080" stroke-width="1"/><line x1="20" y1="12" x2="20" y2="24" stroke="#808080" stroke-width="1"/></svg>`,
    help: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#000080" stroke="#000" stroke-width="1"/><circle cx="16" cy="16" r="10" fill="none" stroke="#fff" stroke-dasharray="4,3" stroke-width="2"/><circle cx="16" cy="16" r="6" fill="#fff"/><text x="16" y="21" font-family="sans-serif" font-weight="bold" font-size="14" fill="#000080" text-anchor="middle">?</text></svg>`,
    settings: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="2" y="6" width="28" height="20" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="4" y="8" width="24" height="3" fill="#000080"/><circle cx="12" cy="18" r="5" fill="#808080" stroke="#000" stroke-width="1"/><path d="M12,11 L12,25 M5,18 L19,18 M7,13 L17,23 M7,23 L17,13" stroke="#000" stroke-width="1"/><rect x="18" y="14" width="8" height="8" fill="#fff" stroke="#000" stroke-width="1"/></svg>`,
    apply: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="6" y="2" width="20" height="28" fill="#fff" stroke="#000" stroke-width="1"/><line x1="10" y1="8" x2="22" y2="8" stroke="#808080" stroke-width="1"/><line x1="10" y1="12" x2="22" y2="12" stroke="#808080" stroke-width="1"/><polyline points="10,18 14,22 22,12" fill="none" stroke="#008000" stroke-width="3"/></svg>`,
    map: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><polygon points="4,8 12,4 20,8 28,4 28,24 20,28 12,24 4,28" fill="#fff" stroke="#000" stroke-width="1"/><polyline points="12,4 12,24" stroke="#000" stroke-width="1"/><polyline points="20,8 20,28" stroke="#000" stroke-width="1"/><circle cx="16" cy="12" r="3" fill="#f00" stroke="#000" stroke-width="1"/></svg>`,
    datalog: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><ellipse cx="16" cy="8" rx="10" ry="4" fill="#c0c0c0" stroke="#000" stroke-width="1"/><path d="M6,8 L6,16 A10,4 0 0,0 26,16 L26,8" fill="#c0c0c0" stroke="#000" stroke-width="1"/><path d="M6,16 L6,24 A10,4 0 0,0 26,24 L26,16" fill="#c0c0c0" stroke="#000" stroke-width="1"/></svg>`,
    image: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="2" y="6" width="28" height="20" fill="#fff" stroke="#000" stroke-width="1"/><circle cx="10" cy="12" r="3" fill="#ffd700"/><polygon points="2,26 12,16 20,24 24,20 30,26" fill="#008000" stroke="#000" stroke-width="1"/></svg>`,
    browser: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#2a6fb0" stroke="#000" stroke-width="1"/><path d="M16,2 A14,14 0 0,0 16,30" fill="none" stroke="#bfe6ff" stroke-width="1"/><path d="M2,16 A14,14 0 0,0 30,16" fill="none" stroke="#bfe6ff" stroke-width="1"/><path d="M6,7 A14,14 0 0,1 26,7 M6,25 A14,14 0 0,0 26,25" fill="none" stroke="#bfe6ff" stroke-width="1"/><text x="16" y="21" font-family="sans-serif" font-weight="bold" font-size="15" fill="#fff" text-anchor="middle">e</text></svg>`,
    committees: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="2" y="4" width="28" height="24" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="2" y="4" width="28" height="5" fill="#000080"/><line x1="2" y1="9" x2="30" y2="9" stroke="#fff" stroke-width="0.5"/><circle cx="16" cy="17" r="3.5" fill="#000" stroke="#000" stroke-width="0.8"/><path d="M10,25 Q10,20 16,20 Q22,20 22,25" fill="#000" stroke="#000" stroke-width="0.8"/><circle cx="7.5" cy="18" r="2.5" fill="#000" stroke="#000" stroke-width="0.8"/><path d="M3,25 Q3,21 7.5,21 Q9.5,21 10.5,22" fill="#000" stroke="#000" stroke-width="0.8"/><circle cx="24.5" cy="18" r="2.5" fill="#000" stroke="#000" stroke-width="0.8"/><path d="M29,25 Q29,21 24.5,21 Q22.5,21 21.5,22" fill="#000" stroke="#000" stroke-width="0.8"/></svg>`
};

// ── Shared Win98 menu system (every menu item is functional) ───────────────
const WIN98_FONT = '"MS Sans Serif","Tahoma",Verdana,sans-serif';

// ── Settings (persisted) ────────────────────────────────────────────────────
function loadSettings() {
    try {
        const s = JSON.parse(localStorage.getItem('munderes-settings') || '{}');
        return Object.assign({ lang: 'en', sound: true, volume: 0.7, clock24: false, textSize: 'normal', wallpaper: 'teal' }, s);
    } catch (e) {
        return { lang: 'en', sound: true, volume: 0.7, clock24: false, textSize: 'normal', wallpaper: 'teal' };
    }
}
function saveSettings() { localStorage.setItem('munderes-settings', JSON.stringify(SETTINGS)); }

let SETTINGS = loadSettings();
let LANG = SETTINGS.lang;

// ── Translation ─────────────────────────────────────────────────────────────
const I18N = {
    en: {},
    tr: {
        'Ready': 'Hazır',
        'Loading...': 'Yükleniyor...',
        'Loading team data...': 'Takım verileri yükleniyor...',
        'No team data found.': 'Takım verisi bulunamadı.',
        'Error fetching team data.': 'Takım verisi alınamadı.',
        'Team Members': 'Takım Üyeleri',
        'No image available.': 'Görsel yok.',
        'Loading help topics...': 'Yardım konuları yükleniyor...',
        'No help topics found.': 'Yardım konusu bulunamadı.',
        'Error loading help data.': 'Yardım verisi yüklenemedi.',
        'Error loading schedule data.': 'Program verisi yüklenemedi.',
        'About Schedule': 'Program Hakkında',
        'Copied to clipboard.': 'Panoya kopyalandı.',
        'Answer expanded.': 'Cevap açıldı.',
        'objects selected': 'nesne seçildi',
        'object selected': 'nesne seçildi',
        'objects': 'nesne',
        'object': 'nesne',
        'Up one level': 'Bir üst düzey',
        'Address': 'Adres',
        'Go': 'Git',
        'Back': 'Geri',
        'Forward': 'İleri',
        'Up': 'Yukarı',
        'Start': 'Başlat',
        'Log Off...': 'Oturumu Kapat...',
        'Shut Down...': 'Bilgisayarı Kapat...',
        'Enter Network Password': 'Ağ Parolasını Girin',
        'Type a user name and password to log on.': 'Giriş yapmak için kullanıcı adı ve parola yazın.',
        'User name:': 'Kullanıcı adı:',
        'Password:': 'Parola:',
        'OK': 'Tamam',
        'Cancel': 'İptal',
        'Find what:': 'Aranacak:',
        'Enter a search string.': 'Arama metni girin.',
        'Wrap On': 'Kaydırma Açık',
        'Wrap Off': 'Kaydırma Kapalı',
        'File': 'Dosya',
        'Edit': 'Düzen',
        'View': 'Görünüm',
        'Help': 'Yardım',
        'Close': 'Kapat',
        'Exit': 'Çıkış',
        'Copy': 'Kopyala',
        'Select All': 'Tümünü Seç',
        'Find': 'Bul',
        'Find...': 'Bul...',
        'Find Next': 'Sonrakini Bul',
        'Home': 'Ana Sayfa',
        'Up One Level': 'Bir Üst Düzey',
        'About MUNDERES 27': 'MUNDERES 27 Hakkında',
        'Word Wrap': 'Sözcük Kaydırma',
        'New Window': 'Yeni Pencere',
        'Search': 'Ara',
        'Previous': 'Önceki',
        'Next': 'Sonraki',
        'Zoom In': 'Yakınlaştır',
        'Zoom Out': 'Uzaklaştır',
        'Actual Size': 'Gerçek Boyut',
        'Best Fit': 'Sığdır',
        'Status Bar': 'Durum Çubuğu',
        'Refresh': 'Yenile',
        'Previous Member': 'Önceki Üye',
        'Next Member': 'Sonraki Üye',
        'Help Topics': 'Yardım Konuları',
        'About Photos': 'Fotoğraflar Hakkında',
        'About Team Log': 'Takım Günlüğü Hakkında',
        'About Help-FAQs': 'Yardım-SSS Hakkında',
        'About Notepad': 'Not Defteri Hakkında',
        'About': 'Hakkında',
        'Large Icons': 'Büyük Simgeler',
        'Small Icons': 'Küçük Simgeler',
        'List': 'Liste',
        'Invert Selection': 'Seçimi Tersine Çevir',
        'Contents': 'İçindekiler',
        'Using this Website': 'Bu Web Sitesini Kullanma',
        'of': '/',
        'Settings': 'Denetim Masası',
        'topics': 'konu',
        'questions': 'soru',
        'Language / Translation': 'Dil / Çeviri',
        'Choose the language used across the whole website.': 'Tüm web sitesinde kullanılacak dili seçin.',
        'English': 'İngilizce',
        'Türkçe': 'Türkçe',
        'Apply': 'Uygula',
        'Sound': 'Ses',
        'Play sound effects': 'Ses efektlerini çal',
        'Master volume': 'Ana ses seviyesi',
        'Test': 'Test',
        'Appearance': 'Görünüm',
        'Clock format': 'Saat biçimi',
        '12-hour': '12 saatlik',
        '24-hour': '24 saatlik',
        'Text size': 'Metin boyutu',
        'Small': 'Küçük',
        'Normal': 'Normal',
        'Large': 'Büyük',
        'Settings saved.': 'Ayarlar kaydedildi.',
        'About Control Panel': 'Denetim Masası Hakkında',
        'Help-FAQs': 'Yardım-SSS',
        'Control Panel': 'Denetim Masası',
        'Display': 'Görüntü',
        'Wallpaper': 'Duvar Kağıdı',
        'Desktop background color / pattern.': 'Masaüstü arka plan rengi / deseni.',
        'Teal': 'Turkuaz',
        'Navy': 'Lacivert',
        'Black': 'Siyah',
        'Green': 'Yeşil',
        'Purple': 'Mor',
        'Maroon': 'Bordo',
        'Stripes': 'Çizgili',
        'Dots': 'Noktalı',
        'Regional Settings': 'Bölgesel Ayarlar',
        'Date/Time': 'Tarih/Saat',
        'Add/Remove Programs': 'Program Ekle/Kaldır',
        'System': 'Sistem',
        'Adjust the desktop wallpaper for the whole site.': 'Tüm site için masaüstü duvar kağıdını ayarlayın.',
        'Choose which language the website is shown in.': 'Web sitesinin hangi dilde gösterileceğini seçin.',
        'Control the sound effects of the operating system.': 'İşletim sisteminin ses efektlerini kontrol edin.',
        'Change how the clock is displayed in the taskbar.': 'Görev çubuğundaki saatin nasıl görüneceğini değiştirin.',
        'Manage the components installed on your system.': 'Sisteminize kurulu bileşenleri yönetin.',
        'View information about your computer.': 'Bilgisayarınız hakkında bilgileri görüntüleyin.',
        'Installed components': 'Yüklü bileşenler',
        'Remove': 'Kaldır',
        'In use. Cannot remove.': 'Kullanımda. Kaldırılamaz.',
        'System Information': 'Sistem Bilgileri',
        'Operating System': 'İşletim Sistemi',
        'Version': 'Sürüm',
        'Processor': 'İşlemci',
        'Memory': 'Bellek',
        'Computer': 'Bilgisayar',
        'Computer Name': 'Bilgisayar Adı',
        'MUNDERES 27 Theme': 'MUNDERES 27 Teması',
        'Pentium II 300 MHz': 'Pentium II 300 MHz',
        '32.0 MB RAM': '32,0 MB RAM',
        'In use.': 'Kullanımda.',
        'Adjust settings for your system.': 'Sisteminiz için ayarları düzenleyin.',
        'Application Form': 'Başvuru Formu',
        'Application Types': 'Başvuru Türleri',
        'Loading applications...': 'Başvurular yükleniyor...',
        'No applications found.': 'Başvuru türü bulunamadı.',
        'Error loading applications data.': 'Başvuru verisi yüklenemedi.',
        'Open': 'Aç',
        'Stop': 'Durdur',
        'New Tab': 'Yeni Sekme',
        'Open in new tab': 'Yeni sekmede aç',
        'If the form does not load, open it in a new tab:': 'Form yüklenmezse yeni sekmede açın:',
        'Done': 'Bitti',
        'Stopped': 'Durduruldu',
        'About Apply': 'Başvuru Hakkında',
        'About Browser': 'Tarayıcı Hakkında',
        'Open Application': 'Başvuruyu Aç',
        'Loading images...': 'Görseller yükleniyor...',
        'No images found in ': 'Şu klasörde görsel bulunamadı: ',
        'This folder is empty.': 'Bu klasör boş.',
        'Committees': 'Komiteler',
        'Committees - Subcommittees': 'Komiteler - Alt Komiteler',
        'All Committees': 'Tüm Komiteler',
        'Overview': 'Genel Bakış',
        'Details': 'Detaylar',
        'Board Members': 'Kurul Üyeleri',
        'Study Guide': 'Çalışma Kılavuzu',
        'Explore': 'Keşfet',
        'Agenda Item': 'Gündem Maddesi',
        'About Committees': 'Komiteler Hakkında',
        'Loading committees...': 'Komiteler yükleniyor...',
        'Error loading committees data.': 'Komite verisi yüklenemedi.',
        'No committee data found.': 'Komite verisi bulunamadı.',
        'Back to Committees': 'Komitelere Dön'
    }
};

function t(key, fb) {
    if (LANG === 'tr' && I18N.tr[key] != null) return I18N.tr[key];
    return fb || key;
}

// Menu labels are translated by their English source text, so every renderer is covered
function tt(label) {
    if (LANG !== 'tr') return label;
    return I18N.tr[label] || label;
}

function appName(app) {
    if (!app) return '';
    if (LANG === 'tr' && app.nameTr) return app.nameTr;
    return app.name;
}

// Picks the current language from a { en, tr } object (falls back to en / the string itself)
function langText(obj) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    return obj[LANG] || obj.en || '';
}

function setLang(lang) {
    LANG = lang;
    SETTINGS.lang = lang;
    saveSettings();
    applyLanguage();
    applyLoginLanguage();
}

function applyTextSize() {
    const sizes = { small: 0.88, normal: 1, large: 1.15 };
    document.documentElement.style.setProperty('--os-text-scale', sizes[SETTINGS.textSize] || 1);
}

// ── Desktop wallpaper presets (Control Panel → Display) ────────────────────
const WALLPAPERS = [
    { id: 'teal',    name: 'Teal',    nameTr: 'Turkuaz',  css: '#008080' },
    { id: 'navy',    name: 'Navy',    nameTr: 'Lacivert', css: '#000080' },
    { id: 'black',   name: 'Black',   nameTr: 'Siyah',    css: '#000000' },
    { id: 'green',   name: 'Green',   nameTr: 'Yeşil',    css: '#008000' },
    { id: 'purple',  name: 'Purple',  nameTr: 'Mor',      css: '#800080' },
    { id: 'maroon',  name: 'Maroon',  nameTr: 'Bordo',    css: '#800000' },
    { id: 'stripes', name: 'Stripes', nameTr: 'Çizgili',  css: 'repeating-linear-gradient(45deg, #008080 0 10px, #004040 10px 20px)' },
    { id: 'dots',    name: 'Dots',    nameTr: 'Noktalı',  css: '#008080', pattern: 'radial-gradient(circle, rgba(255,255,255,0.14) 1.5px, transparent 1.5px)', size: '10px 10px' }
];

function applyWallpaper() {
    const el = document.getElementById('win98-desktop');
    if (!el) return;
    const w = WALLPAPERS.find(x => x.id === SETTINGS.wallpaper) || WALLPAPERS[0];
    if (w.pattern) {
        el.style.background = w.pattern + ' ' + w.css;
        el.style.backgroundSize = w.size || 'auto';
    } else {
        el.style.background = w.css;
        el.style.backgroundSize = 'auto';
    }
}

// ── Sound effects (real Windows 98 WAV samples, decoded via Web Audio) ─────
const SOUND_FILES = {
    click:    'Windows98/Windows98menucommand.wav',
    popup:    'Windows98/Windows98menupopup.wav',
    open:     'Windows98/Windows98defaultsound.wav',
    close:    'Windows98/Windows98restoredown.wav',
    error:    'Windows98/Windows98programerror.wav',
    warning:  'Windows98/Windows98exclamation.wav',
    minimize: 'Windows98/Windows98minimize.wav',
    maximize: 'Windows98/Windows98maximize.wav',
    startup:  'Windows98/Windows98startup.wav',
    shutdown: 'Windows98/Windows98exitwindows.wav'
};

const SOUND = {
    ctx: null,
    buffers: {},
    ensure() {
        if (!this.ctx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (AC) this.ctx = new AC();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            Promise.resolve(this.ctx.resume()).catch(() => {});
        }
    },
    // Fetch + decode every sample once, so playback is instant later.
    load() {
        this.ensure();
        if (!this.ctx) return Promise.resolve();
        return Promise.all(Object.keys(SOUND_FILES).map(key => {
            return fetch(SOUND_FILES[key])
                .then(r => r.arrayBuffer())
                .then(buf => this.ctx.decodeAudioData(buf))
                .then(ab => { this.buffers[key] = ab; })
                .catch(() => { this.buffers[key] = null; });
        })).catch(() => {});
    },
    play(name) {
        if (!SETTINGS.sound) return;
        this.ensure();
        const buf = this.buffers[name];
        if (!buf || !this.ctx) return;
        const src = this.ctx.createBufferSource();
        src.buffer = buf;
        const gain = this.ctx.createGain();
        gain.gain.value = SETTINGS.volume;
        src.connect(gain);
        gain.connect(this.ctx.destination);
        src.start();
    },
    click()    { this.play('click'); },
    popup()    { this.play('popup'); },
    open()     { this.play('open'); },
    close()    { this.play('close'); },
    error()    { this.play('error'); },
    warning()  { this.play('warning'); },
    minimize() { this.play('minimize'); },
    maximize() { this.play('maximize'); },
    startup()  { this.play('startup'); },
    shutdown() { this.play('shutdown'); }
};
window.SOUND = SOUND;

let openMenu = null;
function closeMenu() {
    if (openMenu) {
        if (openMenu.layer) openMenu.layer.remove();
        if (openMenu.box) openMenu.box.remove();
        openMenu = null;
    }
    document.removeEventListener('keydown', onMenuEsc, true);
}
function onMenuEsc(e) { if (e.key === 'Escape') closeMenu(); }

function showMenu(anchor, items) {
    closeMenu();
    SOUND.popup();
    const layer = document.createElement('div');
    layer.style.cssText = 'position:fixed; top:0; left:0; right:0; bottom:0; z-index:99999;';
    const box = document.createElement('div');
    box.style.cssText = `position:fixed; z-index:100000; min-width:180px; background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; box-shadow:3px 3px 0 #808080; padding:2px; font-family:${WIN98_FONT}; font-size:11px; color:#000; user-select:none;`;
    items.forEach(item => {
        if (item.separator) {
            const sep = document.createElement('div');
            sep.style.cssText = 'height:0; border-top:1px solid #808080; border-bottom:1px solid #fff; margin:2px 4px;';
            box.appendChild(sep);
            return;
        }
        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; gap:20px; align-items:center; padding:3px 6px 3px 18px; cursor:pointer; white-space:nowrap;';
        const label = document.createElement('span');
        label.textContent = tt(item.label);
        row.appendChild(label);
        let rightEl = null;
        if (item.checked !== undefined) {
            rightEl = document.createElement('span');
            rightEl.style.cssText = 'width:12px; text-align:center; color:#000;';
            rightEl.textContent = item.checked ? '\u221A' : '';
            row.appendChild(rightEl);
        } else if (item.shortcut) {
            rightEl = document.createElement('span');
            rightEl.textContent = item.shortcut;
            rightEl.style.cssText = 'color:#808080;';
            row.appendChild(rightEl);
        }
        if (item.disabled) {
            row.style.color = '#808080';
            row.style.cursor = 'default';
            label.style.color = '#808080';
            if (rightEl) rightEl.style.color = '#c0c0c0';
        } else {
            row.addEventListener('mouseenter', () => {
                row.style.background = '#000080';
                row.style.color = '#fff';
                if (rightEl) rightEl.style.color = '#fff';
            });
            row.addEventListener('mouseleave', () => {
                row.style.background = '';
                row.style.color = '';
                if (rightEl) rightEl.style.color = item.checked !== undefined ? '#000' : '#808080';
            });
            row.addEventListener('click', (e) => {
                e.stopPropagation();
                closeMenu();
                SOUND.click();
                if (item.action) item.action();
            });
        }
        box.appendChild(row);
    });
    document.body.appendChild(layer);
    document.body.appendChild(box);
    const r = anchor.getBoundingClientRect();
    let x = r.left, y = r.bottom;
    const bw = box.offsetWidth, bh = box.offsetHeight;
    if (x + bw > window.innerWidth - 4) x = Math.max(0, window.innerWidth - bw - 4);
    if (y + bh > window.innerHeight - 4) y = Math.max(0, r.top - bh);
    box.style.left = x + 'px';
    box.style.top = y + 'px';
    layer.addEventListener('mousedown', closeMenu);
    openMenu = { layer, box };
    document.addEventListener('keydown', onMenuEsc, true);
}

function makeMenuBar(menus) {
    const bar = document.createElement('div');
    bar.style.cssText = 'display:flex; gap:1px; padding:2px 4px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0;';
    menus.forEach(m => {
        const span = document.createElement('span');
        span.style.cssText = 'padding:1px 7px; cursor:pointer; border:1px solid transparent; font-size:11px;';
        span.textContent = tt(m.label);
        span.addEventListener('click', (e) => {
            e.stopPropagation();
            showMenu(span, m.items);
        });
        bar.appendChild(span);
    });
    return bar;
}

function showAbout(appName) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed; inset:0; z-index:200000; background:rgba(0,0,0,0.35); display:flex; align-items:center; justify-content:center;';
    const box = document.createElement('div');
    box.style.cssText = `background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; box-shadow:3px 3px 0 #808080; width:320px; padding:12px; font-family:${WIN98_FONT}; font-size:11px; color:#000;`;
    box.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:14px;">
            ${WIN98_DESKTOP_ICONS.apply}
            <div>
                <b style="font-size:13px;">MUNDERES 27</b><br/>
                ${appName}<br/>
                <span style="color:#808080;">Version 27.0</span>
            </div>
        </div>
        <div style="text-align:center;">
            <button style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-size:11px; font-family:inherit; padding:3px 22px;">OK</button>
        </div>
    `;
    overlay.addEventListener('mousedown', () => overlay.remove());
    box.addEventListener('mousedown', e => e.stopPropagation());
    const ok = box.querySelector('button');
    ok.addEventListener('click', () => overlay.remove());
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    ok.focus();
}

// ── Dynamic image folder loading ───────────────────────────────────────────
// Reads the actual image files from folders like previous/2024/ so new photos
// appear without editing code. Tries a directory listing first (e.g. python
// -m http.server, nginx autoindex, caddy file browse), then an optional
// image-index.json manifest as a fallback.
const IMAGE_EXT_RE = /\.(jpe?g|png|gif|webp|bmp)$/i;

// GitHub repo mirror — used as a last-resort source for dynamic folder listings
// (local directory listings and manifests may not be served on hosts like Vercel).
const GITHUB_OWNER = 'mehmet-2023';
const GITHUB_REPO  = 'munderes27';
const GITHUB_BRANCH = 'main';
const GITHUB_API = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/`;

const folderImageCache = new Map();

function folderCacheKey(base) { return 'gh-folder:' + base; }

async function loadFolderImagesFromGitHub(path) {
    const key = folderCacheKey(path);
    try {
        const cached = sessionStorage.getItem(key);
        if (cached) return JSON.parse(cached);
    } catch (e) {}
    const res = await fetch(GITHUB_API + path, { cache: 'no-store' });
    if (!res.ok) return [];
    const entries = await res.json();
    if (!Array.isArray(entries)) return [];
    const files = entries
        .filter(e => e.type === 'file' && IMAGE_EXT_RE.test(e.name) && e.download_url)
        .map(e => ({ name: e.name, src: e.download_url }));
    if (files.length) {
        try { sessionStorage.setItem(key, JSON.stringify(files)); } catch (e) {}
    }
    return files;
}

function joinImagePath(base, href) {
    const clean = String(href).split(/[?#]/)[0];
    if (/^(https?:)?\/\//i.test(clean)) return clean;
    return base + clean.split('/').pop();
}

function parseDirListing(base, html) {
    const files = [];
    const re = /<a[^>]+href="([^"]*)"[^>]*>([^<]*)<\/a>/gi;
    let m;
    while ((m = re.exec(html))) {
        let name = (m[2] || '').trim() || decodeURIComponent((m[1] || '').split('/').pop()).trim();
        if (!name || name === '../' || name.endsWith('/')) continue;
        if (!IMAGE_EXT_RE.test(name)) continue;
        files.push({ name: decodeURIComponent(name), src: joinImagePath(base, m[1]) });
    }
    return files;
}

async function loadFolderImages(path) {
    const base = path.endsWith('/') ? path : path + '/';
    if (folderImageCache.has(base)) return folderImageCache.get(base);

    // Try the local directory listing + manifest and the GitHub mirror in
    // parallel, then take the first source that returns any images.
    const local = (async () => {
        try {
            const res = await fetch(base, { cache: 'no-store' });
            if (res.ok) {
                const text = await res.text();
                const files = parseDirListing(base, text);
                if (files.length) return files;
            }
        } catch (e) { /* fall through to manifest */ }
        try {
            const res = await fetch(base + 'image-index.json', { cache: 'no-store' });
            if (res.ok) {
                const data = await res.json();
                const arr = Array.isArray(data) ? data : (data.images || []);
                const files = arr.map(f => {
                    if (typeof f === 'string') return { name: f.split('/').pop(), src: joinImagePath(base, f) };
                    return { name: f.name || f.file, src: joinImagePath(base, f.src || f.file) };
                }).filter(f => f.name && IMAGE_EXT_RE.test(f.name));
                if (files.length) return files;
            }
        } catch (e) { /* nothing found */ }
        return [];
    })();

    const [localFiles, ghFiles] = await Promise.all([local, loadFolderImagesFromGitHub(base).catch(() => [])]);
    const files = (localFiles && localFiles.length) ? localFiles : ghFiles;
    folderImageCache.set(base, files);
    return files;
}

function slugify(name) {
    return name.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '').toLowerCase() || 'file';
}

const TEAM_LOG_FILES = ['team/John Doe.log', 'team/Jane Smith.log', 'team/Alice Johnson.log'];

const DESKTOP_APPS = [
    {
        id: 'conf_details', name: 'Conference details', nameTr: 'Konferans Detayları', type: 'folder', icon: WIN98_ICONS.folder, desktopIcon: WIN98_DESKTOP_ICONS.folder,
        children: [
            { id: 'event_location', name: 'Event Location', nameTr: 'Etkinlik Konumu', type: 'map', icon: WIN98_ICONS.map, src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.811568221683!2d-74.004127!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1716301321000!5m2!1sen!2sus' },
            {
                id: 'schedule', name: 'Schedule', nameTr: 'Program', type: 'folder', icon: WIN98_ICONS.folder,
                children: [
                    { id: 'day1', name: 'Day 1', nameTr: '1. Gün', type: 'schedule', src: 'schedule.json', day: 'day1', icon: WIN98_ICONS.notepad },
                    { id: 'day2', name: 'Day 2', nameTr: '2. Gün', type: 'schedule', src: 'schedule.json', day: 'day2', icon: WIN98_ICONS.notepad },
                    { id: 'day3', name: 'Day 3', nameTr: '3. Gün', type: 'schedule', src: 'schedule.json', day: 'day3', icon: WIN98_ICONS.notepad }
                ]
            },
            { id: 'dresscode', name: 'Dresscode', nameTr: 'Kıyafet Kuralı', type: 'notepad', icon: WIN98_ICONS.notepad, content: 'Dresscode for the conference is Western Business Attire (WBA).', contentTr: 'Konferans için kıyafet kuralı Batı İş Kıyafeti (WBA) olarak belirlenmiştir.' }
        ]
    },
    {
        id: 'prev_editions', name: 'Previous editions', nameTr: 'Önceki Edisyonlar', type: 'folder', icon: WIN98_ICONS.folder, desktopIcon: WIN98_DESKTOP_ICONS.folder,
        children: [
            { id: 'prev_2024', name: '2024', type: 'folder', path: 'previous/2024/', icon: WIN98_ICONS.folder },
            { id: 'prev_2025', name: '2025', type: 'folder', path: 'previous/2025/', icon: WIN98_ICONS.folder },
            { id: 'prev_2026', name: '2026', type: 'folder', path: 'previous/2026/', icon: WIN98_ICONS.folder }
        ]
    },
    { id: 'sponsorships', name: 'Sponsorships', nameTr: 'Sponsorluklar', type: 'folder', path: 'sponsorships/', icon: WIN98_ICONS.folder, desktopIcon: WIN98_DESKTOP_ICONS.folder, children: [] },
    {
        id: 'our_team', name: 'Our Team', nameTr: 'Ekibimiz', type: 'folder', icon: WIN98_ICONS.folder, desktopIcon: WIN98_DESKTOP_ICONS.folder,
        children: [
            { id: 'team_john', name: 'John Doe.log', type: 'datalog', icon: WIN98_ICONS.datalog, src: 'team/John Doe.log', teamFiles: TEAM_LOG_FILES },
            { id: 'team_jane', name: 'Jane Smith.log', type: 'datalog', icon: WIN98_ICONS.datalog, src: 'team/Jane Smith.log', teamFiles: TEAM_LOG_FILES },
            { id: 'team_alice', name: 'Alice Johnson.log', type: 'datalog', icon: WIN98_ICONS.datalog, src: 'team/Alice Johnson.log', teamFiles: TEAM_LOG_FILES }
        ]
    },
    { id: 'sec_letter',    name: 'Letter From Secretary General', nameTr: 'Genel Sekreterden Mektup', type: 'notepad', content: 'Dear participants,\n\nIt gives us great pleasure to welcome you to MUNDERES\'26. As Secretary-General, I feel truly proud and excited to witness the third edition of this conference come to life. Our team has spent months creating an event where everyone can learn, debate, and have a good time together.\n\nOur goal is to build a space where young people can freely express their ideas, think critically, and find new solutions to global issues. We believe that youth has the power to make real change in the world.\n\nEvery speech you make, every draft resolution you write, and every debate you join during MUNDERES\'26 will help you grow both as a delegate and as an individual. We hope this conference brings you new experiences, friendships, and memories that you will always remember.\n\nThank you for joining us and being part of MUNDERES\'26. We wish you all success in your committees and hope you enjoy this unforgettable experience.', contentTr: 'Saygıdeğer katılımcılar,\n\nSizleri MUNDERES\'26\'ya ağırlamaktan büyük mutluluk duyuyoruz. Genel Sekreter olarak, bu konferansın üçüncü edisyonunun hayat bulmasına tanıklık etmekten gerçekten gurur ve heyecan duyuyorum. Ekibimiz, herkesin birlikte öğrenebileceği, tartışabileceği ve keyifli vakit geçirebileceği bir etkinlik yaratmak için aylar harcadı.\n\nAmacımız, gençlerin fikirlerini özgürce ifade edebileceği, eleştirel düşünebileceği ve küresel sorunlara yeni çözümler bulabileceği bir alan inşa etmek. Gençliğin dünyada gerçek değişim yaratma gücüne sahip olduğuna inanıyoruz.\n\nMUNDERES\'26 boyunca yapacağınız her konuşma, yazacağınız her karar taslağı ve katılacağınız her tartışma, hem bir delege hem de bir birey olarak gelişmenize yardımcı olacak. Bu konferansın size her zaman hatırlayacağınız yeni deneyimler, dostluklar ve anılar kazandıracağını umuyoruz.\n\nBize katıldığınız ve MUNDERES\'26\'nın bir parçası olduğunuz için teşekkür ederiz. Komitelerinizde hepinize başarılar diler ve bu unutulmaz deneyimin tadını çıkarmanızı umarız.', icon: WIN98_ICONS.notepad,    desktopIcon: WIN98_DESKTOP_ICONS.notepad },
    { id: 'recycle_bin',   name: 'Recycle bin', nameTr: 'Geri Dönüşüm Kutusu', type: 'folder', children: [], icon: WIN98_ICONS.recycleBin, desktopIcon: WIN98_DESKTOP_ICONS.recycleBin },
    { id: 'help',          name: 'Help-FAQs', nameTr: 'Yardım-SSS', type: 'help', src: 'help.json', icon: WIN98_ICONS.help,       desktopIcon: WIN98_DESKTOP_ICONS.help },
    { id: 'settings',      name: 'Settings', nameTr: 'Denetim Masası', type: 'settings', icon: WIN98_ICONS.settings,   desktopIcon: WIN98_DESKTOP_ICONS.settings },
    { id: 'apply',         name: 'Apply', nameTr: 'Başvur', type: 'apply', src: 'applications.json', icon: WIN98_ICONS.apply,      desktopIcon: WIN98_DESKTOP_ICONS.apply },
    { id: 'committees',    name: 'Committees', nameTr: 'Komiteler', type: 'committees', src: 'committees.json', icon: WIN98_ICONS.committees, desktopIcon: WIN98_DESKTOP_ICONS.committees }
];

// ── Grid snap constants ────────────────────────────────────────────────────
const GRID_COLS_PADDING = 10; // px from left edge
const GRID_ROWS_PADDING = 10; // px from top edge
const CELL_W = 90;            // grid cell width  (icon width 85 + gap)
const CELL_H = 90;            // grid cell height (icon + label + gap)

// Map of "col,row" → appId for occupied cells
const gridOccupied = {};

function cellKey(col, row) { return `${col},${row}`; }

function gridToPixel(col, row) {
    return {
        x: GRID_COLS_PADDING + col * CELL_W,
        y: GRID_ROWS_PADDING + row * CELL_H
    };
}

function pixelToGrid(px, py) {
    return {
        col: Math.round((px - GRID_COLS_PADDING) / CELL_W),
        row: Math.round((py - GRID_ROWS_PADDING) / CELL_H)
    };
}

function getContainerSize() {
    const c = document.getElementById('desktop-icons-container');
    return { w: c.clientWidth, h: c.clientHeight };
}

function maxCols() { return Math.max(1, Math.floor((getContainerSize().w - GRID_COLS_PADDING) / CELL_W)); }
function maxRows() { return Math.max(1, Math.floor((getContainerSize().h - GRID_ROWS_PADDING) / CELL_H)); }

// Find the nearest empty grid cell to (col, row), searching outward
function findNearestEmpty(preferCol, preferRow, excludeId) {
    const cols = maxCols();
    const rows = maxRows();

    preferCol = Math.max(0, Math.min(cols - 1, preferCol));
    preferRow = Math.max(0, Math.min(rows - 1, preferRow));

    // BFS outward from preferred cell
    const visited = new Set();
    const queue = [{ col: preferCol, row: preferRow }];
    visited.add(cellKey(preferCol, preferRow));

    while (queue.length) {
        const { col, row } = queue.shift();
        const key = cellKey(col, row);
        const occupant = gridOccupied[key];
        if (!occupant || occupant === excludeId) return { col, row };

        for (const [dc, dr] of [[0,1],[1,0],[0,-1],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]) {
            const nc = col + dc, nr = row + dr;
            const nk = cellKey(nc, nr);
            if (nc >= 0 && nc < cols && nr >= 0 && nr < rows && !visited.has(nk)) {
                visited.add(nk);
                queue.push({ col: nc, row: nr });
            }
        }
    }
    // fallback: first row after grid
    return { col: 0, row: rows };
}

function placeIconAt(iconEl, appId, col, row) {
    // Remove old occupation
    for (const key of Object.keys(gridOccupied)) {
        if (gridOccupied[key] === appId) delete gridOccupied[key];
    }
    gridOccupied[cellKey(col, row)] = appId;
    iconEl.dataset.gridCol = col;
    iconEl.dataset.gridRow = row;

    const { x, y } = gridToPixel(col, row);
    iconEl.style.left = x + 'px';
    iconEl.style.top  = y + 'px';
}

// ── Drag ghost element ─────────────────────────────────────────────────────
let ghostEl = null;

function showGhost(col, row) {
    if (!ghostEl) {
        ghostEl = document.createElement('div');
        ghostEl.style.cssText = `
            position:absolute; width:${CELL_W - 4}px; height:${CELL_H - 4}px;
            border:1px dashed rgba(255,255,255,0.6);
            background:rgba(255,255,255,0.08);
            pointer-events:none; z-index:500; box-sizing:border-box;
        `;
        document.getElementById('desktop-icons-container').appendChild(ghostEl);
    }
    const { x, y } = gridToPixel(col, row);
    ghostEl.style.left = x + 'px';
    ghostEl.style.top  = y + 'px';
    ghostEl.style.display = 'block';
}

function hideGhost() {
    if (ghostEl) ghostEl.style.display = 'none';
}

// ── Make a desktop icon draggable with grid-snap (mouse + touch) ────────────
function makeIconDraggable(iconEl, app) {
    let dragging = false;
    let startPointerX, startPointerY;
    let startLeft, startTop;
    const DRAG_THRESHOLD = 8;

    function beginDrag(clientX, clientY) {
        startPointerX = clientX;
        startPointerY = clientY;
        startLeft     = iconEl.offsetLeft;
        startTop      = iconEl.offsetTop;
        dragging      = false;
    }

    function moveDrag(clientX, clientY) {
        const dx = clientX - startPointerX;
        const dy = clientY - startPointerY;

        if (!dragging && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
            dragging = true;
            iconEl.style.opacity      = '0.6';
            iconEl.style.zIndex       = '9000';
            iconEl.style.pointerEvents = 'none';
            document.querySelectorAll('.win98-icon').forEach(el => el.classList.remove('selected'));
        }
        if (!dragging) return;

        const px = startLeft + dx;
        const py = startTop  + dy;
        iconEl.style.left = px + 'px';
        iconEl.style.top  = py + 'px';

        const { col, row } = pixelToGrid(px, py);
        showGhost(findNearestEmpty(col, row, app.id).col, findNearestEmpty(col, row, app.id).row);
    }

    function endDrag() {
        iconEl.style.opacity       = '1';
        iconEl.style.zIndex        = '1';
        iconEl.style.pointerEvents = '';

        if (dragging) {
            dragging = false;
            hideGhost();
            const px = iconEl.offsetLeft;
            const py = iconEl.offsetTop;
            const { col, row } = pixelToGrid(px, py);
            const best = findNearestEmpty(col, row, app.id);
            placeIconAt(iconEl, app.id, best.col, best.row);
        }
    }

    // ── Mouse ──────────────────────────────────────────────────────────────
    iconEl.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        beginDrag(e.clientX, e.clientY);

        function onMove(ev) { moveDrag(ev.clientX, ev.clientY); }
        function onUp()     { endDrag(); document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); }
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup',   onUp);
    });

    // ── Touch ──────────────────────────────────────────────────────────────
    iconEl.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        // Don't preventDefault here so click/dblclick still fires on short taps
        const t = e.touches[0];
        beginDrag(t.clientX, t.clientY);

        function onMove(ev) {
            if (ev.touches.length !== 1) return;
            ev.preventDefault(); // prevent page scroll only when we know it's a drag
            moveDrag(ev.touches[0].clientX, ev.touches[0].clientY);
        }
        function onUp() {
            endDrag();
            iconEl.removeEventListener('touchmove',   onMove);
            iconEl.removeEventListener('touchend',    onUp);
            iconEl.removeEventListener('touchcancel', onUp);
        }
        iconEl.addEventListener('touchmove',   onMove, { passive: false });
        iconEl.addEventListener('touchend',    onUp);
        iconEl.addEventListener('touchcancel', onUp);
    }, { passive: true });
}


// ── State ──────────────────────────────────────────────────────────────────
let openWindows   = {};
let activeWindowId = null;
let zIndexCounter  = 10;

// ── Desktop init ───────────────────────────────────────────────────────────
function initDesktop() {
    const container      = document.getElementById('desktop-icons-container');
    const startMenuItems = document.getElementById('start-menu-items');
    container.innerHTML      = '';
    startMenuItems.innerHTML = '';

    DESKTOP_APPS.forEach((app, index) => {
        // 2-column layout in all views
        const col = index % 2;
        const row = Math.floor(index / 2);

        const iconEl = document.createElement('div');
        iconEl.className = 'win98-icon';
        iconEl.dataset.id = app.id;
        // Absolute positioning for grid system
        iconEl.style.position = 'absolute';
        iconEl.style.width    = (CELL_W - 4) + 'px';
        iconEl.innerHTML = `${app.desktopIcon}<span class="win98-icon-text">${appName(app)}</span>`;

        placeIconAt(iconEl, app.id, col, row);

        iconEl.addEventListener('click', (e) => {
            if (e.defaultPrevented) return;
            e.stopPropagation();
            document.querySelectorAll('.win98-icon').forEach(el => el.classList.remove('selected'));
            iconEl.classList.add('selected');
        });

        if (isTouchDevice) {
            let touchStartTime = 0;
            let touchMoved = false;
            iconEl.addEventListener('touchstart', (e) => {
                if (e.touches.length !== 1) return;
                touchStartTime = Date.now();
                touchMoved = false;
            }, { passive: true });
            iconEl.addEventListener('touchmove', () => { touchMoved = true; }, { passive: true });
            iconEl.addEventListener('touchend', (e) => {
                if (touchMoved) return;
                if (Date.now() - touchStartTime > 300) return;
                e.preventDefault();
                document.querySelectorAll('.win98-icon').forEach(el => el.classList.remove('selected'));
                iconEl.classList.add('selected');
                openItem(app);
            });
        } else {
            iconEl.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                openItem(app);
            });
        }

        makeIconDraggable(iconEl, app);
        container.appendChild(iconEl);

        // Start menu entry
        const startItem = document.createElement('div');
        startItem.className = 'win98-start-item';
        startItem.dataset.appId = app.id;
        startItem.innerHTML = `${app.icon}<span style="font-size:11px;">${appName(app)}</span>`;
        startItem.addEventListener('click', () => {
            openItem(app);
            toggleStartMenu(false);
        });
        startMenuItems.appendChild(startItem);
    });

    // Add divider and system actions
    const startDivider = document.createElement('div');
    startDivider.className = 'win98-start-divider';
    startMenuItems.appendChild(startDivider);

    const logOffItem = document.createElement('div');
    logOffItem.className = 'win98-start-item';
    logOffItem.innerHTML = `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><path d="M8,16 L16,8 L16,12 L28,12 L28,20 L16,20 L16,24 Z" fill="#fff" stroke="#000" stroke-width="1"/><path d="M12,4 L4,4 L4,28 L12,28" fill="none" stroke="#000" stroke-width="2"/></svg><span data-i18n="Log Off..." style="font-size:11px;">${tt('Log Off...')}</span>`;
    logOffItem.addEventListener('click', () => {
        toggleStartMenu(false);
        document.getElementById('win98-desktop').style.display = 'none';
        document.getElementById('win98-login-screen').style.display = 'flex';
        document.getElementById('login-username').value = 'user';
        document.getElementById('login-password').value = '1234';
    });
    startMenuItems.appendChild(logOffItem);

    const shutDownItem = document.createElement('div');
    shutDownItem.className = 'win98-start-item';
    shutDownItem.innerHTML = `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><circle cx="16" cy="16" r="12" fill="#f00" stroke="#000" stroke-width="1"/><path d="M16,6 L16,16" stroke="#fff" stroke-width="3"/><path d="M10,10 A8,8 0 1,0 22,10" fill="none" stroke="#fff" stroke-width="3"/></svg><span data-i18n="Shut Down..." style="font-size:11px;">${tt('Shut Down...')}</span>`;
    shutDownItem.addEventListener('click', () => {
        toggleStartMenu(false);
        if (window.shutDownOS) window.shutDownOS();
    });
    startMenuItems.appendChild(shutDownItem);

let isDesktopEventsBound = false;

    if (!isDesktopEventsBound) {
        document.getElementById('win98-desktop').addEventListener('click', (e) => {
            if (!e.target.closest('.win98-icon') && !window.__wasDragging) {
                document.querySelectorAll('.win98-icon').forEach(el => el.classList.remove('selected'));
            }
            toggleStartMenu(false);
        });

        setupTaskbar();
        updateClock();
        setInterval(updateClock, 1000);

        isDesktopEventsBound = true;
    }
}

// ── Taskbar ────────────────────────────────────────────────────────────────
function setupTaskbar() {
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleStartMenu();
    });
}

function toggleStartMenu(forceState) {
    const menu = document.getElementById('start-menu');
    const btn  = document.getElementById('start-btn');
    const next = forceState !== undefined ? forceState : menu.style.display !== 'flex';
    if (next) {
        menu.style.display = 'flex';
        btn.classList.add('active');
    } else {
        menu.style.display = 'none';
        btn.classList.remove('active');
    }
}

function updateClock() {
    const el  = document.getElementById('tray-clock');
    const now = new Date();
    const m   = now.getMinutes().toString().padStart(2, '0');
    if (SETTINGS.clock24) {
        const h24 = now.getHours().toString().padStart(2, '0');
        el.textContent = `${h24}:${m}`;
    } else {
        let h = now.getHours();
        const ap = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;
        el.textContent = `${h}:${m} ${ap}`;
    }
}

function translateDataI18n(root) {
    if (!root) return;
    root.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
}

function applyLoginLanguage() {
    translateDataI18n(document.getElementById('win98-login-screen'));
}

function applyLanguage() {
    applyTextSize();
    updateClock();

    // Desktop icons
    document.querySelectorAll('#desktop-icons-container .win98-icon').forEach(el => {
        const app = findAppById(el.dataset.id);
        const label = el.querySelector('.win98-icon-text');
        if (app && label) label.textContent = appName(app);
    });

    // Start menu app entries + system actions
    document.querySelectorAll('#start-menu-items .win98-start-item').forEach(item => {
        const app = item.dataset.appId ? findAppById(item.dataset.appId) : null;
        const span = item.querySelector('span');
        if (app && span) span.textContent = appName(app);
    });

    // Start button
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        const strong = startBtn.querySelector('strong');
        if (strong) strong.textContent = t('Start');
    }

    // Re-render open windows so titles + menus refresh in the new language
    Object.keys(openWindows).forEach(id => {
        const w = openWindows[id];
        if (!w || !w.app) return;
        if (w.titleSpan) w.titleSpan.textContent = appName(w.app);
        const taskSpan = w.taskItem.querySelector('span');
        if (taskSpan) taskSpan.textContent = appName(w.app);
        if (w.contentEl) {
            w.contentEl.innerHTML = '';
            renderAppContent(w.app, w.contentEl);
        }
    });
}

// ── Filesystem navigation helpers ──────────────────────────────────────────
function findAppById(id) {
    const stack = [...DESKTOP_APPS];
    while (stack.length) {
        const node = stack.shift();
        if (node.id === id) return node;
        if (node.children) stack.push(...node.children);
    }
    return null;
}

const parentMap = {};
(function buildParents(nodes, parent) {
    for (const n of nodes) {
        if (parent) parentMap[n.id] = parent;
        if (n.children) buildParents(n.children, n);
    }
})(DESKTOP_APPS, null);

function isFolder(item) { return item && item.type === 'folder'; }

function parentOf(id) { return parentMap[id] || null; }

// Folders open a real Explorer window; files open their own app window
function openItem(item) {
    if (!item) return;
    if (isFolder(item)) openFolderExplorer(item);
    else openAppWindow(item);
}

function openFolderExplorer(folderApp) {
    openAppWindow({
        id: `explorer_${folderApp.id}`,
        name: folderApp.name,
        nameTr: folderApp.nameTr,
        type: 'explorer',
        root: folderApp.id,
        icon: folderApp.icon || WIN98_ICONS.folder
    });
}

// ── Window management ──────────────────────────────────────────────────────
function openAppWindow(app) {
    if (openWindows[app.id]) { focusWindow(app.id); return; }

    zIndexCounter++;
    const winEl = document.createElement('div');
    winEl.className  = 'win98-window';
    winEl.id         = `window-${app.id}`;
    winEl.style.zIndex = zIndexCounter;

    const isMobileLayout = window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;

    const sizeByType = {
        explorer: { w: 660, h: 410 },
        image:    { w: 540, h: 400 },
        notepad:  { w: 460, h: 320 },
        datalog:  { w: 460, h: 320 },
        help:     { w: 600, h: 420 },
        schedule: { w: 460, h: 320 },
        settings: { w: 540, h: 440 },
        map:      { w: 540, h: 380 },
        apply:    { w: 620, h: 400 },
        browser:  { w: 640, h: 430 },
        committees: { w: 780, h: 500 },
        committee_detail: { w: 700, h: 520 }
    };
    const size = sizeByType[app.type];

    if (isMobileLayout) {
        winEl.style.left = '5vw';
        winEl.style.top  = '5vh';
        if (app.type === 'committee_detail') {
            winEl.style.width  = '90vw';
            winEl.style.height = '80vh';
        } else if (app.type === 'committees') {
            winEl.style.width  = '90vw';
            winEl.style.height = '80vh';
        }
        // other types: width and height handled by mobile CSS
    } else if (size) {
        const offsetX = 40 + (Object.keys(openWindows).length * 20) % 200;
        const offsetY = 40 + (Object.keys(openWindows).length * 20) % 150;
        winEl.style.left   = offsetX + 'px';
        winEl.style.top    = offsetY + 'px';
        winEl.style.width  = size.w + 'px';
        winEl.style.height = size.h + 'px';
    } else {
        const offsetX = 40 + (Object.keys(openWindows).length * 20) % 200;
        const offsetY = 40 + (Object.keys(openWindows).length * 20) % 150;
        winEl.style.left   = offsetX + 'px';
        winEl.style.top    = offsetY + 'px';
        winEl.style.width  = '420px';
        winEl.style.height = '280px';
    }

    winEl.innerHTML = `
        <div class="win98-window-titlebar" id="titlebar-${app.id}">
            <div class="win98-window-title-text">
                ${app.icon}
                <span>${appName(app)}</span>
            </div>
            <div class="win98-window-controls">
                <div class="win98-win-btn win-minimize">_</div>
                <div class="win98-win-btn win-maximize">□</div>
                <div class="win98-win-btn win-close">✕</div>
            </div>
        </div>
        <div class="win98-window-content" id="wincontent-${app.id}">
        </div>
    `;

    document.getElementById('win98-desktop').appendChild(winEl);

    // Call dynamic renderer based on app.type
    const contentEl = document.getElementById(`wincontent-${app.id}`);
    renderAppContent(app, contentEl);

    const taskItem = document.createElement('div');
    taskItem.className = 'win98-task-item active';
    taskItem.id        = `task-${app.id}`;
    taskItem.innerHTML = `${app.icon}<span>${appName(app)}</span>`;
    taskItem.addEventListener('click', () => {
        if (activeWindowId === app.id) {
            winEl.style.display = 'none';
            taskItem.classList.remove('active');
            activeWindowId = null;
        } else {
            winEl.style.display = 'flex';
            focusWindow(app.id);
        }
    });

    document.getElementById('taskbar-tasks').appendChild(taskItem);
    const titleSpan = winEl.querySelector('.win98-window-title-text span');
    openWindows[app.id] = { winEl, taskItem, app, titleSpan, contentEl };
    winEl.dataset.winId = app.id;
    focusWindow(app.id);
    SOUND.open();

    makeDraggable(winEl, document.getElementById(`titlebar-${app.id}`));
    makeResizable(winEl);

    winEl.querySelector('.win-close').addEventListener('click', () => closeWindow(app.id));
    winEl.querySelector('.win-minimize').addEventListener('click', () => {
        winEl.style.display = 'none';
        taskItem.classList.remove('active');
        if (activeWindowId === app.id) activeWindowId = null;
    });
    winEl.querySelector('.win-maximize').addEventListener('click', () => {
        if (winEl.dataset.maximized === 'true') {
            winEl.style.top    = winEl.dataset.oldTop;
            winEl.style.left   = winEl.dataset.oldLeft;
            winEl.style.width  = winEl.dataset.oldWidth;
            winEl.style.height = winEl.dataset.oldHeight;
            winEl.dataset.maximized = 'false';
            winEl.classList.remove('win98-maximized');
        } else {
            winEl.dataset.oldTop    = winEl.style.top;
            winEl.dataset.oldLeft   = winEl.style.left;
            winEl.dataset.oldWidth  = winEl.style.width;
            winEl.dataset.oldHeight = winEl.style.height;
            winEl.style.top    = '0px';
            winEl.style.left   = '0px';
            winEl.style.width  = '100%';
            winEl.style.height = 'calc(100% - 30px)';
            winEl.dataset.maximized = 'true';
            winEl.classList.add('win98-maximized');
        }
    });
    winEl.addEventListener('mousedown', () => focusWindow(app.id));
}

function focusWindow(id) {
    activeWindowId = id;
    zIndexCounter++;
    Object.keys(openWindows).forEach(winId => {
        const item = openWindows[winId];
        const isActive = winId === id;
        if (isActive) {
            item.winEl.style.zIndex = zIndexCounter;
            item.winEl.querySelector('.win98-window-titlebar').classList.remove('inactive');
            item.taskItem.classList.add('active');
        } else {
            item.winEl.querySelector('.win98-window-titlebar').classList.add('inactive');
            item.taskItem.classList.remove('active');
        }
    });
}

function closeWindow(id) {
    closeMenu();
    if (openWindows[id]) {
        openWindows[id].winEl.remove();
        openWindows[id].taskItem.remove();
        delete openWindows[id];
        if (activeWindowId === id) activeWindowId = null;
        SOUND.close();
    }
}

// ── Window drag (titlebar) — mouse + touch ─────────────────────────────────
function makeDraggable(winEl, handleEl) {
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0;

    // ── Mouse ──────────────────────────────────────────────────────────────
    handleEl.addEventListener('mousedown', onMouseDown);

    function onMouseDown(e) {
        if (e.target.classList.contains('win98-win-btn')) return;
        if (winEl.dataset.maximized === 'true') return;
        e.preventDefault();
        p3 = e.clientX; p4 = e.clientY;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup',   onMouseUp);
    }
    function onMouseMove(e) {
        e.preventDefault();
        p1 = p3 - e.clientX; p2 = p4 - e.clientY;
        p3 = e.clientX;      p4 = e.clientY;
        winEl.style.top  = (winEl.offsetTop  - p2) + 'px';
        winEl.style.left = (winEl.offsetLeft - p1) + 'px';
    }
    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup',   onMouseUp);
    }

    // ── Touch ──────────────────────────────────────────────────────────────
    handleEl.addEventListener('touchstart', onTouchDown, { passive: false });

    function onTouchDown(e) {
        if (e.target.classList.contains('win98-win-btn')) return;
        if (winEl.dataset.maximized === 'true') return;
        if (e.touches.length !== 1) return;
        e.preventDefault();
        p3 = e.touches[0].clientX;
        p4 = e.touches[0].clientY;
        document.addEventListener('touchmove',   onTouchMove, { passive: false });
        document.addEventListener('touchend',    onTouchUp);
        document.addEventListener('touchcancel', onTouchUp);
    }
    function onTouchMove(e) {
        if (e.touches.length !== 1) return;
        e.preventDefault();
        const tx = e.touches[0].clientX;
        const ty = e.touches[0].clientY;
        p1 = p3 - tx; p2 = p4 - ty;
        p3 = tx;      p4 = ty;
        winEl.style.top  = (winEl.offsetTop  - p2) + 'px';
        winEl.style.left = (winEl.offsetLeft - p1) + 'px';
    }
    function onTouchUp() {
        document.removeEventListener('touchmove',   onTouchMove);
        document.removeEventListener('touchend',    onTouchUp);
        document.removeEventListener('touchcancel', onTouchUp);
    }
}

// Drag-resize from any edge/corner (Pointer Events → works for mouse AND touch)
function makeResizable(winEl) {
    const MIN_W = 250, MIN_H = 150;
    const handles = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
    let dir = null;
    let startX = 0, startY = 0, startW = 0, startH = 0, startLeft = 0, startTop = 0;

    function onDown(e, d) {
        if (winEl.dataset.maximized === 'true') return;
        if (e.touches && e.touches.length !== 1) return;
        const pt = e.touches ? e.touches[0] : e;
        startX = pt.clientX;
        startY = pt.clientY;
        startW = winEl.offsetWidth;
        startH = winEl.offsetHeight;
        startLeft = winEl.offsetLeft;
        startTop = winEl.offsetTop;
        dir = d;
        e.preventDefault();
        focusWindow(winEl.dataset.winId);
        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
        document.addEventListener('pointercancel', onUp);
    }
    function onMove(e) {
        if (!dir) return;
        const pt = e.touches ? e.touches[0] : e;
        const dx = pt.clientX - startX;
        const dy = pt.clientY - startY;
        let w = startW, h = startH, left = startLeft, top = startTop;
        if (dir.includes('e')) w = Math.max(MIN_W, startW + dx);
        if (dir.includes('s')) h = Math.max(MIN_H, startH + dy);
        if (dir.includes('w')) { w = Math.max(MIN_W, startW - dx); left = startLeft + (startW - w); }
        if (dir.includes('n')) { h = Math.max(MIN_H, startH - dy); top = startTop + (startH - h); }
        left = Math.max(0, left);
        top = Math.max(0, top);
        winEl.style.width  = w + 'px';
        winEl.style.height = h + 'px';
        winEl.style.left   = left + 'px';
        winEl.style.top    = top + 'px';
        e.preventDefault();
    }
    function onUp() {
        dir = null;
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerup', onUp);
        document.removeEventListener('pointercancel', onUp);
    }

    handles.forEach(d => {
        const el = document.createElement('div');
        el.className = 'win98-resize win98-resize-' + d;
        el.setAttribute('aria-hidden', 'true');
        el.addEventListener('pointerdown', (e) => onDown(e, d));
        winEl.appendChild(el);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    applyTextSize();
    applyWallpaper();
    applyLoginLanguage();
    SOUND.load();
    initDesktop();
    applyLanguage();

    // ── Translucent selection rectangle ──
    {
        const desktop = document.getElementById('win98-desktop');
        const iconsContainer = document.getElementById('desktop-icons-container');
        const selBox = document.createElement('div');
        selBox.style.cssText = 'position:absolute; border:1px dashed #000080; background:rgba(0,0,180,0.18); display:none; z-index:999999; pointer-events:none;';
        iconsContainer.appendChild(selBox);
        let dragging = false, startX = 0, startY = 0;

        function toContainerCoords(clientX, clientY) {
            const cr = iconsContainer.getBoundingClientRect();
            return { x: clientX - cr.left, y: clientY - cr.top };
        }

        function updateSelBox(cx, cy) {
            const x = Math.min(cx, startX);
            const y = Math.min(cy, startY);
            const w = Math.abs(cx - startX);
            const h = Math.abs(cy - startY);
            if (w > 3 || h > 3) window.__wasDragging = true;
            selBox.style.left = x + 'px';
            selBox.style.top = y + 'px';
            selBox.style.width = w + 'px';
            selBox.style.height = h + 'px';
            const selRect = { left: x, top: y, right: x + w, bottom: y + h };
            const cr = iconsContainer.getBoundingClientRect();
            document.querySelectorAll('#desktop-icons-container .win98-icon').forEach(icon => {
                const r = icon.getBoundingClientRect();
                const rLeft = r.left - cr.left;
                const rTop = r.top - cr.top;
                const rRight = rLeft + r.width;
                const rBottom = rTop + r.height;
                const hit = !(rRight < selRect.left || rLeft > selRect.right || rBottom < selRect.top || rTop > selRect.bottom);
                icon.classList.toggle('selected', hit);
            });
        }

        function startDrag(clientX, clientY) {
            dragging = true;
            window.__wasDragging = false;
            const c = toContainerCoords(clientX, clientY);
            startX = c.x;
            startY = c.y;
            selBox.style.left = startX + 'px';
            selBox.style.top = startY + 'px';
            selBox.style.width = '0';
            selBox.style.height = '0';
            selBox.style.display = 'block';
            document.querySelectorAll('.win98-icon').forEach(el => el.classList.remove('selected'));
        }

        function endDrag() {
            if (dragging) {
                dragging = false;
                selBox.style.display = 'none';
                setTimeout(() => { window.__wasDragging = false; }, 50);
            }
        }

        // Mouse events
        desktop.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            if (e.target.closest('.win98-window, .win98-start-menu, .win98-taskbar, .win98-icon')) return;
            startDrag(e.clientX, e.clientY);
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!dragging) return;
            const c = toContainerCoords(e.clientX, e.clientY);
            updateSelBox(c.x, c.y);
        });

        document.addEventListener('mouseup', endDrag);

        // Touch events
        desktop.addEventListener('touchstart', (e) => {
            if (e.target.closest('.win98-window, .win98-start-menu, .win98-taskbar, .win98-icon')) return;
            if (e.touches.length !== 1) return;
            const touch = e.touches[0];
            startDrag(touch.clientX, touch.clientY);
            e.preventDefault();
        }, { passive: false });

        document.addEventListener('touchmove', (e) => {
            if (!dragging) return;
            if (e.touches.length !== 1) { endDrag(); return; }
            const touch = e.touches[0];
            const c = toContainerCoords(touch.clientX, touch.clientY);
            updateSelBox(c.x, c.y);
            e.preventDefault();
        }, { passive: false });

        document.addEventListener('touchend', endDrag);
        document.addEventListener('touchcancel', endDrag);
    }

    const loginScreen = document.getElementById('win98-login-screen');
    const desktop = document.getElementById('win98-desktop');
    const loginUser = document.getElementById('login-username');
    const loginPass = document.getElementById('login-password');
    const loginOk = document.getElementById('login-ok-btn');
    const loginCancel = document.getElementById('login-cancel-btn');

    loginPass.addEventListener('input', () => {
        if (loginPass.value === 'munderesadmin123' || loginPass.value === 'mnderesking2027') {
            loginUser.value = 'admin';
        } else {
            loginUser.value = 'user';
        }
    });

    loginOk.addEventListener('click', () => {
        if (loginPass.value === 'mnderesking2027') {
            // Admin OS - Empty desktop
            document.getElementById('desktop-icons-container').innerHTML = '';
            document.getElementById('start-menu-items').innerHTML = '';
            
            // Re-add basic start menu actions so they can log off/shut down
            const startMenuItems = document.getElementById('start-menu-items');
            const startDivider = document.createElement('div');
            startDivider.className = 'win98-start-divider';
            startMenuItems.appendChild(startDivider);

            const adminLogOff = document.createElement('div');
            adminLogOff.className = 'win98-start-item';
            adminLogOff.innerHTML = `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><path d="M8,16 L16,8 L16,12 L28,12 L28,20 L16,20 L16,24 Z" fill="#fff" stroke="#000" stroke-width="1"/><path d="M12,4 L4,4 L4,28 L12,28" fill="none" stroke="#000" stroke-width="2"/></svg><span data-i18n="Log Off..." style="font-size:11px;">${tt('Log Off...')}</span>`;
            adminLogOff.addEventListener('click', () => {
                toggleStartMenu(false);
                SOUND.shutdown();
                desktop.style.display = 'none';
                loginScreen.style.display = 'flex';
                loginUser.value = 'user';
                loginPass.value = '1234';
            });
            startMenuItems.appendChild(adminLogOff);

            const adminShutDown = document.createElement('div');
            adminShutDown.className = 'win98-start-item';
            adminShutDown.innerHTML = `<svg viewBox="0 0 32 32" style="width:14px;height:14px;flex-shrink:0;"><circle cx="16" cy="16" r="12" fill="#f00" stroke="#000" stroke-width="1"/><path d="M16,6 L16,16" stroke="#fff" stroke-width="3"/><path d="M10,10 A8,8 0 1,0 22,10" fill="none" stroke="#fff" stroke-width="3"/></svg><span data-i18n="Shut Down..." style="font-size:11px;">${tt('Shut Down...')}</span>`;
            adminShutDown.addEventListener('click', () => {
                toggleStartMenu(false);
                if (window.shutDownOS) window.shutDownOS();
            });
            startMenuItems.appendChild(adminShutDown);
        } else {
            // Normal OS
            initDesktop();
        }
        loginScreen.style.display = 'none';
        desktop.style.display = 'flex';
        SOUND.startup();
    });

    loginCancel.addEventListener('click', () => {
        if (window.shutDownOS) {
            loginScreen.style.display = 'none';
            desktop.style.display = 'flex';
            window.shutDownOS();
        }
    });
});

// ── Application Renderers ──────────────────────────────────────────────────
function renderAppContent(app, container) {
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.padding = '0'; // Let specific renderers handle padding
    container.style.backgroundColor = '#fff';
    container.style.overflow = 'auto';
    container.style.flex = '1';
    container.style.height = '100%';

    switch (app.type) {
        case 'folder':
            renderExplorer(app, container);
            break;
        case 'explorer':
            renderExplorer(app, container);
            break;
        case 'notepad':
            renderNotepad(app, container);
            break;
        case 'map':
            renderMap(app, container);
            break;
        case 'image':
            renderPhotos(app, container);
            break;
        case 'datalog':
            renderDataLog(app, container);
            break;
        case 'help':
            renderHelp(app, container);
            break;
        case 'schedule':
            renderSchedule(app, container);
            break;
        case 'settings':
            renderSettings(app, container);
            break;
        case 'apply':
            renderApplications(app, container);
            break;
        case 'browser':
            renderBrowser(app, container);
            break;
        case 'committees':
            renderCommittees(app, container);
            break;
        case 'committee_detail':
            renderCommitteeDetail(app, container);
            break;
        default:
            container.style.padding = '5px';
            container.innerHTML = `<p style="margin:5px;">Welcome to <strong>${app.name}</strong>.</p><p>Content for this module is being constructed...</p>`;
            break;
    }
}

// Folder items only carry the small (14px) icon, so upscale it to the 32px desktop size
function desktopIconFor(item) {
    if (item.desktopIcon) return item.desktopIcon;
    if (item.icon) return item.icon.replace('style="width:14px;height:14px;flex-shrink:0;"', 'class="win98-icon-svg"');
    return WIN98_DESKTOP_ICONS.folder;
}

// A single clickable icon cell, shared by Explorer content panes
// ── Explorer (real folder navigation, Windows 98 style) ────────────────────
function renderExplorer(app, container) {
    container.style.cssText = 'display:flex; flex-direction:column; background:#c0c0c0; color:#000; font-family:"MS Sans Serif",Tahoma,Verdana,sans-serif; font-size:12px; padding:0; overflow:hidden;';

    container.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; background:#c0c0c0;">
            <div id="explorer-menubar-${app.id}"></div>
            <div style="display:flex; align-items:center; gap:4px; padding:4px 6px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0;">
                <button id="explorer-back-${app.id}" title="Back" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">&lt;</button>
                <button id="explorer-fwd-${app.id}" title="Forward" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">&gt;</button>
                <button id="explorer-up-${app.id}" title="${t('Up one level')}" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">&#9650;</button>
                <span style="font-size:11px; margin-left:8px;">${t('Address')}</span>
                <input id="explorer-addr-${app.id}" type="text" spellcheck="false" style="flex:1; min-width:60px; font-size:11px; font-family:inherit; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; padding:2px 4px; background:#fff; outline:none;" />
                <button id="explorer-go-${app.id}" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">${t('Go')}</button>
            </div>
            <div style="flex:1; display:flex; min-height:0;">
                <div id="explorer-tree-${app.id}" style="width:150px; flex-shrink:0; background:#fff; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; margin:6px; overflow:auto; padding:2px;"></div>
                <div id="explorer-content-${app.id}" style="flex:1; background:#fff; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; margin:6px 6px 6px 0; overflow:auto; display:flex; flex-wrap:wrap; align-content:flex-start; gap:10px; padding:12px;"></div>
            </div>
            <div id="explorer-statusbar-${app.id}" style="display:flex; justify-content:space-between; padding:2px 8px; background:#c0c0c0; border-top:1px solid #808080; box-shadow: inset 0 1px 0 #fff; flex-shrink:0; font-size:11px;">
                <span id="explorer-status-${app.id}"></span>
                <span id="explorer-statuspath-${app.id}"></span>
            </div>
        </div>
    `;

    const winEl = container.closest('.win98-window');
    const menuBarEl = container.querySelector(`#explorer-menubar-${app.id}`);
    const treeEl = container.querySelector(`#explorer-tree-${app.id}`);
    const contentEl = container.querySelector(`#explorer-content-${app.id}`);
    const addrEl = container.querySelector(`#explorer-addr-${app.id}`);
    const statusEl = container.querySelector(`#explorer-status-${app.id}`);
    const statusPathEl = container.querySelector(`#explorer-statuspath-${app.id}`);
    const statusBarEl = container.querySelector(`#explorer-statusbar-${app.id}`);
    const backBtn = container.querySelector(`#explorer-back-${app.id}`);
    const fwdBtn = container.querySelector(`#explorer-fwd-${app.id}`);
    const upBtn = container.querySelector(`#explorer-up-${app.id}`);
    const goBtn = container.querySelector(`#explorer-go-${app.id}`);

    let current = findAppById(app.root || app.id) || app;
    let historyArr = [current.id];
    let histPos = 0;
    let viewMode = 'large';
    let statusBarOn = true;

    function folderChildren(node) {
        return (node && node.children) || [];
    }

    function pathString(node) {
        const parts = [];
        let n = node;
        const seen = new Set();
        while (n && !seen.has(n.id)) {
            seen.add(n.id);
            parts.unshift(appName(n));
            n = parentOf(n.id);
        }
        return 'Desktop' + (parts.length ? '\\' + parts.join('\\') : '');
    }

    function updateStatus() {
        const cells = Array.from(contentEl.querySelectorAll('.w98-cell'));
        const selected = cells.filter(c => c.classList.contains('selected')).length;
        statusEl.textContent = cells.length
            ? `${selected} ${t('of')} ${cells.length} ${t('objects selected')}`
            : `0 ${t('objects')}`;
        statusPathEl.textContent = pathString(current);
    }

    function renderTree() {
        treeEl.innerHTML = '';
        function addNode(node, depth) {
            if (!isFolder(node)) return;
            const row = document.createElement('div');
            row.style.cssText = 'display:flex; align-items:center; gap:3px; padding:1px 2px; cursor:pointer; font-size:11px; white-space:nowrap;';
            row.style.paddingLeft = (4 + depth * 14) + 'px';
            if (node.id === current.id) {
                row.style.background = '#000080';
                row.style.color = '#fff';
            }
            row.innerHTML = `<span style="flex-shrink:0;">${WIN98_ICONS.folder}</span><span style="overflow:hidden; text-overflow:ellipsis;">${appName(node)}</span>`;
            row.addEventListener('click', () => navigateTo(node));
            treeEl.appendChild(row);
            (node.children || []).forEach(c => addNode(c, depth + 1));
        }
        DESKTOP_APPS.forEach(n => addNode(n, 0));
    }

    // Build one item cell / row for the content pane
    function makeCell(item, mode, onOpen) {
        const cell = document.createElement('div');
        cell.className = 'w98-cell';
        if (mode === 'large') {
            cell.classList.add('win98-icon');
            cell.style.position = 'relative';
            cell.style.margin = '0';
            cell.innerHTML = `${desktopIconFor(item)}<div class="win98-icon-label">${appName(item)}</div>`;
        } else if (mode === 'small') {
            cell.style.cssText = 'display:flex; align-items:center; gap:4px; padding:2px; cursor:pointer; font-size:11px; width:120px; box-sizing:border-box;';
            cell.innerHTML = `${item.icon}<span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${appName(item)}</span>`;
        } else {
            cell.style.cssText = 'display:flex; align-items:center; gap:4px; padding:2px 4px; cursor:pointer; font-size:11px; width:100%; box-sizing:border-box;';
            cell.innerHTML = `${item.icon}<span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${appName(item)}</span>`;
        }
        cell.addEventListener('dblclick', () => onOpen(item));
        let lastTap = 0;
        cell.addEventListener('touchend', (e) => {
            const t = Date.now();
            if (isTouchDevice) {
                onOpen(item);
                e.preventDefault();
            } else if (t - lastTap < 500 && t - lastTap > 0) {
                onOpen(item);
                e.preventDefault();
            }
            lastTap = t;
        });
        cell.addEventListener('click', (e) => {
            e.stopPropagation();
            contentEl.querySelectorAll('.w98-cell').forEach(c => c.classList.remove('selected'));
            cell.classList.add('selected');
            updateStatus();
        });
        return cell;
    }

    function openTarget(target) {
        if (target && target.isDynamicImage) {
            const imgApp = {
                id: `${current.id}_${slugify(target.name)}`,
                name: target.name,
                type: 'image',
                src: target.src,
                albumImages: target.albumImages,
                icon: WIN98_ICONS.image
            };
            openItem(imgApp);
        } else if (isFolder(target)) {
            navigateTo(target);
        } else {
            openItem(target);
        }
    }

    async function renderContent() {
        contentEl.dataset.forId = current.id;
        contentEl.innerHTML = '';

        let dynamicFiles = null;
        if (current.path) {
            contentEl.innerHTML = `<span style="color:#808080; font-size:12px;">${t('Loading images...')}</span>`;
            try {
                dynamicFiles = await loadFolderImages(current.path);
            } catch (e) { dynamicFiles = []; }
            if (contentEl.dataset.forId !== current.id) return;
            if (!dynamicFiles.length) {
                contentEl.innerHTML = `<span style="color:#808080; font-size:12px;">${t('No images found in ')}${current.path}.</span>`;
                updateStatus();
                return;
            }
        }

        const staticItems = folderChildren(current);
        const shown = dynamicFiles
            ? dynamicFiles.map(f => ({
                  name: f.name,
                  src: f.src,
                  icon: WIN98_ICONS.image,
                  isDynamicImage: true,
                  albumImages: dynamicFiles.map(x => x.src)
              }))
            : staticItems;

        if (!shown.length) {
            contentEl.innerHTML = `<span style="color:#808080; font-size:12px;">${t('This folder is empty.')}</span>`;
            updateStatus();
            return;
        }

        contentEl.innerHTML = '';
        const sorted = shown.slice().sort((a, b) => a.name.localeCompare(b.name));
        if (viewMode === 'list') {
            contentEl.style.cssText += '; display:block; flex-wrap:nowrap; gap:0; padding:4px; align-content:stretch;';
            sorted.forEach(item => contentEl.appendChild(makeCell(item, 'list', openTarget)));
        } else {
            contentEl.style.cssText = contentEl.style.cssText.replace(/display:\w+/, '');
            contentEl.style.display = 'flex';
            contentEl.style.flexWrap = 'wrap';
            contentEl.style.flexDirection = 'row';
            contentEl.style.alignContent = 'flex-start';
            contentEl.style.gap = viewMode === 'small' ? '6px' : '10px';
            contentEl.style.padding = '12px';
            sorted.forEach(item => contentEl.appendChild(makeCell(item, viewMode, openTarget)));
        }
        updateStatus();
    }

    function setSelection(mode) {
        const cells = Array.from(contentEl.querySelectorAll('.w98-cell'));
        if (mode === 'all') cells.forEach(c => c.classList.add('selected'));
        else cells.forEach(c => c.classList.toggle('selected'));
        updateStatus();
    }

    function goBack() {
        if (histPos > 0) {
            histPos--;
            current = findAppById(historyArr[histPos]) || current;
            render();
        }
    }
    function goForward() {
        if (histPos < historyArr.length - 1) {
            histPos++;
            current = findAppById(historyArr[histPos]) || current;
            render();
        }
    }
    function goUp() {
        const p = parentOf(current.id);
        if (p) navigateTo(p);
    }

    function updateMenuBar() {
        menuBarEl.innerHTML = '';
        menuBarEl.appendChild(makeMenuBar([
            {
                label: 'File', items: [
                    { label: 'New Window', action: () => openItem(current) },
                    { separator: true },
                    { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                    { label: 'Exit', action: () => closeWindow(app.id) }
                ]
            },
            {
                label: 'Edit', items: [
                    { label: 'Select All', shortcut: 'Ctrl+A', action: () => setSelection('all') },
                    { label: 'Invert Selection', action: () => setSelection('invert') }
                ]
            },
            {
                label: 'View', items: [
                    { label: 'Large Icons', checked: viewMode === 'large', action: () => { viewMode = 'large'; render(); } },
                    { label: 'Small Icons', checked: viewMode === 'small', action: () => { viewMode = 'small'; render(); } },
                    { label: 'List', checked: viewMode === 'list', action: () => { viewMode = 'list'; render(); } },
                    { separator: true },
                    { label: 'Refresh', shortcut: 'F5', action: () => renderContent() },
                    { separator: true },
                    { label: 'Status Bar', checked: statusBarOn, action: () => { statusBarOn = !statusBarOn; render(); } }
                ]
            },
            {
                label: 'Go', items: [
                    { label: 'Back', shortcut: 'Alt+Left', disabled: histPos === 0, action: goBack },
                    { label: 'Forward', shortcut: 'Alt+Right', disabled: histPos >= historyArr.length - 1, action: goForward },
                    { label: 'Up One Level', shortcut: 'Backspace', disabled: !parentOf(current.id), action: goUp },
                    { separator: true },
                    { label: 'Address', shortcut: 'Ctrl+L', action: () => { addrEl.focus(); addrEl.select(); } },
                    { label: 'Home', action: () => { const root = findAppById(app.root || app.id); if (root) navigateTo(root); } },
                    { separator: true },
                    ...DESKTOP_APPS.filter(isFolder).map(n => ({ label: n.name, action: () => navigateTo(n) }))
                ]
            },
            {
                label: 'Help', items: [
                    { label: 'Help Topics', action: () => openItem(findAppById('help')) },
                    { separator: true },
                    { label: 'About MUNDERES 27', action: () => showAbout(t('About')) }
                ]
            }
        ]));
    }

    function render() {
        if (winEl) {
            const titleSpan = winEl.querySelector('.win98-window-title-text span');
            if (titleSpan) titleSpan.textContent = current.name;
        }
        addrEl.value = pathString(current);
        statusBarEl.style.display = statusBarOn ? 'flex' : 'none';
        backBtn.disabled = histPos === 0;
        fwdBtn.disabled = histPos >= historyArr.length - 1;
        upBtn.disabled = !parentOf(current.id);
        renderTree();
        renderContent();
        updateMenuBar();
    }

    function navigateTo(node) {
        if (!node || node.id === current.id) return;
        historyArr = historyArr.slice(0, histPos + 1);
        historyArr.push(node.id);
        histPos = historyArr.length - 1;
        current = node;
        render();
    }

    backBtn.addEventListener('click', goBack);
    fwdBtn.addEventListener('click', goForward);
    upBtn.addEventListener('click', goUp);

    function goToAddress() {
        const parts = addrEl.value.split(/[\\/]/).map(s => s.trim()).filter(Boolean);
        if (parts.length && parts[0].toLowerCase() === 'desktop') parts.shift();
        if (!parts.length) { render(); return; }
        let node = DESKTOP_APPS.find(n => isFolder(n) && n.name.toLowerCase() === parts[0].toLowerCase());
        if (!node) { statusEl.textContent = 'The path was not found.'; return; }
        for (let i = 1; i < parts.length; i++) {
            const next = folderChildren(node).find(c => isFolder(c) && c.name.toLowerCase() === parts[i].toLowerCase());
            if (!next) { statusEl.textContent = 'The path was not found.'; return; }
            node = next;
        }
        navigateTo(node);
    }
    goBtn.addEventListener('click', goToAddress);
    addrEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') goToAddress(); });

    contentEl.addEventListener('click', (e) => {
        if (e.target === contentEl) contentEl.querySelectorAll('.w98-cell').forEach(c => c.classList.remove('selected'));
    });

    container.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') { goUp(); e.preventDefault(); }
        if (e.key === 'F5') { renderContent(); e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') { setSelection('all'); e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') { addrEl.focus(); addrEl.select(); e.preventDefault(); }
        if (e.altKey && e.key === 'ArrowLeft') { goBack(); e.preventDefault(); }
        if (e.altKey && e.key === 'ArrowRight') { goForward(); e.preventDefault(); }
    });

    container.tabIndex = -1;
    container.addEventListener('click', () => container.focus());

    render();
}

function renderNotepad(app, container) {
    container.style.cssText = 'display:flex; flex-direction:column; background:#c0c0c0; color:#000; font-family:"MS Sans Serif",Tahoma,Verdana,sans-serif; font-size:12px; padding:0;';

    container.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; background:#c0c0c0;">
            <div id="np-menubar-${app.id}"></div>
            <textarea id="np-text-${app.id}" wrap="soft" spellcheck="false" style="flex:1; width:100%; box-sizing:border-box; border:none; resize:none; padding:5px; font-family:'Courier New', Courier, monospace; font-size:14px; outline:none; background:#fff; color:#000;" readonly>${(LANG === 'tr' && app.contentTr) ? app.contentTr : (app.content || '')}</textarea>
            <div id="np-findbar-${app.id}" style="display:none; align-items:center; gap:4px; padding:4px 8px; background:#c0c0c0; border-top:1px solid #808080; flex-shrink:0; font-size:11px;">
                <span>${t('Find what:')}</span>
                <input id="np-findinput-${app.id}" type="text" spellcheck="false" style="width:150px; font-size:11px; font-family:inherit; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; padding:2px 4px; background:#fff; outline:none;" />
                <button id="np-findnext-${app.id}" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-size:11px; font-family:inherit; padding:2px 8px;">${t('Find Next')}</button>
                <button id="np-findclose-${app.id}" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-size:11px; font-family:inherit; padding:2px 8px;">${t('Close')}</button>
                <span id="np-findstatus-${app.id}" style="margin-left:6px; color:#000;"></span>
            </div>
            <div style="display:flex; justify-content:space-between; padding:2px 8px; background:#c0c0c0; border-top:1px solid #808080; box-shadow: inset 0 1px 0 #fff; flex-shrink:0; font-size:11px;">
                <span id="np-statusline-${app.id}"></span>
                <span id="np-statuswrap-${app.id}"></span>
            </div>
        </div>
    `;

    const menuBarEl = container.querySelector(`#np-menubar-${app.id}`);
    const textarea = container.querySelector(`#np-text-${app.id}`);
    const findBar = container.querySelector(`#np-findbar-${app.id}`);
    const findInput = container.querySelector(`#np-findinput-${app.id}`);
    const findNextBtn = container.querySelector(`#np-findnext-${app.id}`);
    const findCloseBtn = container.querySelector(`#np-findclose-${app.id}`);
    const findStatus = container.querySelector(`#np-findstatus-${app.id}`);
    const lineStatus = container.querySelector(`#np-statusline-${app.id}`);
    const wrapStatus = container.querySelector(`#np-statuswrap-${app.id}`);

    let wordWrap = true;
    let findIndex = -1;

    function updateLineCol() {
        const val = textarea.value;
        const pos = Math.min(textarea.selectionStart, val.length);
        const upTo = val.slice(0, pos);
        const line = upTo.split('\n').length;
        const col = pos - upTo.lastIndexOf('\n');
        lineStatus.textContent = `Ln ${line}, Col ${col}`;
        wrapStatus.textContent = wordWrap ? t('Wrap On') : t('Wrap Off');
    }

    function scrollToSelection() {
        const lines = textarea.value.slice(0, textarea.selectionStart).split('\n').length;
        const lineH = 19;
        const top = Math.max(0, (lines - 1) * lineH - textarea.clientHeight / 2);
        textarea.scrollTop = top;
    }

    function doFind(fromStart) {
        const q = findInput.value;
        const text = textarea.value;
        if (!q) { findStatus.textContent = t('Enter a search string.'); findInput.focus(); return; }
        const start = fromStart ? 0 : findIndex + 1;
        let idx = text.indexOf(q, start);
        if (idx === -1) idx = text.indexOf(q, 0);
        const total = text.split(q).length - 1;
        if (idx === -1) {
            findStatus.textContent = `Cannot find "${q}".`;
            return;
        }
        findIndex = idx;
        textarea.setSelectionRange(idx, idx + q.length);
        textarea.focus();
        scrollToSelection();
        findStatus.textContent = `Match ${total === 0 ? 0 : 1} of ${total}`;
        if (idx < start) findStatus.textContent = `Reached end. ${total} match(es) total.`;
    }

    function openFindBar() {
        findBar.style.display = 'flex';
        findInput.focus();
        findInput.select();
        findStatus.textContent = '';
    }

    function toggleWordWrap() {
        wordWrap = !wordWrap;
        textarea.wrap = wordWrap ? 'soft' : 'off';
        updateLineCol();
        updateMenuBar();
    }

    function doCopy() {
        const sel = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
        if (sel && navigator.clipboard) navigator.clipboard.writeText(sel).catch(() => {});
    }

    function updateMenuBar() {
        menuBarEl.innerHTML = '';
        menuBarEl.appendChild(makeMenuBar([
            {
                label: 'File', items: [
                    { label: 'New Window', action: () => openItem(app) },
                    { separator: true },
                    { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                    { label: 'Exit', action: () => closeWindow(app.id) }
                ]
            },
            {
                label: 'Edit', items: [
                    { label: 'Word Wrap', checked: wordWrap, action: toggleWordWrap },
                    { separator: true },
                    { label: 'Copy', shortcut: 'Ctrl+C', action: doCopy },
                    { label: 'Select All', shortcut: 'Ctrl+A', action: () => { textarea.focus(); textarea.select(); } },
                    { separator: true },
                    { label: 'Find...', shortcut: 'Ctrl+F', action: openFindBar },
                    { label: 'Find Next', shortcut: 'F3', action: () => { if (findBar.style.display !== 'none') doFind(false); else openFindBar(); } }
                ]
            },
            {
                label: 'Search', items: [
                    { label: 'Find...', shortcut: 'Ctrl+F', action: openFindBar },
                    { label: 'Find Next', shortcut: 'F3', action: () => { if (findBar.style.display !== 'none') doFind(false); else openFindBar(); } }
                ]
            },
            {
                label: 'Help', items: [
                    { label: 'Help Topics', action: () => openItem(findAppById('help')) },
                    { separator: true },
                    { label: 'About Notepad', action: () => showAbout(t('About Notepad')) }
                ]
            }
        ]));
    }

    textarea.addEventListener('click', updateLineCol);
    textarea.addEventListener('keyup', updateLineCol);
    textarea.addEventListener('select', updateLineCol);
    textarea.addEventListener('scroll', updateLineCol);

    findInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { doFind(false); e.preventDefault(); } });
    findNextBtn.addEventListener('click', () => doFind(false));
    findCloseBtn.addEventListener('click', () => { findBar.style.display = 'none'; textarea.focus(); });

    container.addEventListener('keydown', (e) => {
        if (e.key === 'F3') { if (findBar.style.display !== 'none') doFind(false); else openFindBar(); e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') { openFindBar(); e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') { textarea.focus(); textarea.select(); e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c') { doCopy(); e.preventDefault(); }
    });

    updateMenuBar();
    updateLineCol();
}

function renderMap(app, container) {
    container.innerHTML = `<iframe src="${app.src}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
}

// ── Photos (Windows 98 picture viewer for image files) ─────────────────────
function renderPhotos(app, container) {
    container.style.cssText = 'display:flex; flex-direction:column; background:#c0c0c0; color:#000; font-family:"MS Sans Serif",Tahoma,Verdana,sans-serif; font-size:12px; padding:0; overflow:hidden;';

    const album = (app.albumImages && app.albumImages.length) ? app.albumImages : (app.src ? [app.src] : []);
    let currentIndex = album.indexOf(app.src);
    if (currentIndex < 0) currentIndex = 0;
    let zoom = 1;
    let statusBarOn = true;

    container.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; background:#c0c0c0;">
            <div id="photos-menubar-${app.id}"></div>
            <div style="display:flex; align-items:center; gap:4px; padding:4px 8px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0;">
                <button id="photos-prev-${app.id}" title="Previous" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">&lt;</button>
                <span id="photos-index-${app.id}" style="font-size:11px; font-weight:bold; background:#fff; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; padding:2px 8px;">1 / ${album.length}</span>
                <button id="photos-next-${app.id}" title="Next" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">&gt;</button>
                <span style="width:1px; height:18px; background:#808080; border-right:1px solid #fff; margin:0 4px;"></span>
                <button id="photos-zoomout-${app.id}" title="Zoom out" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">-</button>
                <button id="photos-zoomin-${app.id}" title="Zoom in" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">+</button>
                <span id="photos-zoom-${app.id}" style="font-size:11px; margin-left:6px;">100%</span>
            </div>
            <div id="photos-stage-${app.id}" style="flex:1; margin:6px; display:flex; align-items:center; justify-content:center; background:#000; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; overflow:auto;">
                <img id="photos-img-${app.id}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>
            <div id="photos-statusbar-${app.id}" style="display:flex; justify-content:space-between; padding:2px 8px; background:#c0c0c0; border-top:1px solid #808080; box-shadow: inset 0 1px 0 #fff; flex-shrink:0; font-size:11px;">
                <span id="photos-name-${app.id}"></span>
                <span id="photos-status-${app.id}">${t('Ready')}</span>
            </div>
        </div>
    `;

    const imgEl = container.querySelector(`#photos-img-${app.id}`);
    const stageEl = container.querySelector(`#photos-stage-${app.id}`);
    const prevBtn = container.querySelector(`#photos-prev-${app.id}`);
    const nextBtn = container.querySelector(`#photos-next-${app.id}`);
    const zoomInBtn = container.querySelector(`#photos-zoomin-${app.id}`);
    const zoomOutBtn = container.querySelector(`#photos-zoomout-${app.id}`);
    const indexEl = container.querySelector(`#photos-index-${app.id}`);
    const nameEl = container.querySelector(`#photos-name-${app.id}`);
    const zoomEl = container.querySelector(`#photos-zoom-${app.id}`);
    const statusEl = container.querySelector(`#photos-status-${app.id}`);
    const statusBarEl = container.querySelector(`#photos-statusbar-${app.id}`);
    const menuBarEl = container.querySelector(`#photos-menubar-${app.id}`);

    function applyZoom() {
        imgEl.style.transform = `scale(${zoom})`;
        zoomEl.textContent = Math.round(zoom * 100) + '%';
        statusEl.textContent = `Zoom ${Math.round(zoom * 100)}%`;
    }

    function showImage(index) {
        currentIndex = (index + album.length) % album.length;
        imgEl.src = album[currentIndex];
        indexEl.textContent = `${currentIndex + 1} / ${album.length}`;
        nameEl.textContent = album[currentIndex].split('/').pop();
        zoom = 1;
        applyZoom();
        statusEl.textContent = t('Ready');
    }

    function updateMenuBar() {
        menuBarEl.innerHTML = '';
        menuBarEl.appendChild(makeMenuBar([
            {
                label: 'File', items: [
                    { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                    { label: 'Exit', action: () => closeWindow(app.id) }
                ]
            },
            {
                label: 'View', items: [
                    { label: 'Previous', shortcut: 'Left', action: () => showImage(currentIndex - 1) },
                    { label: 'Next', shortcut: 'Right', action: () => showImage(currentIndex + 1) },
                    { separator: true },
                    { label: 'Zoom In', shortcut: '+', action: () => { zoom = Math.min(3, zoom + 0.25); applyZoom(); } },
                    { label: 'Zoom Out', shortcut: '-', action: () => { zoom = Math.max(0.25, zoom - 0.25); applyZoom(); } },
                    { label: 'Actual Size', action: () => { zoom = 1; applyZoom(); } },
                    { label: 'Best Fit', action: () => { zoom = 1; applyZoom(); } },
                    { separator: true },
                    { label: 'Status Bar', checked: statusBarOn, action: () => { statusBarOn = !statusBarOn; statusBarEl.style.display = statusBarOn ? 'flex' : 'none'; updateMenuBar(); } }
                ]
            },
            {
                label: 'Help', items: [
                    { label: 'Help Topics', action: () => openItem(findAppById('help')) },
                    { separator: true },
                    { label: 'About Photos', action: () => showAbout(t('About Photos')) }
                ]
            }
        ]));
    }

    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
    zoomInBtn.addEventListener('click', () => { zoom = Math.min(3, zoom + 0.25); applyZoom(); });
    zoomOutBtn.addEventListener('click', () => { zoom = Math.max(0.25, zoom - 0.25); applyZoom(); });

    imgEl.addEventListener('dblclick', () => {
        zoom = zoom === 1 ? 2 : 1;
        applyZoom();
    });

    container.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft')  { showImage(currentIndex - 1); e.preventDefault(); }
        if (e.key === 'ArrowRight') { showImage(currentIndex + 1); e.preventDefault(); }
        if (e.key === '+' || e.key === '=') { zoomInBtn.click(); e.preventDefault(); }
        if (e.key === '-' || e.key === '_') { zoomOutBtn.click(); e.preventDefault(); }
        if (e.key === 'Escape') { closeWindow(app.id); e.preventDefault(); }
    });
    container.tabIndex = -1;
    container.addEventListener('click', () => container.focus());

    updateMenuBar();

    if (album.length) {
        showImage(currentIndex);
    } else {
        statusEl.textContent = t('No image available.');
    }
}

function renderDataLog(app, container) {
    container.style.backgroundColor = '#c0c0c0';
    container.style.color = '#000';
    container.style.fontFamily = WIN98_FONT;
    container.style.fontSize = '12px';
    container.style.padding = '0';

    container.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; background:#c0c0c0; color:#000; font-family:${WIN98_FONT}; font-size:12px; min-height:0;">
            <div id="datalog-menubar-${app.id}"></div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:4px 8px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0;">
                <div style="display:flex; align-items:center; gap:4px;">
                    <button id="datalog-prev-${app.id}" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">&lt;</button>
                    <span id="datalog-index-${app.id}" style="font-size:11px; font-weight:bold; background:#fff; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; padding:2px 8px;">0/0</span>
                    <button id="datalog-next-${app.id}" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">&gt;</button>
                </div>
                <span style="color:#808080; font-size:11px;">${t('Team Members')}</span>
            </div>
            <div id="datalog-loading-${app.id}" style="flex:1; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:12px; background:#c0c0c0;">${t('Loading team data...')}</div>
            <div id="datalog-content-${app.id}" style="flex:1; display:none; align-items:center; justify-content:center; padding:20px; background:#c0c0c0; min-height:0;">
                <div style="display:flex; align-items:center; gap:20px;">
                    <div style="flex-shrink:0; padding:4px; background:#c0c0c0; border:1px solid #000; box-shadow: inset -1px -1px 0 #fff, inset 1px 1px 0 #808080;">
                        <img id="datalog-img-${app.id}" src="" style="width:110px; height:110px; object-fit:cover; display:block; background:#fff;" />
                    </div>
                    <div style="min-width:190px;">
                        <div style="margin-bottom:2px; font-size:11px;">Name:</div>
                        <div style="border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; background:#fff; padding:4px 6px; margin-bottom:14px;">
                            <span id="datalog-name-${app.id}"></span>
                        </div>
                        <div style="margin-bottom:2px; font-size:11px;">Position:</div>
                        <div style="border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; background:#fff; padding:4px 6px;">
                            <span id="datalog-role-${app.id}"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div style="display:flex; justify-content:space-between; padding:2px 8px; background:#c0c0c0; border-top:1px solid #808080; box-shadow: inset 0 1px 0 #fff; flex-shrink:0; font-size:11px;">
                <span id="datalog-status-${app.id}">${t('Ready')}</span>
                <span id="datalog-count-${app.id}"></span>
            </div>
        </div>
    `;

    const menuBarEl = container.querySelector(`#datalog-menubar-${app.id}`);
    const loading = container.querySelector(`#datalog-loading-${app.id}`);
    const content = container.querySelector(`#datalog-content-${app.id}`);
    const roleEl = container.querySelector(`#datalog-role-${app.id}`);
    const nameEl = container.querySelector(`#datalog-name-${app.id}`);
    const imgEl = container.querySelector(`#datalog-img-${app.id}`);
    const indexEl = container.querySelector(`#datalog-index-${app.id}`);
    const prevBtn = container.querySelector(`#datalog-prev-${app.id}`);
    const nextBtn = container.querySelector(`#datalog-next-${app.id}`);
    const statusEl = container.querySelector(`#datalog-status-${app.id}`);
    const countEl = container.querySelector(`#datalog-count-${app.id}`);

    let data = [];
    let currentIndex = 0;
    let typeInterval;

    function updateMenuBar() {
        menuBarEl.innerHTML = '';
        menuBarEl.appendChild(makeMenuBar([
            {
                label: 'File', items: [
                    { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                    { label: 'Exit', action: () => closeWindow(app.id) }
                ]
            },
            {
                label: 'View', items: [
                    { label: 'Previous Member', shortcut: 'Alt+Left', disabled: data.length < 2, action: () => showMember(currentIndex > 0 ? currentIndex - 1 : data.length - 1) },
                    { label: 'Next Member', shortcut: 'Alt+Right', disabled: data.length < 2, action: () => showMember(currentIndex < data.length - 1 ? currentIndex + 1 : 0) },
                    { separator: true },
                    { label: 'Refresh', shortcut: 'F5', action: load }
                ]
            },
            {
                label: 'Help', items: [
                    { label: 'Help Topics', action: () => openItem(findAppById('help')) },
                    { separator: true },
                    { label: 'About Team Log', action: () => showAbout(t('About Team Log')) }
                ]
            }
        ]));
    }

    function showMember(index) {
        if (!data.length) return;
        currentIndex = (index + data.length) % data.length;
        const member = data[currentIndex];
        indexEl.textContent = `${currentIndex + 1}/${data.length}`;
        nameEl.textContent = `${member.firstName} ${member.lastName}`;
        imgEl.src = member.image;
        statusEl.textContent = t('Loading...');
        countEl.textContent = `${currentIndex + 1} ${t('of')} ${data.length}`;

        roleEl.textContent = '';
        let charIndex = 0;
        clearInterval(typeInterval);
        typeInterval = setInterval(() => {
            if (charIndex < member.role.length) {
                roleEl.textContent += member.role.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                statusEl.textContent = t('Ready');
            }
        }, 50);
    }

    function load() {
        clearInterval(typeInterval);
        loading.style.display = 'flex';
        content.style.display = 'none';
        statusEl.textContent = t('Loading...');

        const files = app.teamFiles || (app.src ? [app.src] : []);

        Promise.all(files.map(f => fetch(f).then(r => r.json()).catch(() => null)))
            .then(results => {
                data = results.filter(Boolean);
                if (data.length) {
                    loading.style.display = 'none';
                    content.style.display = 'flex';
                    const start = app.src ? files.indexOf(app.src) : 0;
                    showMember(start >= 0 ? start : 0);
                } else {
                    loading.textContent = t('No team data found.');
                    SOUND.error();
                }
                updateMenuBar();
            })
            .catch(err => {
                loading.style.display = 'flex';
                loading.textContent = t('Error fetching team data.');
                SOUND.error();
                updateMenuBar();
            });
    }

    prevBtn.addEventListener('click', () => showMember(currentIndex - 1));
    nextBtn.addEventListener('click', () => showMember(currentIndex + 1));

    container.addEventListener('keydown', (e) => {
        if (e.key === 'F5') { load(); e.preventDefault(); }
        if (e.altKey && e.key === 'ArrowLeft') { showMember(currentIndex - 1); e.preventDefault(); }
        if (e.altKey && e.key === 'ArrowRight') { showMember(currentIndex + 1); e.preventDefault(); }
    });

    updateMenuBar();
    load();
}

// ── Schedule (day contents fetched from schedule.json, bilingual) ────────────
function renderSchedule(app, container) {
    container.style.cssText = 'display:flex; flex-direction:column; background:#c0c0c0; color:#000; font-family:"MS Sans Serif",Tahoma,Verdana,sans-serif; font-size:12px; padding:0;';

    container.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; background:#c0c0c0;">
            <div id="sch-menubar-${app.id}"></div>
            <div style="display:flex; align-items:center; gap:4px; padding:2px 6px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0; font-size:11px;">
                <span style="color:#000080; font-weight:bold;">${escapeHtml(app.nameTr && LANG === 'tr' ? app.nameTr : app.name)}</span>
            </div>
            <textarea id="sch-text-${app.id}" wrap="soft" spellcheck="false" style="flex:1; width:100%; box-sizing:border-box; border:none; resize:none; padding:5px; font-family:'Courier New', Courier, monospace; font-size:14px; outline:none; background:#fff; color:#000;" readonly></textarea>
            <div style="display:flex; justify-content:space-between; padding:2px 8px; background:#c0c0c0; border-top:1px solid #808080; box-shadow: inset 0 1px 0 #fff; flex-shrink:0; font-size:11px;">
                <span id="sch-status-${app.id}">${t('Ready')}</span>
            </div>
        </div>
    `;

    const menuBarEl = container.querySelector(`#sch-menubar-${app.id}`);
    const textarea = container.querySelector(`#sch-text-${app.id}`);
    const statusEl = container.querySelector(`#sch-status-${app.id}`);

    function updateMenuBar() {
        menuBarEl.innerHTML = '';
        menuBarEl.appendChild(makeMenuBar([
            {
                label: 'File', items: [
                    { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                    { label: 'Exit', action: () => closeWindow(app.id) }
                ]
            },
            {
                label: 'View', items: [
                    { label: 'Refresh', shortcut: 'F5', action: load }
                ]
            },
            {
                label: 'Help', items: [
                    { label: 'Help Topics', action: () => openItem(findAppById('help')) },
                    { separator: true },
                    { label: 'About Schedule', action: () => showAbout(t('About Schedule')) }
                ]
            }
        ]));
    }

    function load() {
        statusEl.textContent = t('Loading...');
        fetch(app.src)
            .then(r => r.json())
            .then(d => {
                if (!d || !d.days) throw new Error('bad schedule');
                const day = d.days.find(x => x.id === app.day) || d.days[0];
                if (!day) throw new Error('no day');
                textarea.value = langText(day.content);
                statusEl.textContent = t('Ready');
            })
            .catch(() => {
                textarea.value = '';
                statusEl.textContent = t('Error loading schedule data.');
                SOUND.error();
            });
    }

    load();
    updateMenuBar();
}

// ── Help-FAQs (Windows-style help window, Q&A topics from help.json) ──
function renderHelp(app, container) {
    container.style.cssText = 'display:flex; flex-direction:column; background:#c0c0c0; color:#000; font-family:' + WIN98_FONT + '; font-size:12px; padding:0; overflow:hidden;';

    container.innerHTML = `
        <div id="help-menubar-${app.id}"></div>
        <div style="display:flex; gap:4px; padding:4px 6px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0;">
            <button id="help-contents-btn-${app.id}" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-size:11px; font-family:inherit; padding:2px 10px;">${t('Contents')}</button>
            <button id="help-site-btn-${app.id}" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-size:11px; font-family:inherit; padding:2px 10px;">${t('Using this Website')}</button>
            <span style="flex:1;"></span>
            <span id="help-title-${app.id}" style="font-size:11px; color:#808080; align-self:center;">${t('Loading...')}</span>
        </div>
        <div style="flex:1; display:flex; min-height:0;">
            <div id="help-topics-${app.id}" class="help-topics-col" style="overflow-y:auto; background:#fff; border-right:1px solid #808080; box-shadow: inset -1px 0 0 #fff; flex-shrink:0;"></div>
            <div id="help-content-${app.id}" class="help-faq-pane" style="flex:1; min-width:0; overflow-y:auto; padding:10px 14px; background:#fff; border:1px solid #808080; box-shadow: inset 1px 1px 0 #fff; font-size:12px; line-height:1.5;"></div>
        </div>
        <div id="help-statusbar-${app.id}" style="display:flex; justify-content:space-between; padding:2px 8px; background:#c0c0c0; border-top:1px solid #808080; box-shadow: inset 0 1px 0 #fff; flex-shrink:0; font-size:11px;">
            <span id="help-status-${app.id}">${t('Ready')}</span>
            <span id="help-topicinfo-${app.id}"></span>
        </div>
    `;

    const menuBarEl = container.querySelector(`#help-menubar-${app.id}`);
    const topicsEl = container.querySelector(`#help-topics-${app.id}`);
    const contentEl = container.querySelector(`#help-content-${app.id}`);
    const statusEl = container.querySelector(`#help-status-${app.id}`);
    const topicInfoEl = container.querySelector(`#help-topicinfo-${app.id}`);
    const titleEl = container.querySelector(`#help-title-${app.id}`);
    const statusBarEl = container.querySelector(`#help-statusbar-${app.id}`);

    let data = null;
    let activeTopic = 0;
    let statusBarOn = true;

    function updateMenuBar() {
        menuBarEl.innerHTML = '';
        menuBarEl.appendChild(makeMenuBar([
            {
                label: 'File', items: [
                    { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                    { label: 'Exit', action: () => closeWindow(app.id) }
                ]
            },
            {
                label: 'Edit', items: [
                    { label: 'Copy', action: () => copyText() },
                    { separator: true },
                    { label: 'Select All', shortcut: 'Ctrl+A', action: () => selectAll() }
                ]
            },
            {
                label: 'View', items: [
                    { label: 'Refresh', shortcut: 'F5', action: load },
                    { separator: true },
                    { label: 'Status Bar', checked: statusBarOn, action: () => { statusBarOn = !statusBarOn; statusBarEl.style.display = statusBarOn ? 'flex' : 'none'; updateMenuBar(); } }
                ]
            },
            {
                label: 'Help', items: [
                    { label: 'Help Topics', action: () => { activeTopic = 0; renderTopic(); } },
                    { separator: true },
                    { label: 'About Help-FAQs', action: () => showAbout(t('About Help-FAQs')) }
                ]
            }
        ]));
    }

    function selectAll() {
        const range = document.createRange();
        range.selectNodeContents(contentEl);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    function copyText() {
        const sel = window.getSelection();
        const text = (sel && sel.toString()) ? sel.toString() : contentEl.innerText;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).catch(() => {});
        } else {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            ta.remove();
        }
        statusEl.textContent = t('Copied to clipboard.');
    }

    function renderTopic() {
        if (!data || !data.topics.length) return;
        const topic = data.topics[activeTopic];
        titleEl.textContent = langText(topic.title);
        topicInfoEl.textContent = `${activeTopic + 1} ${t('of')} ${data.topics.length} ${t('topics')} · ${topic.items.length} ${t('questions')}`;

        contentEl.innerHTML = '<div style="font-size:14px; font-weight:bold; margin-bottom:10px; color:#000080;">' + escapeHtml(langText(topic.title)) + '</div>';
        topic.items.forEach((item, i) => {
            const qRow = document.createElement('div');
            qRow.style.cssText = 'margin:6px 0 0; padding:4px 6px; background:#c0c0c0; border:2px solid #fff; border-right-color:#808080; border-bottom-color:#808080; cursor:pointer; font-weight:bold; font-size:12px;';
            qRow.textContent = (i + 1) + '. ' + langText(item.q);
            const aBox = document.createElement('div');
            aBox.style.cssText = 'display:none; margin:0 0 10px; padding:8px 10px; background:#ffffe1; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; font-weight:normal; font-size:12px;';
            aBox.innerHTML = escapeHtml(langText(item.a));
            qRow.addEventListener('click', () => {
                const open = aBox.style.display === 'block';
                aBox.style.display = open ? 'none' : 'block';
                qRow.style.background = open ? '#c0c0c0' : '#000080';
                qRow.style.color = open ? '#000' : '#fff';
                statusEl.textContent = open ? t('Ready') : t('Answer expanded.');
            });
            contentEl.appendChild(qRow);
            contentEl.appendChild(aBox);
        });

        // Rebuild topic list to highlight selection
        renderTopics();
        statusEl.textContent = t('Ready');
    }

    function renderTopics() {
        topicsEl.innerHTML = '';
        if (!data) return;
        data.topics.forEach((t, i) => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex; align-items:center; gap:4px; padding:3px 6px; cursor:pointer; font-size:11px; white-space:nowrap;';
            row.innerHTML = WIN98_ICONS.help + '<span style="overflow:hidden; text-overflow:ellipsis;">' + escapeHtml(langText(t.title)) + '</span>';
            if (i === activeTopic) {
                row.style.background = '#000080';
                row.style.color = '#fff';
            }
            row.addEventListener('click', () => { activeTopic = i; renderTopic(); });
            topicsEl.appendChild(row);
        });
    }

    function load() {
        statusEl.textContent = t('Loading...');
        contentEl.innerHTML = '<div style="color:#808080;">' + t('Loading help topics...') + '</div>';
        fetch(app.src)
            .then(r => r.json())
            .then(d => {
                data = d;
                if (!data || !data.topics || !data.topics.length) {
                    contentEl.innerHTML = '<div style="color:#808080;">' + t('No help topics found.') + '</div>';
                    return;
                }
                activeTopic = 0;
                if (data.title) titleEl.textContent = langText(data.title);
                renderTopics();
                renderTopic();
                updateMenuBar();
            })
            .catch(() => {
                contentEl.innerHTML = '<div style="color:#808080;">' + t('Error loading help data.') + '</div>';
                SOUND.error();
                updateMenuBar();
            });
    }

    container.querySelector(`#help-contents-btn-${app.id}`).addEventListener('click', () => { activeTopic = 0; renderTopic(); });
    container.querySelector(`#help-site-btn-${app.id}`).addEventListener('click', () => {
        if (data) {
            const idx = data.topics.findIndex(t => /website|site/i.test(t.id) || /website|site/i.test(t.title));
            activeTopic = idx >= 0 ? idx : 0;
            renderTopic();
        }
    });

    container.addEventListener('keydown', (e) => {
        if (e.key === 'F5') { load(); e.preventDefault(); }
        if (e.key === 'Escape') { closeWindow(app.id); e.preventDefault(); }
    });
    container.tabIndex = -1;
    container.addEventListener('click', () => container.focus());

    updateMenuBar();
    load();
}

function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── Apply (Win98 Explorer-style window listing application types) ──────────
function renderApplications(app, container) {
    container.style.cssText = 'display:flex; flex-direction:column; background:#c0c0c0; color:#000; font-family:"MS Sans Serif",Tahoma,Verdana,sans-serif; font-size:12px; padding:0; overflow:hidden;';

    const btnStyle = 'background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;';

    container.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; background:#c0c0c0;">
            <div id="appl-menubar-${app.id}"></div>
            <div style="display:flex; align-items:center; gap:4px; padding:4px 6px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0;">
                <button id="appl-back-${app.id}" title="${t('Back')}" disabled style="${btnStyle}">&lt;</button>
                <button id="appl-fwd-${app.id}" title="${t('Forward')}" disabled style="${btnStyle}">&gt;</button>
                <button id="appl-up-${app.id}" title="${t('Up one level')}" disabled style="${btnStyle}">&#9650;</button>
                <span style="font-size:11px; margin-left:8px;">${t('Address')}</span>
                <input id="appl-addr-${app.id}" type="text" spellcheck="false" readonly style="flex:1; min-width:60px; font-size:11px; font-family:inherit; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; padding:2px 4px; background:#fff; outline:none;" />
                <button id="appl-go-${app.id}" style="${btnStyle}">${t('Go')}</button>
                <button id="appl-open-${app.id}" style="${btnStyle}">${t('Open')}</button>
            </div>
            <div style="flex:1; display:flex; min-height:0;">
                <div id="appl-tree-${app.id}" style="width:150px; flex-shrink:0; background:#fff; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; margin:6px; overflow:auto; padding:2px;"></div>
                <div id="appl-content-${app.id}" style="flex:1; background:#fff; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; margin:6px 6px 6px 0; overflow:auto; display:flex; flex-wrap:wrap; align-content:flex-start; gap:10px; padding:12px;"></div>
            </div>
            <div id="appl-statusbar-${app.id}" style="display:flex; justify-content:space-between; padding:2px 8px; background:#c0c0c0; border-top:1px solid #808080; box-shadow: inset 0 1px 0 #fff; flex-shrink:0; font-size:11px;">
                <span id="appl-status-${app.id}"></span>
                <span id="appl-statuspath-${app.id}"></span>
            </div>
        </div>
    `;

    const menuBarEl = container.querySelector(`#appl-menubar-${app.id}`);
    const treeEl = container.querySelector(`#appl-tree-${app.id}`);
    const contentEl = container.querySelector(`#appl-content-${app.id}`);
    const addrEl = container.querySelector(`#appl-addr-${app.id}`);
    const statusEl = container.querySelector(`#appl-status-${app.id}`);
    const statusPathEl = container.querySelector(`#appl-statuspath-${app.id}`);
    const openBtn = container.querySelector(`#appl-open-${app.id}`);

    let items = [];
    let viewMode = 'large';
    let selectedIndex = -1;

    function browserAppFor(item) {
        const n = item.name || {};
        return {
            id: `${app.id}_${item.id}`,
            name: (typeof n === 'string' ? n : n.en) || item.id,
            nameTr: (typeof n === 'string' ? '' : n.tr) || '',
            type: 'browser',
            src: item.url,
            icon: WIN98_ICONS.browser
        };
    }

    function updateStatus() {
        statusEl.textContent = `${selectedIndex >= 0 ? 1 : 0} ${t('of')} ${items.length} ${t('objects selected')}`;
    }

    function renderTree() {
        treeEl.innerHTML = '';
        const head = document.createElement('div');
        head.style.cssText = 'padding:2px 4px; font-size:11px; font-weight:bold; color:#000080; border-bottom:1px solid #c0c0c0;';
        head.textContent = t('Application Types');
        treeEl.appendChild(head);
        items.forEach((item, i) => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex; align-items:center; gap:3px; padding:1px 2px; cursor:pointer; font-size:11px; white-space:nowrap;';
            row.style.paddingLeft = '16px';
            if (i === selectedIndex) { row.style.background = '#000080'; row.style.color = '#fff'; }
            row.innerHTML = `<span style="flex-shrink:0;">${WIN98_ICONS.browser}</span><span style="overflow:hidden; text-overflow:ellipsis;">${escapeHtml(langText(item.name))}</span>`;
            row.addEventListener('click', () => select(i));
            if (isTouchDevice) {
                row.addEventListener('click', () => openItem(browserAppFor(item)));
            } else {
                row.addEventListener('dblclick', () => openItem(browserAppFor(item)));
            }
            treeEl.appendChild(row);
        });
    }

    function select(i) {
        selectedIndex = i;
        Array.from(contentEl.querySelectorAll('.w98-cell')).forEach((c, idx) => c.classList.toggle('selected', idx === i));
        renderTree();
        updateStatus();
    }

    function renderContent() {
        contentEl.innerHTML = '';
        if (!items.length) {
            contentEl.innerHTML = `<span style="color:#808080; font-size:12px;">${t('No applications found.')}</span>`;
            updateStatus();
            return;
        }
        items.forEach((item, i) => {
            const bapp = browserAppFor(item);
            const cell = document.createElement('div');
            cell.className = 'w98-cell';
            if (viewMode === 'list') {
                cell.style.cssText = 'display:flex; flex-direction:column; gap:1px; padding:2px 4px; cursor:pointer; font-size:11px; width:100%; box-sizing:border-box;';
                cell.innerHTML = `
                    <span style="display:flex; align-items:center; gap:4px;">
                        ${WIN98_ICONS.browser}
                        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(langText(item.name))}</span>
                    </span>
                    <span style="color:#808080; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; padding-left:18px;">${escapeHtml(langText(item.description))}</span>`;
            } else {
                cell.classList.add('win98-icon');
                cell.style.position = 'relative';
                cell.style.margin = '0';
                cell.title = langText(item.description);
                cell.innerHTML = `${desktopIconFor({ icon: WIN98_ICONS.browser })}<div class="win98-icon-label">${escapeHtml(langText(item.name))}</div>`;
            }
            if (isTouchDevice) {
                cell.addEventListener('click', () => openItem(bapp));
            } else {
                cell.addEventListener('dblclick', () => openItem(bapp));
            }
            cell.addEventListener('click', () => select(i));
            contentEl.appendChild(cell);
        });
        updateStatus();
    }

    function updateMenuBar() {
        menuBarEl.innerHTML = '';
        menuBarEl.appendChild(makeMenuBar([
            {
                label: 'File', items: [
                    { label: 'New Window', action: () => openItem(app) },
                    { separator: true },
                    { label: 'Open', shortcut: 'Enter', action: () => { if (selectedIndex >= 0) openItem(browserAppFor(items[selectedIndex])); } },
                    { separator: true },
                    { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                    { label: 'Exit', action: () => closeWindow(app.id) }
                ]
            },
            {
                label: 'View', items: [
                    { label: 'Large Icons', checked: viewMode === 'large', action: () => { viewMode = 'large'; renderContent(); } },
                    { label: 'List', checked: viewMode === 'list', action: () => { viewMode = 'list'; renderContent(); } },
                    { separator: true },
                    { label: 'Refresh', shortcut: 'F5', action: load }
                ]
            },
            {
                label: 'Help', items: [
                    { label: 'Help Topics', action: () => openItem(findAppById('help')) },
                    { separator: true },
                    { label: 'About Apply', action: () => showAbout(t('About Apply')) }
                ]
            }
        ]));
    }

    function load() {
        contentEl.innerHTML = `<span style="color:#808080; font-size:12px;">${t('Loading applications...')}</span>`;
        fetch(app.src)
            .then(r => r.json())
            .then(d => {
                items = (d && d.applications) || [];
                selectedIndex = -1;
                render();
            })
            .catch(() => {
                items = [];
                selectedIndex = -1;
                contentEl.innerHTML = `<span style="color:#808080; font-size:12px;">${t('Error loading applications data.')}</span>`;
                statusEl.textContent = t('Error loading applications data.');
                if (SOUND.error) SOUND.error();
            });
    }

    function render() {
        const path = `Desktop\\${appName(app)}`;
        addrEl.value = path;
        statusPathEl.textContent = path;
        renderTree();
        renderContent();
        updateMenuBar();
    }

    openBtn.addEventListener('click', () => { if (selectedIndex >= 0) openItem(browserAppFor(items[selectedIndex])); });

    container.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && selectedIndex >= 0) { openItem(browserAppFor(items[selectedIndex])); e.preventDefault(); }
        if (e.key === 'F5') { load(); e.preventDefault(); }
    });

    container.tabIndex = -1;
    container.addEventListener('click', () => container.focus());

    load();
}

// ── Browser (Win98-style web browser for Google Forms application links) ───
function renderBrowser(app, container) {
    container.style.cssText = 'display:flex; flex-direction:column; background:#c0c0c0; color:#000; font-family:"MS Sans Serif",Tahoma,Verdana,sans-serif; font-size:12px; padding:0; overflow:hidden;';

    const btnStyle = 'background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;';

    container.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; background:#c0c0c0;">
            <div id="br-menubar-${app.id}"></div>
            <div style="display:flex; align-items:center; gap:4px; padding:4px 6px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0;">
                <button id="br-back-${app.id}" title="${t('Back')}" style="${btnStyle}">&lt;</button>
                <button id="br-fwd-${app.id}" title="${t('Forward')}" style="${btnStyle}">&gt;</button>
                <button id="br-stop-${app.id}" title="${t('Stop')}" style="${btnStyle}">&#10005;</button>
                <button id="br-refresh-${app.id}" title="${t('Refresh')}" style="${btnStyle}">&#8635;</button>
                <button id="br-home-${app.id}" title="${t('Home')}" style="${btnStyle}">&#8962;</button>
                <span style="font-size:11px; margin-left:6px;">${t('Address')}</span>
                <input id="br-addr-${app.id}" type="text" spellcheck="false" style="flex:1; min-width:60px; font-size:11px; font-family:inherit; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; padding:2px 4px; background:#fff; outline:none;" />
                <button id="br-go-${app.id}" style="${btnStyle}">${t('Go')}</button>
                <button id="br-newtab-${app.id}" title="${t('Open in new tab')}" style="${btnStyle}">${t('New Tab')}</button>
            </div>
            <div id="br-body-${app.id}" style="flex:1; min-height:0; display:flex; flex-direction:column; background:#fff; margin:6px; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff;"></div>
            <div id="br-statusbar-${app.id}" style="display:flex; justify-content:space-between; padding:2px 8px; background:#c0c0c0; border-top:1px solid #808080; box-shadow: inset 0 1px 0 #fff; flex-shrink:0; font-size:11px;">
                <span id="br-status-${app.id}">${t('Ready')}</span>
                <span id="br-statuszone-${app.id}"></span>
            </div>
        </div>
    `;

    const menuBarEl = container.querySelector(`#br-menubar-${app.id}`);
    const bodyEl = container.querySelector(`#br-body-${app.id}`);
    const addrEl = container.querySelector(`#br-addr-${app.id}`);
    const statusEl = container.querySelector(`#br-status-${app.id}`);
    const backBtn = container.querySelector(`#br-back-${app.id}`);
    const fwdBtn = container.querySelector(`#br-fwd-${app.id}`);
    const stopBtn = container.querySelector(`#br-stop-${app.id}`);
    const refreshBtn = container.querySelector(`#br-refresh-${app.id}`);
    const homeBtn = container.querySelector(`#br-home-${app.id}`);
    const goBtn = container.querySelector(`#br-go-${app.id}`);
    const newTabBtn = container.querySelector(`#br-newtab-${app.id}`);

    const homeUrl = app.src;
    let history = [homeUrl];
    let histPos = 0;
    let currentUrl = homeUrl;
    let iframe = null;

    function embedUrl(u) {
        try {
            const url = new URL(u, window.location.origin);
            if (/(docs\.google\.com|forms\.gle)/i.test(url.hostname) && !url.searchParams.has('embedded')) {
                url.searchParams.set('embedded', 'true');
            }
            return url.toString();
        } catch (e) { return u; }
    }

    function normalizeUrl(input) {
        let u = (input || '').trim();
        if (!u) return null;
        if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(u)) u = 'https://' + u;
        return u;
    }

    function updateButtons() {
        backBtn.disabled = histPos <= 0;
        fwdBtn.disabled = histPos >= history.length - 1;
    }

    function renderPage(url) {
        bodyEl.innerHTML = '';
        statusEl.textContent = t('Loading...');
        const linkBar = document.createElement('div');
        linkBar.style.cssText = 'display:flex; align-items:center; gap:6px; padding:3px 8px; background:#c0c0c0; border-bottom:1px solid #808080; font-size:11px; flex-shrink:0;';
        linkBar.innerHTML = `<span style="flex-shrink:0;">${t('If the form does not load, open it in a new tab:')}</span><a href="${escapeHtml(url)}" target="_blank" rel="noopener" style="color:#0000ff; text-decoration:underline; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(url)}</a>`;
        bodyEl.appendChild(linkBar);

        const frame = document.createElement('iframe');
        frame.src = embedUrl(url);
        frame.style.cssText = 'flex:1; width:100%; border:0;';
        frame.addEventListener('load', () => { if (currentUrl === url) statusEl.textContent = t('Done'); });
        bodyEl.appendChild(frame);
        iframe = frame;
    }

    function navigate(url, push) {
        if (push) {
            history = history.slice(0, histPos + 1);
            history.push(url);
            histPos = history.length - 1;
        }
        currentUrl = url;
        addrEl.value = url;
        updateButtons();
        renderPage(url);
    }

    function goToAddress() {
        const u = normalizeUrl(addrEl.value);
        if (!u) return;
        if (u === currentUrl) renderPage(currentUrl);
        else navigate(u, true);
    }

    function goBack() { if (histPos > 0) { histPos--; navigate(history[histPos], false); } }
    function goForward() { if (histPos < history.length - 1) { histPos++; navigate(history[histPos], false); } }
    function stopLoad() { bodyEl.innerHTML = ''; statusEl.textContent = t('Stopped'); }
    function refresh() { renderPage(currentUrl); }
    function goHome() { navigate(homeUrl, true); }
    function openNewTab() {
        window.open(currentUrl, '_blank', 'noopener');
        statusEl.textContent = t('Done');
    }

    function updateMenuBar() {
        menuBarEl.innerHTML = '';
        menuBarEl.appendChild(makeMenuBar([
            {
                label: 'File', items: [
                    { label: 'New Window', action: () => openItem(app) },
                    { separator: true },
                    { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                    { label: 'Exit', action: () => closeWindow(app.id) }
                ]
            },
            {
                label: 'View', items: [
                    { label: 'Refresh', shortcut: 'F5', action: refresh },
                    { label: 'Stop', action: stopLoad },
                    { label: 'Home', action: goHome }
                ]
            },
            {
                label: 'Go', items: [
                    { label: 'Back', shortcut: 'Alt+Left', disabled: histPos <= 0, action: goBack },
                    { label: 'Forward', shortcut: 'Alt+Right', disabled: histPos >= history.length - 1, action: goForward },
                    { separator: true },
                    { label: 'Home', action: goHome },
                    { label: 'Open in new tab', action: openNewTab }
                ]
            },
            {
                label: 'Help', items: [
                    { label: 'Help Topics', action: () => openItem(findAppById('help')) },
                    { separator: true },
                    { label: 'About Browser', action: () => showAbout(t('About Browser')) }
                ]
            }
        ]));
    }

    backBtn.addEventListener('click', goBack);
    fwdBtn.addEventListener('click', goForward);
    stopBtn.addEventListener('click', stopLoad);
    refreshBtn.addEventListener('click', refresh);
    homeBtn.addEventListener('click', goHome);
    goBtn.addEventListener('click', goToAddress);
    newTabBtn.addEventListener('click', openNewTab);
    addrEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') goToAddress(); });

    container.addEventListener('keydown', (e) => {
        if (e.key === 'F5') { refresh(); e.preventDefault(); }
        if (e.altKey && e.key === 'ArrowLeft') { goBack(); e.preventDefault(); }
        if (e.altKey && e.key === 'ArrowRight') { goForward(); e.preventDefault(); }
    });

    container.tabIndex = -1;
    container.addEventListener('click', () => container.focus());

    updateMenuBar();
    navigate(homeUrl, false);
}

// ── Committees (Win98 Explorer-style committee browser) ─────────────────────
function renderCommittees(app, container) {
    container.style.cssText = 'display:flex; flex-direction:column; background:#c0c0c0; color:#000; font-family:"MS Sans Serif",Tahoma,Verdana,sans-serif; font-size:12px; padding:0; overflow:hidden;';

    const btnStyle = 'background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;';
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const treeW = isMobile ? '110px' : '180px';

    container.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; background:#c0c0c0;">
            <div id="comm-menubar-${app.id}"></div>
            <div style="display:flex; align-items:center; gap:4px; padding:4px 6px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0;">
                <button id="comm-back-${app.id}" title="${t('Back')}" disabled style="${btnStyle}">&lt;</button>
                <button id="comm-fwd-${app.id}" title="${t('Forward')}" disabled style="${btnStyle}">&gt;</button>
                <button id="comm-up-${app.id}" title="${t('Up one level')}" style="${btnStyle}">&#9650;</button>
                <span style="font-size:11px; margin-left:8px; ${isMobile ? 'display:none;' : ''}">${t('Address')}</span>
                <input id="comm-addr-${app.id}" type="text" spellcheck="false" readonly style="flex:1; min-width:60px; font-size:11px; font-family:inherit; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; padding:2px 4px; background:#fff; outline:none;" />
            </div>
            <div style="flex:1; display:flex; min-height:0;">
                ${isMobile ? '' : `<div id="comm-tree-${app.id}" style="width:${treeW}; flex-shrink:0; background:#fff; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; margin:6px; overflow:auto; padding:2px;"></div>`}
                <div id="comm-content-${app.id}" style="flex:1; background:#fff; border:1px solid #000; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; margin:6px; overflow:auto; display:flex; flex-wrap:wrap; align-content:flex-start; gap:10px; padding:${isMobile ? '8px' : '12px'};"></div>
            </div>
            <div style="display:flex; justify-content:space-between; padding:2px 8px; background:#c0c0c0; border-top:1px solid #808080; box-shadow: inset 0 1px 0 #fff; flex-shrink:0; font-size:11px;">
                <span id="comm-status-${app.id}"></span>
                <span id="comm-statuspath-${app.id}"></span>
            </div>
        </div>
    `;

    const menuBarEl = container.querySelector(`#comm-menubar-${app.id}`);
    const treeEl = container.querySelector(`#comm-tree-${app.id}`);
    const contentEl = container.querySelector(`#comm-content-${app.id}`);
    const addrEl = container.querySelector(`#comm-addr-${app.id}`);
    const statusEl = container.querySelector(`#comm-status-${app.id}`);
    const statusPathEl = container.querySelector(`#comm-statuspath-${app.id}`);
    const backBtn = container.querySelector(`#comm-back-${app.id}`);
    const fwdBtn = container.querySelector(`#comm-fwd-${app.id}`);
    const upBtn = container.querySelector(`#comm-up-${app.id}`);

    let categories = [];
    let selectedNodeId = null;
    let selectedType = null;
    let selectedCatName = '';
    let selectedSubName = '';
    let navHistory = [];
    let histPos = -1;

    function pushHistory() {
        navHistory = navHistory.slice(0, histPos + 1);
        navHistory.push({ id: selectedNodeId, type: selectedType, catName: selectedCatName, subName: selectedSubName });
        histPos = navHistory.length - 1;
    }

    function updateNavButtons() {
        backBtn.disabled = histPos <= 0;
        fwdBtn.disabled = histPos >= navHistory.length - 1;
    }

    function restoreFromHistory() {
        const h = navHistory[histPos];
        selectedNodeId = h.id; selectedType = h.type; selectedCatName = h.catName; selectedSubName = h.subName;
        renderTree(); renderContent(); updateAddr(); updateStatus(); updateNavButtons();
    }

    function goBack() { if (histPos > 0) { histPos--; restoreFromHistory(); } }
    function goForward() { if (histPos < navHistory.length - 1) { histPos++; restoreFromHistory(); } }

    function buildTreeData() {
        const tree = [{ id: '__root__', label: t('Committees'), type: 'root', children: [] }];
        categories.forEach(cat => {
            const catNode = { id: cat.id, label: langText(cat.name), type: 'category', data: cat, children: [] };
            (cat.subcommittees || []).forEach(sub => {
                catNode.children.push({ id: sub.id, label: langText(sub.shortName) || langText(sub.name), type: 'subcommittee', data: sub });
            });
            tree[0].children.push(catNode);
        });
        return tree;
    }

    function renderTree() {
        if (!treeEl) return;
        treeEl.innerHTML = '';
        function renderNode(node, depth) {
            const row = document.createElement('div');
            row.style.cssText = `display:flex; align-items:center; gap:3px; padding:1px 4px; cursor:pointer; font-size:11px; white-space:nowrap; padding-left:${4 + depth * 14}px;`;
            if (selectedNodeId === node.id) { row.style.background = '#000080'; row.style.color = '#fff'; }
            const icon = node.type === 'root' ? WIN98_ICONS.committees : node.type === 'category' ? WIN98_ICONS.folder : WIN98_ICONS.committees;
            const arrow = (node.children && node.children.length) ? '<span style="font-size:8px; width:10px; flex-shrink:0;">&#9660;</span>' : '<span style="width:10px; flex-shrink:0;"></span>';
            row.innerHTML = `${arrow}<span style="flex-shrink:0;">${icon}</span><span style="overflow:hidden; text-overflow:ellipsis;">${escapeHtml(node.label)}</span>`;
            row.addEventListener('click', () => { selectNode(node.id, node.type, node.data); });
            treeEl.appendChild(row);
            if (node.children) node.children.forEach(c => renderNode(c, depth + 1));
        }
        buildTreeData().forEach(n => renderNode(n, 0));
    }

    function selectNode(id, type, data) {
        selectedNodeId = id;
        selectedType = type;
        if (type === 'category' && data) selectedCatName = langText(data.name);
        if (type === 'subcommittee' && data) selectedSubName = langText(data.name);
        pushHistory();
        renderTree();
        renderContent();
        updateAddr();
        updateStatus();
        updateNavButtons();
    }

    function updateAddr() {
        if (selectedType === 'root' || !selectedType) addrEl.value = 'Desktop\\' + t('Committees');
        else if (selectedType === 'category') addrEl.value = 'Desktop\\' + t('Committees') + '\\' + selectedCatName;
        else if (selectedType === 'subcommittee') addrEl.value = 'Desktop\\' + t('Committees') + '\\' + selectedCatName + '\\' + selectedSubName;
    }

    function updateStatus() {
        const cells = contentEl.querySelectorAll('.comm-card');
        statusEl.textContent = `${cells.length} ${t('objects')}`;
    }

    function renderContent() {
        contentEl.innerHTML = '';
        if (selectedType === 'root' || !selectedType) {
            renderCategoryCards();
        } else if (selectedType === 'category') {
            const cat = categories.find(c => c.id === selectedNodeId);
            if (cat) renderSubcommitteeCards(cat);
        } else if (selectedType === 'subcommittee') {
            const cat = categories.find(c => (c.subcommittees || []).some(s => s.id === selectedNodeId));
            const sub = cat ? (cat.subcommittees || []).find(s => s.id === selectedNodeId) : null;
            if (sub) renderCommitteeCards(sub);
        }
    }

    function renderCategoryCards() {
        categories.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'comm-card';
            card.style.cssText = 'width:100%; box-sizing:border-box; background:#fff; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; overflow:hidden; flex-shrink:0;';
            const bgImg = cat.backgroundImage || '';
            card.innerHTML = `
                <div style="height:120px; background:url('${escapeHtml(bgImg)}') center/cover no-repeat; position:relative;">
                    <div style="position:absolute; inset:0; background:linear-gradient(transparent 40%, rgba(0,0,0,0.7));"></div>
                    <div style="position:absolute; bottom:0; left:0; right:0; padding:8px 10px; color:#fff; font-weight:bold; font-size:13px; text-shadow:1px 1px 2px #000;">${escapeHtml(langText(cat.name))}</div>
                </div>
                <div style="padding:6px 10px; font-size:11px; color:#000;">${escapeHtml(langText(cat.description))}</div>
            `;
            card.addEventListener('click', () => selectNode(cat.id, 'category', cat));
            contentEl.appendChild(card);
        });
    }

    function renderSubcommitteeCards(cat) {
        (cat.subcommittees || []).forEach(sub => {
            const card = document.createElement('div');
            card.className = 'comm-card';
            card.style.cssText = 'width:100%; box-sizing:border-box; background:#fff; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; overflow:hidden; flex-shrink:0;';
            card.innerHTML = `
                <div style="padding:8px 10px;">
                    <div style="font-weight:bold; font-size:12px; color:#000080; margin-bottom:4px;">${escapeHtml(langText(sub.name))}</div>
                    <div style="font-size:11px; color:#333; margin-bottom:6px;">${escapeHtml(langText(sub.description))}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                        <button class="comm-explore-btn" style="${btnStyle} font-size:10px;">${t('Explore')}</button>
                        ${sub.committees && sub.committees[0] && sub.committees[0].studyGuideUrl ? `<a href="${escapeHtml(sub.committees[0].studyGuideUrl)}" target="_blank" rel="noopener" onclick="event.stopPropagation();" style="${btnStyle} font-size:10px; text-decoration:none; color:#000;">${t('Study Guide')}</a>` : ''}
                    </div>
                </div>
            `;
            card.querySelector('.comm-explore-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                openCommitteeDetail(sub);
            });
            card.addEventListener('click', () => selectNode(sub.id, 'subcommittee', sub));
            contentEl.appendChild(card);
        });
    }

    function renderCommitteeCards(sub) {
        (sub.committees || []).forEach(committee => {
            const card = document.createElement('div');
            card.className = 'comm-card';
            card.style.cssText = 'width:100%; box-sizing:border-box; background:#fff; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; overflow:hidden; flex-shrink:0;';
            const bgImg = committee.backgroundImage || '';
            const members = (committee.boardMembers || []).slice(0, 3);
            card.innerHTML = `
                <div style="height:140px; background:url('${escapeHtml(bgImg)}') center/cover no-repeat; position:relative;">
                    <div style="position:absolute; inset:0; background:linear-gradient(transparent 30%, rgba(0,0,0,0.75));"></div>
                    <div style="position:absolute; bottom:0; left:0; right:0; padding:8px 10px; color:#fff; font-weight:bold; font-size:13px; text-shadow:1px 1px 2px #000;">${escapeHtml(langText(committee.name))}</div>
                </div>
                <div style="padding:8px 10px;">
                    <div style="font-size:10px; color:#808080; text-transform:uppercase; margin-bottom:2px;">${t('Agenda Item')}</div>
                    <div style="font-size:11px; color:#333; margin-bottom:8px;">${escapeHtml(langText(committee.agendaItem))}</div>
                    ${members.length ? `
                    <div style="font-size:10px; color:#808080; text-transform:uppercase; margin-bottom:4px;">${t('Board Members')}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                        ${members.map(m => `
                            <div style="display:flex; align-items:center; gap:4px;">
                                <img src="${escapeHtml(m.image)}" style="width:22px; height:22px; border-radius:50%; border:1px solid #808080; object-fit:cover;" onerror="this.style.display='none'" />
                                <span style="font-size:10px; color:#000;">${escapeHtml(m.name)}</span>
                            </div>
                        `).join('')}
                    </div>` : ''}
                    <div style="margin-top:8px; display:flex; gap:6px; flex-wrap:wrap;">
                        <button class="comm-explore-btn" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:3px 14px;">${t('Explore')}</button>
                        ${committee.studyGuideUrl ? `<a href="${escapeHtml(committee.studyGuideUrl)}" target="_blank" rel="noopener" onclick="event.stopPropagation();" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:3px 14px; text-decoration:none; color:#000;">${t('Study Guide')}</a>` : ''}
                    </div>
                </div>
            `;
            card.querySelector('.comm-explore-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                openCommitteeDetail(sub, committee);
            });
            card.addEventListener('click', () => openCommitteeDetail(sub, committee));
            contentEl.appendChild(card);
        });
    }

    function openCommitteeDetail(sub, committee) {
        const comm = committee || (sub.committees && sub.committees[0]);
        if (!comm) return;
        openAppWindow({
            id: 'committee_detail_' + comm.id,
            name: langText(comm.name),
            nameTr: langText(comm.name),
            type: 'committee_detail',
            icon: WIN98_ICONS.committees,
            committee: comm,
            subcommittee: sub
        });
    }

    function updateMenuBar() {
        menuBarEl.innerHTML = '';
        menuBarEl.appendChild(makeMenuBar([
            {
                label: 'File', items: [
                    { label: 'New Window', action: () => openItem(app) },
                    { separator: true },
                    { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                    { label: 'Exit', action: () => closeWindow(app.id) }
                ]
            },
            {
                label: 'View', items: [
                    { label: 'Refresh', shortcut: 'F5', action: load }
                ]
            },
            {
                label: 'Help', items: [
                    { label: 'Help Topics', action: () => openItem(findAppById('help')) },
                    { separator: true },
                    { label: 'About Committees', action: () => showAbout(t('About Committees')) }
                ]
            }
        ]));
    }

    function load() {
        contentEl.innerHTML = `<span style="color:#808080; font-size:12px;">${t('Loading committees...')}</span>`;
        fetch(app.src)
            .then(r => r.json())
            .then(d => {
                categories = (d && d.categories) || [];
                navHistory = []; histPos = -1;
                selectedNodeId = '__root__';
                selectedType = 'root';
                pushHistory();
                render();
            })
            .catch(() => {
                categories = [];
                contentEl.innerHTML = `<span style="color:#808080; font-size:12px;">${t('Error loading committees data.')}</span>`;
                statusEl.textContent = t('Error loading committees data.');
                if (SOUND.error) SOUND.error();
            });
    }

    function render() {
        addrEl.value = 'Desktop\\' + t('Committees');
        statusPathEl.textContent = addrEl.value;
        renderTree();
        renderContent();
        updateMenuBar();
        updateStatus();
        updateNavButtons();
    }

    backBtn.addEventListener('click', goBack);
    fwdBtn.addEventListener('click', goForward);

    upBtn.addEventListener('click', () => {
        if (selectedType === 'subcommittee') {
            const cat = categories.find(c => (c.subcommittees || []).some(s => s.id === selectedNodeId));
            if (cat) selectNode(cat.id, 'category', cat);
        } else if (selectedType === 'category') {
            selectNode('__root__', 'root', null);
        }
    });

    container.addEventListener('keydown', (e) => {
        if (e.key === 'F5') { load(); e.preventDefault(); }
        if (e.altKey && e.key === 'ArrowLeft') { goBack(); e.preventDefault(); }
        if (e.altKey && e.key === 'ArrowRight') { goForward(); e.preventDefault(); }
    });

    container.tabIndex = -1;
    container.addEventListener('click', () => container.focus());

    load();
}

// ── Committee Detail (individual committee page) ────────────────────────────
function renderCommitteeDetail(app, container) {
    container.style.cssText = 'display:flex; flex-direction:column; background:#fff; color:#000; font-family:"MS Sans Serif",Tahoma,Verdana,sans-serif; font-size:12px; padding:0; overflow:hidden;';

    const committee = app.committee;
    const subcommittee = app.subcommittee;
    if (!committee) {
        container.innerHTML = `<p style="margin:10px;">${t('No committee data found.')}</p>`;
        return;
    }

    const members = committee.boardMembers || [];
    const bgImg = committee.backgroundImage || '';
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const heroH = isMobile ? '100px' : '160px';

    container.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; overflow-y:auto;">
            <div id="cdt-menubar-${app.id}" style="flex-shrink:0;"></div>
            <div style="display:flex; align-items:center; gap:4px; padding:3px 6px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0;">
                <button id="cdt-back-${app.id}" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-weight:bold; font-size:11px; font-family:inherit; line-height:1; padding:2px 8px;">&lt;</button>
                <span style="font-size:11px; color:#808080;">${escapeHtml(langText(committee.name))}</span>
            </div>
            <div style="height:${heroH}; background:url('${escapeHtml(bgImg)}') center/cover no-repeat; position:relative; flex-shrink:0;">
                <div style="position:absolute; inset:0; background:linear-gradient(transparent 30%, rgba(0,0,0,0.8));"></div>
                <div style="position:absolute; bottom:0; left:0; right:0; padding:12px 16px; color:#fff;">
                    <div style="font-size:${isMobile ? '14px' : '16px'}; font-weight:bold; text-shadow:1px 1px 3px #000;">${escapeHtml(langText(committee.name))}</div>
                    ${subcommittee ? `<div style="font-size:11px; opacity:0.85; margin-top:2px;">${escapeHtml(langText(subcommittee.name))}</div>` : ''}
                </div>
            </div>
            <div style="display:flex; flex-direction:${isMobile ? 'column' : 'row'}; gap:0; flex:1; min-height:0;">
                <div id="cdt-main-${app.id}" style="flex:1; padding:${isMobile ? '10px 12px' : '12px 16px'}; ${isMobile ? '' : 'overflow:auto;'}"></div>
                <div id="cdt-sidebar-${app.id}" style="${isMobile ? 'width:100%; border-left:none; border-top:1px solid #c0c0c0;' : 'width:200px; border-left:1px solid #c0c0c0;'} flex-shrink:0; background:#f0f0f0; padding:10px; overflow:auto;"></div>
            </div>
        </div>
    `;

    const menuBarEl = container.querySelector(`#cdt-menubar-${app.id}`);
    const mainEl = container.querySelector(`#cdt-main-${app.id}`);
    const sidebarEl = container.querySelector(`#cdt-sidebar-${app.id}`);
    const backBtn = container.querySelector(`#cdt-back-${app.id}`);

    backBtn.addEventListener('click', () => closeWindow(app.id));

    let activeTab = 'overview';

    function renderMenuBar() {
        menuBarEl.innerHTML = '';
        menuBarEl.appendChild(makeMenuBar([
            {
                label: 'File', items: [
                    { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                    { label: 'Exit', action: () => closeWindow(app.id) }
                ]
            },
            {
                label: 'Help', items: [
                    { label: 'Help Topics', action: () => openItem(findAppById('help')) },
                    { separator: true },
                    { label: 'About Committees', action: () => showAbout(t('About Committees')) }
                ]
            }
        ]));
    }

    function renderTabs() {
        mainEl.innerHTML = '';
        const tabBar = document.createElement('div');
        tabBar.style.cssText = 'display:flex; gap:2px; margin-bottom:10px;';
        ['overview', 'details'].forEach(tab => {
            const btn = document.createElement('button');
            btn.textContent = tab === 'overview' ? t('Overview') : t('Details');
            btn.style.cssText = `background:${activeTab === tab ? '#fff' : '#c0c0c0'}; border:2px solid #fff; border-right-color:${activeTab === tab ? '#000' : '#808080'}; border-bottom-color:${activeTab === tab ? '#000' : '#808080'}; cursor:pointer; font-size:11px; font-family:inherit; padding:3px 14px; font-weight:${activeTab === tab ? 'bold' : 'normal'};`;
            btn.addEventListener('click', () => { activeTab = tab; renderTabs(); });
            tabBar.appendChild(btn);
        });
        mainEl.appendChild(tabBar);

        const content = document.createElement('div');
        content.style.cssText = 'font-size:12px; line-height:1.6; color:#000;';
        const text = activeTab === 'overview' ? committee.overview : committee.details;
        content.innerHTML = escapeHtml(langText(text)).replace(/\n/g, '<br>');
        mainEl.appendChild(content);
    }

    function renderSidebar() {
        sidebarEl.innerHTML = '';
        if (members.length) {
            const heading = document.createElement('div');
            heading.style.cssText = 'font-weight:bold; font-size:11px; color:#000080; margin-bottom:8px; text-transform:uppercase;';
            heading.textContent = t('Board Members');
            sidebarEl.appendChild(heading);
            members.forEach(m => {
                const row = document.createElement('div');
                row.style.cssText = 'display:flex; align-items:center; gap:6px; margin-bottom:8px; padding:4px; background:#fff; border:1px solid #c0c0c0;';
                row.innerHTML = `
                    <img src="${escapeHtml(m.image)}" style="width:32px; height:32px; border-radius:50%; border:1px solid #808080; object-fit:cover; flex-shrink:0;" onerror="this.style.display='none'" />
                    <div style="min-width:0;">
                        <div style="font-size:11px; font-weight:bold; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(m.name)}</div>
                        <div style="font-size:10px; color:#808080;">${escapeHtml(langText(m.role))}</div>
                    </div>
                `;
                sidebarEl.appendChild(row);
            });
        }

        if (committee.agendaItem) {
            const agendaHeading = document.createElement('div');
            agendaHeading.style.cssText = 'font-weight:bold; font-size:11px; color:#000080; margin-top:12px; margin-bottom:4px; text-transform:uppercase;';
            agendaHeading.textContent = t('Agenda Item');
            sidebarEl.appendChild(agendaHeading);
            const agendaText = document.createElement('div');
            agendaText.style.cssText = 'font-size:11px; color:#333; line-height:1.4;';
            agendaText.textContent = langText(committee.agendaItem);
            sidebarEl.appendChild(agendaText);
        }

        if (committee.studyGuideUrl) {
            const guideHeading = document.createElement('div');
            guideHeading.style.cssText = 'font-weight:bold; font-size:11px; color:#000080; margin-top:12px; margin-bottom:4px; text-transform:uppercase;';
            guideHeading.textContent = t('Study Guide');
            sidebarEl.appendChild(guideHeading);
            const link = document.createElement('a');
            link.href = committee.studyGuideUrl;
            link.target = '_blank';
            link.rel = 'noopener';
            link.style.cssText = 'font-size:11px; color:#0000ff; text-decoration:underline; word-break:break-all;';
            link.textContent = committee.studyGuideUrl;
            sidebarEl.appendChild(link);
        }
    }

    renderMenuBar();
    renderTabs();
    renderSidebar();
}


// ── Win98 Control Panel applet icons ────────────────────────────────────────
const CP_ICON = {
    display: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="3" y="4" width="26" height="17" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="4" y="5" width="24" height="15" fill="#000080"/><rect x="5" y="6" width="5" height="3" fill="#008080"/><rect x="13" y="21" width="6" height="4" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="6" y="25" width="20" height="2" fill="#c0c0c0" stroke="#000" stroke-width="1"/></svg>`,
    sounds: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="4" y="14" width="6" height="6" fill="#c0c0c0" stroke="#000" stroke-width="1"/><polygon points="10,14 16,9 16,25 10,20" fill="#c0c0c0" stroke="#000" stroke-width="1"/><path d="M19,11 A7,7 0 0,1 19,23" fill="none" stroke="#000080" stroke-width="2"/><path d="M22,8 A11,11 0 0,1 22,26" fill="none" stroke="#000080" stroke-width="2"/></svg>`,
    regional: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#0080ff" stroke="#000" stroke-width="1"/><ellipse cx="16" cy="16" rx="5" ry="12" fill="none" stroke="#000" stroke-width="1"/><line x1="4" y1="16" x2="28" y2="16" stroke="#000" stroke-width="1"/><circle cx="16" cy="16" r="3" fill="#ffff00" stroke="#000" stroke-width="1"/></svg>`,
    datetime: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="19" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="6" y="10" width="20" height="4" fill="#000080"/><line x1="10" y1="5" x2="10" y2="9" stroke="#000" stroke-width="2"/><line x1="22" y1="5" x2="22" y2="9" stroke="#000" stroke-width="2"/><circle cx="16" cy="19" r="5" fill="#fff" stroke="#000" stroke-width="1"/><line x1="16" y1="19" x2="16" y2="15" stroke="#000" stroke-width="1"/><line x1="16" y1="19" x2="19" y2="20.5" stroke="#000" stroke-width="1"/></svg>`,
    addremove: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="3" y="5" width="20" height="22" fill="#fff" stroke="#000" stroke-width="1"/><rect x="5" y="8" width="16" height="4" fill="#c0c0c0" stroke="#000" stroke-width="1"/><path d="M26,12 A6,6 0 1,0 26,24 A6,6 0 0,0 26,12 Z" fill="#c0c0c0" stroke="#000" stroke-width="1"/><line x1="23" y1="18" x2="29" y2="18" stroke="#000" stroke-width="2"/><line x1="26" y1="15" x2="26" y2="21" stroke="#000" stroke-width="2"/></svg>`,
    system: `<svg class="win98-icon-svg" viewBox="0 0 32 32"><rect x="7" y="2" width="18" height="22" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="9" y="4" width="14" height="9" fill="#000080"/><line x1="12" y1="16" x2="12" y2="18" stroke="#000" stroke-width="1"/><line x1="16" y1="16" x2="16" y2="18" stroke="#000" stroke-width="1"/><line x1="20" y1="16" x2="20" y2="18" stroke="#000" stroke-width="1"/><rect x="13" y="24" width="6" height="2" fill="#c0c0c0" stroke="#000" stroke-width="1"/><rect x="8" y="27" width="16" height="3" fill="#c0c0c0" stroke="#000" stroke-width="1"/></svg>`
};

const CONTROL_PANEL_APPLETS = [
    { id: 'display',    name: 'Display',           nameTr: 'Görüntü',            icon: CP_ICON.display,    desc: 'Adjust the desktop wallpaper for the whole site.' },
    { id: 'sounds',     name: 'Sounds',            nameTr: 'Sesler',             icon: CP_ICON.sounds,     desc: 'Control the sound effects of the operating system.' },
    { id: 'regional',   name: 'Regional Settings', nameTr: 'Bölgesel Ayarlar',   icon: CP_ICON.regional,   desc: 'Choose which language the website is shown in.' },
    { id: 'datetime',   name: 'Date/Time',         nameTr: 'Tarih/Saat',         icon: CP_ICON.datetime,   desc: 'Change how the clock is displayed in the taskbar.' },
    { id: 'addremove',  name: 'Add/Remove Programs', nameTr: 'Program Ekle/Kaldır', icon: CP_ICON.addremove, desc: 'Manage the components installed on your system.' },
    { id: 'system',     name: 'System',            nameTr: 'Sistem',             icon: CP_ICON.system,     desc: 'View information about your computer.' }
];

// ── Settings (Win98 Control Panel: applet grid + pages) ─────────────────────
function renderSettings(app, container) {
    container.style.cssText = 'display:flex; flex-direction:column; background:#c0c0c0; color:#000; font-family:' + WIN98_FONT + '; font-size:12px; padding:0; overflow:hidden;';

    container.innerHTML = `
        <div id="settings-menubar-${app.id}"></div>
        <div id="settings-crumb-${app.id}" style="display:none; align-items:center; gap:6px; padding:3px 8px; background:#c0c0c0; border-bottom:1px solid #808080; flex-shrink:0; font-size:11px;">
            <button id="settings-back-${app.id}" style="background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-size:11px; font-family:inherit; padding:2px 10px;">${t('Back')}</button>
            <span id="settings-crumbtext-${app.id}"></span>
        </div>
        <div id="settings-body-${app.id}" style="flex:1; overflow:hidden; min-height:0; background:#c0c0c0;"></div>
        <div style="display:flex; justify-content:space-between; padding:2px 8px; background:#c0c0c0; border-top:1px solid #808080; box-shadow: inset 0 1px 0 #fff; flex-shrink:0; font-size:11px;">
            <span id="settings-status-${app.id}"></span>
            <span>MUNDERES 27</span>
        </div>
    `;

    const menuBarEl  = container.querySelector(`#settings-menubar-${app.id}`);
    const crumbEl    = container.querySelector(`#settings-crumb-${app.id}`);
    const backBtn    = container.querySelector(`#settings-back-${app.id}`);
    const crumbText  = container.querySelector(`#settings-crumbtext-${app.id}`);
    const bodyEl     = container.querySelector(`#settings-body-${app.id}`);
    const statusEl   = container.querySelector(`#settings-status-${app.id}`);

    let current = null;

    function updateStatus(msg) {
        statusEl.textContent = msg;
        setTimeout(() => { if (statusEl.textContent === msg) statusEl.textContent = t('Ready'); }, 2500);
    }

    function groupBox(title) {
        const box = document.createElement('div');
        box.style.cssText = 'margin-bottom:12px; padding:10px; background:#c0c0c0; border:2px solid #fff; border-right-color:#808080; border-bottom-color:#808080; box-shadow: inset 1px 1px 0 #fff;';
        const head = document.createElement('div');
        head.style.cssText = 'font-weight:bold; font-size:12px; margin-bottom:8px; color:#000080;';
        head.textContent = title;
        box.appendChild(head);
        return box;
    }

    function note(text) {
        const p = document.createElement('div');
        p.style.cssText = 'color:#808080; font-size:11px; margin:2px 0 8px;';
        p.textContent = text;
        return p;
    }

    function radioRow(group, value, label, checked) {
        const labelEl = document.createElement('label');
        labelEl.style.cssText = 'display:flex; align-items:center; gap:6px; margin:4px 0; cursor:pointer; font-size:12px;';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = group;
        input.value = value;
        input.checked = checked;
        labelEl.appendChild(input);
        labelEl.appendChild(document.createTextNode(label));
        return { el: labelEl, input };
    }

    function button(label) {
        const b = document.createElement('button');
        b.textContent = label;
        b.style.cssText = 'background:#c0c0c0; border:2px solid #fff; border-right-color:#000; border-bottom-color:#000; cursor:pointer; font-family:inherit; font-size:11px; padding:3px 16px;';
        b.addEventListener('mousedown', (e) => e.preventDefault());
        return b;
    }

    function appletLabel(a) {
        return (LANG === 'tr' && a.nameTr) ? a.nameTr : a.name;
    }

    // ── Main view: two-pane Control Panel (left info + applet grid) ──
    function renderMain() {
        current = null;
        crumbEl.style.display = 'none';
        bodyEl.style.padding = '0';
        bodyEl.style.overflowY = 'hidden';
        bodyEl.innerHTML = '';

        const layout = document.createElement('div');
        layout.style.cssText = 'display:flex; height:100%; min-height:0;';

        const left = document.createElement('div');
        left.style.cssText = 'width:160px; flex-shrink:0; background:#fff; border-right:1px solid #808080; box-shadow: inset -1px 0 0 #fff; padding:12px 10px; overflow:hidden; display:flex; flex-direction:column; gap:8px;';
        const leftIcon = document.createElement('div');
        leftIcon.innerHTML = WIN98_DESKTOP_ICONS.settings;
        leftIcon.style.cssText = 'width:56px; height:56px;';
        const leftTitle = document.createElement('div');
        leftTitle.style.cssText = 'font-weight:bold; font-size:13px; color:#000080;';
        leftTitle.textContent = t('Control Panel');
        const leftDesc = document.createElement('div');
        leftDesc.style.cssText = 'font-size:11px; color:#000; line-height:1.4;';
        leftDesc.textContent = t('Adjust settings for your system.');

        const selectedA = document.createElement('div');
        selectedA.style.cssText = 'margin-top:14px; border-top:1px solid #808080; border-bottom:1px solid #fff; padding-top:10px; display:flex; flex-direction:column; gap:6px;';
        const selectedAIcon = document.createElement('div');
        selectedAIcon.innerHTML = CONTROL_PANEL_APPLETS[0].icon;
        const selectedATitle = document.createElement('div');
        selectedATitle.style.cssText = 'font-weight:bold; font-size:12px;';
        selectedATitle.textContent = appletLabel(CONTROL_PANEL_APPLETS[0]);
        const selectedADesc = document.createElement('div');
        selectedADesc.style.cssText = 'font-size:11px; line-height:1.4; color:#000;';
        selectedADesc.textContent = t(CONTROL_PANEL_APPLETS[0].desc);

        left.appendChild(leftIcon);
        left.appendChild(leftTitle);
        left.appendChild(leftDesc);
        selectedA.appendChild(selectedAIcon);
        selectedA.appendChild(selectedATitle);
        selectedA.appendChild(selectedADesc);
        left.appendChild(selectedA);

        const right = document.createElement('div');
        right.style.cssText = 'flex:1; overflow-y:auto; padding:10px; background:#c0c0c0;';
        const grid = document.createElement('div');
        grid.style.cssText = 'display:flex; flex-wrap:wrap; align-content:flex-start;';

        let selectedCell = null;
        function selectApplet(a, cell) {
            if (selectedCell) {
                selectedCell.style.background = '';
                const lbl = selectedCell.querySelector('span');
                if (lbl) lbl.style.color = '';
            }
            selectedCell = cell;
            cell.style.background = '#000080';
            const lbl = cell.querySelector('span');
            if (lbl) lbl.style.color = '#fff';
            selectedAIcon.innerHTML = a.icon;
            selectedATitle.textContent = appletLabel(a);
            selectedADesc.textContent = t(a.desc);
            statusEl.textContent = t('Ready');
        }

        CONTROL_PANEL_APPLETS.forEach(a => {
            const cell = document.createElement('div');
            cell.style.cssText = 'display:flex; flex-direction:column; align-items:center; width:92px; padding:8px 4px; cursor:pointer; box-sizing:border-box;';
            cell.innerHTML = a.icon + '<span style="font-size:11px; text-align:center; line-height:1.2; margin-top:4px; color:#000;">' + escapeHtml(appletLabel(a)) + '</span>';
            cell.addEventListener('click', () => { selectApplet(a, cell); SOUND.click(); });
            if (isTouchDevice) {
                cell.addEventListener('click', () => { SOUND.open(); renderApplet(a); });
            } else {
                cell.addEventListener('dblclick', () => { SOUND.open(); renderApplet(a); });
            }
            grid.appendChild(cell);
        });

        right.appendChild(grid);
        layout.appendChild(left);
        layout.appendChild(right);
        bodyEl.appendChild(layout);
        statusEl.textContent = t('Ready');
    }

    // ── Applet pages ──
    function pageContainer() {
        bodyEl.style.padding = '12px';
        bodyEl.style.overflowY = 'auto';
        bodyEl.innerHTML = '';
    }

    function renderApplet(a) {
        current = a.id;
        crumbEl.style.display = 'flex';
        crumbText.innerHTML = '<span style="color:#000080; font-weight:bold;">' + t('Control Panel') + '</span><span style="margin:0 4px;">&gt;</span>' + escapeHtml(appletLabel(a));
        pageContainer();
        statusEl.textContent = t('Ready');

        if (a.id === 'display')    pageDisplay();
        else if (a.id === 'sounds') pageSounds();
        else if (a.id === 'regional') pageRegional();
        else if (a.id === 'datetime') pageDateTime();
        else if (a.id === 'addremove') pageAddRemove();
        else if (a.id === 'system') pageSystem();
    }

    // Display: wallpaper + text size
    function pageDisplay() {
        const box = groupBox(t('Wallpaper'));
        box.appendChild(note(t('Adjust the desktop wallpaper for the whole site.')));

        const preview = document.createElement('div');
        preview.style.cssText = 'width:210px; height:120px; border:2px solid #000; box-shadow: inset 2px 2px 0 #fff, inset -2px -2px 0 #808080; margin:0 auto 12px;';
        const cur = WALLPAPERS.find(w => w.id === SETTINGS.wallpaper) || WALLPAPERS[0];
        preview.style.background = cur.pattern ? (cur.pattern + ' ' + cur.css) : cur.css;
        if (cur.size) preview.style.backgroundSize = cur.size;
        box.appendChild(preview);

        const swatchWrap = document.createElement('div');
        swatchWrap.style.cssText = 'display:flex; flex-wrap:wrap; gap:8px;';
        WALLPAPERS.forEach(w => {
            const cell = document.createElement('div');
            cell.style.cssText = 'display:flex; flex-direction:column; align-items:center; cursor:pointer; width:76px;';
            const sw = document.createElement('div');
            sw.style.cssText = 'width:72px; height:48px; border:2px solid #808080; box-shadow: inset 1px 1px 0 #fff; box-sizing:border-box;';
            sw.style.background = w.pattern ? (w.pattern + ' ' + w.css) : w.css;
            if (w.size) sw.style.backgroundSize = w.size;
            if (SETTINGS.wallpaper === w.id) { sw.style.outline = '2px solid #000080'; sw.style.outlineOffset = '1px'; }
            const lbl = document.createElement('span');
            lbl.style.cssText = 'font-size:10px; margin-top:3px; text-align:center;';
            lbl.textContent = t(w.name);
            cell.appendChild(sw);
            cell.appendChild(lbl);
            cell.addEventListener('click', () => {
                SETTINGS.wallpaper = w.id;
                saveSettings();
                applyWallpaper();
                SOUND.click();
                updateStatus(t('Settings saved.'));
                renderApplet({ id: 'display', name: 'Display', nameTr: 'Görüntü', desc: 'Adjust the desktop wallpaper for the whole site.' });
            });
            swatchWrap.appendChild(cell);
        });
        box.appendChild(swatchWrap);
        bodyEl.appendChild(box);

        const sizeBox = groupBox(t('Text size'));
        const sizeRow = document.createElement('div');
        sizeRow.style.cssText = 'display:flex; gap:8px;';
        ['small', 'normal', 'large'].forEach(sz => {
            const b = button(t(sz.charAt(0).toUpperCase() + sz.slice(1)));
            if (SETTINGS.textSize === sz) { b.style.background = '#000080'; b.style.color = '#fff'; }
            b.addEventListener('click', () => {
                SETTINGS.textSize = sz;
                saveSettings();
                applyTextSize();
                updateStatus(t('Settings saved.'));
                SOUND.click();
            });
            sizeRow.appendChild(b);
        });
        sizeBox.appendChild(sizeRow);
        bodyEl.appendChild(sizeBox);
    }

    // Sounds: effects + volume
    function pageSounds() {
        const box = groupBox(t('Sound'));
        const soundChk = document.createElement('label');
        soundChk.style.cssText = 'display:flex; align-items:center; gap:6px; cursor:pointer; font-size:12px; margin-bottom:8px;';
        const soundInput = document.createElement('input');
        soundInput.type = 'checkbox';
        soundInput.checked = SETTINGS.sound;
        soundChk.appendChild(soundInput);
        soundChk.appendChild(document.createTextNode(t('Play sound effects')));
        soundInput.addEventListener('change', () => {
            SETTINGS.sound = soundInput.checked;
            saveSettings();
            if (SETTINGS.sound) { SOUND.click(); updateStatus(t('Settings saved.')); }
            volumeSlider.disabled = !SETTINGS.sound;
        });
        box.appendChild(soundChk);

        const volRow = document.createElement('div');
        volRow.style.cssText = 'display:flex; align-items:center; gap:8px; margin:4px 0; font-size:12px;';
        volRow.appendChild(document.createTextNode(t('Master volume') + ':'));
        const volumeSlider = document.createElement('input');
        volumeSlider.type = 'range';
        volumeSlider.min = 0;
        volumeSlider.max = 100;
        volumeSlider.value = Math.round(SETTINGS.volume * 100);
        volumeSlider.disabled = !SETTINGS.sound;
        volumeSlider.style.cssText = 'flex:1;';
        const volLabel = document.createElement('span');
        volLabel.style.cssText = 'width:38px; text-align:right; font-size:11px;';
        volLabel.textContent = Math.round(SETTINGS.volume * 100) + '%';
        volumeSlider.addEventListener('input', () => {
            SETTINGS.volume = volumeSlider.value / 100;
            saveSettings();
            volLabel.textContent = volumeSlider.value + '%';
        });
        volRow.appendChild(volumeSlider);
        volRow.appendChild(volLabel);
        box.appendChild(volRow);

        const testBtn = button(t('Test'));
        testBtn.addEventListener('click', () => { SOUND.click(); SOUND.open(); });
        box.appendChild(testBtn);
        bodyEl.appendChild(box);
    }

    // Regional Settings: language
    function pageRegional() {
        const box = groupBox(t('Language / Translation'));
        box.appendChild(note(t('Choose which language the website is shown in.')));
        const enRow = radioRow('lang', 'en', t('English'), LANG === 'en');
        const trRow = radioRow('lang', 'tr', t('Türkçe'), LANG === 'tr');
        box.appendChild(enRow.el);
        box.appendChild(trRow.el);
        const applyBtn = button(t('Apply'));
        applyBtn.style.marginTop = '8px';
        applyBtn.addEventListener('click', () => {
            const lang = document.querySelector(`input[name="lang"]:checked`).value;
            SOUND.click();
            setLang(lang);
            updateStatus(t('Settings saved.'));
        });
        box.appendChild(applyBtn);
        bodyEl.appendChild(box);
    }

    // Date/Time: clock format
    function pageDateTime() {
        const box = groupBox(t('Date/Time'));
        box.appendChild(note(t('Change how the clock is displayed in the taskbar.')));
        const clock12 = radioRow('clock', '12', t('12-hour'), !SETTINGS.clock24);
        const clock24 = radioRow('clock', '24', t('24-hour'), SETTINGS.clock24);
        box.appendChild(clock12.el);
        box.appendChild(clock24.el);
        clock12.input.addEventListener('change', () => { SETTINGS.clock24 = false; saveSettings(); updateClock(); updateStatus(t('Settings saved.')); });
        clock24.input.addEventListener('change', () => { SETTINGS.clock24 = true; saveSettings(); updateClock(); updateStatus(t('Settings saved.')); });
        bodyEl.appendChild(box);
    }

    // Add/Remove Programs: installed components (decorative)
    function pageAddRemove() {
        const box = groupBox(t('Installed components'));
        const list = [
            { name: 'Explorer', nameTr: 'Gezgin' },
            { name: 'Notepad', nameTr: 'Not Defteri' },
            { name: 'Photos', nameTr: 'Fotoğraflar' },
            { name: 'Data Log', nameTr: 'Veri Günlüğü' },
            { name: 'Help-FAQs', nameTr: 'Yardım-SSS' },
            { name: 'Control Panel', nameTr: 'Denetim Masası' }
        ];
        list.forEach(it => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex; align-items:center; gap:8px; margin-bottom:6px; font-size:12px;';
            const nameSpan = document.createElement('span');
            nameSpan.style.cssText = 'flex:1;';
            nameSpan.textContent = (LANG === 'tr' && it.nameTr) ? it.nameTr : it.name;
            const statusSpan = document.createElement('span');
            statusSpan.style.cssText = 'color:#008000; font-size:11px;';
            statusSpan.textContent = t('In use.');
            const rmBtn = button(t('Remove'));
            rmBtn.addEventListener('click', () => {
                SOUND.error();
                statusSpan.style.color = '#800000';
                statusSpan.textContent = t('In use. Cannot remove.');
            });
            row.appendChild(nameSpan);
            row.appendChild(statusSpan);
            row.appendChild(rmBtn);
            box.appendChild(row);
        });
        bodyEl.appendChild(box);
    }

    // System: info
    function pageSystem() {
        const box = groupBox(t('System Information'));
        const rows = [
            [t('Operating System'), 'Microsoft MUNDERES 27'],
            [t('Version'), t('MUNDERES 27 Theme') + ' 1.0'],
            [t('Processor'), t('Pentium II 300 MHz')],
            [t('Memory'), t('32.0 MB RAM')],
            [t('Computer Name'), 'MUNDERES-27']
        ];
        rows.forEach(r => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex; margin-bottom:4px; font-size:12px;';
            const k = document.createElement('div');
            k.style.cssText = 'width:130px; color:#000080; flex-shrink:0;';
            k.textContent = r[0] + ':';
            const v = document.createElement('div');
            v.textContent = r[1];
            row.appendChild(k);
            row.appendChild(v);
            box.appendChild(row);
        });
        bodyEl.appendChild(box);
    }

    // ── Menu bar ──
    menuBarEl.innerHTML = '';
    menuBarEl.appendChild(makeMenuBar([
        {
            label: 'File', items: [
                { label: 'Close', shortcut: 'Alt+F4', action: () => closeWindow(app.id) },
                { label: 'Exit', action: () => closeWindow(app.id) }
            ]
        },
        {
            label: 'Help', items: [
                { label: 'Help Topics', action: () => openItem(findAppById('help')) },
                { separator: true },
                { label: 'About Control Panel', action: () => showAbout(appName(app)) }
            ]
        }
    ]));

    backBtn.addEventListener('click', () => { SOUND.close(); renderMain(); });

    container.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !current) { closeWindow(app.id); e.preventDefault(); }
        else if (e.key === 'Escape') { renderMain(); e.preventDefault(); }
        else if (e.key === 'Backspace') { renderMain(); e.preventDefault(); }
    });
    container.tabIndex = -1;
    container.addEventListener('click', () => container.focus());

    renderMain();
}
