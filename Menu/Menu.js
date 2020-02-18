
/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
*/

function menuCreate(arr){
  const div = document.createElement('div'); 
  div.classList.add('menu');

  const ul = document.createElement('ul');
  div.appendChild(ul); 
  
  arr.forEach(element => {
    let li = document.createElement('li');
    li.textContent= element; 
    ul.appendChild(li);
  }); 
  div.appendChild(ul); 
  return div;
}

menuCreate(menuItems); 

const mButn = document.querySelector('.menu-button'); 
// mButn.classList.add('.menu-open'); 

mButn.addEventListener('click', (event)=>{
mButn.classList.toggle('menu-open'); 
})

const body = document.querySelector('body'); 
body.appendChild(menuCreate(menuItems)); 

// const mBtn = document.querySelector(".menu-button");
// mBtn.addEventListener("click", (e) => {
//   document.querySelector(".menu").classList.toggle("menu--open")
/*
buttonOpen.textContent = open
  buttonClose.textContent = close
  panelContent.textContent = content
  panelTitle.textContent = title
  
  // button events
  // ❌ buttonPanel.querySelectorAll('button').forEach(btn => btn.addEventListener('click', clickHandler))
  // ✅ buttonPanel.addEventListener('click', clickHandler)
  // Toggling classes means this:
  // Remove .toggle-on if .toggle-on exists
  // Add .toggle-on on if .toggle-on does not exist

  buttonPanel.addEventListener('click', event => {
    console.log('button clicked', event.target)
    // 1. toggle hide-btn on BOTH buttons
    buttonOpen.classList.toggle('hide-btn')
    buttonClose.classList.toggle('hide-btn')
    // 2. Change visibility of the content w/ 'toggle-on'
    panelContent.classList.toggle('toggle-on')


  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
