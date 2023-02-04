const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();   //tạo đối tượng mới
app.use(bodyparser.json());
app.use(cors());    // su dung thu vien cors

//ket noi
const db = mysql.createConnection({
    host: '37.59.55.185',
	user: 'EskUSL83Cb',
	password: 'awaNOX5Q9v',
	port:'3306',
	database: 'EskUSL83Cb'
})


db.connect();

// function select()

//select
const alltable=[]

app.get('/test',(req, res)=>{
    var sql = "select * from test";
    db.query(sql,(err,kq)=>{
        if(err) throw err;
        console.log(kq);
        res.send(kq);   //tra ket qua ve cho react 
    });
});

app.get('/data',(req, res)=>{
    var sql = "select * from NHANVIEN";
    db.query(sql,(err,kq)=>{
        if(err) throw err;
        console.log(kq);
        res.send(kq);   //tra ket qua ve cho react 
    });
});


//insert
app.post('/data',(req,res)=>{
    console.log(req.body);
    var data = {user : req.body.user, pass: req.body.pass }
    var sql = 'insert into test set ?';
    db.query(sql, data, (err,kq)=>{
        if (err) throw err;
        console.log(kq);
        //gui ket qua cho react 
        res.send({
            status: 'them thanh cong',
            no: null,
            user: req.body.user,
            pass: req.body.pass
        });
    })
})

//chay
app.listen(3000,()=>{
    console.log('Server dang chay o cong 3000')
})