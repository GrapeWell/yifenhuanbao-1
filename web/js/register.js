form.verify({
    username: function(value, item){ //value：表单的值、item：表单的DOM对象
        if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
            return '用户名不能有特殊字符';
        }
        if(/(^\_)|(\__)|(\_+$)/.test(value)){
            return '用户名首尾不能出现下划线\'_\'';
        }
        if(/^\d+\d+\d$/.test(value)){
            return '用户名不能全为数字';
        }
    }
    ,pwd: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
    ]
    ,repass: function(value) {
        var repassvalue = $('#L_pass').val();
        if (value != repassvalue) {
            return '两次输入的密码不一致!';
        }
    }
});
form.on('submit(*)', function(data){
    console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
    console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
    console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
    //阻止表单跳转。如果需要表单跳转，去掉这段即可。
});
