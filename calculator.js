let runningTotal = 0;
let buffer = '0';

const results = document.querySelector('#results')









function buttonClick (value) {
    if (isNaN(value)) {
        handleSymbol(value);
    }else {
        handleNumber;
    }
     results.innerText = buffer;
}

function handleNumber(numberString){
    if (buffer === '0') {
    buffer = numberString;
    }else {
        buffer += numberString;
    }
    console.log('buffer', buffer)
    results.innerText = buffer;
}

function init() {
    document.querySelector('#number')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })
}
init();