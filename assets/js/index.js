function getuserInfo() {
  $.ajax({
    method: "GET",
    mytoks: true, //设置token
    url: "my/userinfo",
    success: function (res) {
      console.log(res);
      localStorage.setItem("userinfo", res.data);
      //  console.log( localStorage.getItem('userinfo')['username']) 为啥不行？？;
      //do something 优化页面
    },
  });
}


$(function () {
  console.log(localStorage.getItem('password'));
  var layer = layui.layer;
  getuserInfo();
  $("#nav-tuichu").on("click", "a", function (e) {
    var confirm = layer.confirm("是否退出", { title: "提示" }, function () {
      localStorage.removeItem('token')
      location.href = "./login.html"; //bug 相对html的路径位置而非js
    });
  });
});
