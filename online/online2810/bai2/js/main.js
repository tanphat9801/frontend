let elmBox = document.querySelector('#text');
let str = elmBox.textContent ;
let search = 'frontend';

str = str.replace(new RegExp(search, 'ig') ,'Frontend'  );
elmBox.innerHTML = str;