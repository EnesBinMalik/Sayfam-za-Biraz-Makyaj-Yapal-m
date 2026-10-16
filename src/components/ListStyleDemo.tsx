/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AlignCenter, Code, CheckCircle2, Info } from 'lucide-react';

export const ListStyleDemo: React.FC = () => {
  const [position, setPosition] = useState<'inside' | 'outside'>('inside');
  const [showExplanation, setShowExplanation] = useState(false);

  const features = [
    'HTML5 semantik etiket yapısı ile temiz iskelet',
    'CSS Box Model (margin, border, padding) dengesi',
    'Colorhunt üzerinden seçilmiş uyumlu 4 renkli palet',
    'Google Fonts ile profesyonel web tipografisi',
    'list-style-position: inside ile ortalanmış madde işaretleri',
  ];

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            <AlignCenter className="w-4 h-4" />
            <span>Ödev İpucu Uygulaması</span>
          </div>
          <h3 className="font-display text-xl font-bold text-neutral-900">
            list-style-position: {position}
          </h3>
          <p className="text-sm text-neutral-600 mt-0.5">
            Ödevde belirtilen liste noktalarını ortalama kuralının canlı testi.
          </p>
        </div>

        {/* Segmented control for inside vs outside */}
        <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg shrink-0">
          <button
            type="button"
            onClick={() => setPosition('inside')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              position === 'inside'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            inside (Ortalanmış ✅)
          </button>
          <button
            type="button"
            onClick={() => setPosition('outside')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              position === 'outside'
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            outside (Varsayılan)
          </button>
        </div>
      </div>

      {/* The Demo Box */}
      <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200 text-center mb-6">
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-3">
          Örnek Ödev Liste Bloğu (text-align: center)
        </span>

        <ul
          style={{
            listStylePosition: position,
            listStyleType: 'disc',
            textAlign: 'center',
          }}
          className="space-y-3 max-w-xl mx-auto text-sm md:text-base font-medium text-neutral-800"
        >
          {features.map((item, index) => (
            <li
              key={index}
              className="p-1 rounded bg-white/70 border border-neutral-200/60 shadow-2xs"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 inline-flex items-center gap-2 text-xs text-neutral-500 bg-white px-3 py-1.5 rounded-lg border border-neutral-200">
          <span className="font-mono text-blue-700 font-semibold">
            list-style-position: {position};
          </span>
          <span>·</span>
          <span>
            {position === 'inside'
              ? 'Nokta metin satırının içinde, kusursuz ortalandı!'
              : 'Nokta kutunun dışında kaldı, ortalama hizasını bozdu.'}
          </span>
        </div>
      </div>

      {/* Code Snippet and Explanation Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="font-mono bg-neutral-900 text-neutral-200 px-4 py-2 rounded-lg overflow-x-auto w-full sm:w-auto">
          <code>ul &#123; text-align: center; list-style-position: {position}; &#125;</code>
        </div>
        <button
          type="button"
          onClick={() => setShowExplanation(!showExplanation)}
          className="text-neutral-600 hover:text-neutral-900 font-medium inline-flex items-center gap-1.5 self-end sm:self-center"
        >
          <Info className="w-3.5 h-3.5" />
          <span>{showExplanation ? 'Açıklamayı Gizle' : 'Neden inside Kullanıyoruz?'}</span>
        </button>
      </div>

      {showExplanation && (
        <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 text-xs text-neutral-700 leading-relaxed">
          <p className="font-semibold text-blue-900 mb-1">
            Enes Öztürk Ödev Notu Açıklaması:
          </p>
          <p>
            Normalde HTML listelerinde madde işareti (bullet) kutunun dışına yerleştirilir
            (<code>outside</code>). Bir listeyi veya ana sayfa kartını <code>text-align: center</code> ile
            ortalamaya çalıştığınızda, metin ortalanırken nokta sola kayık kalır.
            <code>list-style-position: inside</code> kuralı verildiğinde ise madde noktası metinle aynı
            satır akışının içine dahil edilir ve metinle birlikte tam ortaya hizalanır!
          </p>
        </div>
      )}
    </div>
  );
};
