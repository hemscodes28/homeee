import { MagicBento } from '../utils/MagicBento.js';
import { TornPaperEffect } from '../utils/TornPaperEffect.js';
import { initParticles } from '../utils/Particle.js';
import { FuzzyText } from '../utils/FuzzyText.js';
import { Countdown } from '../utils/Countdown.js';

export function renderHome() {
    return `
    <div id="home-page" class="relative min-h-screen w-full bg-black scroll-smooth" style="min-height: 100vh; width: 100%;">
      
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
      <nav class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div id="innovative-navbar" class="innovative-navbar glass-premium glass-premium--red rounded-full px-8 py-4 flex justify-between items-center group/nav overflow-hidden relative" style="border-radius: 9999px;">
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
             
             <div class="flex items-center space-x-3 group cursor-pointer relative z-10 transition-all duration-500 ">
                <!-- College Logo with Premium Effects -->
                <div class="relative flex items-center justify-center logo-animate">
                    <!-- Glow Effects -->
                    <div class="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 rounded-xl"></div>
                    <div class="absolute inset-0 bg-gradient-to-tr from-st-red/30 to-white/10 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                    
                    <!-- Logo Container with White Background -->
                    <div class="relative z-10 bg-white rounded-lg overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] px-3 py-2">
                        <img src="/assets/college-logo.png" alt="Coimbatore Institute of Technology" class="h-12 w-auto object-contain transform transition-transform duration-700 group-">
                    </div>
                </div>
                
                <!-- Vertical Divider -->
                <div class="h-12 w-[2px] bg-gradient-to-b from-transparent via-st-red/50 to-transparent"></div>
                
                                
                 <!-- Department Logo with Premium Effects -->
                 <div class="relative flex items-center justify-center logo-animate">
                     <!-- Glow Effects -->
                     <div class="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 rounded-full"></div>
                     <div class="absolute inset-0 bg-gradient-to-tr from-st-red/30 to-white/10 rounded-full scale-0 group-hover:scale-110 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                     
                     <!-- Logo Container with White Background -->
                     <div class="relative z-10 bg-white rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] p-1.5">
                         <img src="/dept-logo.png" alt="AI & DS Association" class="h-10 w-10 object-contain transform transition-transform duration-700 group-">
                     </div>
                 </div>
                 
                 <!-- Vertical Divider -->
                 <div class="h-12 w-[2px] bg-gradient-to-b from-transparent via-st-red/50 to-transparent"></div> <!-- INTELLINA Branding -->
                <div class="flex flex-col">
                    <span class="text-2xl font-black tracking-[0.3em] text-white group-hover:text-st-red transition-all duration-700 whitespace-nowrap group-hover:drop-shadow-[0_0_20px_rgba(255,0,51,1)]  transform origin-left">INTELLINA</span>
                    <span class="text-[8px] tracking-[1em] text-st-red/80 font-bold group-hover:text-white transition-all duration-500">2K26 SYMPO</span>
                </div>
             </div>

             <ul class="hidden md:flex items-center space-x-8 relative z-10">
                 <li><a href="#" class="nav-link relative text-sm font-black tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-500 py-2 px-4 rounded-xl group/link overflow-hidden">
                    <span class="relative z-10">HOME</span>
                    <!-- Animated Gradient Underline -->
                    <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-st-red to-transparent group-hover/link:w-full transition-all duration-700 ease-in-out" style="box-shadow: 0 0 15px rgba(255,0,51,0.8);"></span>
                    <!-- Internal Shimmer -->
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-st-red/10 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-1000"></span>
                 </a></li>
                 <li><a href="#" class="nav-link relative text-sm font-black tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-500 py-2 px-4 rounded-xl group/link overflow-hidden">
                    <span class="relative z-10">ABOUT</span>
                    <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-st-red to-transparent group-hover/link:w-full transition-all duration-700 ease-in-out" style="box-shadow: 0 0 15px rgba(255,0,51,0.8);"></span>
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-st-red/10 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-1000"></span>
                 </a></li>
                 <li><a href="#" class="nav-link relative text-sm font-black tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-500 py-2 px-4 rounded-xl group/link overflow-hidden">
                    <span class="relative z-10">EVENTS</span>
                    <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-st-red to-transparent group-hover/link:w-full transition-all duration-700 ease-in-out" style="box-shadow: 0 0 15px rgba(255,0,51,0.8);"></span>
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-st-red/10 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-1000"></span>
                 </a></li>
                 <li><a href="#" class="nav-link relative text-sm font-black tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-500 py-2 px-4 rounded-xl group/link overflow-hidden">
                    <span class="relative z-10">TIMELINE</span>
                    <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-st-red to-transparent group-hover/link:w-full transition-all duration-700 ease-in-out" style="box-shadow: 0 0 15px rgba(255,0,51,0.8);"></span>
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-st-red/10 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-1000"></span>
                 </a></li>
             </ul>

             <button class="px-10 py-3 bg-black text-white font-black text-xs tracking-[0.3em] rounded-full border-2 border-st-red/50 hover:border-st-red hover:bg-st-red hover:text-black transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,0,51,0.6)] relative z-10 overflow-hidden group/btn">
                 <span class="relative z-10">CONTACT</span>
                 <!-- Contact Btn Glow -->
                 <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
             </button>
        </div>
      </nav>

      <!-- Main Content Split -->
      <div class="relative z-10 container mx-auto px-6 pt-32 pb-12 min-h-screen flex flex-col justify-center pointer-events-none">
        <!-- Pointer events re-enabled on interactive children -->
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <!-- Left Column: Netflix-Style Title & Info -->
            <div class="w-full lg:w-3/5 space-y-8 animate-slide-up opacity-0 pointer-events-auto text-left" style="animation-fill-mode: forwards; animation-delay: 0.2s;">
                <div class="relative overflow-visible mb-2" style="min-width: 100%;">
                    <!-- Fuzzy Text Containers -->
                    <div id="fuzzy-title" class="relative z-10"></div>
                    <div id="fuzzy-subtitle" class="absolute -bottom-4 right-0 md:right-12 mix-blend-screen z-20 pointer-events-none"></div>
                </div>

                <!-- Metadata Row (Netflix Style) -->
                <div class="flex items-center space-x-6 text-sm md:text-base font-bold tracking-wider">
                    <span class="text-green-500">99% Match</span>
                    <span class="text-gray-300">2026</span>
                    <div class="flex items-center text-st-red">
                        <span class="mr-1">9.9/10</span>
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <span class="ml-1 text-gray-400 font-normal">C.I.T.</span>
                    </div>
                    <span class="text-gray-400 font-medium">Technical Symposium</span>
                </div>
                
                <p class="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed font-merriweather drop-shadow-lg">
                    "Intellina 2k26" is the premier national level technical symposium hosted by the 
                    <span class="text-st-red font-bold">Department of Artificial Intelligence and Data Science</span> at C.I.T. 
                    Enter a dimension where technology meets the supernatural, featuring high-stakes coding battles, 
                    AI innovations, and the ultimate technical challenges.
                </p>

                <div class="flex flex-wrap gap-4 pt-4">
                     <!-- Play/Register Button -->
                     <button class="flex items-center gap-3 px-10 py-3 bg-white text-black font-bold text-lg rounded-md hover:bg-white/80 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        REGISTER
                     </button>
                     
                     <!-- My List/Explore Button -->
                     <button class="flex items-center gap-3 px-10 py-3 bg-gray-500/30 backdrop-blur-md text-white border border-gray-400/30 font-bold text-lg rounded-md hover:bg-gray-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
                        <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
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

                    <!-- Main Robot Container -->
                    <div class="st-robot-container group/robot relative">
                        <!-- Holographic Scan Line -->
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-st-red/15 to-transparent opacity-0 group-hover/robot:opacity-100 transition-opacity duration-500 pointer-events-none" style="animation: scan-line 3s linear infinite; z-index: 50;"></div>
                        
                        <!-- Robot Speech Bubble -->
                        <div class="robot-speech-bubble">
                            <span>Hi! Do register for<br>Intellina</span>
                        </div>
                        
                        <!-- Wrapper to hide Watermark -->
                        <div class="st-robot-wrapper">
                            <iframe src='https://my.spline.design/genkubgreetingrobot-fzWnKIUrSKa0RwHGiBYduZeq/' frameborder='0' width='100%' height='100%'></iframe>
                        </div>
                        
                        <!-- Status Header Overlay -->
                        <div class="absolute top-6 left-8 right-8 flex items-center justify-between border-b border-st-red/40 pb-3 z-20 pointer-events-none">
                            <div class="flex items-center gap-3">
                                <div class="relative">
                                    <div class="w-2.5 h-2.5 rounded-full bg-st-red animate-pulse"></div>
                                    <div class="absolute inset-0 w-2.5 h-2.5 rounded-full bg-st-red animate-ping"></div>
                                </div>
                                <span class="text-[11px] uppercase tracking-[0.4em] text-st-red font-bold" style="text-shadow: 0 0 15px rgba(255,0,51,0.9);">ROBOT UNIT-01 // ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <!-- Premium Countdown Timer Section -->
      <div class="relative z-10 container mx-auto px-6 py-16 pb-24">
        <div class="flex flex-col items-center justify-center space-y-8 animate-slide-up opacity-0 pointer-events-auto" style="animation-fill-mode: forwards; animation-delay: 0.6s;">
          
          <!-- Section Title -->
          <div class="text-center space-y-3">
            <h2 class="text-4xl md:text-5xl font-black text-white tracking-wider" style="text-shadow: 0 0 30px rgba(255,0,51,0.6);">
              EVENT COUNTDOWN
            </h2>
            <p class="text-gray-400 text-lg font-medium tracking-wide">
              Time Until Intellina 2K26 Begins
            </p>
          </div>

          <!-- Premium Countdown Container -->
          <div class="relative w-full max-w-4xl">
            <!-- Outer Glow Container -->
            <div class="absolute inset-0 bg-gradient-to-r from-st-red/20 via-st-red/30 to-st-red/20 rounded-2xl blur-2xl opacity-60 animate-pulse-slow"></div>
            
            <!-- Main Timer Box -->
            <div class="relative glass-premium glass-premium--red rounded-2xl p-8 md:p-12 border-2 border-st-red/40 overflow-hidden group/timer">
              
              <!-- Animated Background Grid -->
              <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,0,51,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.3) 1px, transparent 1px); background-size: 20px 20px; animation: grid-move 20s linear infinite;"></div>
              
              <!-- Corner Accents -->
              <div class="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-st-red rounded-tl-2xl opacity-60"></div>
              <div class="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-st-red rounded-tr-2xl opacity-60"></div>
              <div class="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-st-red rounded-bl-2xl opacity-60"></div>
              <div class="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-st-red rounded-br-2xl opacity-60"></div>
              
              <!-- Scan Line Effect -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-st-red/10 to-transparent opacity-0 group-hover/timer:opacity-100 transition-opacity duration-500 pointer-events-none" style="animation: scan-line 3s linear infinite;"></div>
              
              <!-- Countdown Display -->
              <div id="premium-countdown" class="st-countdown-container relative z-10"></div>
              
              <!-- Bottom Status Bar -->
              <div class="relative z-10 mt-8 pt-6 border-t border-st-red/30 flex items-center justify-center gap-3">
                <div class="w-2 h-2 rounded-full bg-st-red animate-pulse"></div>
                <span class="text-xs uppercase tracking-[0.3em] text-st-red/80 font-bold">LIVE COUNTDOWN // MARCH 6, 2026</span>
                <div class="w-2 h-2 rounded-full bg-st-red animate-pulse"></div>
              </div>
            </div>
          </div>

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

    // 1. Initialize Fuzzy Text Effect
    const fuzzyTitleContainer = document.getElementById('fuzzy-title');
    if (fuzzyTitleContainer) {
        new FuzzyText(fuzzyTitleContainer, {
            text: 'INTELLINA',
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            fontWeight: 900,
            color: '#fff',
            glitchMode: true,
            fuzzRange: 15,
            baseIntensity: 0.1,
            hoverIntensity: 0.4
        });
    }

    const fuzzySubtitleContainer = document.getElementById('fuzzy-subtitle');
    if (fuzzySubtitleContainer) {
        new FuzzyText(fuzzySubtitleContainer, {
            text: '2K26',
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            fontWeight: 700,
            color: '#ff0033',
            glitchMode: true,
            fuzzRange: 20,
            baseIntensity: 0.2,
            hoverIntensity: 0.6,
            className: 'transform -rotate-2 font-mono'
        });
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

    // 2. Initialize Premium Countdown with Custom Component
    const countdownContainer = document.getElementById('premium-countdown');
    if (countdownContainer) {
        // March 6th, 2026 at 9:30 AM
        new Countdown(countdownContainer, '2026-03-06T09:30:00');
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




    //     });
    // }


    // 7. Initialize Scroll Animations (Optional - Already handled by Tailwind classes mostly)
    console.log('Home initialized with Spline Robot');
}




