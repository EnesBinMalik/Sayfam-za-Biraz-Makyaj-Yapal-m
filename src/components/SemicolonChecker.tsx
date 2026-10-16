/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Wand2, Sparkles, HelpCircle } from 'lucide-react';

export const SemicolonChecker: React.FC = () => {
  const sampleWithErrors = `body {
  background-color: #fafafa
  color: #333333;
  font-family: 'Plus Jakarta Sans', sans-serif
  line-height: 1.6;
}`;

  const [cssInput, setCssInput] = useState<string>(sampleWithErrors);
  const [fixedNotice, setFixedNotice] = useState<string | null>(null);

  // Analyze lines for missing semicolons in CSS declarations
  const lines = cssInput.split('\n');
  const errorLines: { lineNum: number; content: string }[] = [];

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    // If it looks like a property declaration: property: value
    if (
      trimmed.includes(':') &&
      !trimmed.startsWith('/*') &&
      !trimmed.endsWith('{') &&
      !trimmed.endsWith(',') &&
      !trimmed.endsWith(';') &&
      trimmed !== '}'
    ) {
      errorLines.push({ lineNum: idx + 1, content: trimmed });
    }
  });

  const handleFixAll = () => {
    const fixed = lines
      .map((line) => {
        const trimmed = line.trim();
        if (
          trimmed.includes(':') &&
          !trimmed.startsWith('/*') &&
          !trimmed.endsWith('{') &&
          !trimmed.endsWith(',') &&
          !trimmed.endsWith(';') &&
          trimmed !== '}'
        ) {
          return `${line};`;
        }
        return line;
      })
      .join('\n');

    setCssInput(fixed);
    setFixedNotice('Tüm unutulan noktalı virgüller otomatik olarak eklendi! 🎉');
    setTimeout(() => setFixedNotice(null), 3000);
  };

  const handleResetClean = () => {
    setCssInput(`h1 {
  font-size: 2rem;
  color: #2563eb;
  text-align: center;
  list-style-position: inside;
}`);
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-neutral-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Ödev Klasiği & Eğlenceli Hatırlatma</span>
          </div>
          <h3 className="font-display text-xl font-bold text-neutral-900">
            Noktalı Virgül (;) Dedektörü
          </h3>
          <p className="text-sm text-neutral-600 italic mt-0.5">
            &ldquo;CSS yazarken noktalı virgülleri unutmayın. Biliyorum unutacaksınız, olur böyle şeyler...&rdquo; — Enes Öztürk
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleResetClean}
            className="px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 border border-neutral-200 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors"
          >
            Temiz Kod Yükle
          </button>
          <button
            type="button"
            onClick={() => setCssInput(sampleWithErrors)}
            className="px-3 py-1.5 text-xs font-medium text-amber-700 hover:text-amber-800 border border-amber-200 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors"
          >
            Hatalı Örnek Getir
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-neutral-700 mb-2">
            CSS Kodunuzu Buraya Yapıştırın veya Düzenleyin:
          </label>
          <textarea
            value={cssInput}
            onChange={(e) => setCssInput(e.target.value)}
            rows={8}
            className="w-full font-code text-xs p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-neutral-900 text-neutral-100"
            placeholder="body { margin: 0; }"
            spellCheck={false}
          />
          <div className="flex items-center justify-between mt-2.5">
            <span className="text-[11px] text-neutral-400">
              Canlı analiz ediliyor ({lines.length} satır)
            </span>
            {errorLines.length > 0 && (
              <button
                type="button"
                onClick={handleFixAll}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 text-neutral-950 hover:bg-amber-400 transition-colors shadow-2xs"
              >
                <Wand2 className="w-3.5 h-3.5" />
                <span>Noktalı Virgülleri Otomatik Ekle ({errorLines.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Analysis */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="block text-xs font-semibold text-neutral-700 mb-2">
              Dedektör Teşhis Raporu:
            </span>

            {fixedNotice && (
              <div className="mb-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{fixedNotice}</span>
              </div>
            )}

            {errorLines.length === 0 ? (
              <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-900">
                <div className="flex items-center gap-2 font-semibold text-sm mb-1.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Harika! Hiçbir satırda noktalı virgül unutulmamış.</span>
                </div>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Tüm CSS bildirimleri düzgün bir şekilde noktalı virgül (<code>;</code>) ile sonlandırılmış.
                  Tarayıcı stil kurallarınızı hatasız yorumlayacaktır!
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 text-rose-950">
                <div className="flex items-center gap-2 font-semibold text-sm mb-2 text-rose-800">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>
                    Yakalandı! {errorLines.length} satırda noktalı virgül (;) eksik:
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs">
                  {errorLines.map((err, i) => (
                    <li
                      key={i}
                      className="bg-white/80 p-2 rounded border border-rose-200/70 flex items-center justify-between"
                    >
                      <span className="font-mono text-neutral-800">
                        <strong className="text-rose-600">Satır {err.lineNum}:</strong> {err.content}
                      </span>
                      <span className="text-rose-600 font-bold font-mono">+;</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-rose-700 mt-2.5">
                  İpucu: Noktalı virgül konulmadığında tarayıcı sonraki özelliği okuyamaz ve kuralı geçersiz sayar.
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-100 text-xs text-neutral-500 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-neutral-400 shrink-0" />
            <span>
              Unutmayın: CSS&apos;te her <code>özellik: değer;</code> çifti noktalı virgülle biter!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
