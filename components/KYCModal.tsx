import React, { useState, useEffect } from 'react';
import { introContent, kycQuestions, personaResults } from '../data/kycData';
import { PersonaType } from '../types';
import { Shield, ChevronRight, CheckCircle2, AlertTriangle, PlayCircle, Fingerprint, Cpu, Network, Zap } from 'lucide-react';

interface KYCModalProps {
  onComplete: () => void;
}

export const KYCModal: React.FC<KYCModalProps> = ({ onComplete }) => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'analyzing' | 'result'>('intro');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<PersonaType>('Single');
  
  // Analyzing Animation State
  const [analysisStage, setAnalysisStage] = useState(0); // 0: Vectorizing, 1: ML, 2: Context

  const handleStart = () => {
    setStep('quiz');
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQIndex < kycQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQIndex(currentQIndex + 1);
      }, 250);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((a, b) => a + b, 0);
    
    // Logic for "Double Context" (Q2, Q7, Q9 are low risk awareness)
    const specificQScores = [finalAnswers[1], finalAnswers[6], finalAnswers[8]];
    const specificAvg = specificQScores.reduce((a,b) => a+b, 0) / 3;

    let type: PersonaType = 'Single';

    if (totalScore >= 10 && totalScore <= 18 && specificAvg < 1.5) {
      type = 'Double';
    } else if (totalScore <= 12) {
      type = 'Single';
    } else if (totalScore <= 18) {
      type = 'Double'; 
    } else if (totalScore <= 24) {
      type = 'Fused';
    } else {
      type = 'Detached';
    }

    setResult(type);
    setStep('analyzing');
  };

  // Analyzing Animation Logic
  useEffect(() => {
    if (step === 'analyzing') {
      const t1 = setTimeout(() => setAnalysisStage(1), 1000);
      const t2 = setTimeout(() => setAnalysisStage(2), 2000);
      const t3 = setTimeout(() => setStep('result'), 3200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [step]);

  // --- RENDERERS ---

  if (step === 'intro') {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md animate-fade-in">
        <div className="w-full max-w-sm bg-[#efefef] rounded-[32px] p-6 shadow-2xl border-4 border-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-land-500 to-land-300"></div>
          <div className="mt-4 flex justify-center mb-6">
             <div className="w-16 h-16 bg-land-100 rounded-full flex items-center justify-center text-land-600 shadow-neu-flat">
               <Shield size={32} strokeWidth={2} />
             </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 text-center mb-2 leading-tight">
            {introContent.title}
          </h2>
          <p className="text-gray-500 text-sm text-center mb-6 leading-relaxed">
            {introContent.subtitle}
          </p>
          <button 
            onClick={handleStart}
            className="w-full py-4 rounded-[20px] bg-land-600 text-white font-bold text-lg shadow-neu-float hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {introContent.startBtn}
            <ChevronRight size={20} />
          </button>
          <p className="text-[10px] text-gray-400 text-center mt-4">
            {introContent.disclaimer}
          </p>
        </div>
      </div>
    );
  }

  if (step === 'quiz') {
    const q = kycQuestions[currentQIndex];
    const progress = ((currentQIndex + 1) / kycQuestions.length) * 100;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md">
        <div className="w-full max-w-sm bg-[#efefef] rounded-[32px] p-6 shadow-2xl border-4 border-white h-[650px] flex flex-col">
          <div className="mb-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-land-600 font-bold text-sm">Q{q.id}</span>
              <span className="text-gray-400 text-xs">{currentQIndex + 1}/{kycQuestions.length}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-land-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="mb-6 flex-1">
            <div className="inline-block px-3 py-1 bg-gray-200 rounded-full text-[10px] text-gray-500 font-medium mb-3">
              {q.dimensionTag}
            </div>
            <h3 className="text-lg font-bold text-gray-800 leading-snug">
              {q.questionText}
            </h3>
          </div>
          <div className="space-y-3">
            {q.options.map((opt) => (
              <button
                key={opt.key}
                onClick={() => handleAnswer(opt.score)}
                className="w-full p-4 rounded-xl bg-white text-left text-sm text-gray-600 shadow-neu-flat border border-transparent hover:border-land-200 hover:text-land-700 active:bg-land-50 transition-all leading-relaxed"
              >
                <span className="font-bold mr-2 text-gray-400">{opt.key}.</span>
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-8 bg-gray-900/95 backdrop-blur-xl">
        <div className="w-full max-w-xs space-y-8">
          <div className="text-center">
            <h3 className="text-white text-lg font-bold mb-2">正在建立你的語境韌性檔案</h3>
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
               <div className="h-full bg-land-500 animate-[loading_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <AnalysisStep 
              active={analysisStage >= 0} 
              icon={Fingerprint} 
              text="問卷特徵向量化" 
              delay={0}
            />
            <AnalysisStep 
              active={analysisStage >= 1} 
              icon={Network} 
              text="機器學習分型" 
              delay={200}
            />
            <AnalysisStep 
              active={analysisStage >= 2} 
              icon={Cpu} 
              text="語境工程生成訓練路徑" 
              delay={400}
            />
          </div>
          
          <p className="text-gray-500 text-[10px] text-center pt-8">
            不蒐集個資；僅用於分型與訓練推薦。
          </p>
        </div>
      </div>
    );
  }

  // Result View
  const res = personaResults[result];
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/90 backdrop-blur-xl animate-fade-in-up">
      <div className="w-full max-w-sm bg-gradient-to-br from-[#f8fafc] to-white rounded-[32px] p-6 shadow-2xl border border-white/50 relative flex flex-col max-h-[90vh] overflow-y-auto no-scrollbar">
        
        {/* Header Badge */}
        <div className="flex justify-center mb-4">
          <div className="px-3 py-1 bg-gray-900 text-white rounded-full text-[10px] font-bold tracking-wider flex items-center gap-1">
             <Cpu size={12} className="text-land-400" />
             語境工程引擎 Context Engine
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto bg-land-50 rounded-2xl flex items-center justify-center mb-3 shadow-neu-pressed rotate-3">
             {result === 'Detached' ? <CheckCircle2 size={32} className="text-land-600" /> : 
              result === 'Double' ? <AlertTriangle size={32} className="text-orange-400" /> : 
              <Zap size={32} className="text-land-500" />}
          </div>
          <div className="text-xs font-bold text-land-600 mb-1">您的語境分型</div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">{res.title}</h2>
          <p className="text-sm text-gray-500 mt-2 px-2 leading-relaxed">
            {res.definition}
          </p>
        </div>

        {/* Innovation Flow (Small Tech Viz) */}
        <div className="bg-gray-100/80 rounded-xl p-3 mb-6 flex items-center justify-between text-[9px] text-gray-400 font-mono overflow-x-auto whitespace-nowrap gap-2 no-scrollbar border border-gray-200">
           <span>KYC 3.0</span>
           <span className="text-gray-300">→</span>
           <span>ML 分型</span>
           <span className="text-gray-300">→</span>
           <span className="text-land-600 font-bold bg-white px-1.5 py-0.5 rounded shadow-sm">ANT→RIGHT</span>
           <span className="text-gray-300">→</span>
           <span>NPC 生成</span>
        </div>

        {/* Triggers Section */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 text-center">
            您的易感觸發器
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {res.triggers.map((t, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-bold border border-red-100">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Recommendation Card */}
        <div className="bg-gray-900 rounded-2xl p-4 text-white mb-6 shadow-xl relative overflow-hidden group cursor-pointer" onClick={onComplete}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-land-500/20 blur-2xl rounded-full -mr-8 -mt-8"></div>
          
          <div className="flex justify-between items-start mb-2 relative z-10">
            <span className="px-2 py-0.5 bg-land-600 rounded text-[10px] font-bold">建議先練</span>
            <span className="text-land-300 text-[10px] font-mono">{res.recommendedTrack.level}</span>
          </div>
          
          <h3 className="font-bold text-lg mb-1 relative z-10">{res.recommendedTrack.title}</h3>
          <p className="text-gray-400 text-xs mb-3 relative z-10">目標：{res.recommendedTrack.goal}</p>
          
          <div className="flex items-center gap-2 text-xs font-bold text-land-400 group-hover:translate-x-1 transition-transform">
             {res.cta} <ChevronRight size={14} />
          </div>
        </div>

        {/* Secondary Action */}
        <button onClick={onComplete} className="text-gray-400 text-xs font-medium hover:text-gray-600 transition-colors">
          查看我的完整韌性報告
        </button>

      </div>
    </div>
  );
};

// Helper for Analysis Animation
const AnalysisStep: React.FC<{ active: boolean; icon: any; text: string; delay: number }> = ({ active, icon: Icon, text, delay }) => {
  return (
    <div 
      className={`flex items-center gap-4 transition-all duration-700 ${active ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${active ? 'bg-land-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.5)]' : 'bg-gray-800 text-gray-600'}`}>
        <Icon size={18} />
      </div>
      <span className={`text-sm font-medium tracking-wide ${active ? 'text-white' : 'text-gray-500'}`}>
        {text}
      </span>
      {active && <CheckCircle2 size={16} className="text-land-500 ml-auto animate-pulse" />}
    </div>
  );
};