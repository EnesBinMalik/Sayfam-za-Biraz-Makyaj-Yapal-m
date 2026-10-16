/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { Heart, ExternalLink, Code2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  makeupEnabled: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, makeupEnabled }) => {
  if (!makeupEnabled) {
    return (
      <footer style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #000', fontSize: '13px' }}>
        <p><strong>Enes Öztürk Yapımı ile Hazırlanan Web Tasarım Ödevi</strong></p>
        <p>HTML & CSS Temelleri: Inline, Internal ve External CSS Kullanımı</p>
        <p>Yardımcı Kaynaklar: <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">W3Schools</a> | <a href="https://fatihhayrioglu.com/" target="_blank" rel="noreferrer">Fatih Hayrioğlu</a> | <a href="https://colorhunt.co/" target="_blank" rel="noreferrer">Colorhunt</a></p>
      </footer>
    );
  }

  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-3">
            <span className="font-display text-base font-bold text-neutral-900 tracking-tight block">
              Sayfamıza Biraz Makyaj Yapalım
            </span>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
              HTML iskeletine CSS ile estetik, ruh ve karakter kazandırma serüveni.
              Enes Öztürk YouTube dersleri referans alınarak özenle kodlanmış öğrenci ödev projesidir.
            </p>
            <div className="pt-2 text-xs text-neutral-500 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-neutral-400" />
              <span>HTML5</span>
              <span>·</span>
              <span>CSS3</span>
              <span>·</span>
              <span>JavaScript</span>
              <span>·</span>
              <span>Enes Öztürk Ödevi</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-3">
              Sayfalar
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Hakkımda & Ödev Notu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('css-guide')}
                  className="hover:text-blue-600 transition-colors"
                >
                  CSS Rehberi & Noktalı Virgül
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('studio')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Canlı Makyaj Stüdyosu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-blue-600 transition-colors"
                >
                  İletişim & Puanlama
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-3">
              Tavsiye Kaynaklar
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a
                  href="https://www.w3schools.com/css/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>W3Schools CSS Tutorial</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://fatihhayrioglu.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>Fatih Hayrioğlu Web Sitesi</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://colorhunt.co/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>Color Hunt Renk Paletleri</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://fonts.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>Google Fonts Kütüphanesi</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="flex items-center gap-1.5">
            <span>Enes Öztürk dersleri rehberliğinde</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>ile hazırlandı.</span>
          </p>
          <p className="font-mono text-neutral-400">
            list-style-position: inside; /* Noktalı virgülü unutma! */
          </p>
        </div>
      </div>
    </footer>
  );
};
