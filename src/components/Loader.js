
export function renderLoader() {
  return `
<style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      height: 100vh;
      background: #0a0a0a;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Benguiat', 'Courier New', serif;
      overflow: hidden;
      position: relative;
    }

    /* Enhanced vignette */
    body::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.9) 100%);
      pointer-events: none;
      z-index: 1;
    }

    /* Film grain */
    body::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
      pointer-events: none;
      animation: grain 0.3s steps(3) infinite;
      z-index: 2;
    }

    @keyframes grain {
      0%, 100% { transform: translate(0, 0); }
      10% { transform: translate(-1%, -1%); }
      20% { transform: translate(1%, 1%); }
      30% { transform: translate(-2%, 0%); }
      40% { transform: translate(2%, -2%); }
      50% { transform: translate(-1%, 2%); }
      60% { transform: translate(1%, -1%); }
      70% { transform: translate(0%, 1%); }
      80% { transform: translate(-2%, -1%); }
      90% { transform: translate(2%, 1%); }
    }

    .loader-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      text-align: center;
    }

    /* Portal enhancement */
    .portal {
      width: 300px;
      height: 300px;
      margin: 0 auto 50px;
      position: relative;
      border-radius: 50%;
      background: radial-gradient(circle, #1a0505 0%, #0a0a0a 70%);
      box-shadow: 
        inset 0 0 80px rgba(139, 0, 0, 0.5),
        0 0 100px rgba(139, 0, 0, 0.3),
        0 0 150px rgba(139, 0, 0, 0.1);
    }

    /* Enhanced rings */
    .ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 2px solid;
      border-color: #8b0000 transparent #8b0000 transparent;
      animation: rotate 4s linear infinite;
    }

    .ring:nth-child(1) {
      width: 260px;
      height: 260px;
      animation-duration: 3s;
      border-width: 1px;
      opacity: 0.7;
      box-shadow: 0 0 20px rgba(139, 0, 0, 0.3);
    }

    .ring:nth-child(2) {
      width: 220px;
      height: 220px;
      animation-duration: 4s;
      animation-direction: reverse;
      border-width: 1.5px;
      opacity: 0.6;
      box-shadow: 0 0 15px rgba(139, 0, 0, 0.4);
    }

    .ring:nth-child(3) {
      width: 180px;
      height: 180px;
      animation-duration: 5s;
      border-width: 1px;
      opacity: 0.5;
    }

    .ring:nth-child(4) {
      width: 140px;
      height: 140px;
      animation-duration: 3.5s;
      animation-direction: reverse;
      border-width: 2px;
      opacity: 0.8;
      box-shadow: 0 0 25px rgba(139, 0, 0, 0.5);
    }

    .ring:nth-child(5) {
      width: 100px;
      height: 100px;
      animation-duration: 2.8s;
      border-width: 1.5px;
      opacity: 0.6;
    }

    @keyframes rotate {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    /* Enhanced core */
    .core {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70px;
      height: 70px;
      background: radial-gradient(circle, #ff1744 0%, #8b0000 60%, transparent 100%);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
      box-shadow: 
        0 0 50px rgba(255, 23, 68, 0.7),
        0 0 100px rgba(139, 0, 0, 0.5),
        inset 0 0 20px rgba(255, 23, 68, 0.3);
    }

    @keyframes pulse {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.9;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.15);
        opacity: 1;
      }
    }

    /* Enhanced particles */
    .particle {
      position: absolute;
      background: #ff1744;
      border-radius: 50%;
      pointer-events: none;
      animation: float-particle 3s infinite;
      box-shadow: 0 0 15px rgba(255, 23, 68, 0.9);
    }

    .particle:nth-child(6) { width: 4px; height: 4px; top: 15%; left: 25%; animation-delay: 0s; }
    .particle:nth-child(7) { width: 3px; height: 3px; top: 35%; left: 75%; animation-delay: 0.6s; }
    .particle:nth-child(8) { width: 5px; height: 5px; top: 55%; left: 15%; animation-delay: 1.2s; }
    .particle:nth-child(9) { width: 3px; height: 3px; top: 75%; left: 65%; animation-delay: 1.8s; }
    .particle:nth-child(10) { width: 4px; height: 4px; top: 25%; left: 85%; animation-delay: 2.4s; }
    .particle:nth-child(11) { width: 2px; height: 2px; top: 45%; left: 40%; animation-delay: 0.3s; }
    .particle:nth-child(12) { width: 3px; height: 3px; top: 65%; left: 90%; animation-delay: 0.9s; }

    @keyframes float-particle {
      0%, 100% {
        transform: translateY(0) scale(0);
        opacity: 0;
      }
      20% {
        opacity: 1;
        transform: translateY(-15px) scale(1);
      }
      80% {
        opacity: 1;
      }
      100% {
        transform: translateY(-120px) scale(0);
        opacity: 0;
      }
    }

    /* Enhanced progress bar */
    .progress-container {
      width: 360px;
      height: 3px;
      background: rgba(139, 0, 0, 0.25);
      margin: 35px auto 25px;
      border-radius: 3px;
      overflow: hidden;
      box-shadow: 
        0 0 15px rgba(139, 0, 0, 0.4),
        inset 0 1px 3px rgba(0, 0, 0, 0.5);
      position: relative;
    }

    .progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #8b0000 0%, #ff1744 50%, #ff4569 75%, #ff1744 100%);
      background-size: 200% 100%;
      width: 0%;
      animation: shimmer 1.5s linear infinite;
      box-shadow: 0 0 20px rgba(255, 23, 68, 0.9);
      transition: width 0.3s ease-out;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    /* Loading text container */
    .text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      margin-top: 25px;
    }

    /* Loading text */
    .loading-text {
      color: #8b0000;
      font-size: 13px;
      letter-spacing: 5px;
      text-transform: uppercase;
      font-weight: 400;
      text-shadow: 0 0 25px rgba(139, 0, 0, 0.6);
      animation: flicker-text 3s infinite;
      min-height: 20px;
    }

    @keyframes flicker-text {
      0%, 100% { opacity: 1; }
      41%, 43% { opacity: 0.75; }
      45%, 47% { opacity: 1; }
      50%, 52% { opacity: 0.85; }
    }

    .loading-text span {
      display: none;
    }

    .loading-text span.active {
      display: inline-block;
      animation: fade-in 0.6s ease;
    }

    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Enhanced percentage */
    .percentage {
      color: #ff1744;
      font-size: 56px;
      font-weight: 300;
      letter-spacing: 4px;
      font-family: 'Courier New', monospace;
      text-shadow: 
        0 0 40px rgba(255, 23, 68, 0.7),
        0 0 20px rgba(255, 23, 68, 0.5);
      animation: glow-pulse 2s ease-in-out infinite;
    }

    @keyframes glow-pulse {
      0%, 100% {
        text-shadow: 
          0 0 40px rgba(255, 23, 68, 0.7),
          0 0 20px rgba(255, 23, 68, 0.5);
      }
      50% {
        text-shadow: 
          0 0 60px rgba(255, 23, 68, 0.9),
          0 0 30px rgba(255, 23, 68, 0.7);
      }
    }

    /* Subtle scanlines */
    .scanlines {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.1) 1px,
        transparent 1px,
        transparent 3px
      );
      pointer-events: none;
      z-index: 4;
      opacity: 0.3;
    }
  </style>

<div class="scanlines"></div>

<div class="loader-container">
  <div class="portal">
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="core"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
  </div>
  
  <div class="progress-container">
    <div class="progress-bar"></div>
  </div>
  
  <div class="text-container">
    <div class="percentage">0%</div>
    
    <p class="loading-text">
      <span class="active">Loading Hawkins...</span>
      <span>Finding Eleven...</span>
      <span>Upside Down Detected...</span>
    </p>
  </div>
</div>

<script>
  const messages = document.querySelectorAll('.loading-text span');
  const percentage = document.querySelector('.percentage');
  const progressBar = document.querySelector('.progress-bar');
  let currentIndex = 0;
  let currentPercent = 0;
  let targetPercent = 0;

  // More realistic progress simulation
  const progressSteps = [
    { percent: 33, duration: 2500 },
    { percent: 67, duration: 2500 },
    { percent: 100, duration: 2500 }
  ];

  let stepIndex = 0;

  function updateProgress() {
    if (stepIndex < progressSteps.length) {
      targetPercent = progressSteps[stepIndex].percent;
      
      const interval = setInterval(() => {
        if (currentPercent < targetPercent) {
          currentPercent += 1;
          percentage.textContent = currentPercent + '%';
          progressBar.style.width = currentPercent + '%';
        } else {
          clearInterval(interval);
        }
      }, progressSteps[stepIndex].duration / (progressSteps[stepIndex].percent - currentPercent));
      
      stepIndex++;
    }
  }

  `;
}

