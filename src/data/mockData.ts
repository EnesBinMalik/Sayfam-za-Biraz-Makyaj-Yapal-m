/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ColorPalette, CssRuleComparison } from '../types';

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: 'nordic-sky',
    name: 'Nordic Clean (Color Hunt #1)',
    category: 'Minimalist & Modern',
    hexColors: ['#F8FAFC', '#FFFFFF', '#2563EB', '#F59E0B'],
    description: 'Ferah mavi vurgular ve sıcak amber detaylarıyla dengeli İskandinav tasarımı.'
  },
  {
    id: 'warm-sand',
    name: 'Sunset Terracotta (Color Hunt #2)',
    category: 'Sıcak & Doğal',
    hexColors: ['#FAF5F0', '#FFFFFF', '#C2410C', '#EAB308'],
    description: 'Sıcak kum tonları ve yanık portakal detaylarıyla samimi, organik bir hava.'
  },
  {
    id: 'emerald-botanic',
    name: 'Matcha Forest (Color Hunt #3)',
    category: 'Dingin & Yeşil',
    hexColors: ['#F2F7F4', '#FFFFFF', '#059669', '#10B981'],
    description: 'Doğadan ilham alan zümrüt ve adaçayı yeşili ile göz yormayan huzurlu stil.'
  },
  {
    id: 'lavender-dream',
    name: 'Lilac Minimal (Color Hunt #4)',
    category: 'Pastel & Zarif',
    hexColors: ['#FAF7FD', '#FFFFFF', '#7C3AED', '#EC4899'],
    description: 'Modern lavanta ve hafif pembe geçişleriyle yaratıcı portfolyo enerjisi.'
  },
  {
    id: 'midnight-terminal',
    name: 'Midnight Slate (Color Hunt #5)',
    category: 'Koyu & Odaklı',
    hexColors: ['#0F172A', '#1E293B', '#38BDF8', '#F43F5E'],
    description: 'Yazılımcı dostu, koyu arka plan üzerinde elektrik mavisi ve canlı mercan.'
  }
];

export const CSS_COMPARISONS: CssRuleComparison[] = [
  {
    title: '1. Inline CSS (Etikete Özel)',
    syntax: '<h1 style="color: blue; text-align: center;">...</h1>',
    pros: [
      'En yüksek özgüllüğe (specificity) sahiptir, diğer kuralları ezer.',
      'Hızlı testler veya JavaScript ile dinamik tekil stiller için pratiktir.'
    ],
    cons: [
      'Kendini tekrar eder (DRY prensibine aykırı).',
      'HTML dosyasını şişirir ve okunabilirliği bozar.',
      'Tek tek etiketleri güncellemek zaman kaybettirir.'
    ],
    bestUse: 'Tek seferlik acil düzeltmeler veya JS ile hesaplanan dinamik stiller.',
    codeSnippet: `<div style="padding: 16px; background-color: #f1f5f9; border-radius: 8px;">
  <p style="color: #1e293b; font-weight: 600;">Bu metin inline stil ile renklendirildi.</p>
</div>`
  },
  {
    title: '2. Internal CSS (Aynı Dosyada - <style>)',
    syntax: '<head><style> h1 { color: blue; } </style></head>',
    pros: [
      'Tüm sayfa stilleri tek bir <style> bloğunda toplanır.',
      'Aynı sayfadaki birden çok etikete tek seferde kural tanımlanabilir.',
      'Harici dosya indirme gecikmesi olmaz.'
    ],
    cons: [
      'Çok sayfalı projelerde sayfalar arasında kod tekrarı oluşur.',
      'HTML dosyası uzar, içerik ile tasarım iç içe geçer.'
    ],
    bestUse: 'Tek sayfalık mini siteler, e-posta şablonları veya sayfaya özgü özel durumlar.',
    codeSnippet: `<head>
  <style>
    .kutu {
      padding: 16px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }
  </style>
</head>`
  },
  {
    title: '3. External CSS (Harici .css Dosyası)',
    syntax: '<head><link rel="stylesheet" href="style.css"></head>',
    pros: [
      'DRY (Don\'t Repeat Yourself) prensibinin altın standardıdır.',
      '10 farklı HTML sayfası tek bir style.css dosyasını paylaşabilir.',
      'Tasarım ve içerik tamamen ayrılır, kod temiz kalır.',
      'Tarayıcı CSS dosyasını önbelleğe (cache) alır, sayfalar jet hızında açılır.'
    ],
    cons: [
      'Ekstra bir HTTP isteği gerektirir (modern HTTP/2 ile sorun olmaktan çıkmıştır).'
    ],
    bestUse: 'Tüm profesyonel, çok sayfalı web siteleri ve web uygulamaları.',
    codeSnippet: `/* style.css */
.kutu {
  padding: 16px;
  background-color: var(--color-surface);
  border-radius: 8px;
}`
  }
];

