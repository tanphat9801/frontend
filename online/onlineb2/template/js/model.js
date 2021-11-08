// tao du lieu ao 
// xu li du lieu 
let data = []

addData = (name,level) => {

   let id = makeid(15);

   let arrayData = localStorage.getItem('model');

   if(arrayData == undefined){
     arrayData = [];
   }else{
     arrayData =  arrayData;
   }

   let newData = {id : id , name : name , level : level};

   let arrNew = JSON.parse(arrayData);

   arrNew.push(arrNew)

   localStorage.setItem('model', JSON.stringify(arrNew));

}