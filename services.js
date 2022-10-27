const axios = require('axios');

const characters = "https://rickandmortyapi.com/api/character";
const episodes = "https://rickandmortyapi.com/api/episode";

function getCharacters (){
    return axios.get(characters)
}

function getCharactersId (id){
    return axios.get(characters + "/" + id)
}

function getEpisodes (){
    return axios.get(episodes)
}

function getEpisodeId (id){
    return axios.get(episodes + "/" + id)
}

module.exports={
    getCharacters,
    getCharactersId,
    getEpisodes,
    getEpisodeId
}