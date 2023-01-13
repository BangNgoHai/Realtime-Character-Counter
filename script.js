const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');


textareaEl.onkeyup = updateCounter;

if(!textareaEl.value){
    totalCounterEl.innerText = "0";
    remainingCounterEl.innerText = textareaEl.getAttribute("maxlength");
}

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length    
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}


