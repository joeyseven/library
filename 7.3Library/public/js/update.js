var id=location.search.slice(1);
$.get("/lookimfor",`id=${id}`,(data)=>{
    $("[name='name']").val(`${data[0].name}`);
    $("[name='author']").val(`${data[0].author}`);
    $("[name='press']").val(`${data[0].press}`);
    $("[name='price']").val(`${data[0].price}`);
    $("[name='title']").val(`${data[0].title}`);
    $("[name='content']").val(`${data[0].content}`);
    $("[name='vip']").val(`${data[0].vip}`);
    $("[name='count']").val(`${data[0].count}`);
    $("[name='id']").val(`${data[0].id}`);
},"JSON")