/* globals fetch */

import 'babel-polyfill'
import '../styles/index.scss'


(async function () {
  const status = document.querySelector('.status')
  const fetchData = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch('/api/test', fetchData)
  status.innerHTML = response.status === 200 ?
    '<p>Connected to express</p>'
    :
    '<p style="color: crimson;">Failed connection to express<p>'
}())

if (module.hot) {
  module.hot.accept()
}
