function changeFontSize(type){
    let ids = ["#p1", "#p2"];

    ids.forEach(id =>{
        // get element
        let el = document.querySelector(id);

        // get fontsize
        let fontSize = window.getComputedStyle(el, null).getPropertyValue('font-size');

        //convert to float
        fontSize = parseFloat(fontSize);

        // increase / decrease font-size

        if(type === "increase"){
            el.style.fontSize = (fontSize + 5) + "px";
        }else{
            el.style.fontSize = (fontSize - 5) + "px";
        }
    });
}


///////////////////////////////////////////////////////////////////////////////
//select text

function changeOption(){
    let zone = document.getElementById("zoneSelect");

    if(zone.value == "zone1"){
        document.getElementById("content").style.textAlign = "center";
    }else if(zone.value == "zone2"){
        document.getElementById("content").style.textAlign = "left";
    }else{
        document.getElementById("content").style.textAlign = "right";
    }

}


//change letter-spacing

function changeLetter(){
    let letter = document.getElementById("letspace");

    if(letter.value == "val1"){
        document.getElementById("content").style.letterSpacing = '0.5px'
    }else if(letter.value == "val2"){
        document.getElementById("content").style.letterSpacing = '1px'
    }else{
        document.getElementById("content").style.letterSpacing = '1.5px'
    }

}



// change background

function changeBg(color){
    document.querySelector("#content").style.background = color;
}


//dark mode

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');
    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}