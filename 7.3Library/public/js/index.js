$.get("/showbooks",(data)=>{
    var $tab=$(`<table class="table table-hover table-bordered"></table>`);
    var $tr=$("<tr></tr>");
    for(var i in data[0]){
         $tr.append($(`<td style="max-width:200px!important;" class="text-center">${i.toUpperCase()}</td>`));
    }
    $tab.append($tr);
    for(var i =0;i<data.length;i++){
    var $tr=$("<tr></tr>");
    for(var j in data[i]){
        if (j != 'name') {
            var $td = $(`<td style="max-width:200px!important;">${data[i][j]}</td>`);
        }else{
            var $td = $(`<td style="max-width:200px!important;"><a href='/details?${data[i].id}'>${data[i][j]}</a></td>`);
        }
        $tr.append($td);
    }
    $tab.append($tr);
    }
    $(".books").append($tab);
},"JSON")