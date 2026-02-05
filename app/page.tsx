import GachaMachine from './components/GachaMachine';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center py-12 px-4 bg-slate-50">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 mb-2">
        Yojijukugo Collector
      </h1>
      <p className="text-slate-500 mb-8 font-medium">Summon the wisdom of four characters.</p>
      <GachaMachine />
      <p className="mt-12 text-slate-300 text-xs">Educational Fleet: App 6/11</p>
    </div>
  )
}
