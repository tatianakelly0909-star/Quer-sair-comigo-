const caixa = document.getElementById('caixaBotoes');
const btnNao = document.getElementById('btnNao');
const btnSim = document.getElementById('btnSim');
const resultado = document.getElementById('resultado');
const subtitulo = document.getElementById('subtitulo');

function fugir(){
  const largura = caixa.clientWidth;
  const altura = caixa.clientHeight;
  const larguraBotao = btnNao.offsetWidth;
  const alturaBotao = btnNao.offsetHeight;

  const maxX = Math.max(largura - larguraBotao, 0);
  const maxY = Math.max(altura - alturaBotao, 0);

  const novoX = Math.random() * maxX;
  const novoY = Math.random() * maxY;

  btnNao.style.left = (novoX + larguraBotao / 2) + 'px';
  btnNao.style.top = novoY + 'px';
  btnNao.style.transform = 'translate(-50%, 0)';
}

btnNao.addEventListener('mouseenter', fugir);
btnNao.addEventListener('touchstart', function(e){
  e.preventDefault();
  fugir();
}, { passive: false });

btnSim.addEventListener('click', function(){
  caixa.classList.add('escondido');
  subtitulo.classList.add('escondido');
  resultado.style.display = 'block';
});

const coracoesFundo = document.getElementById('coracoesFundo');
const simbolos = ['💗', '💖', '💕', '❤️'];

function criarCoracao(){
  const coracao = document.createElement('span');
  coracao.className = 'coracao-flutuante';
  coracao.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

  const tamanho = 14 + Math.random() * 22;
  const posicaoInicial = Math.random() * 100;
  const duracao = 6 + Math.random() * 6;
  const deriva = (Math.random() * 80 - 40) + 'px';

  coracao.style.left = posicaoInicial + 'vw';
  coracao.style.fontSize = tamanho + 'px';
  coracao.style.animationDuration = duracao + 's';
  coracao.style.setProperty('--deriva', deriva);

  coracoesFundo.appendChild(coracao);

  setTimeout(function(){
    coracao.remove();
  }, duracao * 1000);
}

setInterval(criarCoracao, 400);