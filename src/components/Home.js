import { MagicBento } from '../utils/MagicBento.js';
import { TornPaperEffect } from '../utils/TornPaperEffect.js';
import { initParticles } from '../utils/Particle.js';
import { ElectricBorder } from '../utils/ElectricBorder.js';

export function renderHome() {
    return `
    <div id="home-page" class="relative min-h-screen w-full bg-black overflow-hidden scroll-smooth" style="min-height: 100vh; width: 100%;">
      
      <!-- BACKGROUND: Torn Paper Effect Container -->
      <div id="torn-paper-background" class="fixed inset-0 z-0 opacity-60 pointer-events-none"></div>
      
      <!-- BACKGROUND: Magic Bento Grid (Revolving) -->
      <div id="magic-bento-background" class="fixed inset-0 z-0 opacity-40 pointer-events-none perspective-1000 overflow-visible">
         <div class="absolute inset-0 flex items-center justify-center transform-style-3d animate-slow-rotate">
             <!-- Generating abstract bento shapes for background -->
             <div class="magic-bento-card absolute w-64 h-64 bg-st-red/10 border border-st-red/20 rounded-xl" style="top: 10%; left: 20%; transform: translateZ(-100px);"></div>
             <div class="magic-bento-card absolute w-80 h-56 bg-st-red/5 border border-white/10 rounded-xl" style="top: 60%; left: 70%; transform: translateZ(50px);"></div>
             <div class="magic-bento-card absolute w-48 h-48 bg-st-red/10 border border-st-red/30 rounded-xl" style="top: 30%; left: 80%; transform: translateZ(-200px) rotate(45deg);"></div>
             <div class="magic-bento-card absolute w-96 h-64 bg-st-red/5 border border-white/10 rounded-xl" style="top: 70%; left: 10%; transform: translateZ(100px);"></div>
             <div class="magic-bento-card absolute w-56 h-56 bg-st-red/5 border border-white/5 rounded-xl" style="top: 15%; left: 50%; transform: translateZ(0px);"></div>
             <div class="magic-bento-card absolute w-72 h-40 bg-st-red/10 border border-st-red/20 rounded-xl" style="bottom: 20%; right: 40%; transform: translateZ(-50px);"></div>
         </div>
         <!-- Fog/Lights Overlay -->
         <div class="absolute inset-0 bg-[url('/assets/bg-lights.png')] bg-cover bg-center mix-blend-screen opacity-50"></div>
      </div>

      <!-- Ultra-Innovative Holographic Navbar -->
      <nav class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <div id="innovative-navbar" class="relative bg-gradient-to-r from-black/70 via-black/60 to-black/70 backdrop-blur-2xl border-2 border-st-red/30 rounded-full px-8 py-4 flex justify-between items-center shadow-[0_0_30px_rgba(255,0,51,0.3),inset_0_0_30px_rgba(255,0,51,0.05)] hover:shadow-[0_0_60px_rgba(255,0,51,0.6),inset_0_0_50px_rgba(255,0,51,0.1)] transition-all duration-700 overflow-hidden group/nav" style="box-shadow: 0 0 30px rgba(255,0,51,0.3), inset 0 0 30px rgba(255,0,51,0.05), 0 8px 32px rgba(0,0,0,0.5);">
             <!-- Holographic Grid Pattern -->
             <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,0,51,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.3) 1px, transparent 1px); background-size: 15px 15px; animation: nav-grid-move 15s linear infinite;"></div>
             
             <!-- Rotating Holographic Border -->
             <div class="absolute inset-0 rounded-full opacity-60" style="background: conic-gradient(from 0deg, transparent, rgba(255,0,51,0.4), transparent, rgba(255,0,51,0.4), transparent); animation: nav-rotate-border 6s linear infinite; pointer-events: none; border-radius: 9999px; -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px)); mask: radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px));"></div>
             
             <!-- Pulsing Core Glow -->
             <div class="absolute inset-0 bg-radial-gradient from-st-red/20 via-st-red/5 to-transparent rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 animate-pulse-fast"></div>
             
             <!-- Premium Glow Effect -->
             <div class="absolute inset-0 bg-gradient-to-r from-st-red/0 via-st-red/15 to-st-red/0 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 blur-2xl"></div>
             
             <!-- Animated Border Glow -->
             <div class="absolute inset-0 rounded-full border-2 border-transparent group-hover/nav:border-st-red/70 transition-all duration-700" style="box-shadow: 0 0 40px rgba(255,0,51,0.4), inset 0 0 20px rgba(255,0,51,0.2);"></div>
             
             <!-- Shimmer Effect -->
             <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/nav:opacity-100 transform -skew-x-12 translate-x-[-200%] group-hover/nav:translate-x-[200%] transition-transform duration-1500 ease-in-out"></div>
             
             <!-- Glitch Border Effect - Multiple Layers -->
             <div class="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-st-red to-transparent opacity-80 group-hover/nav:opacity-100 group-hover/nav:h-[3px] transition-all duration-500" style="box-shadow: 0 0 10px rgba(255,0,51,0.8);"></div>
             <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-st-red/50 to-transparent opacity-50 group-hover/nav:opacity-100 transition-all duration-500"></div>
             
             <!-- Noise Texture Overlay -->
             <div class="absolute inset-0 bg-[url('/assets/noise.png')] opacity-5 mix-blend-overlay rounded-full"></div>
             
             <div class="flex items-center space-x-3 group cursor-pointer relative z-10">
                <div class="relative w-10 h-10 flex items-center justify-center">
                    <div class="absolute inset-0 bg-st-red blur-lg opacity-50 group-hover:opacity-100 group-hover:blur-xl transition-all duration-300"></div>
                    <div class="absolute inset-0 bg-st-red/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                    <div class="relative z-10 w-10 h-10 bg-black border-2 border-st-red rounded flex items-center justify-center font-bold text-st-red rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,0,51,0.8)]">I</div>
                </div>
                <span class="text-xl font-bold tracking-[0.2em] text-white group-hover:text-st-red transition-all duration-300 whitespace-nowrap group-hover:drop-shadow-[0_0_10px_rgba(255,0,51,0.8)]">INTELLINA</span>
             </div>

             <ul class="hidden md:flex items-center space-x-6 relative z-10">
                 <li><a href="#" class="nav-link relative text-sm font-bold tracking-widest text-gray-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg group/link overflow-hidden">
                    <span class="relative z-10">HOME</span>
                    <!-- Animated Underline -->
                    <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-st-red via-white to-st-red group-hover/link:w-full transition-all duration-500 ease-out" style="box-shadow: 0 0 10px rgba(255,0,51,0.8);"></span>
                    <!-- Background Glow -->
                    <span class="absolute inset-0 bg-gradient-to-r from-st-red/10 via-st-red/20 to-st-red/10 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
                    <!-- Corner Accents -->
                    <span class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-st-red opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                    <span class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-st-red opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                 </a></li>
                 <li><a href="#" class="nav-link relative text-sm font-bold tracking-widest text-gray-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg group/link overflow-hidden">
                    <span class="relative z-10">ABOUT</span>
                    <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-st-red via-white to-st-red group-hover/link:w-full transition-all duration-500 ease-out" style="box-shadow: 0 0 10px rgba(255,0,51,0.8);"></span>
                    <span class="absolute inset-0 bg-gradient-to-r from-st-red/10 via-st-red/20 to-st-red/10 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
                    <span class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-st-red opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                    <span class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-st-red opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                 </a></li>
                 <li><a href="#" class="nav-link relative text-sm font-bold tracking-widest text-gray-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg group/link overflow-hidden">
                    <span class="relative z-10">EVENTS</span>
                    <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-st-red via-white to-st-red group-hover/link:w-full transition-all duration-500 ease-out" style="box-shadow: 0 0 10px rgba(255,0,51,0.8);"></span>
                    <span class="absolute inset-0 bg-gradient-to-r from-st-red/10 via-st-red/20 to-st-red/10 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
                    <span class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-st-red opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                    <span class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-st-red opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                 </a></li>
                 <li><a href="#" class="nav-link relative text-sm font-bold tracking-widest text-gray-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg group/link overflow-hidden">
                    <span class="relative z-10">TIMELINE</span>
                    <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-st-red via-white to-st-red group-hover/link:w-full transition-all duration-500 ease-out" style="box-shadow: 0 0 10px rgba(255,0,51,0.8);"></span>
                    <span class="absolute inset-0 bg-gradient-to-r from-st-red/10 via-st-red/20 to-st-red/10 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
                    <span class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-st-red opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                    <span class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-st-red opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                 </a></li>
             </ul>

             <button class="px-8 py-3 bg-gradient-to-r from-st-red via-red-600 to-st-red text-white font-bold text-sm tracking-wider rounded-full hover:scale-110 hover:shadow-[0_0_40px_rgba(255,0,51,1),inset_0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 shadow-[0_4px_20px_rgba(255,0,51,0.6)] relative z-10 overflow-hidden group/btn" style="background: linear-gradient(135deg, #ff0033 0%, #cc0026 50%, #ff0033 100%); background-size: 200% 200%; animation: btn-gradient-shift 3s ease infinite;">
                 <!-- Animated Gradient Background -->
                 <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover/btn:opacity-100 transform -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                 <!-- Pulsing Ring -->
                 <div class="absolute inset-0 rounded-full border-2 border-white/50 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-125 transition-all duration-500 animate-ping"></div>
                 <!-- Inner Glow -->
                 <div class="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                 <span class="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">CONTACT</span>
             </button>
        </div>
      </nav>

      <!-- Main Content Split -->
      <div class="relative z-10 container mx-auto px-6 pt-32 pb-12 min-h-screen flex flex-col justify-center pointer-events-none">
        <!-- Pointer events re-enabled on interactive children -->
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <!-- Left Column: Title & Info -->
            <div class="w-full lg:w-1/2 space-y-10 animate-slide-up opacity-0 pointer-events-auto" style="animation-fill-mode: forwards; animation-delay: 0.2s;">
                <div class="relative overflow-visible" style="min-width: 100%;">
                    <h1 class="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 tracking-tighter filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap overflow-visible" style="padding-right: 120px; display: inline-block; width: auto;">
                        INTELLINA
                    </h1>
                    <h2 class="text-5xl md:text-7xl font-mono text-st-red absolute -bottom-4 right-0 md:right-12 mix-blend-screen animate-pulse-fast transform -rotate-2 whitespace-nowrap" style="pointer-events: none;">
                        2K26
                    </h2>
                </div>
                
                <p class="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed border-l-4 border-st-red pl-6">
                    Enter the portal to the ultimate technical symposium. <br/>
                    <span class="text-st-red font-bold">Unleash your potential</span> in the Upside Down.
                </p>

                <!-- Info Grid (Static/Interactive cards, NOT Bento bg) -->
                <div id="foreground-bento-grid" class="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000">
                     <!-- Date -->
                     <div id="date-card" class="magic-bento-card relative bg-black/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl group cursor-pointer overflow-visible transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02]">
                        <!-- Electric border will be injected here on hover -->
                        
                        <!-- Subtle shimmer effect -->
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out rounded-2xl"></div>
                        
                        <div class="relative z-10">
                            <h3 class="text-4xl font-bold text-white mb-2 group-hover:text-st-red transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(180,0,30,0.6)] transform group-hover:scale-105 group-hover:translate-x-1">MARCH 6 & 7</h3>
                            <p class="text-gray-400 text-sm tracking-widest uppercase group-hover:text-gray-200 transition-colors duration-500 group-hover:translate-x-1">2026</p>
                        </div>
                     </div>
                     <!-- Location -->
                     <div id="location-card" class="magic-bento-card relative bg-black/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl group cursor-pointer overflow-visible transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02]">
                        <!-- Electric border will be injected here on hover -->
                        
                        <!-- Subtle shimmer effect -->
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out rounded-2xl"></div>
                        
                        <div class="relative z-10">
                            <h3 class="text-4xl font-bold text-white mb-2 group-hover:text-st-red transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(180,0,30,0.6)] transform group-hover:scale-105 group-hover:translate-x-1">C.I.T.</h3>
                            <p class="text-gray-400 text-sm tracking-widest uppercase group-hover:text-gray-200 transition-colors duration-500 group-hover:translate-x-1">Coimbatore</p>
                        </div>
                     </div>
                     <!-- Register -->
                     <div id="register-card" class="magic-bento-card col-span-1 md:col-span-2 relative bg-gradient-to-r from-st-red/10 to-transparent border border-st-red/30 p-8 rounded-2xl group cursor-pointer overflow-visible transition-all duration-700 ease-out hover:scale-[1.02]">
                        <!-- Electric border will be injected here on hover -->
                        
                        <!-- Shimmer sweep (subtle) -->
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1200 ease-in-out rounded-2xl"></div>
                        <div class="relative z-10 flex justify-between items-center px-2">
                            <div>
                                <h3 class="text-3xl font-extrabold text-white group-hover:text-st-red transition-all duration-500 drop-shadow-md group-hover:drop-shadow-[0_0_20px_rgba(180,0,30,0.8)] transform group-hover:scale-105 group-hover:translate-x-2">REGISTER NOW</h3>
                                <p class="text-gray-300 text-sm mt-2 tracking-wider group-hover:text-white transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(180,0,30,0.4)] group-hover:translate-x-2">Limited Seats Available • <span class="text-st-red group-hover:text-white transition-colors duration-500">Join the Upside Down</span></p>
                            </div>
                            <div class="w-12 h-12 rounded-full border-2 border-st-red/50 flex items-center justify-center group-hover:bg-st-red group-hover:text-black group-hover:border-st-red group-hover:shadow-[0_0_20px_rgba(180,0,30,0.6)] transition-all duration-500 transform group-hover:rotate-90 group-hover:scale-110 group-hover:-translate-x-2">
                                <span class="text-2xl transform group-hover:scale-125 transition-transform duration-500">↗</span>
                            </div>
                        </div>
                     </div>
                </div>

                <div class="flex gap-4">
                     <button class="px-8 py-4 bg-transparent border-2 border-st-red text-st-red font-bold text-xl rounded hover:bg-st-red hover:text-black transition-colors duration-300">
                        EXPLORE EVENTS
                     </button>
                </div>
            </div>

            <!-- Right Column: Innovative Countdown -->
            <div class="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-up opacity-0 pointer-events-auto" style="animation-fill-mode: forwards; animation-delay: 0.4s;">
                <div class="relative w-full max-w-lg">
                    <!-- Holographic Rings with Multiple Layers -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-2 border-st-red/15 rounded-full animate-spin-slow pointer-events-none" style="box-shadow: 0 0 40px rgba(255,0,51,0.2);"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-st-red/25 rounded-full animate-spin-reverse pointer-events-none"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-st-red/20 rounded-full animate-spin-slow pointer-events-none" style="animation-duration: 20s;"></div>

                    <!-- Main Countdown Container -->
                    <div class="bg-gradient-to-br from-black/90 via-black/85 to-black/90 backdrop-blur-xl border-2 border-st-red/60 p-8 rounded-3xl shadow-[0_0_80px_rgba(255,0,51,0.5),inset_0_0_60px_rgba(255,0,51,0.1)] relative overflow-hidden group/countdown">
                        <!-- Animated Grid Background -->
                        <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(255,0,51,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.1) 1px, transparent 1px); background-size: 20px 20px; animation: grid-move 20s linear infinite;"></div>
                        
                        <!-- Holographic Scan Line -->
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-st-red/10 to-transparent opacity-0 group-hover/countdown:opacity-100 transition-opacity duration-500" style="animation: scan-line 3s linear infinite;"></div>
                        
                        <!-- Noise Texture -->
                        <div class="absolute inset-0 bg-[url('/assets/noise.png')] opacity-5 mix-blend-overlay"></div>
                        
                        <!-- Status Header -->
                        <div class="flex items-center justify-between mb-10 border-b-2 border-st-red/30 pb-4 relative z-10">
                            <div class="flex items-center gap-3">
                                <div class="relative">
                                    <div class="w-3 h-3 rounded-full bg-st-red animate-pulse"></div>
                                    <div class="absolute inset-0 w-3 h-3 rounded-full bg-st-red animate-ping"></div>
                                </div>
                                <span class="text-xs uppercase tracking-[0.3em] text-st-red font-bold" style="text-shadow: 0 0 10px rgba(255,0,51,0.8);">SYSTEM ACTIVE</span>
                            </div>
                            <div class="flex gap-2">
                                <div class="w-2 h-2 rounded-full bg-st-red/50"></div>
                                <div class="w-2 h-2 rounded-full bg-st-red"></div>
                                <div class="w-2 h-2 rounded-full bg-st-red/50"></div>
                            </div>
                        </div>

                        <!-- Innovative Countdown Grid -->
                        <div class="grid grid-cols-2 gap-5 relative z-10">
                            <!-- Days -->
                            <div class="countdown-card group/item relative p-6 bg-gradient-to-br from-black/60 to-black/40 rounded-xl border-2 border-st-red/30 hover:border-st-red transition-all duration-500 overflow-hidden" style="box-shadow: 0 0 20px rgba(180,0,30,0.15), inset 0 0 15px rgba(180,0,30,0.04);">
                                <div class="absolute inset-0 bg-gradient-to-br from-st-red/0 via-st-red/10 to-st-red/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-st-red to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                                <div class="relative z-10">
                                    <span id="days" class="terminal-number block text-6xl font-mono font-black text-white tracking-tighter mb-2 group-hover/item:text-st-red transition-colors duration-500" style="text-shadow: 0 0 15px rgba(255,255,255,0.2), 0 0 30px rgba(180,0,30,0.3);">00</span>
                                    <span class="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-bold group-hover/item:text-st-red/80 transition-colors duration-500">SIGNAL SYNC</span>
                                </div>
                            </div>
                            
                            <!-- Hours -->
                            <div class="countdown-card group/item relative p-6 bg-gradient-to-br from-black/60 to-black/40 rounded-xl border-2 border-st-red/30 hover:border-st-red transition-all duration-500 overflow-hidden" style="box-shadow: 0 0 20px rgba(180,0,30,0.15), inset 0 0 15px rgba(180,0,30,0.04);">
                                <div class="absolute inset-0 bg-gradient-to-br from-st-red/0 via-st-red/10 to-st-red/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-st-red to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                                <div class="relative z-10">
                                    <span id="hours" class="terminal-number block text-6xl font-mono font-black text-white tracking-tighter mb-2 group-hover/item:text-st-red transition-colors duration-500" style="text-shadow: 0 0 15px rgba(255,255,255,0.2), 0 0 30px rgba(180,0,30,0.3);">00</span>
                                    <span class="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-bold group-hover/item:text-st-red/80 transition-colors duration-500">INTERFERENCE LEVEL</span>
                                </div>
                            </div>
                            
                            <!-- Minutes -->
                            <div class="countdown-card group/item relative p-6 bg-gradient-to-br from-black/60 to-black/40 rounded-xl border-2 border-st-red/30 hover:border-st-red transition-all duration-500 overflow-hidden" style="box-shadow: 0 0 20px rgba(180,0,30,0.15), inset 0 0 15px rgba(180,0,30,0.04);">
                                <div class="absolute inset-0 bg-gradient-to-br from-st-red/0 via-st-red/10 to-st-red/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-st-red to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                                <div class="relative z-10">
                                    <span id="minutes" class="terminal-number block text-6xl font-mono font-black text-white tracking-tighter mb-2 group-hover/item:text-st-red transition-colors duration-500" style="text-shadow: 0 0 15px rgba(255,255,255,0.2), 0 0 30px rgba(180,0,30,0.3);">00</span>
                                    <span class="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-bold group-hover/item:text-st-red/80 transition-colors duration-500">SIGNAL SYNC</span>
                                </div>
                            </div>
                            
                            <!-- Seconds - Special Highlight -->
                            <div class="countdown-card group/item relative p-6 bg-gradient-to-br from-st-red/20 via-st-red/10 to-st-red/20 rounded-xl border-2 border-st-red/60 hover:border-st-red transition-all duration-500 overflow-hidden" style="box-shadow: 0 0 35px rgba(180,0,30,0.4), inset 0 0 20px rgba(180,0,30,0.15);">
                                <div class="absolute inset-0 bg-gradient-to-br from-st-red/30 via-st-red/20 to-st-red/30 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 animate-pulse-fast"></div>
                                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-st-red to-transparent opacity-100"></div>
                                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/item:opacity-100 transform -skew-x-12 translate-x-[-200%] group-hover/item:translate-x-[200%] transition-transform duration-1000"></div>
                                <div class="relative z-10">
                                    <span id="seconds" class="terminal-number block text-6xl font-mono font-black text-st-red tracking-tighter mb-2 group-hover/item:scale-110 transition-transform duration-500" style="text-shadow: 0 0 20px rgba(180,0,30,0.6), 0 0 40px rgba(180,0,30,0.35);">00</span>
                                    <span class="text-[11px] uppercase tracking-[0.3em] text-st-red font-bold" style="text-shadow: 0 0 8px rgba(180,0,30,0.4);">INTERFERENCE LEVEL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>>
        </div>
      </div>
    </div>
  `;
}

