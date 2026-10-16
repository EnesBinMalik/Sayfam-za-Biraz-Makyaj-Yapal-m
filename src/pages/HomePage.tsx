/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId, ColorPalette } from '../types';
import { ColorPaletteBar } from '../components/ColorPaletteBar';
import { ListStyleDemo } from '../components/ListStyleDemo';
import { Sparkles, ArrowRight, BookOpen, Layers, Check, Palette, Lightbulb } from 'lucide-react';
import { COLOR_PALETTES } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  makeupEnabled: boolean;
  onToggleMakeup: () => void;
  activePalette: ColorPalette;
  onSelectPalette: (p: ColorPalette) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  makeupEnabled,
  onToggleMakeup,
  activePalette,
  onSelectPalette,
}) => {
  if (!makeupEnabled) {
    // Plain unstyled standard HTML view to show raw contrast
    return (
      <main style={{ maxWidth: '800px', margin: '20px auto', padding: '0 16px' }}>
        <h1 style={{ textAlign: 'center' }}>Sayfamıza Biraz Makyaj Yapalım</h1>
        <h3 style={{ textAlign: 'center' }}>HTML CSS JS Web Tasarım Ödevi</h3>
        <p>
          Herkese merhaba arkadaşlar kanalımıza hoş geldiniz, bugün HTML sayfamıza hafif bir makyaj yapacağız.
          Komik gelse de aslında tam olarak böyle yapacağız. Bir HTML sayfası oluşturup buna CSS ile tasarımsal
          açıdan güzellikler katacağız, HTML sayfamıza güzelliği getireceğiz.
        </p>

        <hr />

        <h2>Ödevde İstenen Temel Özellikler (Ham Liste)</h2>
        <ul style={{ listStylePosition: 'inside', textAlign: 'center' }}>
          <li>HTML sayfasını sıfırdan oluşturma</li>
          <li>Sitemiz birkaç sayfadan oluşacak (Menü linkleri ile geçiş)</li>
          <li>Colorhunt renk paletlerinden ilham alma</li>
          <li>Inline, Internal ve External CSS kullanımı</li>
          <li>CSS yazarken noktalı virgülleri (;) unutmama!</li>
          <li>Google Fonts ile modern tipografi</li>
          <li>list-style-position: inside ile madde noktalarını ortalama</li>
        </ul>

        <hr />

        <div style={{ textAlign: 'center', margin: '30px 0' }}>
          <button
            type="button"
            onClick={onToggleMakeup}
            style={{ fontSize: '16px', padding: '10px 20px', cursor: 'pointer' }}
          >
            ✨ Şimdi CSS Makyajını Uygula!
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="pt-8 md:pt-14">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enes Öztürk · Web Geliştirme Ödevi</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
            Sayfamıza Biraz <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500">Makyaj</span> Yapalım
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Herkese merhaba arkadaşlar kanalımıza hoş geldiniz! Bugün HTML iskeletimize CSS ile
            tasarımsal zarafet katıyoruz. Renkler, tipografi, kutu modelleri ve liste hizalamalarıyla
            web sayfamıza gerçek güzelliği getiriyoruz.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('studio')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm"
            >
              <span>Makyaj Stüdyosunu Dene</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('css-guide')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-800 font-medium text-sm hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-neutral-500" />
              <span>CSS Rehberi (Inline / Internal / External)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Colorhunt Palette Bar */}
      <section className="max-w-5xl mx-auto px-4">
        <ColorPaletteBar
          palettes={COLOR_PALETTES}
          activePalette={activePalette}
          onSelectPalette={onSelectPalette}
        />
      </section>

      {/* Featured list-style-position: inside requirement demo */}
      <section className="max-w-5xl mx-auto px-4">
        <ListStyleDemo />
      </section>

      {/* Key 3 Foundations Grid */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="mb-6">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
            Ödevin Yapı Taşları
          </span>
          <h2 className="font-display text-2xl font-bold text-neutral-900">
            CSS ile Web Sayfasına Ruh Katmanın 3 Yolu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between shadow-2xs hover:border-neutral-300 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-neutral-900 mb-2">
                DRY Mimarisi & Harici CSS
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Kendini tekrar eden stillerden kaçının. External (harici .css) dosyalarıyla tüm sayfalara tek merkezden stil dağıtın.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('css-guide')}
              className="mt-5 text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              <span>Detaylı Kıyaslama</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between shadow-2xs hover:border-neutral-300 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-neutral-900 mb-2">
                Colorhunt Renk Dengesi
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Rastgele renkler yerine Colorhunt.co koleksiyonlarındaki 4 renkli kuralı (Arka plan, Yüzey, Birincil, Vurgu) kullanarak profesyonel kontrast yakalayın.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('studio')}
              className="mt-5 text-xs font-semibold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
            >
              <span>Canlı Test Et</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between shadow-2xs hover:border-neutral-300 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-neutral-900 mb-2">
                Noktalı Virgül (;) ve Sözdizimi
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                CSS&apos;in en büyük tuzağı unutulan noktalı virgüllerdir. Kodunuzu dedektörümüz ile test edin ve hatasız stil yazın.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('css-guide')}
              className="mt-5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
            >
              <span>Dedektörü Aç</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Student & Course Assignment Notice */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider block">
              Enes Öztürk Yapımı İle Hazırlanan Ödev
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              Bu ödevde hayal gücümüzü ve CSS becerilerimizi konuşturuyoruz!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              &ldquo;Burada oluşturduğumuz sitenin tasarımı hoşunuza gitmese dahi burada önemli olan nokta CSS elemanlarını efektif bir şekilde kullanabiliyor muyuz onu görmek. Tasarımı ilerleyen ödevlerde daha güzelleştireceğiz.&rdquo;
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="px-5 py-2.5 rounded-xl bg-amber-400 text-neutral-950 font-semibold text-xs hover:bg-amber-300 transition-colors shrink-0 shadow-sm"
          >
            Ödev Detayları & Hakkımda
          </button>
        </div>
      </section>
    </div>
  );
};
