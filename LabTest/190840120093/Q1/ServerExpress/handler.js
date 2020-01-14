var student = [{"id":1, "name":"kaustubh", "prn":"190840120093","course":"DAC" },
{"id":2, "name":"jason", "prn":"190840120094","course":"DAC" },
{"id":3, "name":"john", "prn":"190840120095","course":"DAC" },
{"id":4, "name":"jane", "prn":"190840120096","course":"DBDA" },
{"id":5, "name":"jennifer", "prn":"190840120097","course":"DAC" }];

exports.onGetStudent=(req, res)=>
{
   res.send(student);
}

exports.onUpdateStudent=(req, res)=>
{
    var stud = {};
    var id = req.params.id;
    student.forEach((x) => {
        //console.log(x);
        if(x['id'] == id)
        {
            stud = x;
        }
    });
     stud["name"]="updatedName";
     stud["course"]="updatedCourse";
   res.send(stud);
}

exports.onGetStudentDetails=(req, res)=>
{
    var stud = {};
    var id = req.params.id;
    student.forEach((x) => {
        if(x['id'] == id)
        {
            stud = x;
        }
    });
   res.send(stud); 
}

exports.onDefault=(req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
}