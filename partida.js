/*
===================================
== eXp Calc                      ==
== MÓDULO: partida               ==
== Data 27/03/2024               ==
== PARTIDA (COR)                 ==
===================================
*/





// MOSTRA O TEXTO PASSEI AQUI  (DEBUG)
//
function ola() 
{
  alert('PASSEI AQUI');
}




// Faz um beep em caso de atingir o limite
//
function fazerBeep() {
  var audio = new Audio("img/beep.mp3"); // Substitua "caminho/para/o/beep.mp3" pelo caminho do arquivo de áudio
  audio.play();
}


// Atribuindo valores aos elementos do array
//
function InicializaVariaves()
{
CartasCampanha[0]  = 0;
CartasCampanha[1]  = 0;
CartasCampanha[2]  = 0;
CartasCampanha[3]  = 0;
CartasCampanha[4]  = 0;
CartasCampanha[5]  = 0;
CartasCampanha[6]  = 0;
CartasCampanha[7]  = 0;
CartasCampanha[8]  = 0;
CartasCampanha[9]  = 0;
CartasCampanha[10] = 0;
CartasCampanha[11] = 0; // Certificado
CartasCampanha[12] = 0; // Proteção

NumTotFinanciamentos=0;  // Número Total de Financiamentos
NumTotTesouros=0;        // Número Total de Tesouros
}

//
// Atualiza a varialvel listaJogadores
function AtualizaVariavel() {

var CartasValidas = CartasCampanha.filter(numero => numero > 0);
var StrCartasCampanha = CartasValidas.join(', ');

if (StrCartasCampanha === null) {
   return;
}

if (NumCampanha >= 0 && NumCampanha <= 3)
{
  // 0 a 3 
   listaJogadores[NumJogador].partida[NumPartida].campanha[NumCampanha].cartas=StrCartasCampanha;
   listaJogadores[NumJogador].partida[NumPartida].campanha[NumCampanha].financiamento=NumFinanc;
   listaJogadores[NumJogador].partida[NumPartida].campanha[NumCampanha].tesouro=NumTesouro;
   listaJogadores[NumJogador].partida[NumPartida].campanha[NumCampanha].total=TotalCor;
}
  salvarListaJogadores(listaJogadores)
}


// Atualiza as cartas na tela a partir da variável LlistaJogadores
function RemontaTela() {
  if (StrNumCampanha === '0') {
      CorCamp = '#FFFF00'; // Amarelo
  } else if (StrNumCampanha === '1') {
     CorCamp = '#ff8555'; // Vermelho
  } else if (StrNumCampanha === '2') {
      CorCamp = '#00ffff'; // Azul
  } else if (StrNumCampanha === '3') {
      CorCamp = '#00ff00'; // Verde
  } else {
      CorCamp = '#FFFFFF'; // Cor padrão, caso arg3 não corresponda a nenhum dos valores especificados
  } 
  
  // TROCA A COR DO FORMULÁRIO
  var elementos = document.getElementsByClassName('C0');
  for (var i = 0; i < elementos.length; i++) 
      {
        elementos[i].style.backgroundColor = CorCamp; // Alterar a cor
      };


  let elementosNUM = document.querySelectorAll('[id^="num"]');
  let arrayElementos = Array.from(elementosNUM); // Converter NodeList em um array
  arrayElementos.sort(function(a, b) {
      let idA = parseInt(a.id.replace('num', '')); // Extrair o número do ID
      let idB = parseInt(b.id.replace('num', '')); // Extrair o número do ID
      return idA - idB; // Comparar numericamente
  });
  elementosNUM = arrayElementos;

  // Itera sobre os elementos encontrados
  for (let elemento of elementosNUM) {
    // Obtém o ID do elemento
    let id = elemento.id;
    // Obtém os índices para acessar a lista de jogadores, partidas e cores
    var NumeroNaTela  = id.substring(3);

    //if (LOCALlistaJogadores[NumJogador].partida[NumPartida].campanha[NumCampanha].cartas.split(', ').includes(NumeroNaTela))
    if (LOCALlistaJogadores[NumJogador].partida[NumPartida].campanha[NumCampanha].cartas.includes(NumeroNaTela.toString()))
    {
      // Define o conteúdo do elemento com base nos índices
      elemento.innerHTML = "✔";
      CartasCampanha[NumeroNaTela]=0;
      ToggleNumber(NumeroNaTela);
    }
   }

   // ATUALIZA TESOURO, FINANCIAMENTO E TOTAL
   // Atualiza as variáveis Globais
   NumFinanc  = LOCALlistaJogadores[NumJogador].partida[NumPartida].campanha[NumCampanha].financiamento;
   NumTesouro = LOCALlistaJogadores[NumJogador].partida[NumPartida].campanha[NumCampanha].tesouro; 
   TotalCor   = LOCALlistaJogadores[NumJogador].partida[NumPartida].campanha[NumCampanha].total;
 
   // Atualiza as Variáveis NumTot...
   NumTotFinanciamentos=NumFinanc;          
   NumTotTesouros=NumTesouro;                
  // Atualiza os elementos da Tela
  var element = document.getElementById("numtesouro");
  element.innerHTML = NumTesouro
  var element = document.getElementById("numfinanciamento");
  element.innerHTML = NumFinanc;
  var element = document.getElementById("totaldacor");
  element.innerHTML = TotalCor;
}


