
export function renderLoader() {
  return `
    <div id="loader-page" class="absolute inset-0 flex flex-col items-center justify-center bg-black z-50 overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="/assets/bg-forest.jpg" class="w-full h-full object-cover opacity-40 animate-pulse-slow" alt="Upside Down" />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <!-- Main Title -->
      <div class="relative z-10 text-center mb-0 mt-8">
        <h1 class="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-st-red stroke-white text-glow animate-glitch tracking-widest" style="-webkit-text-stroke: 1px #ff0033;">
          INTELLINA 2K26
        </h1>
        <p class="text-st-red mt-2 tracking-[0.5em] text-sm md:text-xl uppercase animate-pulse">Welcome to the Upside Down</p>
      </div>

      <!-- Portal / Pulse Effect -->
      <div class="relative z-0 w-64 h-64 my-8 flex items-center justify-center">
         <div class="absolute inset-0 bg-st-red/20 rounded-full blur-3xl animate-pulse"></div>
         <div class="absolute inset-0 border-2 border-st-red/50 rounded-full animate-spin-slow opacity-50"></div>
         <div class="absolute inset-4 border border-st-red/30 rounded-full animate-spin-reverse opacity-70"></div>
         
         <!-- Core -->
         <div class="w-32 h-32 bg-black border-4 border-st-red rounded-full shadow-[0_0_50px_#ff0033] animate-float flex items-center justify-center overflow-hidden">
             <div class="w-full h-full bg-[url('/assets/noise.png')] opacity-30 mix-blend-overlay"></div>
         </div>
      </div>

      <!-- Loading Box -->
      <div class="relative z-20 w-80 md:w-96">
        <div class="h-4 bg-st-grey border border-st-red rounded-sm overflow-hidden box-glow relative group">
          <div id="progress-bar" class="h-full bg-st-red w-0 transition-all duration-100 ease-out shadow-[0_0_15px_#ff0033]"></div>
        </div>
        <div class="flex justify-between items-center mt-2 font-mono text-st-red">
          <span class="text-xs animate-pulse">OPENING_GATE...</span>
          <span id="progress-text" class="text-lg font-bold">0%</span>
        </div>
      </div>
    </div>
  `;
}

export function initLoader(onComplete) {
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
