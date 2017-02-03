// step 1: Create a state object to store our shopping list items
// shopping list object will have items key with an array value
// the array will contain our shopping list items

var shoppingList = {
  items:[]
};

// step 2: modifying the state
// create items
//  a) pushing items to the state object
//  b) remove items from the state object (look at splice vs slice)
//  c) check off items (toggle item's "done" key)
//          (later we can use this to alter CSS by adding "js-done" class)

function addItem(state, item){
  state.items.push(item);
};

function removeItem(state, itemIndex){
  // We'll want to find the itemIndex by which delete button was clicked
  // something along the lines of event.currentTarget or 'this'
  state.items.splice();
}

function toggleCheck(state, item){
  state.item.toggleClass();
  // class: shopping-item__checked
}

// step 3: display Shopping list
// write a function with parameters for state object and html element
// use map to return array with our items enclosed in <li> tags
// use element.html(mappedArray) to display the list on the DOM


// step 4: adding event listeners
// listen for form submission click
//    call the add item function to add item to our state object
//    call display function to display modified list
// listen for "check off" click
//    modify item by toggling item's "done" key's value
// listen for "delete" click
//    remove item object from our state object's array (splice or slice)
