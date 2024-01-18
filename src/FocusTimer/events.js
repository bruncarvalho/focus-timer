import { controls } from "./elements.js"
import * as actions from './actions.js'

export function registerControls() { 
  controls.addEventListener('click', (event) => {
   const action = event.target.dataset.action //target significa alvo, onde meu mouse clicar, ele vai apresentar qual é o target
   
   //se a action for igual a undefined, ela vai parar de executar
   if(typeof actions[action] !== 'function') {
      return
   }
   actions[action]()
  })
}

/*

actions['toggleRunning'](): Aqui, você está chamando a função associada à chave 'toggleRunning' no objeto (objeto, pq como java script é orientada a objeto, dentro de actions que eu importei lá em cima e passei como o nome actions, ele vira um objeto e 'toggleRunning' é o nome da função que passei no arquivo actions) actions. Isso presume que actions é um objeto que contém várias funções e que 'toggleRunning' é uma dessas chaves.

*/