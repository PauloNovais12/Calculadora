let entrada= document.querySelector('input[name=frente]');
let c= document.getElementById('clear');
let um= document.getElementById('um');
let dois= document.getElementById('dois');
let tres= document.getElementById('tres');
let quatro= document.getElementById('quatro');
let cinco= document.getElementById('cinco');
let seis= document.getElementById('seis');
let sete= document.getElementById('sete');
let oito= document.getElementById('oito');
let nove= document.getElementById('nove');
let zero= document.getElementById('zero');
let multiplica= document.getElementById('multiplica');
let divide= document.getElementById('divisao');
let menos= document.getElementById('menos');
let ponto= document.getElementById('ponto');
let igual= document.getElementById('igual');
let soma= document.getElementById('soma');
let equacao='';

um.onclick=function(){
    construtor(1);
}
dois.onclick=function(){
    construtor(2);
}
tres.onclick=function(){
    construtor(3);
}
quatro.onclick=function(){
    construtor(4);
}
cinco.onclick=function(){
    construtor(5);
}
seis.onclick=function(){
    construtor(6);
}
sete.onclick=function(){
    construtor(7);
}
oito.onclick=function(){
    construtor(8);
}
nove.onclick=function(){
    construtor(9);
}
zero.onclick=function(){
    construtor(0);
}
menos.onclick= function(){
    construtor("-");
}
divide.onclick= function(){
    construtor("/")
}
multiplica.onclick= function(){
    construtor("*")
}
ponto.onclick= function(){
    construtor(".")
}
soma.onclick= function(){
    construtor("+")
}
function construtor(valor){
    return entrada.value+=valor;
}
igual.onclick= function(){
    equacao+=entrada.value;
    return entrada.value= eval(equacao);
}


