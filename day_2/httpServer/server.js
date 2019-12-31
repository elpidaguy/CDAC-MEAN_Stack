var http = require("http");
var url = require("url");
var fs = require("fs");

var onCreateServer = (req, res) => {
    var path = url.parse(req.url).pathname;

    fs.readFile(path.substr(1), (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data.toString());
        }
        res.end();
    })

}

http.createServer(onCreateServer).listen(8081);
console.log("Http server is listening at: http://localhost:8081/");