export function initLoader(onComplete) {
  const messages = document.querySelectorAll('.loading-text span');
  const percentage = document.querySelector('.percentage');
  const progressBar = document.querySelector('.progress-bar');
  let currentIndex = 0;
  let currentPercent = 0;
  let targetPercent = 0;

  // More realistic progress simulation
  const progressSteps = [
    { percent: 33, duration: 2500 },
    { percent: 67, duration: 2500 },
    { percent: 100, duration: 2500 }
  ];

  let stepIndex = 0;

  function updateProgress() {
    if (stepIndex < progressSteps.length) {
      targetPercent = progressSteps[stepIndex].percent;
      
      const interval = setInterval(() => {
        if (currentPercent < targetPercent) {
          currentPercent += 1;
          percentage.textContent = currentPercent + '%';
          progressBar.style.width = currentPercent + '%';
        } else {
          clearInterval(interval);
          if (currentPercent >= 100) {
            setTimeout(onComplete, 800); // Pause at 100%
          }
        }
      }, progressSteps[stepIndex].duration / (progressSteps[stepIndex].percent - (stepIndex > 0 ? progressSteps[stepIndex - 1].percent : 0)));
      
      stepIndex++;
    }
  }

  // Cycle through messages with progress
  function nextMessage() {
    if (currentIndex < messages.length - 1) {
      messages[currentIndex].classList.remove('active');
      currentIndex++;
      messages[currentIndex].classList.add('active');
      updateProgress();
      
      setTimeout(nextMessage, 2500);
    }
  }

  // Start the sequence
  updateProgress();
  setTimeout(nextMessage, 2500);
}
