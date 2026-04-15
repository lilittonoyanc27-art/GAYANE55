import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  ShoppingBag, 
  Camera, 
  Coffee, 
  Plane, 
  MapPin, 
  RotateCcw, 
  Trophy, 
  ChevronRight,
  Star
} from 'lucide-react';

// --- Types ---
interface FashionChallenge {
  sentence: string;
  options: string[];
  correct: string;
  translation: string;
}

// --- Data ---
const CHALLENGES: FashionChallenge[] = [
  { sentence: "¿____ vas a comprar ese vestido?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես գնում այդ զգեստը գնելու:" },
  { sentence: "¿____ es tu perfume favorito?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց է քո սիրելի օծանելիքը:" },
  { sentence: "¿____ está el espejo?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ է հայելին:" },
  { sentence: "¿____ viajas para el desfile de moda?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես ճամփորդում նորաձևության ցուցադրության համար:" },
  { sentence: "¿____ son estas flores?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց են այս ծաղիկները:" },
  { sentence: "¿____ está la tienda de Chanel?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ է գտնվում Chanel-ի խանութը:" },
  { sentence: "¿____ caminas con tus amigas?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես քայլում ընկերուհիներիդ հետ:" },
  { sentence: "¿____ está la pasarela de moda?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ է նորաձևության հարթակը (պոդիումը):" },
  { sentence: "¿____ está el salón de belleza?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ է գտնվում գեղեցկության սրահը:" },
  { sentence: "¿____ corres por las mañanas?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես վազում առավոտյան:" },
  { sentence: "¿____ es tu diseñador favorito?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց է քո սիրելի դիզայները:" },
  { sentence: "¿____ tomas el café?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ ես սուրճ խմում:" },
  { sentence: "¿____ mandas las invitaciones?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես ուղարկում հրավիրատոմսերը:" },
  { sentence: "¿____ sacaste esa foto tan linda?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց (որտե՞ղ) ես հանել այդ գեղեցիկ նկարը:" },
  { sentence: "¿____ vas con ese vestido nuevo?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես գնում այդ նոր զգեստով:" },
  { sentence: "¿____ vuela tu imaginación?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր է թռչում քո երևակայությունը:" },
  { sentence: "¿____ compraste esos zapatos?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ ես գնել այդ կոշիկները:" },
  { sentence: "¿____ dormimos después de la fiesta?", options: ["Donde", "Adonde", "De donde"], correct: "Donde", translation: "Որտե՞ղ ենք քնում խնջույքից հետո:" },
  { sentence: "¿____ vas tan elegante?", options: ["Donde", "Adonde", "De donde"], correct: "Adonde", translation: "Ու՞ր ես գնում այսպես էլեգանտ:" },
  { sentence: "¿____ es esta joya?", options: ["Donde", "Adonde", "De donde"], correct: "De donde", translation: "Որտեղի՞ց է այս զարդը:" },
];

