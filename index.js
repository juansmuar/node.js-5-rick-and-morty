const {getCharacters, getCharactersId} = require ('./services')

let option = process.argv[2];
let id = process.argv[3];

if (id == undefined) id = "";

if (option === "personajes" && id == ""){
    getCharacters ()
        .then(function(response){
        console.log(response.data)
        })
}

if (option === "personajes" && id != ""){
    getCharactersId (id)
        .then(function(response){
        console.log(response.data.name) 
        })
}