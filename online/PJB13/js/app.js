$(document).ready(function () {
  let url  = 'content.html';


  //click
  $('.menu-item').click(function (e) { 
    e.preventDefault();
    

    //lay id
    let id = $(this).data('name')

    // console.log(id);
    //goi loadcontent

    loadContent(id);

  });

  loadContent = (id) =>{

    $('.content').load(`content.html #${id}`)

  }

  //vua vao trang 
  loadContent('home')


});


  //$(this) lay gia tri vua moi click 
