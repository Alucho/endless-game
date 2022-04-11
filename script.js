let jogador = document.querySelector('#jogador');
let obstaculo = document.querySelector('#obstaculo');

function pular(){
  if(jogador.classList != 'pulo'){
    jogador.classList.add('pulo')
  }

  setTimeout(function(){
    jogador.classList.remove('pulo')
  }, 500)
}

var testeColisao = setInterval(function(){

  var topoJogador = parseInt(
    window.getComputedStyle(jogador).getPropertyValue('top')
  )
  var esquerdaObstaculo = parseInt(
    window.getComputedStyle(obstaculo).getPropertyValue('left')
  )

  if (esquerdaObstaculo < 20 && esquerdaObstaculo > 0 && topoJogador >= 130){
    obstaculo.style.animation = 'none'
    obstaculo.style.display = 'none'
    alert('Atualize e Tente Novamente')
  }

  
},10)