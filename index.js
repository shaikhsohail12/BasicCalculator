

function Enter1(value) {
    document.getElementById('text1').value += value;
}


function clr() {
    document.getElementById('text1').value = '';
}

function calcu(){
    document.getElementById('text1').value = eval(document.getElementById('text1').value);
}