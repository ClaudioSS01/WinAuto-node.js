const fs = require('fs');
const {
  exec
} = require('child_process');

function cmd(comandoDeCmd = "tree") {
  exec(comandoDeCmd, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}




function setaParaCima() {
  let comando = `echo CreateObject("WScript.Shell").SendKeys "%{UP}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs`
  cmd(comando)
}

function setaParaBaixo() {
  let comando = `echo CreateObject("WScript.Shell").SendKeys "%{DOWN}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs`
  cmd(comando)
}

function setaParaDireita() {
  let comando = `echo CreateObject("WScript.Shell").SendKeys "%{RIGHT}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs`
  cmd(comando)
}

function setaParaEsquerda() {
  let comando = `echo CreateObject("WScript.Shell").SendKeys "%{LEFT}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs`
  cmd(comando)
}

function pressione(tecla) {

  if (tecla == "enter") {
    tecla = "{enter}"
  }
  let comando = `echo CreateObject("WScript.Shell").SendKeys "${tecla}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs`
  cmd(comando)
}

function pressioneControl(tecla) {

  let comando = `echo CreateObject("WScript.Shell").SendKeys "^{${tecla}}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs`
  cmd(comando)
}

function pressioneAlt(tecla) {

  let comando = `echo CreateObject("WScript.Shell").SendKeys "%{${tecla}}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs`
  cmd(comando)
}

function pressioneAltShift(tecla) {

  let comando = `echo CreateObject("WScript.Shell").SendKeys "%+{${tecla}}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs`
  cmd(comando)
}

function pressioneControlShift(tecla) {

  let comando = `echo CreateObject("WScript.Shell").SendKeys "+^{${tecla}}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs`
  cmd(comando)
}

function pressioneControlAlt(tecla) {

  let comando = `echo CreateObject("WScript.Shell").SendKeys "%^{${tecla}}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs`
  cmd(comando)
}

function pressioneWindowsR(tecla) {

  let comando = `start Shell:::{2559a1f3-21d7-11d4-bdaf-00c04f60b9f0}`
  cmd(comando)
}

function pressioneWindowsD(tecla) {

  let comando = `start shell:::{3080F90D-D7AD-11D9-BD98-0000947B0257}`
  cmd(comando)
}

function tab() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{tab}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}

function del() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{del}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}

function delete_() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{delete}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}

function enter() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{enter}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}

function espaco() {
  cmd('echo CreateObject("WScript.Shell").SendKeys " " > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}

function printscript() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{PRTSR}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}

function f1() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F1}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f2() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F2}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f3() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F3}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f4() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F4}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f5() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F5}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f6() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F6}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f7() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F7}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f8() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F8}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f9() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F9}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f10() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F1}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f11() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F11}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}


function f12() {
  cmd('echo CreateObject("WScript.Shell").SendKeys "{F12}" > tmp.vbs && cscript tmp.vbs && del tmp.vbs')
}








function log(texto) {
  console.log(texto);
}



// Obtém a data/hora atual
let data = new Date();

// Guarda cada pedaço em uma variável
let dia     = data.getDate();           // 1-31
let dia_sem = data.getDay();            // 0-6 (zero=domingo)
let mes     = data.getMonth();          // 0-11 (zero=janeiro)
let ano2    = data.getYear();           // 2 dígitos
let ano4    = data.getFullYear();       // 4 dígitos
let hora    = data.getHours();          // 0-23
let min     = data.getMinutes();        // 0-59
let seg     = data.getSeconds();        // 0-59
let mseg    = data.getMilliseconds();   // 0-999
let tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
const hoje = dia + '/' + (mes+1) + '/' + ano4;
let str_hora = hora + ':' + min + ':' + seg;

let agora = hoje +"_"+str_hora

// Mostra o resultado
console.log('Hoje é ' + hoje + ' às ' + str_hora);

function criarArquivo(tituloDoArquivo,Conteudo){
  fs.writeFile(tituloDoArquivo, Conteudo, err => {
    if (err) throw err;
  });
}


