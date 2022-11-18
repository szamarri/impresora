// renderer.js

const clearStorageButton = document.getElementById("buttonAction");
const span = document.getElementById("spanSelected");

clearStorageButton.addEventListener('click', () => {
  const spanValue = span.textContent
  window.electronAPI.changeConfig(spanValue)
})

window.electronAPI.onCallback('updateDomSpan', (event, value) => {
  span.innerText = value
})