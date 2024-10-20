//
// eXp Calc - eXPmotor
// Manipulação e cálculo do jogo
// AUTHOR: Paulo Mello
// Consultoria: Márcio Freitas - Alemanha
//


//
// código gravar variável by ChatGPT
//
// Função para salvar a lista de jogadores no Local Storage
function salvarListaJogadores(listaJogadores) {
  localStorage.setItem('listaJogadores', JSON.stringify(listaJogadores));
}

//
// Função para verificar se a lista de jogadores existe no Local Storage
function verificarListaJogadores() {
  return localStorage.getItem('listaJogadores') !== null;
}

//
// Função para recuperar a lista de jogadores do Local Storage
function recuperarListaJogadores() {
  return JSON.parse(localStorage.getItem('listaJogadores'));
}

// Atualiza a lista de jogadores no Local Storage
// salvarListaJogadores(listaJogadores);

//
// FIM DO código gravar variável
//



// Outros Códigos by PM
function resetcalc() {
  // Remover a lista de jogadores do Local Storage
  localStorage.removeItem('listaJogadores');
  
  listaJogadores = [];
  listaJogadores = criaJogador(); // Cria a variável de jogadores
  // Se não existir, salva a lista de jogadores no Local Storage
  salvarListaJogadores(listaJogadores);
  window.location.reload();
}



//
// Função para retornar à Tabela de Totalização (sem reiniciar)
function voltartabela(){
   salvarListaJogadores(listaJogadores);
  //window.history.back();

  window.location.href = window.location.href = "index.html"; // // Redirecionar para a página "index.html"
}


function criaJogador(){
  var LOClistaJogadores = [];

  // Definir os nomes dos jogadores
  let nomesJogadores = [ "Unaldus", "Duclia", "Treviônius", "Quatila", "Cincelius", "Sextius", "Septinia", "Octávion"];
  
  // Loop para criar os jogadores e suas partidas
  for (let i = 0; i < nomesJogadores.length; i++) {
      let jogador = {
          id: i + 1,
          nome: nomesJogadores[i],
          partida: [],
          total: []
      };
  
      // Loop para criar as partidas de cada jogador
      for (let j = 0; j < 3; j++) {
          let partida = {
              campanha: [],
              mao: {certificado: 0, financiamento: 0, protecao: 0,
                  terremoto: 0, tesouro: 0, total: 0
              }
          };
  
          // Adicionar as campanhas à partida
          for (let cor of ["AMARELO", "VERMELHO", "AZUL", "VERDE"]) {
              partida.campanha.push({ cor: cor, cartas: [], mao: [], financiamento: 0, tesouro: 0, total: 0});
          }
  
          jogador.partida.push(partida);
      }
      LOClistaJogadores.push(jogador);
  }
  return(LOClistaJogadores); 
}


  var listaJogadores = [];
  listaJogadores=criaJogador();
  // Verifica se a lista de jogadores já existe no Local Storage
  if (verificarListaJogadores()) {
    // Se existir, recupera a lista de jogadores
    listaJogadores = recuperarListaJogadores();
  } else {
    //ola();
    listaJogadores=resetcalc();
  }
 
