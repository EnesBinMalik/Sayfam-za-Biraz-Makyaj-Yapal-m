/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { Award, User, Code, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  makeupEnabled: boolean;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, makeupEnabled }) => {
  if (!makeupEnabled) {
    return (
      <main style={{ maxWidth: '800px', margin: '20px auto', padding: '0 16px' }}>
        <h1>Hakkımda & Ödev Raporu</h1>
        <p><strong>Ödev:</strong> Sayfamıza Biraz Makyaj Yapalım (HTML, CSS, JS)</p>
        <p><strong>Ders Anlatıcısı:</strong> Enes Öztürk</p>
        <p>Bu sayfada ödevin gereksinimleri, öğrenilen kavramlar ve hedefler yer almaktadır.</p>
        <hr />
        <h3>Öğrenilen Kavramlar</h3>
        <ul>
          <li>Inline, Internal ve External CSS arasındaki farklar</li>
          <li>DRY (Don&apos;t Repeat Yourself) prensibi</li>
          <li>list-style-position: inside ile liste noktalarını ortalama</li>
          <li>Colorhunt renk paletleriyle görsel uyum</li>
          <li>Google Fonts ile modern font kullanımı</li>
        </ul>
      </main>
    );
  }

  const milestones = [
    {
      step: '01',
      title: 'HTML5 Semantik İskelet',
      description: 'header, nav, main, section ve footer etiketleri ile arama motoru ve ekran okuyucu dostu sağlam bir yapı kuruldu.'
    },
    {
      step: '02',
      title: 'Kutu Modeli (Box Model)',
      description: 'Padding, border ve margin arasındaki matematiksel ilişkiler kavrandı; nesnelerin birbirini ezmesi önlendi.'
    },
    {
      step: '03',
      title: 'list-style-position: inside Keşfi',
      description: 'Ortalanan metinlerde dışarı sarkan liste noktalarının içeride tutulması ve kusursuz hizalanması sağlandı.'
    },
    {
      step: '04',
      title: 'Colorhunt & Renk Paletleri',
      description: 'Gözü yoran rastgele renkler yerine Colorhunt.co\'dan seçilen 4 renkli ahenkli temalar entegre edildi.'
    },
    {
      step: '05',
      title: 'Google Fonts ile Tipografi',
      description: 'Web sitelerine ruh katan Outfit, Plus Jakarta Sans ve Playfair Display font aileleri projeye eklendi.'
    },
    {
      step: '06',
      title: 'Noktalı Virgül (;) Disiplini',
      description: 'CSS kurallarının can damarı olan noktalı virgüller eksiksiz uygulandı ve bir dedektörle doğrulandı.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      {/* Intro Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Öğrenci & Kurs Ödevi Raporu</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
          Enes Öztürk Yapımı ile Ayarlanmış Güzel Bir Ödev
        </h1>
        <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
          Bu web sitesi, YouTube ve web geliştirme derslerinde anlatılan &ldquo;Sayfamıza Biraz Makyaj Yapalım&rdquo;
          videosundaki tüm yönergeler, ipuçları ve teknik detaylar harfiyen uygulanarak hazırlanmıştır.
        </p>
      </div>

      {/* Profile & Tribute Card */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4 text-center md:text-left">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-display text-2xl font-bold shadow-md mx-auto md:mx-0">
            EÖ
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Web Tasarım Ödevi
            </h3>
            <p className="text-xs text-neutral-500">
              HTML5 · CSS3 · Modern JavaScript
            </p>
          </div>
          <div className="pt-2 text-xs text-neutral-600 space-y-1.5 border-t border-neutral-100">
            <p><strong>Ders:</strong> Sayfamıza Biraz Makyaj Yapalım</p>
            <p><strong>Eğitmen:</strong> Enes Öztürk</p>
            <p><strong>Durum:</strong> Teslime Hazır (Eksiksiz)</p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="font-display text-base font-bold text-neutral-900">
            Ödevin Amacı ve Hayata Geçirilme Felsefesi
          </h4>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Videoda Enes hocamızın söylediği gibi:
            <em className="text-neutral-800 font-medium block my-2 p-3 bg-neutral-50 rounded-xl border border-neutral-200/60">
              &ldquo;Bu ödevde sizlerden istediğimiz hayal gücünüzü kullanarak öğrendiğiniz ve araştırarak
              bulduklarınızla birlikte güzel bir site oluşturmanız. Burada önemli olan nokta CSS elemanlarını
              efektif bir şekilde kullanabiliyor muyuz onu görmek. Tasarımı ilerleyen ödevlerde daha güzelleştireceğiz.&rdquo;
            </em>
          </p>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Biz de bu felsefeyle sadece tekil bir sayfa yapmakla kalmadık; kullanıcıya ham HTML ile makyajlı CSS arasındaki
            farkı anlık gösteren bir <strong>Makyaj Anahtarı</strong>, <strong>Colorhunt canlı palet seçicisi</strong> ve
            unutulan noktalı virgülleri yakalayan bir <strong>Noktalı Virgül Dedektörü</strong> ekledik.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-medium">
              #HTML5
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-medium">
              #CSS3Makyaj
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-medium">
              #listStylePositionInside
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-medium">
              #Colorhunt
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-medium">
              #GoogleFonts
            </span>
          </div>
        </div>
      </div>

      {/* Learning Milestones */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
            Öğrenme Yolculuğu
          </span>
          <h3 className="font-display text-2xl font-bold text-neutral-900">
            Bu Ödev Sürecinde Kazanılan Yetkinlikler
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-neutral-200 p-5 shadow-2xs hover:border-neutral-300 transition-colors"
            >
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">
                {m.step}
              </div>
              <h4 className="font-display text-sm font-bold text-neutral-900 mb-1.5">
                {m.title}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps CTA */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-display text-base font-bold text-neutral-900 mb-1">
            CSS Kurallarını Derinlemesine İncelemek İster misiniz?
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600">
            Inline, Internal ve External CSS kod örnekleri ve W3Schools kaynaklarına göz atın.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('css-guide')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 transition-colors shrink-0 shadow-sm"
        >
          <span>CSS Rehberine Git</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
