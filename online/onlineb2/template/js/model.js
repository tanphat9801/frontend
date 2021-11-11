loadStorage = () => {
  return JSON.parse(localStorage.getItem('model'))
}

saveStorage = (items) => {
 localStorage.setItem('model', JSON.stringify(items));
}

listItems = () => {
  let items = loadStorage()
  if(items === null) items = [];
  return items 
}

functionEdit = (id) =>{
  let itemList = listItems();
  let editItems = itemList.find(item => item.id === id)
  console.log(editItems);
}

functionDelete = () =>{
  
}



addData = (name, level) => {
  let id = makeid(15);

  let arrayData = listItems()

  let newData = {id: id, name: name, level: level};

  arrayData.push(newData)

  saveStorage(arrayData)
  
  return arrayData
}
