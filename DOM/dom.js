// Examin the document obj
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);

//GETELEMENT BY ID //
//console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

//console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';

//GETELEMENTBYCLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight ='bold';
// items[0].style.fontWeight ='bold';
// items[2].style.fontWeight ='bold';
// items[3].style.fontWeight ='bold';

// items[2].style.backgroundColor = 'green';

// items[1].style.backgroundColor = 'yellow';

// //Give error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i< items.length;i++)
// {
//     items[i].style.backgroundColor = '#f4f4f4';
// }


//GETELEMENTBYTAGNAME//

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight ='bold';
// li[1].style.backgroundColor = 'yellow';

// //Give error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i< li.length;i++)
// {
//     li[i].style.backgroundColor = '#f4f4f4';
// }


//QUERYSELECTOR//

// var header = document.querySelector('#main-header');
// header.computedStyleMap.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.computedStyleMap.color = 'red';

// var lastItem = Document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector
// ('list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';


//Queryselectorall//
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].computedStyleMap.backgroundColor = '#f4f4f4';
//     even[i].computedStyleMap.backgroundColor = '#ccc';

// }

//TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
// //parentNode
// console.timeLog(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// console.timeLog(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes

// 
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].computedStyleMap.backgroundColor = 'yellow';

// //Firstchild

// console.log(itemList.firstChild);
// //FirstelementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';



//Lastchild

// console.log(itemList.Lastchild);
//lastelementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 6';


// //nexrsibilling
// console.log(itemList.nextSibling);
// //nextelementsibling //

// console.log(itemList.nextElementSibling);

//previoussibling

// console.log(itemList.previousSibling);
// //previouselementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.computedStyleMap.color = 'green';

//createlement

//create a div
var nediv = document.createElement('div');

//Add class
rewdiv.className = 'hello';

//add id

newdiv.id = 'hello1';

//Add attr
newdiv.setAttribute('title','Hello div');

//cretae textnode
var newdivText = document.createTextNode('Hello eorld');


//Add text to div
newdiv.appendChild(newdivText);

var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');


console.log(newdiv);

newdiv.style.fontSize = '30px';

container.insertBefore(newdiv,h1);;