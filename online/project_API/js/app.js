$(document).ready(function () {
    loadData();
});

loadData = () =>{
 
    $.ajax({
        url: "https://zendvn-api.herokuapp.com/api/v1/price/gold",
        type: "GET",
        success: function (response) {
            // console.log(response);
            var str = '';
            $.each(response, function (i, item) { 
                  console.log(item)
                str += "<tr>";
                str += "<td>" + item.buy  + "</td>";
                str += "<td>" + item.sell  + "</td>";
                str += "<td>" + item.type  + "</td>";
                str += "</tr>";
            });
            $('#load_data').html(str);
        }
    });

}
