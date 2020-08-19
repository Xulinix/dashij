$(function(){
    var layer = layui.layer
    getuserInfo()
    function getuserInfo() {  
        $.ajax({  
          method:'GET',
          mytoks: true,
          url:'/my/userinfo',
          success: function(res) { 
            console.log(res);
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