// 思路


//  $("#linkTologin")

$(function () {
    /* 跳转登录页面 */
    $("#linkTologin").on('click',function() {
        $('login').show()
        $('reg').hide()   
        console.log('return login page'); 
    })

  $("#form_login").submit(function (e) {
    // 阻止默认提交行为
    e.preventDefault();
    $.ajax({
      url: "/api/login",
      method: "POST",
      // 快速获取表单中的数据
      data: $(this).serialize(),
      success: function (res) {
        if (res.status !== 0) {
          return layer.msg("登录失败！");
        }
        layer.msg("登录成功！");
        // 将登录成功得到的 token 字符串，保存到 localStorage 中
        localStorage.setItem("token", res.token);
        // 跳转到后台主页
        location.href = "./index.html";
      },
    });
  });

  // 监听注册表单的提交事件
  $("#form_reg").on("submit", function (e) {
    // 1. 阻止默认的提交行为
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "url",
      data: {
        username: $("username").val(),
        password: $("psd").val(),
      },
      success: function (res) {
        console.log(res);
        alert("注册成功");
        $("#linkTologin").click();
      },
    });
  });
});
