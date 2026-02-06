import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-900 text-white p-8">
      <header className="flex justify-between w-full max-w-5xl items-center mb-12">
        <h1 className="text-3xl font-bold text-yellow-500 tracking-widest">YOJIJUKUGO COLLECTOR 四字熟語</h1>
        <div className="bg-zinc-800 px-4 py-2 rounded-full border border-zinc-700">
          Collection: <span className="text-yellow-400 font-bold">12 / 100</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 - Rare */}
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-1 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.3)] transform hover:-translate-y-2 transition duration-300">
          <div className="bg-black h-full rounded-lg p-6 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-2 right-2 text-yellow-500 font-bold text-xs border border-yellow-500 px-1 rounded">SSR</div>
            <h2 className="text-5xl font-serif font-bold mt-8 mb-4 text-white">一期一会</h2>
            <p className="text-yellow-500 text-lg mb-4">Ichi-go Ichi-e</p>
            <p className="text-gray-400 text-sm">Once-in-a-lifetime encounter.</p>
          </div>
        </div>

        {/* Card 2 - Common */}
        <div className="bg-zinc-700 p-1 rounded-xl opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer">
           <div className="bg-black h-full rounded-lg p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-zinc-600">
             <p className="text-zinc-500">LOCKED</p>
             <p className="text-4xl text-zinc-600 mt-2">????</p>
           </div>
        </div>

         {/* Card 3 - Common */}
        <div className="bg-zinc-700 p-1 rounded-xl opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer">
           <div className="bg-black h-full rounded-lg p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-zinc-600">
             <p className="text-zinc-500">LOCKED</p>
             <p className="text-4xl text-zinc-600 mt-2">????</p>
           </div>
        </div>
      </div>

      <button className="mt-16 bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-4 px-12 rounded-full text-xl shadow-lg animate-pulse">
        SUMMON (100 Coins)
      </button>
    </main>
  );
}
