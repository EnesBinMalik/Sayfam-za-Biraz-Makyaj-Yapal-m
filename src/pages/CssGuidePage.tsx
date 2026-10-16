/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { CSS_COMPARISONS, EDUCATIONAL_RESOURCES } from '../data/mockData';
import { SemicolonChecker } from '../components/SemicolonChecker';
import { BookOpen, Check, X, ExternalLink, RefreshCw, Layers } from 'lucide-react';

interface CssGuidePageProps {
  onNavigate: (page: PageId) => void;
  makeupEnabled: boolean;
}

export const CssGuidePage: React.FC<CssGuidePageProps> = ({ onNavigate, makeupEnabled }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [dryColor, setDryColor] = useState<string>('#2563eb');

  if (!makeupEnabled) {
    return (
      <main style={{ maxWidth: '800px', margin: '20px auto', padding: '0 16px' }}>
        <h1>CSS Kullanım Yöntemleri & Rehber</h1>
        <p>1. Inline CSS: &lt;h1 style=&quot;color: blue;&quot;&gt;</p>
        <p>2. Internal CSS: &lt;style&gt; h1 &#123; color: blue; &#125; &lt;/style&gt;</p>
        <p>3. External CSS: &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;</p>
        <hr />
        <h3>Kaynaklar</h3>
        <p>W3Schools: https://www.w3schools.com/css/</p>
        <p>Fatih Hayrioğlu: https://fatihhayrioglu.com/</p>
      </main>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>CSS Mimari Prensipleri</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
          Inline, Internal ve External CSS Rehberi
        </h1>
        <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
          &ldquo;Kendini tekrar eden yapılar kullanmamaya özen gösteriniz. Ya da kendini tekrar eden yapılarda
          kullandığımız özelliği kullanın. (İpucu: Inline, Internal ve External CSS Kullanımı)&rdquo;
        </p>
      </div>

      {/* 3 Methods Tabs & Breakdown */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 p-1 bg-neutral-100 rounded-xl mb-6 overflow-x-auto">
          {CSS_COMPARISONS.map((comp, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                activeTab === idx
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {comp.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
            <div>
              <h3 className="font-display text-xl font-bold text-neutral-900">
                {CSS_COMPARISONS[activeTab].title}
              </h3>
              <p className="text-xs text-neutral-500 font-mono mt-1">
                Sözdizimi: {CSS_COMPARISONS[activeTab].syntax}
              </p>
            </div>
            <div className="bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs text-neutral-700">
              <strong>İdeal Kullanım:</strong> {CSS_COMPARISONS[activeTab].bestUse}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Avantajları</span>
                </h4>
                <ul className="space-y-2 text-xs text-neutral-600">
                  {CSS_COMPARISONS[activeTab].pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <X className="w-3.5 h-3.5" />
                  <span>Dezavantajları</span>
                </h4>
                <ul className="space-y-2 text-xs text-neutral-600">
                  {CSS_COMPARISONS[activeTab].cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 mt-0.5">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-neutral-700 block mb-2">
                Örnek Kod:
              </span>
              <pre className="font-code text-xs bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
                <code>{CSS_COMPARISONS[activeTab].codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* DRY Simulator: Interactive Proof */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              <Layers className="w-4 h-4" />
              <span>DRY (Don&apos;t Repeat Yourself) Canlı Karşılaştırması</span>
            </div>
            <h3 className="font-display text-xl font-bold text-neutral-900">
              Neden External CSS Tercih Edilmeli?
            </h3>
            <p className="text-xs text-neutral-600 mt-0.5">
              Aşağıdaki renk seçiciden bir renk seçin ve tek bir CSS kuralının birden çok bileşeni nasıl anında güncellediğini izleyin.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {['#2563eb', '#059669', '#d97706', '#dc2626', '#7c3aed'].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setDryColor(c)}
                className={`w-7 h-7 rounded-full border-2 transition-transform ${
                  dryColor === c ? 'scale-110 border-neutral-900 shadow-sm' : 'border-white'
                }`}
                style={{ backgroundColor: c }}
                title={`Vurgu Rengini Değiştir: ${c}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Card 1: External CSS Way */}
          <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-200/70">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-blue-800">
                ✅ External CSS (Tek Merkezden Yönetim)
              </span>
              <span className="text-[11px] font-mono text-blue-600">.kart &#123; border-color: {dryColor}; &#125;</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="p-3 bg-white rounded-lg border-2 shadow-2xs text-center transition-colors font-medium text-neutral-800"
                  style={{ borderColor: dryColor }}
                >
                  Kart #{i} (Otomatik güncellendi)
                </div>
              ))}
            </div>
            <p className="text-[11px] text-blue-900/80 mt-3">
              1 satır CSS değişti → 4 kart birden aynı anda güncellendi! Kod tekrarı 0.
            </p>
          </div>

          {/* Card 2: Inline CSS Way */}
          <div className="p-5 rounded-xl bg-neutral-100/60 border border-neutral-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-neutral-800">
                ❌ Inline CSS (Kendini Tekrar Eden)
              </span>
              <span className="text-[11px] font-mono text-neutral-500">style=&quot;border: 1px solid...&quot;</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="p-3 bg-white rounded-lg border border-neutral-300 shadow-2xs text-center text-neutral-500"
                >
                  Kart #{i} <span className="block text-[10px] text-neutral-400">Tek tek elle düzenlenmeli</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-neutral-600 mt-3">
              Her kartın içine gidip tek tek <code>style=&quot;...&quot;</code> yazmak zorunda kalırdınız.
            </p>
          </div>
        </div>
      </div>

      {/* Semicolon Checker Component */}
      <SemicolonChecker />

      {/* Helpful External Resources Cards */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
            Ödevde Tavsiye Edilen Kaynaklar
          </span>
          <h3 className="font-display text-2xl font-bold text-neutral-900">
            W3Schools, Fatih Hayrioğlu ve Color Hunt
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EDUCATIONAL_RESOURCES.map((res, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-neutral-200 p-6 shadow-2xs hover:border-neutral-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                    {res.badge}
                  </span>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="font-display text-base font-bold text-neutral-900 mb-1.5">
                  {res.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {res.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {res.topics.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="text-[10px] text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 whitespace-nowrap ml-2"
                >
                  Siteye Git &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
