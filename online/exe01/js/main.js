    var a = document.getElementsByClassName('box');
    var c = [];
    
    for (var i = 0; i < a.length; i++) {
       var b = a[i].clientHeight;
        c.push(b);
    }
    
    var maxHeight = Math.max(...c);
    console.log (maxHeight);
    
    for (var i = 0; i < a.length; i++) {

        a[i].style.background = 'red';

        

        if ( (i+1) % 2 == 0){
            a[i].style.background = 'yellow';
        }
        
    }

 
    
  
    

    



    