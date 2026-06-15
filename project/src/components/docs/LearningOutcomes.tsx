"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface LearningOutcomesProps {
  outcomes: string[];
}

export default function LearningOutcomes({ outcomes }: LearningOutcomesProps) {
  return (
    <div className="my-12 p-8 rounded-3xl border border-[#1f1f1f] bg-gradient-to-br from-[#0f0f0f] to-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ef4444]/20 to-transparent" />
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-xl bg-[#ef4444] flex items-center justify-center text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]">
          <CheckCircle2 className="h-5 w-5 stroke-[3]" />
        </div>
        <h3 className="text-xl font-black text-white uppercase tracking-tight">What you'll learn</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {outcomes.map((outcome, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            key={i} 
            className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-[#ef4444]/20 transition-colors group"
          >
            <div className="mt-1 flex-shrink-0">
              <div className="w-5 h-5 rounded-full border-2 border-[#1f1f1f] group-hover:border-[#ef4444] flex items-center justify-center transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <span className="text-[15px] font-medium text-[#a1a1aa] group-hover:text-white transition-colors leading-snug">
              {outcome}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
