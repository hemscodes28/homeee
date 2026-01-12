import { LetterGlitch } from '../utils/LetterGlitch.js';
import { Typewriter } from '../utils/Typewriter.js';

export function renderTransition() {
    return `
    <div id="transition-page" class="fixed inset-0 flex flex-col items-center justify-center bg-black z-40 overflow-hidden w-full h-screen">
       <!-- LetterGlitch Background -->
       <div id="letter-glitch-bg" class="absolute inset-0 z-0 w-full h-full"></div>
       
       <!-- Overlay for better contrast -->
       <div class="absolute inset-0 bg-black/20 z-[1]"></div>
       
       <div class="relative z-10 text-center max-w-5xl px-6 w-full">
         <h2 class="text-5xl md:text-7xl font-bold text-white mb-20 text-glow animate-pulse-fast tracking-widest drop-shadow-[0_0_40px_rgba(255,0,51,0.9)]" style="text-shadow: 0 0 40px rgba(255,0,51,0.9), 0 0 80px rgba(255,0,51,0.5);">READY TO ROAR</h2>
         
         <!-- Premium Quote Box with Perfect Spacing -->
         <div id="quote-container" class="relative font-sans text-lg md:text-2xl min-h-[240px] bg-gradient-to-br from-black/85 via-black/75 to-black/85 p-14 md:p-16 rounded-3xl border-2 border-st-red/60 backdrop-blur-2xl flex items-center justify-center overflow-hidden group/quote mx-auto" style="box-shadow: 0 0 80px rgba(255,0,51,0.5), inset 0 0 50px rgba(255,0,51,0.15), 0 20px 60px rgba(0,0,0,0.8); max-width: 950px;">
            <!-- Animated Border Glow -->
            <div class="absolute inset-0 rounded-3xl opacity-0 group-hover/quote:opacity-100 transition-opacity duration-700" style="box-shadow: 0 0 100px rgba(255,0,51,0.7), inset 0 0 60px rgba(255,0,51,0.25);"></div>
            
            <!-- Rotating Gradient Border -->
            <div class="absolute inset-0 rounded-3xl opacity-50" style="background: conic-gradient(from 0deg, transparent, rgba(255,0,51,0.5), transparent, rgba(255,0,51,0.5), transparent); animation: rotate-border 8s linear infinite; pointer-events: none; border-radius: 1.5rem;"></div>
            
            <!-- Shimmer Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover/quote:opacity-100 transform -skew-x-12 translate-x-[-200%] group-hover/quote:translate-x-[200%] transition-transform duration-1500 ease-in-out"></div>
            
            <!-- Particle Glow Effect -->
            <div class="absolute inset-0 opacity-0 group-hover/quote:opacity-100 transition-opacity duration-700">
                <div class="absolute top-1/4 left-1/4 w-40 h-40 bg-st-red/40 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-st-red/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 0.5s;"></div>
            </div>
            
            <!-- Quote Text - Typewriter Effect -->
            <p id="quote-full" class="relative z-10 text-white leading-relaxed px-8 py-6 text-center" data-text="Learning has no boundaries — technical or non-technical. Every skill matters, every idea counts, and every effort builds the future." style="text-shadow: 0 0 30px rgba(255,0,51,0.7), 0 2px 20px rgba(0,0,0,0.9), 0 4px 10px rgba(0,0,0,0.8); line-height: 2.2; letter-spacing: 2px; word-spacing: 4px; font-family: 'Share Tech Mono', 'Courier New', 'Consolas', monospace; font-size: 1.15rem; font-weight: 400; text-transform: none;"></p>
         </div>
       </div>

       <!-- Lightning overlay -->
       <div id="lightning" class="absolute inset-0 bg-white opacity-0 pointer-events-none mix-blend-overlay z-[2]"></div>
    </div>
  `;
}

export function initTransition(onComplete) {
    // Initialize LetterGlitch Background
    const letterGlitchBg = document.getElementById('letter-glitch-bg');
    if (letterGlitchBg) {
        new LetterGlitch(letterGlitchBg, {
            glitchColors: ['#ff0033', '#ff3366', '#ff6699', '#ffffff', '#ffcccc'],
            glitchSpeed: 40, // Smooth glitch speed
            centerVignette: true,
            outerVignette: false,
            smooth: true,
            characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'
        });
    }

    // Initialize Typewriter Effect
    const quoteElement = document.getElementById('quote-full');
    const fullText = quoteElement.dataset.text || "Learning has no boundaries — technical or non-technical. Every skill matters, every idea counts, and every effort builds the future.";
    
    if (quoteElement) {
        const typewriter = new Typewriter(quoteElement, {
            text: fullText,
            speed: 40, // Fast typing speed
            showCursor: true,
            cursorChar: '|',
            onComplete: () => {
                // After typing completes, wait then transition
                setTimeout(() => {
                    triggerCinematicTransition(onComplete);
                }, 2000);
            }
        });
    } else {
        // Fallback if element not found
        setTimeout(() => {
            triggerCinematicTransition(onComplete);
        }, 6000);
    }

    function triggerCinematicTransition(cb) {
        const page = document.getElementById('transition-page');
        const lightning = document.getElementById('lightning');

        // Lightning flash sequence
        let flashCount = 0;
        const flashInterval = setInterval(() => {
            lightning.style.opacity = Math.random() > 0.5 ? '0.8' : '0';
            flashCount++;
            if (flashCount > 10) {
                clearInterval(flashInterval);
                lightning.style.opacity = '0';

                // Distortion/Flip effect
                page.style.transition = 'transform 1.2s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.8s ease-in';
                page.style.transform = 'perspective(1000px) rotateX(180deg) scale(1.5)';
                page.style.opacity = '0';

                setTimeout(cb, 1000);
            }
        }, 80);
    }
}


