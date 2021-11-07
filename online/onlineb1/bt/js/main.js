var changeTime = document.getElementsByClassName('header');

for(i = 0 ; i <= 4; i++ ){
   
 setTimeout(() => {
    changeTime.innerHTML = QUOTE[i]
 }, TIME_REPLAY);

}




