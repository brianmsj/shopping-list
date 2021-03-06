// step 1: Create a state object to store our shopping list items
// shopping list object will have items key with an array value
// the array will contain our shopping list items

var shoppingList = {
  items:[]
};

// step 2: modifying the state
// create items
//  a) push items to the state object
//  b) remove items from the state object (look at splice vs slice)
//  c) check off items (toggle item's "done" key)

function addItem(state, name){
  myItem = {
    name: name,
    done: false
  }
  state.items.push(myItem);
};

function removeItem(state, name){
  for (var i = 0; i < state.items.length; i++) {
    if (name === state.items[i].name) {
      state.items.splice(i,1);
    }
  }
};

function toggleCheck(state, name){
  state.items.forEach(function(item){
    if (item.name == name){
      item.done = !item.done;
    };
  });
};

function toggleStrikethrough(location){
  location.toggleClass('shopping-item__checked');
}


// step 3: display Shopping list
// write a function with parameters for state object and html element
// use map to return array with our items enclosed in <li> tags
// use element.html(mappedArray) to display the list on the DOM
function display(state,element) {
  var displayArray = state.items.map(item => {
    return '<li>'+
      '<span class="shopping-item ' + (item.done ? 'shopping-item__checked' : '') + '">' + item.name + '</span>' +
      '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
          '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
        '</button>' +
      '</div>' +
    '</li>';
  });
  element.html(displayArray);
};

// step 4: adding event listeners
// listen for form submission click
//    call the add item function to add item to our state object
//    call display function to display modified list
// listen for "check off" click
//    modify item by toggling item's "done" key's value
//    add "shopping-item__checked" class to item in DOM
// listen for "delete" click
//    remove item object from our state object's array (splice or slice)
function eventHandlers(){
    $('#js-shopping-list-form').submit(function (event) {
      event.preventDefault();
      addItem(shoppingList, $('#shopping-list-entry').val());
      display(shoppingList, $('.shopping-list'));
    });

    $('ul').on('click', '.shopping-item-toggle', function (event) {
      toggleCheck(shoppingList, $(event.currentTarget).closest("li").children('span').text());
      toggleStrikethrough($(event.currentTarget).closest("li").children('span'));
    });

    $('ul').on('click','.shopping-item-delete', function (event){
      removeItem(shoppingList, $(event.currentTarget).closest("li").children('span').text());
      display(shoppingList, $('.shopping-list'));
    });
};

$(eventHandlers);
