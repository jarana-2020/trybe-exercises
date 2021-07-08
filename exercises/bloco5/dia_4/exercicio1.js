window.onload = function () {

    function alterColorPage() {
        let getButtonColor = document.querySelector('.favorite-styled');
        let getInputColor = document.querySelector('.input');
        getButtonColor.addEventListener('click', function () {
            if (getInputColor.value !== '') {
                document.body.style.backgroundColor = getInputColor.value;
                localStorage.setItem('page-color', getInputColor.value);
                getInputColor.value = '';
            } else {
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
            } else {
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
            } else {
                alert('O campo de tamanho de fonte não pode estar vazio');
                getInputFontSize.value = '';
            }

        })
    }
    alterSizeText();

    function alterSpacing() {
        let getButtonSpacing = document.querySelector('.button-spacing');
        let getInputSpacing = document.querySelector('.alter-spacing');
        let getText = document.querySelector('.paragraph');
        getButtonSpacing.addEventListener('click', function () {
            if (getInputSpacing.value !== '' && parseInt(getInputSpacing.value) >= 20) {
                getText.style.lineHeight = getInputSpacing.value + 'px';
                localStorage.setItem('line-height', getInputSpacing.value + 'px');
                getInputSpacing.value = '';
            } else {
                alert('O campo de tamanho de espaçamento não pode estar vazio e deve ser no minimo 20');
                getInputSpacing.value = '';
            }

        })
    }
    alterSpacing();

    function setFontFamily(font){
        let getText = document.querySelector('.paragraph');
        getText.style.fontFamily = font;
        localStorage.setItem('font-family', font);
    };

    let getButtonsFontFamily = document.querySelectorAll('.fiveth-div>button');
    for (let index = 0; index < getButtonsFontFamily.length; index +=1) {
        getButtonsFontFamily[index].addEventListener('click', function(event){
            setFontFamily(event.target.innerHTML);
        })
    };



    let savedBackGroundColor = localStorage.getItem('page-color');
    document.body.style.backgroundColor = savedBackGroundColor;

    let savedColorText = localStorage.getItem('font-color');
    let getText = document.querySelector('.paragraph');
    getText.style.color = savedColorText;

    let savedFontSize = localStorage.getItem('font-size');
    let getFontSize = document.querySelector('.paragraph');
    getFontSize.style.fontSize = savedFontSize;

    let savedLineHeight = localStorage.getItem('line-height');
    let getLineHeight = document.querySelector('.paragraph');
    getLineHeight.style.lineHeight = savedLineHeight;

    let savedFontFamily = localStorage.getItem('font-family');
    let getFontFamily = document.querySelector('.paragraph');
    getFontFamily.style.fontFamily = savedFontFamily;


}

