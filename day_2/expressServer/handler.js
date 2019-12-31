exports.onDefault=(req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
}

exports.onGetPokemon=function(req, res){
    var pokemon = {'name':'Pikachu', 'attack':'Thunderbolt'};
    res.send(pokemon);
}