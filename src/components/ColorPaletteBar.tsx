/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ColorPalette } from '../types';
import { Palette, Check, Copy, ExternalLink } from 'lucide-react';

interface ColorPaletteBarProps {
  palettes: ColorPalette[];
  activePalette: ColorPalette;
  onSelectPalette: (palette: ColorPalette) => void;
}

export const ColorPaletteBar: React.FC<ColorPaletteBarProps> = ({
  palettes,
  activePalette,
  onSelectPalette,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-neutral-700" />
          <h3 className="text-sm font-semibold text-neutral-900">
            Colorhunt Renk Paletleri
          </h3>
          <span className="text-xs text-neutral-500">· Canlı Tema Seçici</span>
        </div>
        <a
          href="https://colorhunt.co/"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium"
        >
          <span>Colorhunt.co Sitesini Ziyaret Et</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
        {palettes.map((p) => {
          const isSelected = p.id === activePalette.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectPalette(p)}
              className={`text-left p-2.5 rounded-xl border transition-all ${
                isSelected
                  ? 'border-neutral-900 ring-2 ring-neutral-900/10 bg-neutral-50/60'
                  : 'border-neutral-200 hover:border-neutral-300 bg-white'
              }`}
            >
              <div className="flex h-8 rounded-lg overflow-hidden mb-2 border border-black/5 shadow-inner">
                {p.hexColors.map((hex, i) => (
                  <div
                    key={i}
                    className="flex-1 h-full"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-800 truncate">
                  {p.name.split(' (')[0]}
                </span>
                {isSelected && <Check className="w-3 h-3 text-neutral-900 shrink-0" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Palette Hex Swatches with 1-click Copy */}
      <div className="bg-neutral-50 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="text-neutral-600">
          <span className="font-semibold text-neutral-800">{activePalette.name}:</span>{' '}
          {activePalette.description}
        </div>
        <div className="flex items-center gap-2">
          {activePalette.hexColors.map((hex, idx) => {
            const roleLabels = ['Canvas', 'Yüzey', 'Birincil', 'Vurgu'];
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleCopy(hex)}
                className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-md border border-neutral-200 text-neutral-700 hover:border-neutral-400 transition-colors font-mono"
                title={`${roleLabels[idx]} rengi: ${hex} (Tıkla ve kopyala)`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-black/10 inline-block shrink-0"
                  style={{ backgroundColor: hex }}
                />
                <span className="text-[11px] font-medium">{hex}</span>
                {copiedHex === hex ? (
                  <Check className="w-2.5 h-2.5 text-emerald-600" />
                ) : (
                  <Copy className="w-2.5 h-2.5 text-neutral-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
