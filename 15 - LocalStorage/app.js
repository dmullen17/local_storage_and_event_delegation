const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearAllButton = document.querySelector('button[class="clear-all"]')
const checkAllButton = document.querySelector('button[class="check-all"]');
const uncheckAllButton = document.querySelector('button[class="uncheck-all"]');
let items = JSON.parse(localStorage.getItem('items')) || [];
/*
const items = [...JSON.parse(localStorage.getItem('items'))];
*/

function addItem(e) {
    //console.log('hello');
    e.preventDefault();
    const text = (this.querySelector('[name="item"]')).value;
    const item = {
        text,
        done: false
    };
    //console.log(item);
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML= plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                <label for="item${i}">${plate.text}</label>
            </li>
               `
    }).join('');
}

function toggleDone(e) {
    // console.log(e.target);
    if (!e.target.matches('input')) return; // skip unless it's an input
    
    let index = e.target.dataset.index;
    console.log(index);
    items[index].done = !items[index.done];
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function clearItemsList() {
    items.length = 0;
    localStorage.clear();
    populateList(items, itemsList);
}

function checkAllItems() {
    items.forEach(el => el.done = true);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function uncheckAllItems() {
    items.forEach(el => el.done = false);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('change', toggleDone);
clearAllButton.addEventListener('click', clearItemsList);
checkAllButton.addEventListener('click', checkAllItems);
uncheckAllButton.addEventListener('click', uncheckAllItems);


populateList(items, itemsList)
