/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, ColorPalette } from './types';
import { COLOR_PALETTES } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CssGuidePage } from './pages/CssGuidePage';
import { StudioPage } from './pages/StudioPage';
import { ContactPage } from './pages/ContactPage';
import { Sparkles, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [makeupEnabled, setMakeupEnabled] = useState<boolean>(true);
  const [activePalette, setActivePalette] = useState<ColorPalette>(COLOR_PALETTES[0]);

  // Apply active Colorhunt palette to CSS variables
  useEffect(() => {
    if (!makeupEnabled) return;
    const root = document.documentElement;
    root.style.setProperty('--color-bg-base', activePalette.hexColors[0]);
    root.style.setProperty('--color-surface', activePalette.hexColors[1]);
    root.style.setProperty('--color-primary', activePalette.hexColors[2]);
    root.style.setProperty('--color-accent', activePalette.hexColors[3]);
  }, [activePalette, makeupEnabled]);

  const handleToggleMakeup = () => {
    setMakeupEnabled((prev) => !prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        !makeupEnabled ? 'raw-html-mode' : ''
      }`}
      style={{
        backgroundColor: makeupEnabled ? activePalette.hexColors[0] : '#ffffff',
      }}
    >
      {/* Top Banner when in Raw HTML Mode */}
      {!makeupEnabled && (
        <div
          style={{
            backgroundColor: '#fffae6',
            borderBottom: '2px solid #b38600',
            padding: '8px 16px',
            textAlign: 'center',
            fontSize: '13px',
            fontFamily: 'sans-serif',
          }}
        >
          <strong>⚠️ Saf HTML Modu Aktif:</strong> CSS makyajı geçici olarak kapatıldı.
          Tüm tarayıcı varsayılan stilleri (Times New Roman, mavi linkler, unstyled listeler) görüntüleniyor.{' '}
          <button
            type="button"
            onClick={handleToggleMakeup}
            style={{
              marginLeft: '8px',
              padding: '2px 8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            💄 CSS Makyajını Tekrar Aç
          </button>
        </div>
      )}

      {/* Navigation Header adhering to the 3-Zone Top Bar Contract */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        makeupEnabled={makeupEnabled}
        onToggleMakeup={handleToggleMakeup}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            makeupEnabled={makeupEnabled}
            onToggleMakeup={handleToggleMakeup}
            activePalette={activePalette}
            onSelectPalette={setActivePalette}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} makeupEnabled={makeupEnabled} />
        )}
        {currentPage === 'css-guide' && (
          <CssGuidePage onNavigate={handleNavigate} makeupEnabled={makeupEnabled} />
        )}
        {currentPage === 'studio' && (
          <StudioPage onNavigate={handleNavigate} makeupEnabled={makeupEnabled} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} makeupEnabled={makeupEnabled} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} makeupEnabled={makeupEnabled} />
    </div>
  );
}
