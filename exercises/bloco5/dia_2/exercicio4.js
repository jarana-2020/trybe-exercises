const getFirstChildOfChild = document.querySelector('#primeiroFilhoDoFilho');
const setChildFirstChildOfChild = document.createElement('div');
setChildFirstChildOfChild.id = 'ChildFirstChildOfChild';
getFirstChildOfChild.appendChild(setChildFirstChildOfChild);

setChildFirstChildOfChild.parentElement.parentElement.nextElementSibling;
