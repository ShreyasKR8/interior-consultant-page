function menuTransition (e)
{
    console.log('clicked on menu img');
    // console.log(list);
    menu.classList.add('active');
    // menu.classList.add('.menu-close');
}


const menu = document.querySelector('.menu-items');
const menuButton = document.querySelector('.menu-image');
console.log(menuButton);
menuButton.addEventListener('click', menuTransition);