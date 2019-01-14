// ===================================
// Attempt 2
// ===================================

let localStorage = window.localStorage;
let inputText = document.querySelector('input[type="text"]');
let inputForm = document.querySelector('form');
let pastryList = document.querySelector('ul');
// window.localStorage.setItem('pastryList', ''); this resets the pastryListitem to null

function addListItem() {
    if (!localStorage.getItem('pastryList')) {
        localStorage.setItem('pastryList', '');
    } 
    let list = localStorage.getItem('pastryList');
    list += `<li><input type='checkbox'>${inputText.value}</li>`;
    localStorage.setItem('pastryList', list);
}

function updateList() {
    pastryList.innerHTML = localStorage.getItem('pastryList');
}

inputForm.addEventListener('submit', addListItem)
pastryList.addEventListener('change', function(e) {
    window.localStorage.setItem('pastryList', pastryList.innerHTML);
})
setTimeout(updateList, 1000);


// ===================================
// Attempt 1 
// ===================================
// In this attempt I saved each item in local Storage - a problem because I couldn't save whether each item was checked or not, and if an item unrelated to the list was added to localStorage it would break my model.  In attemp 2 I will store the entire ul as one item in local storage.

/*// let listItemsDiv = document.querySelector('.list-items-div');
let pastryList = document.querySelector('ul'); // this is better because my clicks are confined to the list.  
let inputForm = document.querySelector('form');
let inputText = document.querySelector('input[type="text"]');

function updateListItem(e) {
    // console.log(e.target);
    // console.log(e.target.closest('li'));
}

function updateList() {
    let values = Object.values(window.localStorage).map(el => `<li><input type='checkbox'>${el}</li>`).join('');
    pastryList.innerHTML = values;
}

function addItemToLocalStorage() {
    //e.preventDefault();
    // console.log(e); // refresh triggers and this disappears
    //console.log(inputForm);
    // console.log(inputText.value); 
    // Add to local Storage
    window.localStorage.setItem(inputText.value, inputText.value);
    // Generate HTML list items 
    /*let values = Object.values(window.localStorage).map(el => `<li><input type='checkbox'>${el}</li>`).join('');
    pastryList.innerHTML = values;*/ // this doesn't work, it just resets to the default values on index.html
/*}*/

//listItemsDiv.addEventListener('click', updateListItem)
/*pastryList.addEventListener('click', updateListItem);
inputForm.addEventListener('submit', addItemToLocalStorage);
setTimeout(updateList, 500)*/ // so far this is my best answer
/*
window.addEventListener('submit', updateList); // didn't work either
*/

// On page reload - generate list from local storage
//keys = Object.keys(window.localStorage);
//let vals = Object.values(window.localStorage)*/
