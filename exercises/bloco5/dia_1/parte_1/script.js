document.querySelector('header').style.background = 'green';
document.querySelectorAll('section')[0].style.background = 'lightcoral';
document.querySelectorAll('section')[1].style.background = 'yellow';
function alterBackgroundSection (elements,color){
    let backgroundSection = document.querySelectorAll(elements);
    for(let index = 0; index < backgroundSection.length; index += 1){
        backgroundSection[index].style.background = color; 
    }
}
alterBackgroundSection('.no-emergency-tasks div h3', 'black');

function alterBackgroundEmergency (elements,color){
    let alterBackground = document.querySelectorAll(elements);
    for(let index = 0; index < alterBackground.length; index += 1){
        alterBackground[index].style.background = color; 
    }
}
alterBackgroundEmergency('.emergency-tasks div h3', 'cornflowerblue');
document.querySelector('#footer-container').style.background = 'black';