export function initHome() {
    // 0. Initialize Particles Background
    const homePage = document.getElementById('home-page');
    if (homePage) {
        initParticles(homePage);
    }

    // 1. Initialize Torn Paper Effect on BACKGROUND
    const tornPaperContainer = document.getElementById('torn-paper-background');
    if (tornPaperContainer) {
        new TornPaperEffect(tornPaperContainer, {
            particleCount: 50,
            glowColor: '255, 255, 255', // White color
            enableUpsideDown: true,
            speed: 0.3 // Slower speed
        });
    }

    // 2. Initialize Magic Bento Effect on BACKGROUND
    // const bgContainer = document.getElementById('magic-bento-background');
    // if (bgContainer) {
    //     new MagicBento(bgContainer, {
    //         spotlightRadius: 600,
    //         glowColor: '255, 0, 51',
    //         enableParticles: false,
    //         idleAnimation: true,
    //         backgroundMode: true, // Auto revolve
    //         enableDotGrid: true
    //     });
    // }

    // 3. Initialize Magic Bento Effect on FOREGROUND CARDS (Premium Hover - NO PARTICLES)
    const fgContainer = document.getElementById('foreground-bento-grid');
    if (fgContainer) {
        new MagicBento(fgContainer, {
            spotlightRadius: 300, // Focused spotlight
            glowColor: '255, 0, 51',
            enableParticles: false, // NO bubble/particle effect
            idleAnimation: false, // Static until hover
            backgroundMode: false, // Enable full interactive hover physics
            enableDotGrid: false
        });
    }

    // 4. Initialize Electric Border on Register Card (Hover-activated)
    const registerCard = document.getElementById('register-card');
    if (registerCard) {
        let electricBorder = null;
        let isHovering = false;

        registerCard.addEventListener('mouseenter', () => {
            isHovering = true;
            // Delay to create smooth transition
            setTimeout(() => {
                if (isHovering && !electricBorder) {
                    electricBorder = new ElectricBorder(registerCard, {
                        color: '#ff0033',
                        speed: 1,
                        chaos: 0.12,
                        borderRadius: 16,
                        borderOffset: 40,
                        displacement: 50
                    });
                }
            }, 100);
        });

        registerCard.addEventListener('mouseleave', () => {
            isHovering = false;
            // Delay destruction for smooth exit
            setTimeout(() => {
                if (!isHovering && electricBorder) {
                    electricBorder.destroy();
                    electricBorder = null;
                }
            }, 300);
        });
    }

    // 5. Initialize Electric Border on Date Card (Hover-activated)
    const dateCard = document.getElementById('date-card');
    if (dateCard) {
        let electricBorder = null;
        let isHovering = false;

        dateCard.addEventListener('mouseenter', () => {
            isHovering = true;
            setTimeout(() => {
                if (isHovering && !electricBorder) {
                    electricBorder = new ElectricBorder(dateCard, {
                        color: '#ff0033',
                        speed: 1,
                        chaos: 0.12,
                        borderRadius: 16,
                        borderOffset: 40,
                        displacement: 50
                    });
                }
            }, 100);
        });

        dateCard.addEventListener('mouseleave', () => {
            isHovering = false;
            setTimeout(() => {
                if (!isHovering && electricBorder) {
                    electricBorder.destroy();
                    electricBorder = null;
                }
            }, 300);
        });
    }

    // 6. Initialize Electric Border on Location Card (Hover-activated)
    const locationCard = document.getElementById('location-card');
    if (locationCard) {
        let electricBorder = null;
        let isHovering = false;

        locationCard.addEventListener('mouseenter', () => {
            isHovering = true;
            setTimeout(() => {
                if (isHovering && !electricBorder) {
                    electricBorder = new ElectricBorder(locationCard, {
                        color: '#ff0033',
                        speed: 1,
                        chaos: 0.12,
                        borderRadius: 16,
                        borderOffset: 40,
                        displacement: 50
                    });
                }
            }, 100);
        });

        locationCard.addEventListener('mouseleave', () => {
            isHovering = false;
            setTimeout(() => {
                if (!isHovering && electricBorder) {
                    electricBorder.destroy();
                    electricBorder = null;
                }
            }, 300);
        });
    }


    // Countdown Logic -> Date: March 6, 2026
    const targetDate = new Date('March 6, 2026 09:00:00').getTime();

    // Lab Terminal Glitch Effects
    let previousValues = { days: null, hours: null, minutes: null, seconds: null };

    // Function to trigger glitch effect on a number element
    function triggerGlitch(element) {
        if (!element) return;
        element.classList.add('glitch');
        setTimeout(() => element.classList.remove('glitch'), 300);
    }

    // Function to create random static line
    function createStaticLine(parentElement) {
        if (!parentElement) return;
        const staticLine = document.createElement('div');
        staticLine.className = 'static-line';
        staticLine.style.top = `${Math.random() * 100}%`;
        parentElement.appendChild(staticLine);
        setTimeout(() => staticLine.remove(), 200);
    }

    // Random static line appearance (every 3-8 seconds)
    function scheduleRandomStatic() {
        const countdownCards = document.querySelectorAll('.countdown-card');
        if (countdownCards.length > 0) {
            const randomCard = countdownCards[Math.floor(Math.random() * countdownCards.length)];
            createStaticLine(randomCard);
        }
        const nextDelay = 3000 + Math.random() * 5000; // 3-8 seconds
        setTimeout(scheduleRandomStatic, nextDelay);
    }

    // Start random static effects
    setTimeout(scheduleRandomStatic, 2000);

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('days').innerText = "00";
            return; // Event started
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) {
            const newValues = {
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0')
            };

            // Update values and trigger glitch on change
            if (previousValues.days !== newValues.days) {
                daysEl.innerText = newValues.days;
                triggerGlitch(daysEl);
            }
            if (previousValues.hours !== newValues.hours) {
                hoursEl.innerText = newValues.hours;
                triggerGlitch(hoursEl);
            }
            if (previousValues.minutes !== newValues.minutes) {
                minutesEl.innerText = newValues.minutes;
                triggerGlitch(minutesEl);
            }
            if (previousValues.seconds !== newValues.seconds) {
                secondsEl.innerText = newValues.seconds;
                // Subtle glitch on seconds (20% chance to make it less aggressive)
                if (Math.random() > 0.8) {
                    triggerGlitch(secondsEl);
                }
            }

            previousValues = newValues;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}
