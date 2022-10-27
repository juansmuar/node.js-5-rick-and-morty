const {getCharacters, getCharactersId, getEpisodes, getEpisodeId} = require ('./services')

let option = process.argv[2];
let id = process.argv[3];

if (id == undefined) id = "";

if (option === "personajes" && id == ""){
    getCharacters ();
}

if (option === "personajes" && id != ""){
    getCharactersId (id);
}

if (option === "episodios" && id == ""){
    getEpisodes ();
}

if (option === "episodios" && id != ""){
    getEpisodeId (id);
}