/*
====================================
== eXp Calc                       ==
== Totalização e Calculadora do   ==
== jogo eXploradores              ==
== MÓDULO: expdalc                ==
== Roberto Wollen                 ==
== Data 08/04/2024                ==
====================================
*/

// DEBUG
function ola() 
{
  alert('PASSEI AQUI');
  //debugger;
}



 // ======================================================================
 // Outras functions da página
 //


 function SalvarNome(elemento, nome, index) {
  // Atualiza o conteúdo da célula com o nome digitado
  elemento.textContent = nome;
  // Salva o nome do usuário no Array
  listaJogadores[index].nome = nome;
  salvarListaJogadores(listaJogadores);
}

function ajuda1(){
  window.location.href = "ajuda1.html";
}



 function EditarNome(elemento, index) {
  // Criar um elemento input
  var inputNome = document.createElement("input");
  inputNome.type = "text";
  inputNome.value = elemento.textContent; // Define o valor inicial como o conteúdo atual da célula
  inputNome.style.width = "100%"; // Ajusta a largura para preencher toda a célula

  // Substituir o conteúdo da célula pelo campo de entrada
  elemento.innerHTML = ""; // Limpa o conteúdo atual da célula
  elemento.appendChild(inputNome); // Adiciona o campo de entrada à célula

  // Define o foco no campo de entrada
  inputNome.focus();

  // Define um evento para detectar quando o campo de entrada perde o foco
  inputNome.addEventListener("blur", function(event) {
    // Ao perder o foco, salva o nome digitado
    SalvarNome(elemento, inputNome.value, index);
  });

}






function AtualizaNumeros() {
   let elementosComIdDeTresDigitos = document.querySelectorAll('[id^="vlr"]'); 

   // Itera sobre os elementos encontrados
   elementosComIdDeTresDigitos.forEach(elemento => {
    // Obtém o ID do elemento
    let id = elemento.id;
    // Obtém os índices para acessar a lista de jogadores, partidas e cores
    //let jogadorIndex  = id.substring(3, 4);
    let jogadorIndex  = parseInt(id.substring(3, 4));
    let partidaIndex  = parseInt(id.substring(4, 5));
    let campanhaIndex = parseInt(id.substring(5, 6));
//console.log(jogadorIndex,partidaIndex,campanhaIndex);
    // Verifica se campanhaIndex é igual a 4
    if (campanhaIndex === 4) {
      elemento.innerHTML = listaJogadores[jogadorIndex].partida[partidaIndex].mao.total;
       return; // Pula para a próxima iteração do loop
    }
    // Define o conteúdo do elemento com base nos índices
    elemento.innerHTML = listaJogadores[jogadorIndex].partida[partidaIndex].campanha[campanhaIndex].total;
});
}



// Função para calcular o total
function calcularEAtualizarTotal(subPrefixo, totPrefixo) {
  // Selecionar elementos com IDs começando por subPrefixo
  let elementosComIdSub = document.querySelectorAll('[id^="' + subPrefixo + '"]');
  let total = 0;

  // Iterar sobre os elementos encontrados
  elementosComIdSub.forEach(elemento => {
      // Obter o valor do elemento e convertê-lo para um número
      let valor = parseInt(elemento.textContent);
      
      // Verificar se o valor é um número válido
      if (!isNaN(valor)) {
          // Adicionar o valor ao total
          total += valor;
      }
  });
  // Atualizar o elemento de total com o valor calculado
  let element = document.getElementById(totPrefixo);
  element.innerHTML = total;
}




//
// ROTINA QUE CHAMA OS ATUALIZADORES DE TOTAIS E SUB-TOTAIS
//
function AtualizaTotal() {

// Loop para chmar o calcular dos totais para os prefixos de ID específicos
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 3; j++) {
      let subPrefixo = i.toString() + j.toString();
      let totPrefixo = "sub" + subPrefixo;
      calcularEAtualizarTotal(subPrefixo, totPrefixo);
  }
}


// Calcular e atualizar os totais para os prefixos de ID específicos
for (let i = 0; i < 8; i++) {
  let subPrefixo = "sub" + i;
  let totPrefixo = "tot" + i;
  calcularEAtualizarTotal(subPrefixo, totPrefixo);
}
 
}



// ATUALIZA OS VALORES NA TABELA
//
function AtualizaTabela() {
  // Nomes dos Jogadores
  
  var elementos = ["jog1", "jog2", "jog3", "jog4", "jog5", "jog6", "jog7", "jog8"];

  // Loop para preencher os campos nos elementos
  elementos.forEach(function(id, index) {
    // Obtém o elemento pelo ID
    var element = document.getElementById(id);
    // Verifica se o elemento existe
    if (element) {
      // Verifica se o jogador correspondente existe na lista de jogadores
      if (listaJogadores[index]) {
        // Preenche o campo com o nome do jogador
        element.innerHTML = listaJogadores[index].nome;
      } else {
        // Se o jogador não existir na lista, limpa o conteúdo do campo
        element.innerHTML = "";
      }
    }
  });
  }


listaJogadores = recuperarListaJogadores();

console.log(listaJogadores)

AtualizaNumeros();
AtualizaTabela();
AtualizaTotal();

