/*
  Utilizando DOM: Document Element Model

  é a forma de utilizar o JS junto com o HTML
*/
 
// Document: Estou referenciando o documento HTML
// .querySelector() : Estou buscando algum seletor dentro do meu HTML no caso estou buscando a classe play.
//  document.querySelector('.play')

// default import
import  Sound  from "./sounds.js"
import  Controls from "./controls.js"
import  Timer  from "./timer.js"
import  Events from "./events.js"
import { 
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const sound = Sound()

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls : controls.reset,
})

Events({controls, sound, timer})

