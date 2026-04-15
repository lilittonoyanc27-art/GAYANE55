import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Flag, 
  RotateCcw, 
  ChevronRight, 
  Car,
  MapPin,
  Star,
  Zap,
  ShieldCheck,
  Compass
} from 'lucide-react';

// --- Types ---
interface AdventureChallenge {
  sentence: string;
  options: string[];
  correct: string;
  translation: string;
}

// --- Data ---
const CHALLENGES: AdventureChallenge[] = [
  { sentence: "¿____ vas ahora?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես գնում հիմա:" },
  { sentence: "¿____ eres tú?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց ես դու:" },
  { sentence: "¿____ está el hospital?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ է հիվանդանոցը:" },
  { sentence: "¿____ vienen ellos?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց են նրանք գալիս:" },
  { sentence: "¿____ quieres ir de vacaciones?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես ուզում գնալ արձակուրդի:" },
  { sentence: "¿____ vive tu abuela?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ է ապրում քո տատիկը:" },
  { sentence: "¿____ es este vino?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց է այս գինին:" },
  { sentence: "¿____ caminamos?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ենք քայլում:" },
  { sentence: "¿____ están mis llaves?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ են իմ բանալիները:" },
  { sentence: "¿____ viajas mañana?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես ճամփորդում վաղը:" },
  { sentence: "¿____ es tu familia?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց է քո ընտանիքը:" },
  { sentence: "¿____ trabajas?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ ես աշխատում:" },
  { sentence: "¿____ corren los niños?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր են վազում երեխաները:" },
  { sentence: "¿____ sacaste ese libro?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց հանեցիր այդ գիրքը:" },
  { sentence: "¿____ está la biblioteca?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ է գրադարանը:" },
  { sentence: "¿____ vuela el avión?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր է թռչում ինքնաթիռը:" },
  { sentence: "¿____ traes las manzanas?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց ես բերում խնձորները:" },
  { sentence: "¿____ dormimos hoy?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ ենք քնում այսօր:" },
  { sentence: "¿____ mandas la carta?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես ուղարկում նամակը:" },
  { sentence: "¿____ compraste el Ferrari?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ գնեցիր Ֆերարին:" },
];

