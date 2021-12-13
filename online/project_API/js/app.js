const urls = "https://zendvn-api.herokuapp.com/api/v1/price/gold";


$(document).ready(function () {
    loadData();
});

loadData = () =>{

    $.ajax({
        type: "GET",
        dataType: "json",
        url: urls,
        success: function (res) {
            var str = "";
            res.data.forEach(item => {
                str += `<tr>
                            <th>${item.type}</th>
                            <th>${item.buy}</th>
                            <th>${item.sell}</th>
                            
                        </tr>`;
            });
            $('#load_data').append(str);
        }
    });

}