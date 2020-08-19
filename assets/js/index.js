$(function(){
    var layer = layui.layer
    getuserInfo()
    function getuserInfo() {  
        $.ajax({  
          method:'GET',
          mytoks: true, //设置token
          url:'/my/userinfo',
          success: function(res) { 
            console.log(res);
            localStorage.setItem('userinfo',res)
            //do something 优化页面
          }
        })
      }


      $('#nav-tuichu').on('click','a',function(e) { 
           
            var confirm =   layer.confirm('是否退出',{title: '提示'},function() {
                location.href = './login.html'   //bug 相对html的路径位置而非js 
          })

    
      })
})