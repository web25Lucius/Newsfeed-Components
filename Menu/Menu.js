
/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


function menuCreate(arr){
  const div = document.createElement('div'); 
  div.classList.add('menu');
  const ul = document.createElement('ul');

  arr.forEach(element => {
    let li = document.createElement('li');
    li.textContent= element; 
    ul.appendChild(li);
  }); 

  const menuButton = document.querySelector('.menu-button'); 
  menuButton.addEventListener('click', (event) => {
    // console.log(event.target);
    div.classList.toggle('menu--open'); 
  })
  div.appendChild(ul); 
  menuButton.append(div); 
  return div;
}

menuCreate(menuItems); 

const body = document.querySelector('body'); 
body.appendChild(menuCreate(menuItems)); 


