/*
====================================
== eXp Calc                       ==
== MÓDULO: calc_mao               ==
==                                ==
== Data 27/03/2024                ==
== CALCULA A MÃO DO JOGADOR       ==
====================================
*/

//
// Faz um beep em caso de atingir o limite
function fazerBeep() {
  var audio = new Audio("img/beep.mp3"); // Substitua "caminho/para/o/beep.mp3" pelo caminho do arquivo de áudio
  audio.play();
}



//
// ATUALIZA O TOTAL DA MÃO
//
function RefreshMao() 
{
  Tot_Mao = 0
  Tot_Mao += Num_Certificado*-5
  Tot_Mao += Num_Financ*-10
  Tot_Mao += Num_Protecao*-10
  Tot_Mao += Num_Terremoto*10
  Tot_Mao += Num_Tesouro*-10

   var element = document.getElementById("totmao");
   element.innerHTML =  Tot_Mao;

   listaJogadores[NumJogador].partida[NumPartida].mao.certificado = Num_Certificado;
   listaJogadores[NumJogador].partida[NumPartida].mao.financiamento = Num_Financ;
   listaJogadores[NumJogador].partida[NumPartida].mao.protecao = Num_Protecao;
   listaJogadores[NumJogador].partida[NumPartida].mao.terremoto = Num_Terremoto;
   listaJogadores[NumJogador].partida[NumPartida].mao.tesouro = Num_Tesouro;
   listaJogadores[NumJogador].partida[NumPartida].mao.total = Tot_Mao;

   salvarListaJogadores(listaJogadores);
}


//
// DEFINE O Número de certificados local
function defCertificado(sentido) 
{
  Num_Certificado=Num_Certificado+sentido 
  if (Num_Certificado < 0) { Num_Certificado=0; fazerBeep(); }
  if (Num_Certificado > Lim_Certificado) { Num_Certificado=Lim_Certificado; fazerBeep(); }  
   // AUALIZANDO O MOSTRADOR DA Certificado
   var element = document.getElementById("numcertificado");
   element.innerHTML =  Num_Certificado;
   RefreshMao();
}


//
// DEFINE O Número de Financs local
function defFinanc(sentido) 
{
  Num_Financ=Num_Financ+sentido 
  if (Num_Financ < 0) { Num_Financ=0; fazerBeep(); }
  if (Num_Financ > Lim_Financ) { Num_Financ=Lim_Financ; fazerBeep(); }  
   // AUALIZANDO O MOSTRADOR DE FINANC
   var element = document.getElementById("numfinanc");
   element.innerHTML =  Num_Financ;
   RefreshMao();
}


//
// DEFINE O Número de Protecaos local
function defProtecao(sentido) 
{
  Num_Protecao=Num_Protecao+sentido 
  if (Num_Protecao < 0) { Num_Protecao=0; fazerBeep(); }
  if (Num_Protecao > Lim_Protecao) { Num_Protecao=Lim_Protecao; fazerBeep(); }  
   // AUALIZANDO O MOSTRADOR DE Protecao
   var element = document.getElementById("numprotecao");
   element.innerHTML =  Num_Protecao;
   RefreshMao();
}


//
// DEFINE O Número de Terremotos local
function defTerremoto(sentido) 
{
  Num_Terremoto=Num_Terremoto+sentido 
  if (Num_Terremoto < 0) { Num_Terremoto=0; fazerBeep(); }
  if (Num_Terremoto > Lim_Terremoto) { Num_Terremoto=Lim_Terremoto; fazerBeep(); }  
   // AUALIZANDO O MOSTRADOR DE Terremoto
   var element = document.getElementById("numterremoto");
   element.innerHTML =  Num_Terremoto;
   RefreshMao();
}


//
// DEFINE O Número de Tesouros local
function defTesouro(sentido) 
{
  Num_Tesouro=Num_Tesouro+sentido 
  if (Num_Tesouro < 0) { Num_Tesouro=0; fazerBeep(); }
  if (Num_Tesouro > Lim_Tesouro) { Num_Tesouro=Lim_Tesouro; fazerBeep(); }  
   // AUALIZANDO O MOSTRADOR DE Tesouro
   var element = document.getElementById("numtesouro");
   element.innerHTML =  Num_Tesouro;
   RefreshMao();
}


//
// MOSTRA PARDIDA E JOGADOR
function ShowPartida() 
{
// Escreve o numero da Partida no formulário
var element = document.getElementById("numpartida");
element.innerHTML =  (Number(StrNumPartida) + 1);

// Escreve o nome do  JOGADOR no formulário
var element = document.getElementById("nameplayer");
element.innerHTML =  listaJogadores[StrNumJogador].nome

 //Número do Jogador - Este campo foi retirado da tela
// var element = document.getElementById("numplayer");
// element.innerHTML =  listaJogadores[StrNumJogador].id

 //Número de certificados
 var element = document.getElementById("numcertificado");
 Num_Certificado = listaJogadores[NumJogador].partida[NumPartida].mao.certificado;
 element.innerHTML =  Num_Certificado

  //Número de financiamento
 var element = document.getElementById("numfinanc");
 Num_Financ = listaJogadores[NumJogador].partida[NumPartida].mao.financiamento;
 element.innerHTML =  Num_Financ
 
  //Número de protecao
  var element = document.getElementById("numprotecao");
  Num_Protecao = listaJogadores[NumJogador].partida[NumPartida].mao.protecao;
  element.innerHTML =  Num_Protecao

 //Número de terremoto
 var element = document.getElementById("numterremoto");
 Num_Terremoto = listaJogadores[NumJogador].partida[NumPartida].mao.terremoto;
 element.innerHTML =  Num_Terremoto

 //Número de tesouro
 var element = document.getElementById("numtesouro");
 Num_Tesouro = listaJogadores[NumJogador].partida[NumPartida].mao.tesouro;
 element.innerHTML =  Num_Tesouro


}


// Variáveis de limite para os ítens na mão
// Fazer uma tela de configuração 
// 
const Certificado_Max=6
const Financ_Max=6
const Protecao_Max=6
const Terremoto_Max=6
const Tesouro_Max= 6

// Variáveis
var Lim_Certificado=Certificado_Max  // Número Máximo de certificados
var Lim_Financ=Financ_Max            // Número Máximo de Financs
var Lim_Protecao=Protecao_Max        // Número Máximo de Protecaos
var Lim_Terremoto=Terremoto_Max      // Número Máximo de Terremotos
var Lim_Tesouro=Tesouro_Max          // Número Máximo de Tesouros

var Num_Certificado=0;               // Número de certificados local
var Num_Financ=0;                    // Número de Financs local
var Num_Protecao=0;                  // Número de Protecaos local
var Num_Terremoto=0;                 // Número de Terremotos local
var Num_Tesouro=0;                   // Número de Tesouros local



var Name_Player="Fulano";  // Nome do Jogado
var Tot_Mao = 0     // Variável de totalização da tela

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

const NomedaCampanha = ["AMARELO","VERMELHO","AZUL","VERDE"];

listaJogadores = recuperarListaJogadores();
LOCALlistaJogadores = listaJogadores;

ShowPartida();
RefreshMao();