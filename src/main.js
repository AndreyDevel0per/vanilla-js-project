import './style.css'
import { Button } from './components/Button/ui/Button.js'

document.querySelector('#app').innerHTML = `
  <div>
    ${Button()}
  </div>
`
