const contador = document.getElementById('contador')
var num = 0

function Diminuir(){
  num -= 1
  return contador.textContent = num
}
function Resetar(){
  num = 0
  return contador.textContent = num
}
function Aumentar(){
  num += 1
  return contador.textContent = num
}