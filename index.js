import { Financiamento } from "./financiamento.js";
import { FinanciamentoCarencia } from "./financiamentocarencia.js"  ;
'use strict';

const comCarencia = document.getElementById('comCarencia');
const listaSuspensa = document.getElementById('listaSuspensa');
const corpoTabela = document.getElementById('corpoTabela');
const botaoCalcular = document.getElementById('botaoCalcular');
const textoValor = document.getElementById('textoValor');
const textoEntrada = document.getElementById('textoEntrada');
const textoTaxaJuros = document.getElementById('textoTaxaJuros');
const textoPrazo = document.getElementById('textoPrazo');

function limpaCorpoDaTabela(){
  while(corpoTabela.firstChild){
    corpoTabela.removeChild(corpoTabela.firstChild);
  }
}

comCarencia.addEventListener('change', function(){
  if(this.checked){
    listaSuspensa.removeAttribute('hidden')
  }else{
    listaSuspensa.setAttribute('hidden', 'hidden')
  }
});

botaoCalcular.addEventListener('click', function(){
  limpaCorpoDaTabela();
  const valor = parseFloat(textoValor.value);
  const entrada = parseFloat(textoEntrada.value);
  const taxaJuros = parseFloat(textoTaxaJuros.value);
  const prazo = parseFloat(textoPrazo.value);
  let simulacao;
  if( comCarencia.checked){
    const carencia = parseInt(listaSuspensa.value)
    simulacao = new FinanciamentoCarencia(valor, entrada, taxaJuros, prazo, carencia)
  } else{
    simulacao = new Financiamento (valor, entrada, taxaJuros, prazo);
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
  }
});