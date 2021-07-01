function alterText(){
    let alterP = document.getElementsByTagName('p')[1];
    alterP.innerHTML = 'Rico';
}
alterText();

function alterMainContent(){
    let alterMain = document.getElementsByClassName('main-content')[0];
    alterMain.style.background = 'rgb(76,164,109';
}
alterMainContent();

function alterMainCenter(){
    let alterCenter = document.getElementsByClassName('center-content')[0];
    alterCenter.style.background = 'white';
}
alterMainCenter();

function alterTag(){
    let alterH1 = document.getElementsByTagName('h1')[0];
    alterH1.innerText = 'Exercício 5.1 - JavaScript';
}
alterTag();