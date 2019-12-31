var express = require('express');
var path = require('path');
const cors = require('cors');
var handler = require('./handler');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));

app.get("/", handler.onDefault);
app.get("/getPokemon",handler.onGetPokemon);

app.listen(8081, ()=>{
    console.log("Express server listening at: localhost:8081");
}); 