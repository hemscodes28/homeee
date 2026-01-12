import './style.css';
import { renderLoader, initLoader } from './components/Loader.js';
import { renderTransition, initTransition } from './components/Transition.js';
import { renderHome, initHome } from './components/Home.js';

const app = document.querySelector('#app');

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
  app.innerHTML = ''; // Clear current content

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
}

// Initial Render
render();
