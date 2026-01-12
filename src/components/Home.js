import { MagicBento } from '../utils/MagicBento.js';

export function renderHome() {
    return `
    <div id="home-page" class="relative min-h-screen w-full bg-black overflow-hidden scroll-smooth">
      
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

      <!-- Holographic Navbar -->
      <nav class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <div class="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex justify-between items-center shadow-[0_0_20px_rgba(255,0,51,0.2)] hover:shadow-[0_0_30px_rgba(255,0,51,0.4)] transition-all duration-500 overflow-hidden">
             <!-- Glitch Border Effect -->
             <div class="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-st-red to-transparent opacity-70"></div>
             
             <div class="flex items-center space-x-3 group cursor-pointer">
                <div class="relative w-10 h-10 flex items-center justify-center">
                    <div class="absolute inset-0 bg-st-red blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative z-10 w-10 h-10 bg-black border-2 border-st-red rounded flex items-center justify-center font-bold text-st-red rotate-3 group-hover:rotate-0 transition-transform duration-300">I</div>
                </div>
                <span class="text-xl font-bold tracking-[0.2em] text-white group-hover:text-st-red transition-colors duration-300">INTELLINA</span>
             </div>

             <ul class="hidden md:flex items-center space-x-8">
                 <li><a href="#" class="nav-link relative text-sm font-bold tracking-widest text-gray-300 hover:text-white transition-colors py-2 group">
                    HOME
                    <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-st-red group-hover:w-full transition-all duration-300 ease-out"></span>
                 </a></li>
                 <li><a href="#" class="nav-link relative text-sm font-bold tracking-widest text-gray-300 hover:text-white transition-colors py-2 group">
                    ABOUT
                    <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-st-red group-hover:w-full transition-all duration-300 ease-out"></span>
                 </a></li>
                 <li><a href="#" class="nav-link relative text-sm font-bold tracking-widest text-gray-300 hover:text-white transition-colors py-2 group">
                    EVENTS
                    <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-st-red group-hover:w-full transition-all duration-300 ease-out"></span>
                 </a></li>
                 <li><a href="#" class="nav-link relative text-sm font-bold tracking-widest text-gray-300 hover:text-white transition-colors py-2 group">
                    TIMELINE
                    <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-st-red group-hover:w-full transition-all duration-300 ease-out"></span>
                 </a></li>
             </ul>

             <button class="px-6 py-2 bg-gradient-to-r from-st-red to-red-700 text-white font-bold text-sm tracking-wider rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_4px_15px_rgba(255,0,51,0.5)]">
                 CONTACT
             </button>
        </div>
      </nav>

      <!-- Main Content Split -->
      <div class="relative z-10 container mx-auto px-6 pt-32 pb-12 min-h-screen flex flex-col justify-center pointer-events-none">
        <!-- Pointer events re-enabled on interactive children -->
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <!-- Left Column: Title & Info -->
            <div class="w-full lg:w-1/2 space-y-10 animate-slide-up opacity-0 pointer-events-auto" style="animation-fill-mode: forwards; animation-delay: 0.2s;">
                <div class="relative">
                    <h1 class="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 tracking-tighter filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        INTELLINA
                    </h1>
                    <h2 class="text-5xl md:text-7xl font-mono text-st-red absolute -bottom-4 right-0 md:right-12 mix-blend-screen animate-pulse-fast transform -rotate-2">
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
                     <div class="magic-bento-card relative bg-black/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl group hover:border-st-red/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,0,51,0.2)] hover:-translate-y-2 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-st-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="relative z-10">
                            <h3 class="text-4xl font-bold text-white mb-2 group-hover:text-st-red transition-colors">MARCH 6 & 7</h3>
                            <p class="text-gray-400 text-sm tracking-widest uppercase">2026</p>
                        </div>
                     </div>
                     <!-- Location -->
                     <div class="magic-bento-card relative bg-black/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl group hover:border-st-red/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,0,51,0.2)] hover:-translate-y-2 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-st-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="relative z-10">
                            <h3 class="text-4xl font-bold text-white mb-2 group-hover:text-st-red transition-colors">C.I.T.</h3>
                            <p class="text-gray-400 text-sm tracking-widest uppercase">Coimbatore</p>
                        </div>
                     </div>
                     <!-- Register -->
                     <div class="magic-bento-card col-span-1 md:col-span-2 relative bg-gradient-to-r from-st-red/10 to-transparent border border-st-red/30 p-8 rounded-2xl group hover:border-st-red transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,0,51,0.4)] hover:scale-[1.02] cursor-pointer overflow-hidden">
                        <div class="absolute inset-0 bg-st-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="relative z-10 flex justify-between items-center px-2">
                            <div>
                                <h3 class="text-3xl font-extrabold text-white group-hover:text-st-red transition-colors drop-shadow-md">REGISTER NOW</h3>
                                <p class="text-gray-300 text-sm mt-2 tracking-wider group-hover:text-white transition-colors">Limited Seats Available • <span class="text-st-red">Join the Upside Down</span></p>
                            </div>
                            <div class="w-12 h-12 rounded-full border border-st-red/50 flex items-center justify-center group-hover:bg-st-red group-hover:text-black transition-all duration-500 transform group-hover:rotate-45">
                                <span class="text-2xl">↗</span>
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

            <!-- Right Column: Interactive Countdown -->
            <div class="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-up opacity-0 pointer-events-auto" style="animation-fill-mode: forwards; animation-delay: 0.4s;">
                <div class="relative w-full max-w-md">
                    <!-- Rotating Rings -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-st-red/20 rounded-full animate-spin-slow pointer-events-none"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-dashed border-st-red/30 rounded-full animate-spin-reverse pointer-events-none"></div>

                    <div class="bg-black/80 backdrop-blur-md border border-st-red/50 p-8 rounded-2xl shadow-[0_0_50px_rgba(255,0,51,0.3)] relative overflow-hidden">
                        <div class="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay"></div>
                        <div class="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                            <span class="text-xs uppercase tracking-[0.2em] text-st-red animate-pulse">System Status: ONLINE</span>
                            <div class="flex gap-1">
                                <div class="w-2 h-2 rounded-full bg-st-red"></div>
                                <div class="w-2 h-2 rounded-full bg-st-red animate-ping"></div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4 text-center">
                            <div class="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-st-red transition-colors">
                                <span id="days" class="block text-5xl font-mono font-bold text-white tracking-tighter">00</span>
                                <span class="text-[10px] uppercase tracking-widest text-gray-400">Days</span>
                            </div>
                             <div class="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-st-red transition-colors">
                                <span id="hours" class="block text-5xl font-mono font-bold text-white tracking-tighter">00</span>
                                <span class="text-[10px] uppercase tracking-widest text-gray-400">Hours</span>
                            </div>
                             <div class="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-st-red transition-colors">
                                <span id="minutes" class="block text-5xl font-mono font-bold text-white tracking-tighter">00</span>
                                <span class="text-[10px] uppercase tracking-widest text-gray-400">Minutes</span>
                            </div>
                             <div class="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-st-red transition-colors box-shadow-glow">
                                <span id="seconds" class="block text-5xl font-mono font-bold text-st-red tracking-tighter">00</span>
                                <span class="text-[10px] uppercase tracking-widest text-st-red">Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  `;
}

export function initHome() {
    // 1. Initialize Magic Bento Effect on BACKGROUND
    const bgContainer = document.getElementById('magic-bento-background');
    if (bgContainer) {
        new MagicBento(bgContainer, {
            spotlightRadius: 600,
            glowColor: '255, 0, 51',
            enableParticles: false,
            idleAnimation: true,
            backgroundMode: true, // Auto revolve
            enableDotGrid: true
        });
    }

    // 2. Initialize Magic Bento Effect on FOREGROUND CARDS (Premium Hover)
    const fgContainer = document.getElementById('foreground-bento-grid');
    if (fgContainer) {
        new MagicBento(fgContainer, {
            spotlightRadius: 300, // Focused spotlight
            glowColor: '255, 0, 51',
            enableParticles: true, // Burst particles on hover
            idleAnimation: false, // Static until hover
            backgroundMode: false, // Enable full interactive hover physics
            enableDotGrid: false
        });
    }

    // Countdown Logic -> Date: March 6, 2026
    const targetDate = new Date('March 6, 2026 09:00:00').getTime();

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

        if (document.getElementById('days')) {
            document.getElementById('days').innerText = days.toString().padStart(2, '0');
            document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
            document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
        } else {
            clearInterval(interval);
        }
    }, 1000);
}
