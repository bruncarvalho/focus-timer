//conectando as ações

import state from './state.js'
import * as timer from './timer.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running') //adiciona e remove a class running no html e atribui o resultado true ou false em state.isRunning

  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  
}

export function set() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')
}