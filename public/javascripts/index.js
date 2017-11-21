/**
 * Created by lhy on 2017/8/2.
 */
// 简单的配置
require.config({
// RequireJS 通过一个相对的路径 baseUrl来加载所有代码。baseUrl通常被设置成data-main属性指定脚本的同级目录。
    baseUrl: "./node_modules",
// 第三方脚本模块的别名,jquery比libs/jquery-1.11.1.min.js简洁明了；
    paths: {
        "jquery": "jquery/dist/jquery"
    }
});
// 开始使用jQuery 模块
require(["jquery"], function ($) {
//你的代码
    $(function() {
        $('#login').click(function () {
            $.ajax({
                type:"POST",
                url:'/login',
                data:{account:'lance',pwd:'023689'},
                success:function (res) {
                    /*console.log(JSON.parse(res).data.userName);*/
                    console.log(res.data)
                }
            })
        });
        /*写入*/
        $('#subArt').click(function () {
            var title = $('#name').val();
            var text = ['一年三百六十日','风刀霜剑严相逼','天王盖地虎','宝塔镇河妖'];
            text = JSON.stringify(text);
            var time = new Date().getTime();
            $.ajax({
                type:"POST",
                url:'/writeArticle',
                data:{title:title,text:text,account:'fangBing',time:time},
                success:function (res) {
                    console.log(res.data)
                }
            })
        });
        /*查询某个作者所有文章*/
        $('#userAtc').click(function () {
            $.ajax({
                type:"POST",
                url:'/userAtc',
                data:{account:'lance'},
                success:function (res) {
                    console.log(res.data)
                }
            })
        });
        /*修改某篇文章*/
        $('#btn3').click(function () {
            var text = ['杨柳岸','晓风残月','相顾无言','惟有泪千行'];
            text = JSON.stringify(text);
            var time = new Date().getTime();
            $.ajax({
                type:"POST",
                url:'/changeAtc',
                data:{atcId:'6',title:'change this article',text:text,time:time},
                success:function (res) {
                    console.log(res.data)
                }
            })
        });
        /*删除某一篇文章*/
        $('#btn4').click(function () {
            $.ajax({
                type:"DELETE",
                url:'/deleteAtc',
                data:{atcId:'6'},
                success:function (res) {
                    console.log(res.msg)
                }
            })
        });
        /*新增一条评论*/
        $('#btn5').click(function () {
            $.ajax({
                type:"POST",
                url:'/newCmt',
                data:{atcId:'1',account:'lance',addr:'中国上海',text:'泪眼问花花不语'},
                success:function (res) {
                    console.log(res.msg)
                }
            })
        });
        /*返回一篇文章所有的评论*/
        $('#btn6').click(function () {
            $.ajax({
                type:"POST",
                url:'/getCmt',
                data:{atcId:'1'},
                success:function (res) {
                    console.log(res.data)
                }
            })
        });
        /*回复评论*/
        $('#btn7').click(function () {
            /*@fangBing我希望你的留言的回复以这个格式给我*/
            var res = {
                name:'匿名',
                text:'这个对象记得转成json字符串，后端是作为字符串数组存储的，尽管长的像个对象',
                toWhom:'lance',
                day:new Date().getTime(),
                address:'中国上海'
            };
            res = JSON.stringify(res);
            $.ajax({
                type:"POST",
                url:'/answerCmt',
                data:{atcId:'1',cmtId:'0',children:res},
                success:function (res) {
                    console.log(res.msg)
                }
            })
        });
        /*评论的点赞或是反对*/
        $('#btn8').click(function () {
            $.ajax({
                type:"POST",
                url:'/proAndCon',
                data:{atcId:'1',cmtId:'0',vs:'pro'},
                success:function (res) {
                    console.log(res.msg)
                }
            })
        });
        $('#btn9').click(function () {
            $.ajax({
                type:"POST",
                url:'api/test',
                success:function (res) {
                    console.log(res.message)
                }
            })
        });

        /*上传文章图片*/
       /* function uploadByForm() {
            //用form 表单直接 构造formData 对象; 就不需要下面的append 方法来为表单进行赋值了。
            var formData = new FormData($("#myForm")[0]);
            console.log(formData);
            $.ajax({
                url: '/uploadImg',
                type: 'POST',
                data: formData,

                /!**
                 * 必须false才会避开jQuery对 formdata 的默认处理
                 * XMLHttpRequest会对 formdata 进行正确的处理
                 *!/
                processData: false,
                /!**
                 *必须false才会自动加上正确的Content-Type
                 *!/
                contentType: false,
                success: function (responseStr) {
                    alert(responseStr.newPath);
                    $("img").attr({"src": responseStr.newPath}).prependTo($("body"));
                }
            });
        }
        $('#upload').click = uploadByForm();*/
    });
//这里直接可以使用jquery的方法，比如：$( "#result" ).html( "Hello World!" );
});
