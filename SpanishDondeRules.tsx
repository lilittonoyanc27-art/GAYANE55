import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ArrowLeft, Info, BookOpen, Lightbulb } from 'lucide-react';

export default function SpanishDondeRules() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl shadow-lg mb-4">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase italic">
            ¿Dónde? ¿Adónde? ¿De dónde?
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto italic">
            Իսպաներենի հարցական բառերի կիրառման կանոնները՝ կապված տեղանքի և ուղղության հետ:
          </p>
        </motion.header>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 gap-8">
          
          {/* Rule 1: Dónde */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <MapPin className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">1. ¿Dónde? (Որտե՞ղ)</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Օգտագործվում է, երբ հարցնում ենք <span className="text-blue-600 font-bold">գտնվելու վայրի</span> մասին (ստատիկ վիճակ):
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-400 italic">
                <p className="text-slate-900 font-bold mb-2">— ¿Dónde estás? (Որտե՞ղ ես:)</p>
                <p>— Estoy en casa. (Տանն եմ:)</p>
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Հիմնական բայը՝ ESTAR</p>
            </div>
          </motion.section>

          {/* Rule 2: Adónde */}
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <ArrowRight className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <ArrowRight className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">2. ¿Adónde? (Ու՞ր)</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Օգտագործվում է, երբ հարցնում ենք <span className="text-emerald-600 font-bold">ուղղության</span> կամ <span className="text-emerald-600 font-bold">նպատակակետի</span> մասին (շարժում):
              </p>
              <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-400 italic">
                <p className="text-slate-900 font-bold mb-2">— ¿Adónde vas? (Ու՞ր ես գնում:)</p>
                <p>— Voy al cine. (Կինո եմ գնում:)</p>
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Հիմնական բայը՝ IR</p>
            </div>
          </motion.section>

          {/* Rule 3: De dónde */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <ArrowLeft className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600">
                <ArrowLeft className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">3. ¿De dónde? (Որտեղի՞ց)</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Օգտագործվում է, երբ հարցնում ենք <span className="text-rose-600 font-bold">ծագման</span> կամ <span className="text-rose-600 font-bold">ելման կետի</span> մասին:
              </p>
              <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-400 italic">
                <p className="text-slate-900 font-bold mb-2">— ¿De dónde eres? (Որտեղի՞ց ես:)</p>
                <p>— Soy de Armenia. (Հայաստանից եմ:)</p>
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Հիմնական բայը՝ SER</p>
            </div>
          </motion.section>

        </div>

        {/* Summary Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-12 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-black uppercase tracking-tight">Ամփոփում</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-indigo-400 font-black text-xl italic">¿Dónde?</div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">Գտնվելու վայր</div>
              <div className="text-white font-medium">En + վայր</div>
            </div>
            <div className="space-y-2">
              <div className="text-emerald-400 font-black text-xl italic">¿Adónde?</div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">Ուղղություն</div>
              <div className="text-white font-medium">A + վայր</div>
            </div>
            <div className="space-y-2">
              <div className="text-rose-400 font-black text-xl italic">¿De dónde?</div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">Ծագում</div>
              <div className="text-white font-medium">De + վայր</div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="text-center py-12 opacity-30 text-[10px] font-black uppercase tracking-[0.5em]">
          Spanish Grammar • Donde Series
        </footer>
      </div>
    </div>
  );
}