export default function SpanishGayaneAdventure() {
  const [view, setView] = useState<'intro' | 'game' | 'finish'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

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
      } else {
        setView('finish');
      }
    }, 1500);
  };

  const reset = () => {
    setView('intro');
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] text-[#4a4a4a] font-sans overflow-hidden flex flex-col items-center justify-center p-4 relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20"
        >
          <Sparkles className="w-64 h-64 text-pink-300" />
        </motion.div>
        <motion.div 
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20"
        >
          <Heart className="w-64 h-64 text-pink-300" />
        </motion.div>
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
            <div className="space-y-6">
              <motion.div 
                animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block p-8 bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(255,182,193,0.5)] border-4 border-pink-100"
              >
                <ShoppingBag className="w-24 h-24 text-pink-500" />
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none text-pink-600 drop-shadow-sm">
                GAYANE'S <br />
                <span className="text-pink-400">STYLE QUEST</span>
              </h1>
              <p className="text-pink-300 font-bold text-xl italic uppercase tracking-widest">
                Գայանե, պատրա՞ստ ես նորաձևության արկածին:
              </p>
            </div>

            <button 
              onClick={() => setView('game')}
              className="group relative px-16 py-8 bg-pink-500 text-white rounded-full font-black text-3xl uppercase tracking-widest hover:bg-pink-600 hover:scale-105 transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-4 mx-auto"
            >
              ՍԿՍԵԼ
              <Sparkles className="w-10 h-10 group-hover:rotate-12 transition-transform" />
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
            <div className="w-full flex justify-between items-center mb-12 px-8 py-6 bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-pink-100 shadow-xl">
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-pink-300">Միավորներ</span>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                    <span className="text-2xl font-black italic text-pink-600">{score}</span>
                  </div>
                </div>
                <div className="h-10 w-px bg-pink-100" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-pink-300">Մակարդակ</span>
                  <div className="text-2xl font-black italic text-pink-500">{currentIndex + 1}/20</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i < Math.floor(score / 4) ? 'bg-pink-500' : 'bg-pink-100'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Display */}
            <div className="relative h-48 w-full flex items-center justify-center mb-12">
              <motion.div
                key={currentIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10"
              >
                <motion.div
                  animate={feedback === 'correct' ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  } : feedback === 'wrong' ? {
                    x: [0, 10, -10, 10, -10, 0]
                  } : {
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 0.5, repeat: feedback ? 0 : Infinity }}
                  className="bg-white p-8 rounded-full shadow-2xl border-4 border-pink-50"
                >
                  {currentIndex % 4 === 0 && <ShoppingBag className="w-24 h-24 text-pink-500" />}
                  {currentIndex % 4 === 1 && <Camera className="w-24 h-24 text-pink-500" />}
                  {currentIndex % 4 === 2 && <Coffee className="w-24 h-24 text-pink-500" />}
                  {currentIndex % 4 === 3 && <Plane className="w-24 h-24 text-pink-500" />}
                </motion.div>

                <AnimatePresence>
                  {feedback === 'correct' && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 2, opacity: 1 }}
                      exit={{ scale: 3, opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <Sparkles className="w-20 h-20 text-yellow-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Question Card */}
            <div className="w-full max-w-3xl bg-white rounded-[4rem] p-12 shadow-[0_40px_100px_rgba(255,182,193,0.3)] relative overflow-hidden border-4 border-pink-50">
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400" />
              
              <div className="space-y-8 text-center">
                <div className="flex items-center justify-center gap-3 text-pink-400 font-black uppercase tracking-[0.3em] text-xs">
                  <Star className="w-4 h-4" />
                  Style Challenge
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-tight text-slate-800">
                  {current.sentence.split('____').map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i === 0 && (
                        <span className="inline-block min-w-[100px] border-b-4 border-pink-500 mx-3 text-pink-500">
                          {feedback ? current.correct : "?"}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </h2>
                
                <p className="text-pink-300 font-bold italic text-2xl border-t border-pink-50 pt-6">
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
                    className={`py-6 rounded-3xl font-black text-2xl transition-all border-b-8 ${
                      feedback === 'correct' && opt === current.correct
                        ? 'bg-pink-500 border-pink-700 text-white shadow-lg'
                        : feedback === 'wrong' && opt === current.correct
                        ? 'bg-pink-500 border-pink-700 text-white'
                        : feedback === 'wrong' && opt !== current.correct
                        ? 'bg-pink-50 border-pink-100 text-pink-300 opacity-40'
                        : 'bg-pink-50 border-pink-200 text-pink-600 hover:bg-pink-500 hover:text-white hover:border-pink-700'
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
            className="max-w-md w-full bg-white rounded-[5rem] p-16 text-center shadow-2xl border-b-[20px] border-pink-500"
          >
            <div className="w-28 h-28 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
              <Trophy className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 italic leading-none text-pink-600">ԳԱՅԱՆԵ, <br /> ԴՈՒ ՓԱՅԼՈՒՄ ԵՍ!</h2>
            <p className="text-pink-300 font-bold mb-12 italic uppercase tracking-widest">Դու իսկական ոճի թագուհի ես:</p>
            
            <div className="bg-pink-50 rounded-[3rem] p-12 mb-12 border-b-4 border-pink-100">
              <span className="text-pink-300 font-black uppercase text-xs tracking-widest block mb-3">Վերջնական Արդյունք</span>
              <div className="text-9xl font-black text-pink-600 tracking-tighter">
                {score}<span className="text-4xl text-pink-200">/20</span>
              </div>
            </div>

            <button 
              onClick={reset}
              className="w-full py-8 bg-pink-500 text-white rounded-full font-black text-2xl uppercase tracking-widest hover:bg-pink-600 transition-all flex items-center justify-center gap-4 shadow-xl"
            >
              <RotateCcw className="w-8 h-8" />
              ՆՈՐԻՑ ԽԱՂԱԼ
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Decoration */}
      <div className="fixed bottom-10 right-10 flex items-center gap-6 opacity-30">
        <Sparkles className="w-6 h-6 text-pink-400" />
        <span className="text-[12px] font-black uppercase tracking-[0.6em] text-pink-400">Style Quest • Gayane Edition</span>
      </div>
    </div>
  );
}