//
// REFRESH A PARTIDA
var CorCamp = "FFFFFF";
function RefreshPartida() {
// Escreve a cor da campanha no formulário
var element = document.getElementById("campanha");
element.innerHTML =  NomedaCampanha[StrNumCampanha];

// Escreve o numero da Partida no formulário
var element = document.getElementById("partida");
element.innerHTML =  (Number(StrNumPartida) + 1);

// Escreve o nome do  JOGADOR no formulário
var element = document.getElementById("nameplayer");
element.innerHTML =  listaJogadores[StrNumJogador].nome


  // TOTALIZA O VALOR DAS CARTAS
  TotalCor = 0;
  // Loop for para percorrer todos os elementos do array e somá-los
  for (var i = 0; i < (CartasCampanha.length -2); i++) // -2 para não somar Certificado e Proteção 
    { TotalCor += CartasCampanha[i];  }

    // SUBITRAI O CUSTO DA CAMPARA (-20 PONTOS)
    if (TotalCor === 0 && CartasCampanha[11] === 0 && CartasCampanha[12] === 0 && NumTotFinanciamentos === 0 && NumTotTesouros === 0) 
    {TotalCor =0; }  else{  TotalCor -=20; }  
  

  // Calcula Financiamentos
  if (NumFinanc>0);  
     {TotalCor = TotalCor+(TotalCor*NumFinanc)};
  //Calcula NumTotTesouros        //
  if (NumTotTesouros>0) 
     {TotalCor = TotalCor*(NumTotTesouros*3)};

     if (TotalCor === null) {TotalCor = 0;}
  var element = document.getElementById("totaldacor");
  element.innerHTML =  TotalCor;

  // SE A CARTA ESTÁ SELECIONA O CAMPO "✔" FICA VERMELHO SENÃO "✘" PRETO
  //
  for (let i = 2; i <= 12; i++) {
    let element = document.getElementById("num" + i);
    if (!element) continue; // Pula para a próxima iteração se o elemento não existir
    if (element.innerHTML === "✔") {
        element.style.color = "red";
    } else if (element.innerHTML === "✘") {
        element.style.color = "black";
    }
}

  AtualizaVariavel();
}


//
// DEFINE O Número de Financs local
function defFinancPartida(sentido) 
{
  NumFinanc=NumFinanc+sentido 
  if (NumFinanc < 0) { NumFinanc=0; fazerBeep(); }
  if (NumFinanc > LimFinanc) { NumFinanc=LimFinanc; fazerBeep();} 
  NumTotFinanciamentos=NumFinanc; 
   // AUALIZANDO O MOSTRADOR DE FINANC
   var element = document.getElementById("numfinanciamento");
   element.innerHTML =  NumFinanc;
   RefreshPartida();
}


//
// DEFINE O Número de Tesouros local
function defTesouroPartida(sentido) 
{
  NumTesouro=NumTesouro+sentido 
  if (NumTesouro < 0) { NumTesouro=0; fazerBeep(); }
  if (NumTesouro > LimTesouro) { NumTesouro=LimTesouro; fazerBeep(); }  
  NumTotTesouros=NumTesouro;        
   // AUALIZANDO O MOSTRADOR DE Tesouro
   var element = document.getElementById("numtesouro");
   element.innerHTML =  NumTesouro;
   RefreshPartida();
}


//
// Chama a função pra marcar os númmeros vindo do HTML
function marcanum(clicado){
  ToggleNumber(clicado);
  RefreshPartida();
}


//
// MARCA OS NÚMEROS CLICADOS
function ToggleNumber(clicado) {
  var Numero_Clicado = parseInt(clicado);
  var element = document.getElementById("num" + Numero_Clicado);
  
  if (!element) {
    fazerBeep();
    return;
  }

  if (CartasCampanha[Numero_Clicado] == 0) {
    CartasCampanha[Numero_Clicado] = Numero_Clicado;
    element.innerHTML = "✔";
  } else {
    CartasCampanha[Numero_Clicado] = 0;
    element.innerHTML = "✘";
  }
}




// 
// Variáveis de limite para os ítens na mão
// Fazer uma tela de configuração 
const Financ_Max=6          // Número Máximo de Financiamentos
const Tesouro_Max=6         // Número Máximo de Tesouros
var LimFinanc=Financ_Max    // Número Máximo de Financs
var LimTesouro=Tesouro_Max  // Número Máximo de Tesouros

// Variáveis
var NumTesouro= 0;            // Número de Tesouros local
var NumFinanc = 0;            // Número de Financs local
var TotalCor  = 0;            // VAriável para somar as cartas de cor


//
// Outras Varíáveis
//
var CartasCampanha = new Array(12);  // Array para os valores das cartas
var NumTotFinanciamentos=0;          // Número Total de Financiamentos
var NumTotTesouros=0;                // Número Total de Tesouros


// Extrair parâmetros da URL
// 000 = Jogador=0, Partida=0, Campanha=0
const urlParams = new URLSearchParams(window.location.search);
var StrNumJogador  = urlParams.get('arg1'); // String Jogador
var StrNumPartida  = urlParams.get('arg2'); // String Partida
var StrNumCampanha = urlParams.get('arg3'); // String Campanha
var NumJogador  = Number(StrNumJogador);    // Número do Jogador
var NumPartida  = Number(StrNumPartida);    // Número da Partida
var NumCampanha = Number(StrNumCampanha);   // Número da Campanha
var Numero_Clicado=0;                       // Número Clicado pelo usuário

const NomedaCampanha = ["AMARELA","VERMELHA","AZUL","VERDE"];

listaJogadores = recuperarListaJogadores();
LOCALlistaJogadores = listaJogadores;

InicializaVariaves();
RemontaTela(); // Remonta a tela a partir da variável.
RefreshPartida();
