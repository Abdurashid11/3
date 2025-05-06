let magazin = document.getElementById("#magazin");

function toggleTheme() {
    document.body.style.color = "yellow";
    document.body.style.transition = "background-color 0.5s, color 0.5s";
}

function hel() {
    document.body.style.color = "blue";
}

var typed = new Typed('#magazin', {
    strings: ['| МАГАЗИН |'],
    typeSpeed: 90,
    backSpeed: 30,           
    backDelay: 900,         
    // loop: true,             
    loopCount: Infinity,     
    showCursor: true,        
    cursorChar: '',        
    autoInsertCss: true,     
    smartBackspace: true,   
    shuffle: false,        
    fadeOut: false,        
    fadeOutClass: 'typed-fade-out', 
    fadeOutDelay: 300,       
    attr: null,              
  });
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} добавлен в корзину!`);
}
