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
    let xhtlm = ``;
    items.forEach((item, index) => {
        let buttonType = colorLever(item.level)
        xhtlm       +=       `<tr>
                                    <td class="text-center">${index + 1}</td>
                                    <td>${item.name}</td>
                                    <td class="text-center"><span class="label label-${buttonType}">${item.level}</span></td>
                                    <td>
                                        <button type="button" onclick= "" class="btn btn-warning">Edit</button>
                                        <button type="button" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>`;
                               
    });
    areaListTask.html(xhtlm);
}


