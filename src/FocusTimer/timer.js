import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'

export function countdown() {
  // Verifica se a contagem regressiva está em andamento
  if(!state.isRunning) {
    return
  }

  // Obtém os valores numéricos dos minutos e segundos do DOM
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds-- // Decrementa os segundos

  // Verifica se os segundos atingiram zero e reinicia para 59
  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0) {
    reset()
    return
  }

  // Atualiza o display com os novos valores de minutos e segundos
  updateDisplay(minutes, seconds)
  setTimeout(() => countdown(), 1000) // Agenda a próxima execução da função countdown após 1 segundo

}

//atualiza os elementos no DOM com os valores fornecidos.
export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes //Se minutes for nulo ou indefinido, o valor de state.minutes será atribuído a minutes.
  seconds = seconds ?? state.seconds

  //atualiza com os minutos que eu passar no parâmetro da função
  el.minutes.textContent = String(minutes).padStart(2, '0') // Adiciona 2 caracteres no início da string se necessário, colocando o 0.
  el.seconds.textContent = String(seconds).padStart(2, '0')
}