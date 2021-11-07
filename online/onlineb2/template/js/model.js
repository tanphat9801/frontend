// tao du lieu ao 
// xu li du lieu 
let data = []

addData = (name,level) => {

   let id = makeid(15);

   let arrayData = localStorage.getItem('model');

   if(arrayData == undefined){
     arrayData = arr;
   }else{
      return arrayData;
   }

   let newArrayData = {id : id , name : name , level : level};

   arrayData.push(newArrayData);

   localStorage.setItem('model', JSON.stringify(arrayData));

}