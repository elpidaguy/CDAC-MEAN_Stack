var express = require("express");
var handler = require("./handler");
var cors = require("cors");
var path = require("path");
var app = express();
var port = 8081;

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));

app.get("/getStudent", handler.onGetStudent);
app.get("/updateStudent/:id", handler.onUpdateStudent);
app.get("/getStudentDetails/:id", handler.onGetStudentDetails);


app.listen(port, ()=>{
    console.log("Express is listening at http://localhost:"+port);
});