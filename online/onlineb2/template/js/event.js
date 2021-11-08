submitForm = () => {
       let name  =  taskName.val();
       let level =  selectLevel.val(); 

       addData(name,level);
      //  showData(JSON.parse(localStorage.getItem('model')))
    }