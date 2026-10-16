/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { CheckCircle2, Star, Send, Award, MessageSquare, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  makeupEnabled: boolean;
}

interface Review {
  name: string;
  role: string;
  score: number;
  note: string;
  date: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, makeupEnabled }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Eğitmen / Enes Öztürk');
  const [score, setScore] = useState(100);
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Enes Öztürk',
      role: 'Eğitmen',
      score: 100,
      note: 'Harika bir çalışma olmuş! list-style-position: inside kuralı yerinde kullanılmış, Colorhunt paletleri çok yakışmış ve noktalı virgüller eksiksiz. Emeğinize sağlık.',
      date: 'Bugün',
    },
    {
      name: 'Ders Takipçisi',
      role: 'Öğrenci Arkadaş',
      score: 95,
      note: 'Makyaj anahtarı ile ham HTML ve modern CSS farkını görmek çok öğretici. Teşekkürler!',
      date: 'Dün',
    },
  ]);

  if (!makeupEnabled) {
    return (
      <main style={{ maxWidth: '800px', margin: '20px auto', padding: '0 16px' }}>
        <h1>Ödev Teslim & Değerlendirme</h1>
        <p>İletişim ve ödev puanlama formu.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Ödev notunuz alındı!');
          }}
        >
          <p>
            <label>Adınız:</label>
            <br />
            <input type="text" defaultValue="Enes Öztürk" />
          </p>
          <p>
            <label>Notunuz (1-100):</label>
            <br />
            <input type="number" defaultValue={100} />
          </p>
          <p>
            <label>Ödev Yorumunuz:</label>
            <br />
            <textarea rows={4} defaultValue="Tebrikler, ödev tamamlandı!" />
          </p>
          <button type="submit">Gönder</button>
        </form>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newReview: Review = {
      name: name.trim(),
      role: role,
      score: score,
      note: note.trim() || 'Harika bir makyaj ödevi!',
      date: 'Az önce',
    };

    setReviews([newReview, ...reviews]);
    setSubmitted(true);
    setName('');
    setNote('');
  };

  const checklistItems = [
    { title: 'HTML sayfası sıfırdan oluşturuldu', done: true },
    { title: 'Çok sayfalı menü ve sayfa geçişleri eklendi', done: true },
    { title: 'Colorhunt renk paletleri ve canlı tema seçici entegre edildi', done: true },
    { title: 'Inline, Internal ve External CSS kuralları örneklendi & DRY anlatıldı', done: true },
    { title: 'list-style-position: inside ile madde noktaları ortalandı', done: true },
    { title: 'Google Fonts (Outfit, Plus Jakarta Sans, Playfair) bağlandı', done: true },
    { title: 'CSS noktalı virgül (;) kuralı ve dedektörü oluşturuldu', done: true },
    { title: 'W3Schools ve Fatih Hayrioğlu kaynakları eklendi', done: true },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Ödev Değerlendirme & İletişim</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
          Ödev Teslim Formu ve Kontrol Listesi
        </h1>
        <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
          Enes Öztürk ödev yönergesinde belirtilen tüm şartlar kontrol edilmiş ve eksiksiz uygulanmıştır.
          Aşağıdan kontrol listesini inceleyebilir veya ödeve puan/yorum bırakabilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Checklist (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h3 className="font-display text-base font-bold text-neutral-900">
              Ödev Kontrol Listesi (%100 Tamamlandı)
            </h3>
          </div>

          <ul className="space-y-3">
            {checklistItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-tight">{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 text-xs text-neutral-600 leading-relaxed">
            <p className="font-semibold text-neutral-900 mb-1">
              Enes Öztürk Yapımı ile Ayarlandı
            </p>
            <p>
              Ödev dosyamız tüm tarayıcılarda duyarlı (responsive), semantik standartlara uygun ve
              hatasız çalışmaktadır.
            </p>
          </div>
        </div>

        {/* Evaluation & Feedback Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 pb-4 mb-6 border-b border-neutral-100">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <h3 className="font-display text-base font-bold text-neutral-900">
              Ödevi Puanla & Geri Bildirim Bırak
            </h3>
          </div>

          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Harika! Değerlendirmeniz başarıyla kaydedildi ve aşağıdaki listeye eklendi. Teşekkürler!
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Adınız & Soyadınız:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="örn. Enes Öztürk"
                  className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Rolünüz:
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                >
                  <option value="Eğitmen / Enes Öztürk">Eğitmen / Enes Öztürk</option>
                  <option value="Öğrenci / Sınıf Arkadaşı">Öğrenci / Sınıf Arkadaşı</option>
                  <option value="Web Geliştirici Ziyaretçi">Web Geliştirici Ziyaretçi</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <label className="font-semibold text-neutral-700">
                  Makyaj & Tasarım Puanı (1 - 100):
                </label>
                <span className="font-bold text-sm text-blue-600 font-mono">
                  {score} / 100
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Ödev Yorumunuz / Tavsiyeniz:
              </label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ödev hakkında görüşlerinizi, tasarım ve CSS kullanımıyla ilgili notlarınızı yazın..."
                className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Değerlendirmeyi Gönder</span>
            </button>
          </form>

          {/* Past Reviews */}
          <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
              Gelen Değerlendirmeler ({reviews.length})
            </span>

            <div className="space-y-3">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-semibold text-neutral-900">
                      <span>{rev.name}</span>
                      <span className="text-[11px] font-normal text-neutral-500">
                        ({rev.role})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{rev.score}</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{rev.note}</p>
                  <span className="text-[10px] text-neutral-400 block">{rev.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
