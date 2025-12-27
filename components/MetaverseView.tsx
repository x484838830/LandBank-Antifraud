import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, BrainCircuit, Activity, Globe, X, ExternalLink, Smartphone, 
  Zap, Shield, Users, LayoutDashboard, TrendingUp, Target, AlertCircle, 
  ChevronRight, Info, MoreHorizontal, CheckCircle2, AlertTriangle, Clock
} from 'lucide-react';

interface MetaverseViewProps {
  onBack: () => void;
  initialMode?: 'default' | 'dashboard';
}

type LaunchState = 'idle' | 'linking' | 'connected' | 'dashboard-linking' | 'dashboard-connected';

export const MetaverseView: React.FC<MetaverseViewProps> = ({ onBack, initialMode = 'default' }) => {
  const [mounted, setMounted] = useState(false);
  // Initialize state based on mode
  const [launchState, setLaunchState] = useState<LaunchState>(
    initialMode === 'dashboard' ? 'dashboard-linking' : 'idle'
  );
  const [browserUrl, setBrowserUrl] = useState('');
  const [timeRange, setTimeRange] = useState<'7D' | '30D' | 'ALL'>('7D');
  const [isIframeActive, setIsIframeActive] = useState(false); // New state to toggle iframe

  const isDashboardMode = initialMode === 'dashboard';

  useEffect(() => {
    setMounted(true);
    
    // Auto-launch dashboard logic if requested
    if (initialMode === 'dashboard') {
      // Simulate linking process
      const timer = setTimeout(() => {
        const mockToken = 'db_' + Math.random().toString(36).substr(2, 9);
        const url = `https://dashboard.landbank.com.tw/personal?token=${mockToken}&scope=personal`;
        setBrowserUrl(url);
        setLaunchState('dashboard-connected');
      }, 800); // 0.8s transition
      return () => clearTimeout(timer);
    }
  }, [initialMode]);

  // 模擬 Handoff 流程：進入元宇宙 3D 場景
  const handleLaunchMetaverse = () => {
    setLaunchState('linking');
    setTimeout(() => {
      // Updated URL to Seeulair
      const url = 'https://seeulair.com/space/x6ytpvxf?lang=en';
      setBrowserUrl(url);
      setLaunchState('connected');
    }, 1500); 
  };

  const handleReturnToApp = () => {
    // Priority 1: Close Iframe if active
    if (isIframeActive) {
      setIsIframeActive(false);
      return;
    }

    // Priority 2: Return to Home if in Dashboard mode
    if (launchState === 'dashboard-connected' || launchState === 'dashboard-linking') {
      onBack();
    } else {
      // Priority 3: Return to Map if in Metaverse Web mode
      setLaunchState('idle');
    }
  };

  // --- RENDERERS ---

  // 1. Linking Transition Overlay
  const isLinking = launchState === 'linking' || launchState === 'dashboard-linking';
  
  return (
    <div className={`absolute inset-0 z-50 bg-slate-950 text-white overflow-hidden transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {isLinking && (
        <div className="absolute inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono animate-fade-in">
           <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(20,184,166,0.3)_25%,rgba(20,184,166,0.3)_26%,transparent_27%,transparent_74%,rgba(20,184,166,0.3)_75%,rgba(20,184,166,0.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(20,184,166,0.3)_25%,rgba(20,184,166,0.3)_26%,transparent_27%,transparent_74%,rgba(20,184,166,0.3)_75%,rgba(20,184,166,0.3)_76%,transparent_77%,transparent)] bg-[size:50px_50px] animate-[pulse_0.5s_ease-in-out_infinite]"></div>
           
           <div className="relative z-10 flex flex-col items-center gap-4">
             {launchState === 'linking' ? (
               <>
                 <div className="w-16 h-16 border-4 border-t-land-500 border-r-transparent border-b-land-500 border-l-transparent rounded-full animate-spin"></div>
                 <h2 className="text-xl font-bold text-land-400 tracking-widest animate-pulse">Linking to Meta-Context...</h2>
                 <div className="text-[10px] text-gray-500">Handshaking Token / Syncing Progress</div>
               </>
             ) : (
               <>
                 <LayoutDashboard size={48} className="text-land-400 animate-pulse" />
                 <h2 className="text-xl font-bold text-land-400 tracking-widest animate-pulse">SYSTEM LINKING...</h2>
                 <div className="text-[10px] text-gray-500">ACCESSING DASHBOARD / VERIFYING SCOPE</div>
               </>
             )}
           </div>
        </div>
      )}

      {/* 2. Simulated In-App Browser Container */}
      {(launchState === 'connected' || launchState === 'dashboard-connected') && (
        <div className="absolute inset-0 z-[90] bg-gray-900 flex flex-col animate-fade-in-up">
          
          {/* Browser Bar (Only for Metaverse Web Mode) */}
          {!isDashboardMode && (
             <div className="bg-gray-800 p-3 flex items-center gap-3 border-b border-gray-700 shadow-md shrink-0 relative z-20">
               <button onClick={handleReturnToApp} className="text-gray-400 hover:text-white">
                 <X size={20} />
               </button>
               <div className="flex-1 bg-gray-900 rounded-full px-4 py-1.5 flex items-center gap-2 text-xs text-gray-400 font-mono overflow-hidden">
                  <Activity size={12} className="text-green-500" />
                  <span className="text-green-500">https://</span>
                  <span className="truncate">{browserUrl.replace(/^https?:\/\//, '')}</span>
               </div>
             </div>
          )}

          {/* === BROWSER CONTENT: METAVERSE 3D (Hidden if dashboard mode) === */}
          {launchState === 'connected' && !isDashboardMode && (
             <div className="flex-1 relative overflow-hidden bg-slate-900">
               {isIframeActive ? (
                 <iframe 
                   src={browserUrl} 
                   className="w-full h-full border-0 animate-fade-in"
                   allow="camera; microphone; fullscreen; display-capture; autoplay"
                   title="Metaverse View"
                 />
               ) : (
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614728853913-1e22ba61d48b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                   <div className="absolute inset-0 bg-indigo-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(168,85,247,0.5)] border border-white/20 animate-pulse">
                         <Globe size={48} className="text-white" />
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[10px] font-bold mb-4 border border-green-500/30">
                         <Activity size={12} />
                         <span>SESSION RESTORED</span>
                      </div>
                      <h1 className="text-3xl font-black text-white mb-2 drop-shadow-lg italic">LB META-UNIVERSE</h1>
                      <p className="text-gray-300 text-sm mb-8 max-w-[280px]">
                        Web 端沉浸模式已啟動。<br/>已接續：<span className="text-land-400 font-bold">「假檢警：權威與緊迫 (Lv.1)」</span>
                      </p>
                      <div className="space-y-3 w-full max-w-xs">
                        <button 
                          onClick={() => setIsIframeActive(true)}
                          className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-bold text-sm shadow-lg border border-white/20 hover:scale-105 transition-transform flex items-center justify-center gap-2"
                        >
                          <Zap size={16} /> 進入 3D 場景 (App 內開)
                        </button>
                        <button onClick={handleReturnToApp} className="w-full py-3 bg-black/40 hover:bg-black/60 rounded-xl text-gray-300 font-bold text-sm backdrop-blur-md border border-white/10 flex items-center justify-center gap-2">
                          <Smartphone size={16} /> 返回手機 App
                        </button>
                      </div>
                   </div>
                 </div>
               )}
             </div>
           )}

          {/* === BROWSER CONTENT: DASHBOARD (UPGRADED UI) === */}
          {launchState === 'dashboard-connected' && (
            <div className="flex-1 bg-slate-950 overflow-y-auto no-scrollbar relative p-5">
               {/* Background Texture */}
               <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

               <div className="relative z-10 max-w-md mx-auto">
                 
                 {/* 1. Header */}
                 <div className="flex justify-between items-start mb-6 pt-2">
                   <div>
                     <h1 className="text-xl font-bold text-white tracking-wide">中控台儀表板</h1>
                     <div className="text-[10px] text-gray-400 font-mono flex items-center gap-2 mt-1">
                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                       RESILIENCE ANALYTICS v3.0
                     </div>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
                      <Users size={16} className="text-gray-400" />
                   </div>
                 </div>

                 {/* 2. Resilience Score Card (Upgraded) */}
                 <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 mb-5 shadow-xl relative overflow-hidden group">
                   {/* Glow Effect */}
                   <div className="absolute top-0 right-0 w-40 h-40 bg-land-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-80"></div>
                   
                   {/* Time Window Switcher */}
                   <div className="flex justify-center mb-4 relative z-10">
                     <div className="bg-slate-800/80 rounded-lg p-0.5 flex gap-1 shadow-inner border border-slate-700/50">
                       {(['7D', '30D', 'ALL'] as const).map((t) => (
                         <button 
                           key={t}
                           onClick={() => setTimeRange(t)}
                           className={`
                             px-4 py-1 rounded-md text-[10px] font-bold transition-all
                             ${timeRange === t 
                               ? 'bg-slate-700 text-white shadow-sm' 
                               : 'text-gray-500 hover:text-gray-300'
                             }
                           `}
                         >
                           {t === '7D' ? '近7天' : t === '30D' ? '近30天' : '全期間'}
                         </button>
                       ))}
                     </div>
                   </div>

                   {/* Score & Trend Row */}
                   <div className="flex justify-between items-end mb-4 relative z-10">
                     <div>
                       <div className="flex items-center gap-2 mb-1">
                         <span className="text-xs text-gray-400 font-medium">語境韌性分數</span>
                         <Info size={12} className="text-gray-600" />
                       </div>
                       <div className="flex items-baseline gap-2">
                         <div className="text-5xl font-black text-white tracking-tight">82</div>
                         <div className="flex items-center text-green-400 text-xs font-bold bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">
                           <TrendingUp size={10} className="mr-1" />
                           +5%
                         </div>
                       </div>
                     </div>
                     
                     {/* Sparkline (Simulated SVG) */}
                     <div className="w-24 h-12 flex items-end pb-1 opacity-80">
                        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,35 C20,32 40,38 60,15 C80,10 90,20 100,5" fill="none" stroke="#14b8a6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                          <path d="M0,35 C20,32 40,38 60,15 C80,10 90,20 100,5 V40 H0 Z" fill="url(#gradient)" stroke="none" />
                          <circle cx="100" cy="5" r="3" fill="#14b8a6" />
                        </svg>
                     </div>
                   </div>

                   {/* Divider */}
                   <div className="h-px w-full bg-slate-800 mb-3"></div>

                   {/* Footer Info */}
                   <div className="space-y-2 relative z-10">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-land-500 rounded-full mt-1.5 shrink-0"></div>
                        <p className="text-[10px] text-gray-400 leading-relaxed">
                          本週提升主要來自<span className="text-gray-300 font-bold mx-0.5">「權威壓力」</span>情境的停損反應改善。
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                         <span>RANKING</span>
                         <span>PR 76 • 前 24% 用戶</span>
                      </div>
                   </div>
                 </div>

                 {/* 3. Persona Card (Actionable Upgrade) */}
                 <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 mb-4 shadow-lg flex flex-col gap-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-land-500 to-slate-800"></div>
                    
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-land-400 border border-slate-700">
                          <Target size={18} />
                        </div>
                        <div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider">Current Persona</div>
                          <div className="text-sm font-bold text-white">單一語境者</div>
                        </div>
                      </div>
                      <div className="text-right">
                         <div className="text-[10px] text-gray-500 uppercase tracking-wider">Next Goal</div>
                         <div className="text-xs font-bold text-land-300 flex items-center justify-end gap-1">
                           融合語境者 <ChevronRight size={12} />
                         </div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                       <div className="flex items-start gap-2 mb-2">
                          <Zap size={12} className="text-yellow-400 mt-0.5 shrink-0" />
                          <span className="text-[11px] text-gray-300 font-medium">建議先練：停損程序（先停、再查、再求助）</span>
                       </div>
                       <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-[10px] text-white font-bold transition-colors flex items-center justify-center gap-1 border border-slate-600">
                          查看我的訓練路徑 <ArrowLeft size={10} className="rotate-180" />
                       </button>
                    </div>
                 </div>

                 {/* 4. Top Signals Card (Chips + Explainer) */}
                 <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 mb-6 shadow-lg relative">
                    <div className="flex justify-between items-center mb-4">
                       <div className="flex items-center gap-2">
                          <AlertTriangle size={14} className="text-orange-400" />
                          <h3 className="text-sm font-bold text-gray-200">Top 風險信號 (近30天)</h3>
                       </div>
                       <button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[9px] text-gray-400 transition-colors border border-slate-700">
                         一鍵拆解
                       </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                       {['權威壓力', '緊迫時間', '保密隔離'].map((sig, i) => (
                         <span key={i} className={`
                           px-2.5 py-1 rounded-md text-[10px] font-bold border
                           ${i === 0 ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-slate-800 text-gray-400 border-slate-700'}
                         `}>
                           {sig}
                         </span>
                       ))}
                    </div>

                    <div className="bg-slate-800/30 rounded-lg p-2.5 flex gap-2">
                       <div className="w-0.5 bg-red-500/50 rounded-full my-1"></div>
                       <p className="text-[10px] text-gray-400 leading-relaxed">
                         當對方語氣強硬並催促<span className="text-gray-300 font-medium">「立刻處理」</span>時，你較容易跳過查證步驟。
                       </p>
                    </div>
                 </div>

                 {/* 5. Recent Tasks (Detailed List) */}
                 <div className="mb-8">
                   <div className="flex justify-between items-center mb-3">
                     <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">近期演練任務</h3>
                     <span className="text-[10px] text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">查看全部</span>
                   </div>
                   
                   <div className="space-y-3">
                     {/* Task 1: Active */}
                     <div className="bg-slate-900/80 border border-land-500/30 p-4 rounded-xl relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-land-500"></div>
                        
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white mb-1">假檢警：權威與緊迫</span>
                            <div className="flex gap-1.5">
                               <span className="px-1.5 py-0.5 bg-blue-500/10 text-blue-400 text-[8px] rounded border border-blue-500/20">情境:假檢警</span>
                               <span className="px-1.5 py-0.5 bg-red-500/10 text-red-400 text-[8px] rounded border border-red-500/20">語勢:權威+緊迫</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-land-400 bg-land-500/10 px-2 py-0.5 rounded-full border border-land-500/20">Lv.1</span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                           <div className="flex-1 mr-4">
                             <div className="flex justify-between text-[9px] text-gray-500 mb-1">
                               <span>PROGRESS</span>
                               <span>45%</span>
                             </div>
                             <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                               <div className="h-full bg-land-500 w-[45%]"></div>
                             </div>
                           </div>
                           <button className="px-3 py-1.5 bg-white text-slate-900 hover:bg-gray-200 rounded-lg text-[10px] font-bold transition-colors">
                             繼續
                           </button>
                        </div>
                     </div>

                     {/* Task 2: Completed */}
                     <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl relative opacity-80 hover:opacity-100 transition-opacity">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-400 mb-1 line-through decoration-gray-600">親友急難：情感操控</span>
                            <div className="flex gap-1.5">
                               <span className="px-1.5 py-0.5 bg-purple-500/10 text-purple-400 text-[8px] rounded border border-purple-500/10">情境:親友急難</span>
                               <span className="px-1.5 py-0.5 bg-orange-500/10 text-orange-400 text-[8px] rounded border border-orange-500/10">語勢:情感+時間</span>
                            </div>
                          </div>
                          <CheckCircle2 size={16} className="text-green-500/50" />
                        </div>
                     </div>
                   </div>
                 </div>

                 {/* 6. Footer Action */}
                 <div className="pb-8">
                   <button 
                    onClick={handleReturnToApp} 
                    className="w-full py-3.5 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-gray-400 font-medium text-xs transition-all flex items-center justify-center gap-2 border border-slate-700/50 group"
                   >
                     <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                     返回首頁
                   </button>
                 </div>

               </div>
            </div>
          )}
        </div>
      )}

      {/* 3. Main App View (Standard Metaverse) - ONLY RENDER IF NOT IN DASHBOARD MODE */}
      {!isDashboardMode && (
        <div className={`absolute inset-0 transition-transform duration-500 ${launchState !== 'idle' ? 'scale-95 opacity-50 blur-sm pointer-events-none' : ''}`}>
          
          {/* Background & Effects... */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-land-500/20 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

          {/* --- Header UI --- */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20 bg-gradient-to-b from-slate-900/90 to-transparent">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-sm font-bold"
            >
              <ArrowLeft size={16} />
              返回現實
            </button>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-land-400 font-mono text-xs font-bold tracking-widest animate-pulse">
                <div className="w-2 h-2 bg-land-400 rounded-full"></div>
                SYSTEM ONLINE
              </div>
              <h2 className="text-xl font-black italic tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                META-CONTEXT
              </h2>
            </div>
          </div>

          {/* --- Central Content (The Map) --- */}
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <svg className="absolute inset-0 w-full h-full z-0 opacity-40">
               <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="#14b8a6" strokeWidth="1" strokeDasharray="5,5" />
               <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="#14b8a6" strokeWidth="1" />
               <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="#14b8a6" strokeWidth="2" strokeOpacity="0.5" />
            </svg>

            {/* Core Node */}
            <div className="relative z-10 flex flex-col items-center pointer-events-auto">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-land-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-2 border border-land-400/50 rounded-full border-t-transparent animate-[spin_4s_linear_infinite_reverse]"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-land-600 to-slate-800 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.6)] border border-land-300 relative overflow-hidden">
                   <BrainCircuit size={32} className="text-white relative z-10" />
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                </div>
                <div className="absolute -bottom-8 bg-slate-800/80 px-3 py-1 rounded text-[10px] border border-land-500/50 text-land-300 font-mono tracking-wider backdrop-blur-sm">
                  CORE ENGINE
                </div>
              </div>
            </div>

            {/* Node 1 */}
            <div className="absolute top-[25%] left-[10%] z-10 pointer-events-auto cursor-pointer group">
               <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-110">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl border border-blue-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:bg-blue-900/50 transition-colors">
                    <Shield size={24} className="text-blue-400" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-300 bg-slate-900/50 px-2 rounded">防詐實驗室</span>
               </div>
            </div>

            {/* Node 2 */}
            <div className="absolute top-[30%] right-[10%] z-10 pointer-events-auto cursor-pointer group">
               <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-110">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl border border-purple-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:bg-purple-900/50 transition-colors">
                    <Users size={24} className="text-purple-400" />
                  </div>
                  <span className="text-[10px] font-bold text-purple-300 bg-slate-900/50 px-2 rounded">角色劇院</span>
               </div>
            </div>

            {/* Current Training Task Card */}
            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-10 pointer-events-auto cursor-pointer w-72 group">
               <div className="bg-slate-800/90 border border-land-500/50 rounded-2xl p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(20,184,166,0.2)] group-hover:border-land-400 transition-all relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLaunchMetaverse();
                    }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-white/20 hover:scale-110 active:scale-95 transition-all z-20 group/btn"
                  >
                    <ExternalLink size={16} className="group-hover/btn:animate-pulse" />
                  </button>
                  <div className="absolute -top-8 -right-4 bg-blue-600/90 text-white text-[9px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                     開啟沉浸模式
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                       <span className="text-xs font-bold text-gray-300">目前演練任務</span>
                    </div>
                    <span className="text-[10px] text-land-400 font-mono">Lv.1</span>
                  </div>
                  <h3 className="text-white font-bold mb-1">假檢警：權威與緊迫</h3>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                     <div className="bg-land-500 h-full w-[45%]"></div>
                  </div>
                  <p className="text-[9px] text-gray-400 mt-1 text-right font-mono">SYNC: 45%</p>
               </div>
            </div>

            <div className="absolute top-[20%] left-[30%] text-white/10 text-[8px] font-mono animate-bounce">010110</div>
            <div className="absolute bottom-[40%] right-[20%] text-white/10 text-[8px] font-mono animate-pulse">AUTH_REQ</div>
          </div>

          {/* HUD Footer */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
             <div className="flex gap-4">
                <div className="flex flex-col">
                   <span className="text-[9px] text-gray-500 uppercase">Resilience Score</span>
                   <div className="text-2xl font-mono font-bold text-land-400 flex items-baseline gap-1">
                     82 <span className="text-xs text-gray-500">/ 100</span>
                   </div>
                </div>
             </div>
             
             <div className="flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/5">
                <Activity size={14} className="text-green-400" />
                <span className="text-[10px] text-gray-300">Neural Sync Stable</span>
             </div>
          </div>
        </div>
      )}

    </div>
  );
};