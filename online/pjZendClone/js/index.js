var texts = [
    "ĐĂNG KÍ KHÓA HỌC ONLINE HOẶC OFFLINE TẠI ZENDVN.COM",
    "NHIỀU ƯU ĐÃI HẤP DẪN DÀNH CHO SINH VIÊN VÀ HỌC VIÊN MỚI",
    "TỔNG ĐÀI CSKH:19001009"
];
var count = 0;

function changeText() {
  $("#example").text(texts[count]);
  count < 3 ? count++ : count = 0;
}
setInterval(changeText, 5000);