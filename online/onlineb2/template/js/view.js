//  dung de show du lieu 


showData = (items) => {


    let xhtml = '';

    if( items.lenght == 0)  xhtml = '';
    else{
        items.forEach(item => {

          

             xhtml +=           `<tr>
                                    <td class="text-center">${item.id}</td>
                                    <td>${item.name}</td>
                                    <td class="text-center"><span class="label label-danger">${item.level}</span></td>
                                    <td>
                                        <button type="button" class="btn btn-warning">Edit</button>
                                        <button type="button" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>`
        });
    }

    // // //vong lap 
    //      xhtml += `<td class="text-center">1</td>
    //                 <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
    //                 <td class="text-center"><span class="label label-danger">High</span></td>
    //                 <td>
    //                     <button type="button" class="btn btn-warning">Edit</button>
    //                     <button type="button" class="btn btn-danger">Delete</button>
    //                 </td>`

   areaListTask.append(xhtml);

}

