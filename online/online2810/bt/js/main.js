var changeThis = document.getElementsByClassName('header');
for(i=0; i<= 10000 ;i++){
    setTimeout(function() {
        changeThis[0].innerHTML = "HTML";
    },2000)
    setTimeout(function() {
        changeThis[0].innerHTML = "CSS";
    },4000)
    setTimeout(function() {
        changeThis[0].innerHTML = "JAVASCRIPT";
    },6000)
    setTimeout(function() {
        changeThis[0].innerHTML = "REACTJS";
    },8000)
}