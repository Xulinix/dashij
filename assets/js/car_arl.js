
//想要缓存还得判断一个东西，编辑过没有，没有的话可以用，不然要更新缓存。所以一开始被太考虑缓存这些东西
function initTable() {  
    $.ajax({    
        mytoks:true,
        method: 'GET',
        url:'my/article/cates',  //diffrent
        data:queryParms,
        success:function(res) {    
            console.log(res);
            var str = template('tpl-data',res)
            $('tbody').html(str)
        }
    })
}

function delarl(queryid) { 
    var layer = layui.layer
    $.ajax({    
        mytoks:true,
        method:'GET',
        url:'my/article/deletecate/'+queryid,
        success:function(res) { 
            console.log(res);
            layer.msg('删除分类成功！')
            initTable() //重新渲染
        }
    })
}

var result;
// 一定要用这种代理要不然,动态新增的dom没有
$('tbody').on('click','.del-btn',function(e) {   
    var layer = layui.layer
    result =   $(e.target).parents('tr').children('td')[2]
    result =  parseInt( $(result).html().trim())
    console.log(result);
    delarl(result)
   
})

// 注册事件获取点击对象的id

    var queryParms = { 
        pagenum: 1, // 页码值，默认请求第一页的数据
        pagesize: 2, // 每页显示几条数据，默认每页显示2条
        cate_id: '', // 文章分类的 Id
        state: '' // 文章的发布状态
    }
initTable()


