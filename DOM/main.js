// // var form = document.getElementById('addForm');
// // var itemList = document.getElementById('items');
// // var filter = document.getElementById('filter');

// // // Form submit event
// // form.addEventListener('submit', addItem);
// // // Delete event
// // itemList.addEventListener('click', removeItem);
// // // Filter event
// // filter.addEventListener('keyup', filterItems);

// // // Add item
// // function addItem(e){
// //   e.preventDefault();

// //   // Get input value
// //   var newItem = document.getElementById('item').value;

// //   // Create new li element
// //   var li = document.createElement('li');
// //   // Add class
// //   li.className = 'list-group-item';
// //   // Add text node with input value
// //   li.appendChild(document.createTextNode(newItem));

// //   // Create del button element
// //   var deleteBtn = document.createElement('button');

// //   // Add classes to del button
// //   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// //   // Append text node
// //   deleteBtn.appendChild(document.createTextNode('X'));

// //   // Append button to li
// //   li.appendChild(deleteBtn);

// //   // Append li to list
// //   itemList.appendChild(li);
// // }

// // // Remove item
// // function removeItem(e){
// //   if(e.target.classList.contains('delete')){
// //     if(confirm('Are You Sure?')){
// //       var li = e.target.parentElement;
// //       itemList.removeChild(li);
// //     }
// //   }
// // }

// // // Filter Items
// // function filterItems(e){
// //   // convert text to lowercase
// //   var text = e.target.value.toLowerCase();
// //   // Get lis
// //   var items = itemList.getElementsByTagName('li');
// //   // Convert to an array
// //   Array.from(items).forEach(function(item){
// //     var itemName = item.firstChild.textContent;
// //     if(itemName.toLowerCase().indexOf(text) != -1){
// //       item.style.display = 'block';
// //     } else {
// //       item.style.display = 'none';
// //     }
// //   });
// // }

// var form = document.getElementById('addform');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// //form submit event
// form.addEventListener('submit',addItem);
// //Delete event
// itemList.addEventListener('click',removeitem);

// //Filter event

// //Add item
// function addItem(e){
// e.preventDefault();

// //Get input value
// var newItem = document.getElementById('item').value;

// //Create new li element
// var li = document.createElement('li');
// //Add class
// li.className = 'list-group-item';
// // Add text node with input value
// li.appendChild(document.createTextNode(newItem));

// //Create delete button element
// var deleteBtn = document.createElement('button');

// // Add classes to delete button
// deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// //append text node
// deleteBtn.appendChild(document.createTextNode('X'));

// //Append delete to li
// li.appendChild(deleteBtn);

// //Appened li to list
// itemList.appendChild(li);

// }


// //Remove item

// function removeItem(e)
// {
//     if(e.target.className.contains('delete')){
//         if(confirm('are you sure?')){
//             var li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }
// Get references to HTML elements using their IDs
var form = document.getElementById('addForm'); // Form element
var itemContainer = document.getElementById('itemContainer'); // Container for items
var filter = document.getElementById('filter'); // Filter input field

// Form submit event listener
form.addEventListener('submit', addItem);

// Delete event listener
itemContainer.addEventListener('click', removeItem);

// Filter event listener
filter.addEventListener('keyup', filterItems);

// Function to add a new item
function addItem(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get input values
    var newItem = document.getElementById('item').value; // Value of the first input
    var dis = document.getElementById('one').value; // Value of the second input

    // Check if both inputs have non-empty values
    if (newItem.trim() !== '' && dis.trim() !== '') {
        // Combine the two values with a space
        var itemText = newItem + ' ' + dis;

        // Create a new container for the item
        var itemDiv = document.createElement('div');
        itemDiv.className = 'list-item';

        // Create a span element to hold the combined text
        var itemTextElement = document.createElement('span');
        itemTextElement.className = 'item-text';
        itemTextElement.appendChild(document.createTextNode(itemText));

        // Create a delete button
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm delete';
        deleteBtn.appendChild(document.createTextNode('X'));

        // Add the text span and delete button to the item container
        itemDiv.appendChild(itemTextElement);
        itemDiv.appendChild(deleteBtn);

        // Add the item container to the main container
        itemContainer.appendChild(itemDiv);

        // Clear input fields
        document.getElementById('item').value = '';
        document.getElementById('one').value = '';
    }
}

// Function to remove an item
function removeItem(e) {
    // Check if the clicked element has the 'delete' class
    if (e.target.classList.contains('delete')) {
        // Display a confirmation dialog
        if (confirm('Are You Sure?')) {
            // Get the parent container of the delete button and remove it
            var itemDiv = e.target.parentElement;
            itemContainer.removeChild(itemDiv);
        }
    }
}

// Function to filter items based on user input
function filterItems(e) {
    var text = e.target.value.toLowerCase(); // Get the filter text in lowercase
    var items = itemContainer.getElementsByClassName('list-item'); // Get all item containers
    // Loop through each item container
    Array.from(items).forEach(function (item) {
        var itemName = item.querySelector('.item-text').textContent; // Get the item text
        // Check if the item text contains the filter text
        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'inline-block'; // Show the item container
        } else {
            item.style.display = 'none'; // Hide the item container
        }
    });
}