export default function SpanishDondeAdventure() {
  const [view, setView] = useState<'intro' | 'game' | 'finish'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [progress, setProgress] = useState(0);

  const current = CHALLENGES[currentIndex];

  const handleAnswer = (option: string) => {
    if (feedback) return;

    if (option === current.correct) {
      setFeedback('correct');
      setScore(s => s + 1);
    } else {
      setFeedback('wrong');
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex < CHALLENGES.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setProgress(((currentIndex + 1) / CHALLENGES.length) * 100);
      } else {
        setProgress(100);
        setView('finish');
      }
    }, 1500);
  };

  const reset = () => {
    setView('intro');
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden flex flex-col items-center justify-center p-4 relative">
      
      {/* 3D Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
               backgroundSize: '40px 40px',
               transform: 'perspective(500px) rotateX(60deg) translateY(-100px)',
               transformOrigin: 'top'
             }} 
        />
      </div>

      <AnimatePresence mode="wait">
        {view === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="max-w-2xl w-full text-center space-y-12 relative z-10"
          >
            <div className="space-y-4">
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block p-8 bg-gradient-to-br from-red-500 to-red-700 rounded-[3rem] shadow-[0_0_60px_rgba(220,38,38,0.4)] border-4 border-white/10"
              >
                <Car className="w-24 h-24 text-white" />
              </motion.div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                FERRARI <br />
                <span className="text-red-600">MISSION</span>
              </h1>
              <p className="text-slate-400 font-bold text-xl italic uppercase tracking-widest">
                Գոռ, պատրա՞ստ ես նոր արկածի:
              </p>
            </div>

            <button 
              onClick={() => setView('game')}
              className="group relative px-16 py-8 bg-white text-black rounded-full font-black text-3xl uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-4 mx-auto"
            >
              ՍԿՍԵԼ
              <ChevronRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        )}

        {view === 'game' && (
          <motion.div 
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-5xl flex flex-col items-center relative z-10"
          >
            {/* HUD Dashboard */}
            <div className="w-full flex justify-between items-center mb-12 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10">
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Միավորներ</span>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-2xl font-black italic">{score}</span>
                  </div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Առաքելություն</span>
                  <div className="text-2xl font-black italic text-red-500">{currentIndex + 1}/20</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Compass className="w-6 h-6 text-slate-500" />
                <div className="w-48 h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
                  />
                </div>
              </div>
            </div>

            {/* 3D-ish Car Display */}
            <div className="relative h-64 w-full flex items-center justify-center mb-16">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-96 h-96 bg-red-600 rounded-full blur-[120px]" />
              </div>
              
              <motion.div
                key={currentIndex}
                initial={{ scale: 0.8, opacity: 0, rotateY: 45 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                className="relative z-10"
              >
                <motion.div
                  animate={feedback === 'correct' ? {
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                    filter: ["brightness(1)", "brightness(2)", "brightness(1)"]
                  } : feedback === 'wrong' ? {
                    x: [0, 10, -10, 10, -10, 0],
                    filter: ["grayscale(0)", "grayscale(1)", "grayscale(0)"]
                  } : {
                    y: [0, -8, 0],
                  }}
                  transition={{ duration: 0.5, repeat: feedback ? 0 : Infinity }}
                >
                  <Car className={`w-64 h-64 ${feedback === 'wrong' ? 'text-slate-700' : 'text-red-600'} drop-shadow-[0_35px_50px_rgba(220,38,38,0.5)]`} />
                </motion.div>

                {/* Feedback Icons */}
                <AnimatePresence>
                  {feedback === 'correct' && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 2, opacity: 1 }}
                      exit={{ scale: 3, opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <Zap className="w-20 h-20 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  )}
                  {feedback === 'wrong' && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 2, opacity: 1 }}
                      exit={{ scale: 3, opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <ShieldCheck className="w-20 h-20 text-slate-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Question Card */}
            <div className="w-full max-w-3xl bg-white text-black rounded-[4rem] p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
              
              <div className="space-y-8 text-center">
                <div className="flex items-center justify-center gap-3 text-red-600 font-black uppercase tracking-[0.3em] text-xs">
                  <MapPin className="w-4 h-4" />
                  Տեղանքի Ստուգում
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight">
                  {current.sentence.split('____').map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i === 0 && (
                        <span className="inline-block min-w-[120px] border-b-8 border-red-600 mx-4 text-red-600">
                          {feedback ? current.correct : "?"}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </h2>
                
                <p className="text-slate-400 font-bold italic text-2xl border-t border-slate-100 pt-6">
                  {current.translation}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {current.options.map((opt, i) => (
                  <motion.button
                    key={i}
                    disabled={!!feedback}
                    onClick={() => handleAnswer(opt)}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-8 rounded-3xl font-black text-3xl transition-all border-b-[12px] ${
                      feedback === 'correct' && opt === current.correct
                        ? 'bg-emerald-500 border-emerald-700 text-white'
                        : feedback === 'wrong' && opt === current.correct
                        ? 'bg-emerald-500 border-emerald-700 text-white'
                        : feedback === 'wrong' && opt !== current.correct
                        ? 'bg-red-50 border-red-200 text-red-900 opacity-40'
                        : 'bg-slate-100 border-slate-300 text-slate-900 hover:bg-red-600 hover:text-white hover:border-red-800'
                    }`}
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {view === 'finish' && (
          <motion.div 
            key="finish"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-white text-black rounded-[5rem] p-16 text-center shadow-2xl border-b-[20px] border-red-600"
          >
            <div className="w-28 h-28 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
              <Trophy className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-4 italic leading-none">ԳՈՌ, <br /> ԴՈՒ ՀԱՂԹԵՑԻՐ!</h2>
            <p className="text-slate-500 font-bold mb-12 italic uppercase tracking-widest">Առաքելությունը կատարված է:</p>
            
            <div className="bg-slate-100 rounded-[3rem] p-12 mb-12 border-b-4 border-slate-200">
              <span className="text-slate-400 font-black uppercase text-xs tracking-widest block mb-3">Վերջնական Արդյունք</span>
              <div className="text-9xl font-black text-slate-900 tracking-tighter">
                {score}<span className="text-4xl text-slate-300">/20</span>
              </div>
            </div>

            <button 
              onClick={reset}
              className="w-full py-8 bg-red-600 text-white rounded-full font-black text-2xl uppercase tracking-widest hover:bg-red-700 transition-all flex items-center justify-center gap-4 shadow-xl"
            >
              <RotateCcw className="w-8 h-8" />
              ՆՈՐԻՑ ԽԱՂԱԼ
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Decoration */}
      <div className="fixed bottom-10 right-10 flex items-center gap-6 opacity-20">
        <Flag className="w-6 h-6" />
        <span className="text-[12px] font-black uppercase tracking-[0.6em]">Ferrari Mission • Gor Edition</span>
      </div>
    </div>
  );
}
