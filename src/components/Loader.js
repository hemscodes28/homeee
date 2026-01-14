
import { animate } from 'motion';

export function renderLoader() {
  return `
    <div id="loader-page" class="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 overflow-hidden w-full h-screen px-4">
      <!-- Main Title -->
      <div class="text-center mb-8">
        <h1 class="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-st-red stroke-white text-glow animate-glitch tracking-widest mb-4" style="-webkit-text-stroke: 1px #ff0033; color: #ff0033; text-shadow: 0 0 20px #ff0033;">
          INTELLINA 2K26
        </h1>
        <p class="text-st-red tracking-[0.5em] text-sm md:text-xl uppercase animate-pulse" style="color: #ff0033;">Welcome to the Upside Down</p>
      </div>

      <!-- Dimensional Loader -->
      <div class="flex items-center justify-center my-12">
        ${renderDimensionalLoader('large')}
      </div>

      <!-- Loading Box -->
      <div class="w-80 md:w-96">
        <div class="h-4 bg-st-grey border border-st-red rounded-sm overflow-hidden box-glow relative group mb-3">
          <div id="progress-bar" class="h-full bg-st-red w-0 transition-all duration-100 ease-out shadow-[0_0_15px_#ff0033]"></div>
        </div>
        <div class="flex justify-between items-center font-mono text-st-red" style="color: #ff0033;">
          <span class="text-xs animate-pulse" style="color: #ff0033;">OPENING_GATE...</span>
          <span id="progress-text" class="text-lg font-bold" style="color: #ff0033;">0%</span>
        </div>
      </div>
    </div>
  `;
}

export function renderDimensionalLoader(size = 'large') {
  const dimensions = {
    small: { outer: 60, middle: 40, inner: 20 },
    medium: { outer: 100, middle: 70, inner: 40 },
    large: { outer: 150, middle: 110, inner: 70 }
  };

  const { outer, middle, inner } = dimensions[size];

  return `
    <div id="dimensional-loader" class="relative" style="width: ${outer}px; height: ${outer}px;">
      <!-- Outer ring - slow rotation -->
      <div id="outer-ring" class="absolute inset-0 rounded-full border-2 border-primary"
           style="box-shadow: 0 0 20px hsl(var(--primary) / 0.4), inset 0 0 20px hsl(var(--primary) / 0.2)">
      </div>

      <!-- Middle ring - medium rotation, opposite direction -->
      <div id="middle-ring" class="absolute rounded-full border-2 border-accent"
           style="width: ${middle}px; height: ${middle}px; top: ${(outer - middle) / 2}px; left: ${(outer - middle) / 2}px; box-shadow: 0 0 15px hsl(var(--accent) / 0.4), inset 0 0 15px hsl(var(--accent) / 0.2)">
      </div>

      <!-- Inner core - pulsing energy -->
      <div id="inner-core" class="absolute rounded-full bg-primary"
           style="width: ${inner}px; height: ${inner}px; top: ${(outer - inner) / 2}px; left: ${(outer - inner) / 2}px;">
      </div>

      <!-- Glowing particles -->
      ${[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8;
        const radius = outer / 2 + 20;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return `
          <div id="particle-${i}" class="absolute w-2 h-2 rounded-full bg-primary-glow"
               style="left: ${outer / 2 + x}px; top: ${outer / 2 + y}px; box-shadow: 0 0 10px hsl(var(--primary-glow))">
          </div>
        `;
      }).join('')}
    </div>
  `;
}

export function initDimensionalLoader() {
  const outerRing = document.getElementById('outer-ring');
  const middleRing = document.getElementById('middle-ring');
  const innerCore = document.getElementById('inner-core');

  // Outer ring rotation
  animate(outerRing, { rotate: 360 }, { duration: 8, repeat: Infinity, ease: 'linear' });

  // Middle ring rotation (opposite)
  animate(middleRing, { rotate: -360 }, { duration: 5, repeat: Infinity, ease: 'linear' });

  // Inner core pulsing
  animate(innerCore, {
    scale: [1, 1.2, 1],
    opacity: [0.8, 1, 0.8],
    boxShadow: [
      '0 0 20px hsl(var(--primary-glow) / 0.6), 0 0 40px hsl(var(--primary-glow) / 0.4)',
      '0 0 40px hsl(var(--primary-glow) / 0.9), 0 0 80px hsl(var(--primary-glow) / 0.6)',
      '0 0 20px hsl(var(--primary-glow) / 0.6), 0 0 40px hsl(var(--primary-glow) / 0.4)'
    ]
  }, { duration: 2, repeat: Infinity, ease: 'easeInOut' });

  // Particles animation
  for (let i = 0; i < 8; i++) {
    const particle = document.getElementById(`particle-${i}`);
    animate(particle, {
      opacity: [0.3, 1, 0.3],
      scale: [0.8, 1.2, 0.8]
    }, {
      duration: 2,
      repeat: Infinity,
      delay: i * 0.2,
      ease: 'easeInOut'
    });
  }
}

export function initLoader(onComplete) {
  // Initialize the dimensional loader animations
  initDimensionalLoader();

  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');

  let progress = 0;

  // Cinematic nonlinear loading
  const interval = setInterval(() => {
    // Random increment
    const increment = Math.random() * 1.5; // Slower for smoother ride
    progress += increment;

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(onComplete, 800); // Pause at 100%
    }

    if (progressBar && progressText) {
      progressBar.style.width = `${progress}%`;
      progressText.innerText = `${Math.floor(progress)}%`;

      // Glitch effect at random intervals
      if (Math.random() > 0.9) {
        progressText.style.textShadow = '2px 0 blue, -2px 0 red';
        setTimeout(() => progressText.style.textShadow = 'none', 100);
      }
    }
  }, 40);
}
