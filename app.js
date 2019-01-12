// let listItemsDiv = document.querySelector('.list-items-div');
  let pastryList = document.querySelector('ul'); // this is better because my clicks are confined to the list.  

function updateListItem(e) {
    // console.log(e.target);
    console.log(e.target.closest('li'));
}

//listItemsDiv.addEventListener('click', updateListItem)
pastryList.addEventListener('click', updateListItem);