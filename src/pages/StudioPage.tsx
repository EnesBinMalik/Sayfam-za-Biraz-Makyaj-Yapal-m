/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { Sliders, Copy, Check, RotateCcw, Sparkles, Code, Eye } from 'lucide-react';

interface StudioPageProps {
  onNavigate: (page: PageId) => void;
  makeupEnabled: boolean;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onNavigate, makeupEnabled }) => {
  const [selectedFont, setSelectedFont] = useState<string>('Plus Jakarta Sans');
  const [borderRadius, setBorderRadius] = useState<number>(16);
  const [padding, setPadding] = useState<number>(24);
  const [listPosition, setListPosition] = useState<'inside' | 'outside'>('inside');
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('center');
  const [cardBg, setCardBg] = useState<string>('#ffffff');
  const [primaryColor, setPrimaryColor] = useState<string>('#2563eb');
  const [textColor, setTextColor] = useState<string>('#0f172a');
  const [boxShadowLevel, setBoxShadowLevel] = useState<'none' | 'sm' | 'md' | 'lg'>('md');
  const [copied, setCopied] = useState<boolean>(false);

  if (!makeupEnabled) {
    return (
      <main style={{ maxWidth: '800px', margin: '20px auto', padding: '0 16px' }}>
        <h1>Makyaj Stüdyosu (Laboratuvar)</h1>
        <p>Makyaj modu kapalıyken CSS laboratuvarı temel HTML form elemanlarıyla görüntülenir.</p>
        <p>Lütfen üst menüdeki &ldquo;💄 Makyajı Geri Yükle&rdquo; düğmesine basarak interaktif aracı açın.</p>
      </main>
    );
  }

  const getShadowCss = () => {
    switch (boxShadowLevel) {
      case 'none':
        return 'none';
      case 'sm':
        return '0 1px 3px rgba(0,0,0,0.08)';
      case 'md':
        return '0 4px 12px rgba(0,0,0,0.08)';
      case 'lg':
        return '0 10px 25px -5px rgba(0,0,0,0.12)';
      default:
        return 'none';
    }
  };

  const generatedCss = `/* Sayfamıza Yapılan CSS Makyajı */
.makyaj-karti {
  font-family: '${selectedFont}', sans-serif;
  border-radius: ${borderRadius}px;
  padding: ${padding}px;
  background-color: ${cardBg};
  color: ${textColor};
  text-align: ${textAlign};
  box-shadow: ${getShadowCss()};
  border: 1px solid #e2e8f0;
}

.makyaj-karti ul {
  list-style-type: disc;
  list-style-position: ${listPosition}; /* Ortalanmış liste noktaları */
  text-align: ${textAlign};
}

.makyaj-karti .btn-vurgu {
  background-color: ${primaryColor};
  color: #ffffff;
  border-radius: ${Math.max(4, borderRadius - 8)}px;
  padding: 8px 18px;
}`;

  const handleCopyCss = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSelectedFont('Plus Jakarta Sans');
    setBorderRadius(16);
    setPadding(24);
    setListPosition('inside');
    setTextAlign('center');
    setCardBg('#ffffff');
    setPrimaryColor('#2563eb');
    setTextColor('#0f172a');
    setBoxShadowLevel('md');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
          <Sliders className="w-3.5 h-3.5" />
          <span>İnteraktif CSS Laboratuvarı</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
          Canlı Makyaj Stüdyosu
        </h1>
        <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
          Sol paneldeki kontrollerle fontları, renkleri, liste konumunu ve kutu modelini değiştirin;
          sağdaki önizleme kartında makyajın etkisini anında görün ve hatasız CSS kodunu kopyalayın!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Panel (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
              Stil Ayarları
            </h3>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>

          {/* 1. Google Fonts */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-neutral-700">
              Google Fonts Seçimi:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Plus Jakarta Sans', label: 'Jakarta (Temiz Sans)' },
                { name: 'Outfit', label: 'Outfit (Modern Display)' },
                { name: 'Playfair Display', label: 'Playfair (Zarif Serif)' },
                { name: 'JetBrains Mono', label: 'JetBrains (Kod Monospace)' },
              ].map((f) => (
                <button
                  key={f.name}
                  type="button"
                  onClick={() => setSelectedFont(f.name)}
                  className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                    selectedFont === f.name
                      ? 'border-blue-600 bg-blue-50/60 text-blue-900 font-semibold'
                      : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                  }`}
                  style={{ fontFamily: f.name }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. list-style-position */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-neutral-700">
                list-style-position:
              </label>
              <span className="text-[11px] text-blue-600 font-mono">
                {listPosition === 'inside' ? 'inside (Ortalanmış)' : 'outside (Varsayılan)'}
              </span>
            </div>
            <div className="flex items-center gap-2 p-1 bg-neutral-100 rounded-lg">
              <button
                type="button"
                onClick={() => setListPosition('inside')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  listPosition === 'inside'
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                inside (İçeride ✅)
              </button>
              <button
                type="button"
                onClick={() => setListPosition('outside')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  listPosition === 'outside'
                    ? 'bg-white text-neutral-900 shadow-2xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                outside (Dışarıda)
              </button>
            </div>
          </div>

          {/* 3. Text Alignment */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-neutral-700">
              text-align (Metin Hizası):
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['left', 'center', 'right'] as const).map((align) => (
                <button
                  key={align}
                  type="button"
                  onClick={() => setTextAlign(align)}
                  className={`py-1.5 text-xs font-medium rounded-lg border capitalize transition-all ${
                    textAlign === align
                      ? 'border-neutral-900 bg-neutral-900 text-white font-semibold'
                      : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  {align}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Border Radius Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-semibold text-neutral-700">
                Köşe Yuvarlaklığı (border-radius):
              </label>
              <span className="font-mono text-neutral-500">{borderRadius}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="32"
              value={borderRadius}
              onChange={(e) => setBorderRadius(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* 5. Padding Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-semibold text-neutral-700">
                İç Boşluk (padding):
              </label>
              <span className="font-mono text-neutral-500">{padding}px</span>
            </div>
            <input
              type="range"
              min="12"
              max="40"
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* 6. Colors: Primary & Background */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-neutral-100">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Vurgu Rengi:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer border border-neutral-200 p-0.5"
                />
                <span className="font-mono text-xs text-neutral-600">{primaryColor}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Kart Arka Planı:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={cardBg}
                  onChange={(e) => setCardBg(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer border border-neutral-200 p-0.5"
                />
                <span className="font-mono text-xs text-neutral-600">{cardBg}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview & Code Output (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live Preview Card */}
          <div className="bg-neutral-100/70 p-6 rounded-2xl border border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>Canlı Önizleme Kartı</span>
              </span>
              <span className="text-[11px] text-neutral-400 font-mono">
                font: {selectedFont}
              </span>
            </div>

            <div
              className="transition-all duration-200 border border-neutral-200/80"
              style={{
                fontFamily: selectedFont,
                borderRadius: `${borderRadius}px`,
                padding: `${padding}px`,
                backgroundColor: cardBg,
                color: textColor,
                textAlign: textAlign,
                boxShadow: getShadowCss(),
              }}
            >
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-black/5" style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}>
                ✨ CSS ile Makyajlanmış
              </div>

              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                Sayfamıza Harika Bir Makyaj Yaptık!
              </h3>

              <p className="text-sm opacity-80 mb-5 leading-relaxed max-w-lg mx-auto">
                Buradaki kart, sol panelden değiştirdiğiniz tüm kuralları (font-family, border-radius,
                padding, list-style-position) gerçek zamanlı uygular.
              </p>

              {/* The List demonstrating list-style-position */}
              <div className="my-5 p-4 rounded-xl bg-black/3 border border-black/5">
                <ul
                  style={{
                    listStylePosition: listPosition,
                    listStyleType: 'disc',
                    textAlign: textAlign,
                  }}
                  className="space-y-2 text-xs sm:text-sm font-medium"
                >
                  <li>Google Fonts entegrasyonu tamamlandı</li>
                  <li>list-style-position: {listPosition} ile noktalar hizalandı</li>
                  <li>Colorhunt renk uyumu gözetildi</li>
                  <li>Noktalı virgüller eksiksiz eklendi;</li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  style={{
                    backgroundColor: primaryColor,
                    color: '#ffffff',
                    borderRadius: `${Math.max(4, borderRadius - 8)}px`,
                  }}
                  className="px-5 py-2.5 text-xs font-semibold shadow-sm hover:opacity-90 transition-opacity"
                >
                  Örnek Buton
                </button>
              </div>
            </div>
          </div>

          {/* Generated CSS Code Box */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-neutral-500" />
                <span>Oluşturulan CSS Kodu:</span>
              </span>
              <button
                type="button"
                onClick={handleCopyCss}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>CSS Kodunu Kopyala</span>
                  </>
                )}
              </button>
            </div>

            <pre className="font-code text-xs bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
              <code>{generatedCss}</code>
            </pre>
            <p className="text-[11px] text-neutral-500 mt-2">
              💡 İpucu: Bu kodu harici bir <code>style.css</code> dosyasına yapıştırarak projenizin tüm sayfalarında tekrar kullanabilirsiniz (DRY Prensibi).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
