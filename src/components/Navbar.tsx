/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { Sparkles, EyeOff, Eye } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  makeupEnabled: boolean;
  onToggleMakeup: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  makeupEnabled,
  onToggleMakeup,
}) => {
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'about', label: 'Hakkımda' },
    { id: 'css-guide', label: 'CSS Rehberi' },
    { id: 'studio', label: 'Makyaj Stüdyosu' },
    { id: 'contact', label: 'Ödev & İletişim' },
  ];

  if (!makeupEnabled) {
    // Plain unstyled HTML standard rendering for educational before-and-after demonstration!
    return (
      <header style={{ padding: '12px 16px', borderBottom: '1px solid #000' }}>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ verticalAlign: 'middle' }}>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  style={{ fontWeight: 'bold', fontSize: '18px' }}
                >
                  Sayfamıza Biraz Makyaj Yapalım
                </a>
              </td>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                {navItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                    {index > 0 && ' | '}
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.id);
                      }}
                      style={{
                        fontWeight: currentPage === item.id ? 'bold' : 'normal',
                      }}
                    >
                      {item.label}
                    </a>
                  </React.Fragment>
                ))}
              </td>
              <td style={{ textAlign: 'right', verticalAlign: 'middle' }}>
                <button
                  type="button"
                  onClick={onToggleMakeup}
                  style={{
                    padding: '4px 10px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  💄 Makyajı Geri Yükle (CSS Aç)
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="font-display text-lg font-bold tracking-tight text-neutral-900 whitespace-nowrap shrink-0 hover:text-blue-600 transition-colors text-left"
        >
          Sayfamıza Makyaj Yapalım
        </button>

        {/* Zone 2: 5 nav links, 1-2 word labels, single line */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 ${
                  isActive
                    ? 'border-blue-600 text-neutral-900 font-semibold'
                    : 'border-transparent hover:text-neutral-900 hover:border-neutral-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleMakeup}
            title="CSS Makyajını Aç / Saf Ham HTML Halini Gör"
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Saf HTML Modu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Row */}
      <div className="md:hidden flex items-center gap-4 px-6 py-2.5 overflow-x-auto border-t border-neutral-100 bg-neutral-50/70 text-xs font-medium text-neutral-600 scrollbar-none">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`whitespace-nowrap shrink-0 py-1 ${
              currentPage === item.id ? 'text-blue-600 font-semibold' : 'text-neutral-600'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
