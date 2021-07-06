const father = document.getElementById('pai');

for( let index = father.childNodes.length - 1; index >= 0; index -= 1){
    const currentValue = father.childNodes[index];
    if(currentValue.id !== 'elementoOndeVoceEsta'){
        currentValue.remove();
    }
}
const secondChild = document.getElementById('segundoEUltimoFilhoDoFilho');
secondChild.remove();