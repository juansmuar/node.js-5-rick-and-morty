const axios = require('axios');
const characters = "https://rickandmortyapi.com/api/character";

function getCharacters (){
    return axios.get(characters)
}

module.exports={
    getCharacters,
    getEpisodes
}