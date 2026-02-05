'use client';

import { useState } from 'react';

type Rarity = 'N' | 'R' | 'SR' | 'SSR';

type Idiom = {
  chars: string;
  reading: string;
  meaning: string;
  rarity: Rarity;
};

const POOL: Idiom[] = [
  { chars: "一石二鳥", reading: "Isseki Nichou", meaning: "Killing two birds with one stone.", rarity: 'N' },
  { chars: "十人十色", reading: "Juunin Toiro", meaning: "Ten people, ten colors. (Everyone is different.)", rarity: 'N' },
  { chars: "自業自得", reading: "Jigou Jitoku", meaning: "Reaping what you sow.", rarity: 'N' },
  { chars: "一期一会", reading: "Ichigo Ichie", meaning: "One time, one meeting. (Treasure every meeting.)", rarity: 'R' },
  { chars: "花鳥風月", reading: "Kachou Fuugetsu", meaning: "Beauties of nature (Flower, Bird, Wind, Moon).", rarity: 'R' },
  { chars: "温故知新", reading: "Onko Chishin", meaning: "Learning from the past to understand the new.", rarity: 'R' },
  { chars: "電光石火", reading: "Denkou Sekka", meaning: "Lightning speed.", rarity: 'SR' },
  { chars: "七転八起", reading: "Shichiten Hakki", meaning: "Fall seven times, stand up eight.", rarity: 'SR' },
  { chars: "天下布武", reading: "Tenka Fubu", meaning: "Unify the nation under military rule (Oda Nobunaga).", rarity: 'SSR' },
  { chars: "風林火山", reading: "Fuurin Kazan", meaning: "Wind, Forest, Fire, Mountain (Takeda Shingen).", rarity: 'SSR' },
];

const RARITY_COLORS: Record<Rarity, string> = {
    'N': 'bg-gray-200 border-gray-400 text-gray-800',
    'R': 'bg-blue-100 border-blue-400 text-blue-900',
    'SR': 'bg-purple-100 border-purple-500 text-purple-900',
    'SSR': 'bg-yellow-100 border-yellow-500 text-yellow-900 shadow-[0_0_15px_rgba(234,179,8,0.5)]'
};

export default function GachaMachine() {
  const [collection, setCollection] = useState<Idiom[]>([]);
  const [isRolling, setIsRolling] = useState(false);
  const [lastPull, setLastPull] = useState<Idiom | null>(null);

  const roll = () => {
    setIsRolling(true);
    setLastPull(null);

    // Simulate network/animation delay
    setTimeout(() => {
        const random = POOL[Math.floor(Math.random() * POOL.length)];
        setCollection(prev => [...prev, random]); // Allow duplicates for now
        setLastPull(random);
        setIsRolling(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col items-center gap-8">
      
      {/* Gacha Stage */}
      <div className="relative w-full max-w-sm aspect-square bg-slate-800 rounded-3xl border-8 border-slate-600 shadow-2xl flex items-center justify-center overflow-hidden">
        {/* Machine Visuals */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#334155_0%,_#0f172a_100%)]"></div>
        
        {isRolling ? (
            <div className="animate-spin text-9xl">🌀</div>
        ) : lastPull ? (
            <div className={`flex flex-col items-center animate-in zoom-in duration-300 p-6 rounded-xl border-4 ${RARITY_COLORS[lastPull.rarity]}`}>
                <div className="text-xs font-bold uppercase tracking-widest mb-2 border px-2 rounded-full bg-white/50">{lastPull.rarity}</div>
                <div className="text-6xl font-black mb-2">{lastPull.chars}</div>
                <div className="text-lg font-serif italic mb-1">{lastPull.reading}</div>
                <div className="text-xs text-center opacity-80 max-w-[200px]">{lastPull.meaning}</div>
            </div>
        ) : (
            <div className="text-white text-center opacity-50">
                <p className="text-6xl mb-4">🔮</p>
                <p>Ready to summon</p>
            </div>
        )}
      </div>

      {/* Button */}
      <button 
        onClick={roll} 
        disabled={isRolling}
        className="px-12 py-4 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-black text-2xl rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isRolling ? "SUMMONING..." : "SUMMON x1"}
      </button>

      {/* Collection Grid */}
      <div className="w-full">
        <h3 className="text-xl font-bold text-slate-700 mb-4">Collection ({collection.length})</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collection.slice().reverse().map((item, i) => (
                <div key={i} className={`p-3 rounded-lg border-2 flex flex-col items-center text-center ${RARITY_COLORS[item.rarity]}`}>
                    <span className="text-xs font-bold opacity-50 mb-1">{item.rarity}</span>
                    <span className="text-xl font-bold">{item.chars}</span>
                    <span className="text-[10px] mt-1 line-clamp-1">{item.reading}</span>
                </div>
            ))}
            {collection.length === 0 && (
                <div className="col-span-full text-center py-8 text-slate-400 border-2 border-dashed border-slate-300 rounded-lg">
                    No idioms collected yet.
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