export const EDUCATIONAL_RESOURCES = [
  {
    title: 'W3Schools CSS Tutorial',
    description: 'Dünyanın en popüler web geliştirme başvuru kaynağı. Kutu modeli, flexbox, grid ve animasyonlar için interaktif "Try it Yourself" editörü.',
    url: 'https://www.w3schools.com/css/',
    badge: 'Global Kaynak',
    topics: ['CSS Selectors', 'Box Model', 'Flexbox & Grid', 'Responsive Design']
  },
  {
    title: 'Fatih Hayrioğlu Web Sitesi',
    description: 'Türkiye\'nin öncü front-end mimarlarından Fatih Hayrioğlu\'nun kapsamlı Türkçe CSS ve web standartları rehberleri.',
    url: 'https://fatihhayrioglu.com/',
    badge: 'Türkçe Referans',
    topics: ['Türkçe CSS Makaleleri', 'Modern Web Standartları', 'CSS İpuçları', 'Ön Yüz İpuçları']
  },
  {
    title: 'Color Hunt - Renk Paletleri',
    description: 'Tasarımcılar tarafından küratörlüğü yapılmış binlerce modern 4 renkli palet koleksiyonu. Kod yazarken renk uyumu yakalamanın en pratik yolu.',
    url: 'https://colorhunt.co/',
    badge: 'Renk İlhamı',
    topics: ['4 Renk Dengesi', 'Hex Kodları', 'Trend Paletler', 'Kontrast Uyumları']
  },
  {
    title: 'Google Fonts',
    description: 'Web sayfalarına karakter ve estetik katan 1500+ açık kaynaklı, lisanssız tipografi kütüphanesi.',
    url: 'https://fonts.google.com/',
    badge: 'Tipografi',
    topics: ['Web Fonts', 'Font Pairing', 'Variable Fonts', 'Karakter Setleri']
  }
];

export const ASSIGNMENT_HIGHLIGHTS = [
  {
    label: 'Çok Sayfalı Yapı',
    detail: 'Menü linkleriyle sayfalar arası geçiş, sayfa başlıkları ve tutarlı düzen mimarisi.'
  },
  {
    label: 'Makyajlı vs Saf HTML',
    detail: 'Tek bir anahtarla CSS olmadan ham 90\'lar HTML ile modern CSS makyajı arasındaki farkı görme.'
  },
  {
    label: 'list-style-position: inside',
    detail: 'Madde işaretlerini metin bloğuyla birlikte ortalamak için özel list-style kuralı.'
  },
  {
    label: 'Colorhunt Renk Paletleri',
    detail: 'Tasarımda renk uyumu için dinamik renk paleti değiştirici ve hex kod paneli.'
  },
  {
    label: 'Inline / Internal / External',
    detail: 'Kendini tekrar eden yapıları engelleme ve DRY ilkesinin canlı karşılaştırması.'
  },
  {
    label: 'Noktalı Virgül (;) Hatırlatması',
    detail: 'CSS\'in olmazsa olmazı noktalı virgülleri test eden eğlenceli kod dedektörü.'
  }
];
