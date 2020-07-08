var http = require("http");
var url = require("url");
var fs = require("fs");
var myfunc = require("./getsql.js");
var app = http.createServer();
app.listen(2532);
app.on("request", (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html'});  
    // res.write('<head><meta charset="utf-8"/></head>'); 
    var objUrl = url.parse(req.url, true);
    var arr = objUrl.pathname.split(".");
    if (objUrl.pathname == "/" || objUrl.pathname == "/index") {
        fs.readFile("./public/index.html", (err, data) => {
            res.end(data);
        });
    } else if (arr[arr.length - 1] == "css" || arr[arr.length - 1] == "js" || arr[arr.length - 1] == "jpg" || arr[arr.length - 1] == "png") {
        fs.readFile("./public" + arr.join("."), (err, data) => {
            res.end(data);
        });
    } else if (objUrl.pathname == "/showbooks") {
        myfunc.select(res);
    } else if (objUrl.pathname == "/login") {
        fs.readFile("./public/html/login.html", (err, data) => {
            res.end(data);
        });
    } else if (objUrl.pathname == "/judges") {
        var user = objUrl.query.user;
        var upwd = objUrl.query.pwd;
        myfunc.judge(res, user, upwd);
    } else if (objUrl.pathname == "/administration") {
        fs.readFile("./public/html/administration.html", (err, data) => {
            res.end(data);
        });
    } else if (objUrl.pathname == "/manager") {
        myfunc.manager(res);
    } else if (objUrl.pathname == "/insert") {
        var arr = [];
        for (var i in objUrl.query) {
            arr.push(objUrl.query[i]);
        }
        myfunc.ins(res, arr);
    }else if (objUrl.pathname == "/del") {
        var id = objUrl.query.id;
        myfunc.del(res, id);
    }else if (objUrl.pathname == "/upd") {
        fs.readFile("./public/html/update.html", (err, data) => {
            res.write(data);
        });
    }else if (objUrl.pathname == "/lookimfor") {
        var id = objUrl.query.id;
        myfunc.lookimfor(res,id);
    }else if (objUrl.pathname == "/updimfor") {
        var arr = [];
        for (var i in objUrl.query) {
            arr.push(objUrl.query[i]);
        }
        myfunc.updimfor(res,arr);
    }else if (objUrl.pathname == "/details") {
        fs.readFile("./public/html/details.html", (err, data) => {
            res.write(data);
        });
        
    }else if (objUrl.pathname == "/showdetails") {
        var id = objUrl.query.id;
        myfunc.lookimfor(res,id);
    }
})