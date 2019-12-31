var fs=require("fs");

onRead=function(err,data)
{
    if(err!=null)
    {
        console.log(console.error(err));
    }
    else
    {
       console.log(data);
     
    }
}

 onSuccess=function()
 {
    
        console.log("File is written");
        fs.readFile("sample.txt","utf8",onRead);
     

   
 }

fs.writeFile("sample.txt","Hello World",onSuccess);

console.log("Done");