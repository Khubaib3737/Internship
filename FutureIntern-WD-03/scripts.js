let display = document.getElementById('display');

function clearAll(){
    display.innerText = '';
}
function delLast(){
    if(display.innerText === 'Error')
    {
        clearAll();
    }
    else{
        display.innerText = display.innerText.slice(0,-1);
    }
}
function addToDisplay(val){
    if (display.innerText === 'Error' || display.innerText === '') {
        display.textContent = '';
    }
    display.innerText += val;
}
function calResult(){
    try{
        display.innerText = eval(display.innerText);
    }
    catch{
        display.innerText = 'Error';
    }
}