const mysql = require("mysql");
module.exports = ({
    //查询图书显示
    select: (res) => {
        var connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "h52002",
        });
        var sql = "SELECT id,name,author,press,price,title,count FROM library";
        connection.query(sql, function (err, results) {
            res.end(JSON.stringify(results));
        });
        connection.end();
    },
    judge: (res, user, upwd) => {
        var connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "h52002",
        })
        var sql = "SELECT name,pwd FROM man";
        connection.query(sql, function (err, results) {
            for (var i = 0; i < results.length; i++) {
                if (results[i].name==user && results[i].pwd==upwd) {
					res.write(`<script>location='/administration';sessionStorage['name']='${user}'</script>`);
                } 
            };
            res.end("<script>location='/login';alert('something wrong,please try again');</script>");
        });
        connection.end();
    },
    manager: (res) => {
        var connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "h52002",
        });
        var sql = "SELECT * FROM library";
        connection.query(sql, function (err, results) {
            res.end(JSON.stringify(results));
        });
        connection.end();
    },
    ins: (res,arr) => {
        var connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "h52002",
        });
        var sql="INSERT INTO library VALUES(0,?,?,?,?,?,?,?,?)";
        connection.query(sql,arr, function (err, results) {
            if(results){
                res.end("<script>location='/administration';alert('insert success');</script>")
            }else{
                res.end("<script>location='/administration';alert('insert default');</script>")
            }
        });
        connection.end();
    },
    del: (res,id) => {
        var connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "h52002",
        });
        var arr=[id];
        var sql = `DELETE FROM library WHERE id=?`;
        connection.query(sql,arr, function (err, results) {
            if(results){
                res.end("<script>location.reload();alert('delete success');</script>")
            }
        });
        connection.end();
    },
    //查找对应id的book信息
    lookimfor:(res,id)=>{
        var connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "h52002",
        });
        var sql = `SELECT * FROM library WHERE id=${id}`;
        connection.query(sql, function (err, results) {
            res.end(JSON.stringify(results));
        });
        connection.end();
    },
    updimfor: (res,arr) => {
        var connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "h52002",
        });
        var sql = `UPDATE library SET name='${arr[0]}',author='${arr[1]}',press='${arr[2]}',price=${arr[3]},title='${arr[4]}',content='${arr[5]}',vip=${arr[6]},count=${arr[7]}  WHERE id=${arr[8]}`;
        connection.query(sql,arr, function (err, results) {
            if(results){
                res.end("<script>location='/administration';alert('update success');</script>");
            }else{
                res.end("<script>location='/administration';alert('update default');</script>");
            }
        });
        connection.end();
    },
    showdetails: (res,id) => {
        var connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "h52002",
        });
        var sql=`SELECT title,content FROM library WHERE id=${id}`;
        connection.query(sql, function (err, results) {
            if(results){
                res.end(JSON.stringify(results));
            }
        });
        connection.end();
    },
})