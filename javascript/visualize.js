
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;   
}

function disableSortingBtn(){
    document.querySelector(".bubble-btn").disabled = true;
    document.querySelector(".insertion-btn").disabled = true;
    document.querySelector(".merge-btn").disabled = true;
    document.querySelector(".quick-btn").disabled = true;
    document.querySelector(".selection-btn").disabled = true;
}

function enableSortingBtn(){
    document.querySelector(".bubble-btn").disabled = false;
    document.querySelector(".insertion-btn").disabled = false;
    document.querySelector(".merge-btn").disabled = false;
    document.querySelector(".quick-btn").disabled = false;
    document.querySelector(".selection-btn").disabled = false;
}

function disableSizeSlider(){
    document.querySelector("#arr_size").disabled = true;
}

function enableSizeSlider(){
    document.querySelector("#arr_size").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector(".create").disabled = true;
}

function enableNewArrayBtn(){
    document.querySelector(".create").disabled = false;
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let arraySize = document.querySelector('#arr_size');

arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector('#arr_speed');

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

let array = [];

createNewArray();

function createNewArray(noOfBars = 60) {
    deleteChild();

    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".create");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
