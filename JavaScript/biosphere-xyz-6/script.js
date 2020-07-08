//variables

const form = document.querySelector('form');
const input = document.querySelector('#txtMemberName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const memberList = document.querySelector('#member-list');
let items ;

//load items
loadItems();
// call event listeners
eventListener();

function eventListener(){
        // submit event
    form.addEventListener('submit',addNewItem);

     // delete item
     memberList.addEventListener('click',deleteItem);

     // delete all items
     btnDeleteAll.addEventListener('click',deleteAllItems);
}

 // add new item
function addNewItem(e){
    if(input.value === ''){
        alert('Add new member to the list')
    }
    
     // create item
    createItem(input.value);
    // save to LS
    setItemsToLS(input.value);

     // clear input
     input.value='';
    e.preventDefault();
}
//delete an item
function deleteItem(e){
   

    if(e.target.className ==='fas fa-times'){
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();

        // delete item from LS
        deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }
    e.preventDefault();
}
}
// delete all items
function deleteAllItems(e){
    if(confirm('Are you sure?')){
        memberList.innerHTML='';
    }
    localStorage.clear();
    e.preventDefault();
}
function loadItems(){
    items = getItemsFromLS();
    items.forEach( function (item){
        createItem(item);
    })
}

    function setItemsToLS(text){
        items = getItemsFromLS();
        items.push(text);
        localStorage.setItem('items',JSON.stringify(items));
    }

    function getItemsFromLS(){
        if(localStorage.getItem('items')===null){
            items = [];
        }else{
            items = JSON.parse(localStorage.getItem('items'));
        }
    return items;
}

// delete item from LS
function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);   
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
}
function createItem(text){

      // create li
      const li= document.createElement('li');
      li.className='list-group-item list-group-item-secondary';
      li.appendChild(document.createTextNode(text));
  
      // create a
      const a =document.createElement('a');
      a.classList='delete-item float-right';
      a.setAttribute('href','#');
      a.innerHTML='<i class="fas fa-times"></i>';
  
       // add a to li
       li.appendChild(a);
  
       // add li to ul
       memberList.appendChild(li);
}
