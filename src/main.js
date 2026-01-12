import './style.css';
import { renderLoader, initLoader } from './components/Loader.js';
import { renderTransition, initTransition } from './components/Transition.js';
import { renderHome, initHome } from './components/Home.js';

// Ensure body has background and full height
document.body.style.backgroundColor = '#050505';
document.body.style.color = 'white';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.width = '100%';
document.body.style.height = '100vh';
document.body.style.overflow = 'hidden';

const app = document.querySelector('#app');

// Ensure app container is properly sized
if (app) {
  app.style.width = '100%';
  app.style.height = '100vh';
  app.style.position = 'relative';
}

if (!app) {
  console.error('App element not found!');
  document.body.innerHTML = '<div style="color: white; padding: 20px; background: black;">Error: App element not found!</div>';
}

// State Management
const STATE = {
  LOADING: 'LOADING',
  TRANSITION: 'TRANSITION',
  HOME: 'HOME'
};

let currentState = STATE.LOADING;

function switchState(newState) {
  currentState = newState;
  render();
}

function render() {
  if (!app) return;
  
  app.innerHTML = ''; // Clear current content

  try {
    if (currentState === STATE.LOADING) {
      app.innerHTML = renderLoader();
      initLoader(() => switchState(STATE.TRANSITION));
    }
    else if (currentState === STATE.TRANSITION) {
      app.innerHTML = renderTransition();
      initTransition(() => switchState(STATE.HOME));
    }
    else if (currentState === STATE.HOME) {
      app.innerHTML = renderHome();
      initHome();
    }
  } catch (error) {
    console.error('Error rendering:', error);
    app.innerHTML = `<div style="color: white; padding: 20px; background: black;">Error: ${error.message}<br>${error.stack}</div>`;
  }
}

// Initial Render
if (app) {
  render();
} else {
  document.body.innerHTML = '<div style="color: white; padding: 20px; background: black; font-family: monospace;">Error: App element is null.</div>';
}
