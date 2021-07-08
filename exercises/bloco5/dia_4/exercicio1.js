window.onload = function(){

    function alterColorPage() {
        let getButtonColor = document.querySelector('.favorite-styled');
        let getInputColor = document.querySelector('.input');
        getButtonColor.addEventListener('click', function () {
            if (getInputColor.value !== '') {
                document.body.style.backgroundColor = getInputColor.value;
                localStorage.setItem('page-color', getInputColor.value);
                getInputColor.value = '';
            }else{
                alert('O campo de cor da pagina não pode estar vazio');
            }
    
        })
    }
    alterColorPage();
    
    function alterColorText() {
        let getButtonText = document.querySelector('.button-alter-color-font');
        let getInputColorText = document.querySelector('.alter-color-font');
        let getText = document.querySelector('.paragraph');
        getButtonText.addEventListener('click', function () {
            if (getInputColorText.value !== '') {
                getText.style.color = getInputColorText.value;
                localStorage.setItem('font-color', getInputColorText.value);
                getInputColorText.value = '';
            }else{
                alert('O campo de cor de text não pode estar vazio');
            }
    
        })
    }
    alterColorText();

    function alterSizeText() {
        let getButtonSize = document.querySelector('.button-font');
        let getInputFontSize = document.querySelector('.alter-font');
        let getText = document.querySelector('.paragraph');
        getButtonSize.addEventListener('click', function () {
            if (getInputFontSize.value !== '') {
                getText.style.fontSize = getInputFontSize.value + 'px';
                localStorage.setItem('font-size', getInputFontSize.value + 'px');
                getInputFontSize.value = '';
            }else{
                alert('O campo de tamanho de fonte não pode estar vazio');
                getInputFontSize.value = '';
            }
    
        })
    }
    alterSizeText();



    let savedBackGroundColor = localStorage.getItem('page-color');
    document.body.style.backgroundColor = savedBackGroundColor;
   
    let savedColorText = localStorage.getItem('font-color');
    let getText = document.querySelector('.paragraph');
    getText.style.color = savedColorText;

    let savedFontSize = localStorage.getItem('font-size');
    let getFontSize = document.querySelector('.paragraph');
    getFontSize.style.fontSize = savedFontSize;
}

