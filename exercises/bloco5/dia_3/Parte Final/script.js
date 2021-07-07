function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let getUl = document.querySelector('#days');
        let createLi = document.createElement('li');
        createLi.classList.add('day');
        createLi.innerText = dezDaysList[index];

        if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
            createLi.classList.add('holiday');
        };
        if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){    
            createLi.classList.add('friday');
        };
        
        getUl.appendChild(createLi);
        
    }
};
createDays();

function holydays(buttonName){
    let createButtonHoliday = document.createElement('button');
    createButtonHoliday.innerHTML = buttonName;
    createButtonHoliday.id = 'btn-holiday';
    let getButtonsContainer = document.querySelector('.buttons-container');
    getButtonsContainer.appendChild(createButtonHoliday);
};
holydays('Feriados');

function addButtonClick(){
    let getButtonHolyday = document.querySelector('#btn-holiday');
    getButtonHolyday.addEventListener('click', function(event){
    let getDays = document.querySelectorAll('.holiday');
    for(let index = 0; index < getDays.length; index += 1){
        if(getDays[index].style.backgroundColor === 'yellow'){
            getDays[index].style.backgroundColor = 'rgb(238,238,238)';
        }else{
            getDays[index].style.backgroundColor = 'yellow';
        }
       
    }
    })
    
};
addButtonClick();

function createButtonFriday(day){
    let getDivButtonsContainer = document.querySelector('.buttons-container');
    let buttonFriday = document.createElement('button');
    buttonFriday.id = 'btn-friday';
    buttonFriday.innerText = day;
    getDivButtonsContainer.appendChild(buttonFriday);
};
createButtonFriday('Sexta-Feira');

function alterTextFridays(fridays){
    let getButtonFriday = document.querySelector('#btn-friday');
    let getDaysFriday = document.querySelectorAll('.friday');
    getButtonFriday.addEventListener('click', function(){
        for(let index = 0; index < getDaysFriday.length; index += 1){
            if(getDaysFriday[index].innerHTML !== 'Sextou !'){
                getDaysFriday[index].innerHTML = 'Sextou !'
            }else{
                getDaysFriday[index].innerHTML = fridays[index];
            }
        }
    })
};
alterTextFridays([ 4, 11, 18, 25 ]);

function mouseOver(){
    let getDays = document.querySelector('#days');
    getDays.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
    } )
};

mouseOver();

function mouseOut(){
    let getDays = document.querySelector('#days');
    getDays.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
    } )
};

mouseOut();

function addTask(nameTask){
    let getElementSpan = document.createElement('span');
    getElementSpan.innerHTML = nameTask;
    let getMyTasks = document.querySelector('.my-tasks');
    getMyTasks.appendChild(getElementSpan);
}
addTask('lavar');
