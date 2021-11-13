submitForm = () => {
   let name  =  taskName.val();
   let level =  selectLevel.val(); 
   let id    =  elementInputId.val();
   let item = '';
   if(id){
      item = funcEditData(id,name,level)
   }else{
      item = addData(name,level);
   }
  resetFormEdit();
  showData(item)
}


//edit id

showItemsEdit = (id) => {
   let items       = listItems()
   let itemEdit    = items.find(item => item.id === id)
   taskName.val(itemEdit.name);
   selectLevel.val(itemEdit.level);
   elementInputId.val(itemEdit.id);
} 

//reset form dang nhap

resetFormEdit = () =>{

   taskName.val('');
   selectLevel.val('Small');

}

//edit data

funcEditData = (id,name,level) =>{

   let dataItems = listItems()

   dataItems.forEach((items,index) => {
      if(items.id === id){
         dataItems.fill({id:id,name:name,level:level},index,index+1)
      }
   });

   saveStorage(dataItems);
   return dataItems;

}

//delete function '

deleteItems = (id) =>{

   let items = listItems()
   $.each(items, function(i, el){
      if(this.id === id){
         items.splice(i, 1);
      }
   });

   saveStorage(items)
   showData(items)

   

}
