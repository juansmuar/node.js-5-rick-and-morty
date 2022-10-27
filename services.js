const axios = require('axios');

const characters = "https://rickandmortyapi.com/api/character";
const episodes = "https://rickandmortyapi.com/api/episode";

function getCharacters (){
    return axios.get(characters)
    .then(function(response){
        const res = response.data.results;
        const characters = res.map( item => {
            return item.name
        })
    console.log(characters)
    })
}

function getCharactersId (id){
    return axios.get(characters + "/" + id)
    .then(function(response){
    console.log(response.data.name) 
    })
}

function getEpisodes (){
    return axios.get(episodes)
    .then(function(response){
        const res = response.data.results;
        const episodes = res.map( item => {
            return item.name
        })
    console.log(episodes)
    })
}

function getEpisodeId (id){
    return axios.get(episodes + "/" + id)
    .then(function(response){
    console.log(response.data.name) 
    })
}

module.exports={
    getCharacters,
    getCharactersId,
    getEpisodes,
    getEpisodeId
}