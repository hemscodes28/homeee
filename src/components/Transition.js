import { DecryptedText } from '../utils/DecryptedText.js';

export function renderTransition() {
    return `
    <div id="transition-page" class="absolute inset-0 flex flex-col items-center justify-center bg-black z-40 overflow-hidden">
       <!-- Brighter background by reducing opacity of overlay or increasing opacity of image layer -->
       <div class="absolute inset-0 z-0 bg-[url('/assets/bg-portal.jpg')] bg-cover bg-center brightness-125"></div>
       <div class="absolute inset-0 bg-black/20 z-0"></div> <!-- reduced from default darkness -->
       
       <div class="relative z-10 text-center max-w-4xl px-4">
         <h2 class="text-5xl md:text-7xl font-bold text-white mb-12 text-glow animate-pulse-fast tracking-widest">READY TO ROAR</h2>
         
         <div class="font-mono text-xl md:text-3xl text-st-red min-h-[160px] bg-black/60 p-8 rounded-lg border border-st-red/50 box-shadow-glow hover:bg-black/80 transition-all duration-300 backdrop-blur-md flex items-center justify-center">
            <!-- Decrypted Text Container - Single Block -->
            <p id="quote-full" class="" data-text="Learning has no boundaries — technical or non-technical. Every skill matters, every idea counts, and every effort builds the future."></p>
         </div>
       </div>

       <!-- Lightning overlay -->
       <div id="lightning" class="absolute inset-0 bg-white opacity-0 pointer-events-none mix-blend-overlay"></div>
    </div>
  `;
}

export function initTransition(onComplete) {
    const quoteContainer = document.getElementById('quote-full');
    const fullText = "Learning has no boundaries — technical or non-technical. Every skill matters, every idea counts, and every effort builds the future.";

    // Clear and prepare for word-by-word
    quoteContainer.innerHTML = '';
    quoteContainer.dataset.text = fullText;

    const words = fullText.split(' ');
    const spanElements = [];

    // Create spans for each word
    words.forEach((word) => {
        const span = document.createElement('span');
        span.className = 'inline-block mr-2 opacity-0'; // Hidden initially
        span.innerText = word;
        span.dataset.text = word;
        quoteContainer.appendChild(span);
        spanElements.push(span);
    });

    // Function to reveal next word
    let currentIndex = 0;

    function revealNextWord() {
        if (currentIndex >= spanElements.length) {
            // All words done, wait then exit
            setTimeout(() => {
                triggerCinematicTransition(onComplete);
            }, 2000);
            return;
        }

        const span = spanElements[currentIndex];
        span.classList.remove('opacity-0'); // Make visible for effect

        // Settings for "one word decrypted text effect"
        new DecryptedText(span, {
            speed: 50,
            maxIterations: 10, // Fast scramble per word
            animateOn: 'none',
            revealedClassName: 'text-white font-bold drop-shadow-md'
        }).startScramble();

        currentIndex++;

        // Delay before next word (visual pacing)
        setTimeout(revealNextWord, 300); // 300ms gap between words
    }

    // Start sequence
    setTimeout(revealNextWord, 500);

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


