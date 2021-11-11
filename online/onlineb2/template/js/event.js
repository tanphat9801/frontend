submitForm = () => {
   let name  =  taskName.val();
   let level =  selectLevel.val(); 
   let id    =  elementInputId.val();
   let editContent = elementInputId.val('functionEdit(id)')


   let items = '';
      
   if(id){
      items.replace(itemList);
   }else{
      items = addData(name,level);
   }


 

  showData(items)
 }