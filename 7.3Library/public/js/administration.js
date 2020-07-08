$("p").append($(`<span >${sessionStorage['name']} 欢迎登陆，</span><a href="/index">退出</a>`));
//新增
$.get("/manager", (data) => {
    var $tab = $(`<table class="table table-hover table-bordered"></table>`);
    var $tr = $("<tr></tr>");
    for (var i in data[0]) {
        $tr.append($(`<td style="max-width:200px!important;" class="text-center">${i}</td>`));
    }
    $tr.append($(`<td class="text-center">UPDATEandDELETE</td>`));
    $tab.append($tr);
    for (var i = 0; i < data.length; i++) {
        var $tr = $("<tr></tr>");
        for (var j in data[i]) {
            //给书名添加跳转链接
            if (j != 'name') {
                var $td = $(`<td style="max-width:200px!important;">${data[i][j]}</td>`);
            }else{
                var $td = $(`<td style="max-width:200px!important;"><a href='/details?${data[i].id}'>${data[i][j]}</a></td>`);
            }
            $tr.append($td);
        }
        $tr.append($(`<td><button onclick='upd(this)' class='btn btn-warning'>UPDATE</button> <button onclick='del(this)' class='btn btn-danger'>DELETE</button></td>`));
        $tab.append($tr);
    }
    $(".books").append($tab);
    $()
}, "JSON");

//删除

function del(btn) {
    var id = ($($(btn).parents()[1].firstElementChild).html());
    $.get("/del",`id=${id}`,()=>{
        location.reload();
        alert('delete success');
    })
}
//更新
function upd(btn) {
    var id = ($($(btn).parents()[1].firstElementChild).html());
    location = `/upd?${id}`;
}