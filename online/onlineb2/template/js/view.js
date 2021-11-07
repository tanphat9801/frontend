
colorLever = (nameLever) => {

    let colorName = 'success'

    if(nameLever === 'High'){
        colorName = 'danger'
    }else if(nameLever === 'Medium'){
        colorName = 'info'
    }

    return colorName;

}




showData = (items) => {
    for(i = 0; i < items.length ; i++){

        let buttonType = colorLever(items[i].level)

        let item       =       `<tr>
                                    <td class="text-center">${items[i].id}</td>
                                    <td>${items[i].name}</td>
                                    <td class="text-center"><span class="label label-${buttonType}">${items[i].level}</span></td>
                                    <td>
                                        <button type="button" class="btn btn-warning">Edit</button>
                                        <button type="button" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>`;

                                areaListTask.append(item);
    }

}