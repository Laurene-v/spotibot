"use strict ";
const axios = require ("axios");
const idtrack = '2kz6FGzMkZUyGZPywlkcOu';

const keylast = '84641d876ab09ffea16385c3d6bcb8bb';


var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: 'fda5bf9983844014ad9c6056b528c048',
    clientSecret: '5756ce394e7349b795b42ad43aaec2dc',
    redirectUri: 'http://localhost:8888/callback'
  });

//import SpotifyWebApi from 'spotify-web-api-js';
//const spotifyApi = new SpotifyWebApi();

//var spotifyApi = require('spotify-web-api-js');
//var s = new spotifyApi();
const url_recherche='https://api.spotify.com/v1/search?query=Pomme&type=artist&offset=0&limit=20&access_token=BQDRiNWpZlTj6AofsJROMsEoKKyUe1EFHDmxUT7e43jYsaM7L_mR_pQLMebdhaIpdhnkpSg_pRGoewTlpsLzAxRh6ZgpfAuyEE5KpndmUxBab8IbAJyGiJIstu7p7lvEH52VMgI-kH_L5IKmFz4nNhb6V7DCfmPQtRWKd3ffZW81djhV8enj'
const access_token='BQARi5cWQCIqghBJfYDRmc5Qulr1Z6gEkrQ5rtc-bcpVKEldSLhdu7mc4x1EXR5t9X9irkvQwZWP-GUz8Fs0qYH0Dw_TlT0x_H8DNSfySJjYUAihZCfBqQbLeR1YtqLDuprQxQHIhMiCPyPaGr6-uWMjUavHDalxodIh';
spotifyApi.setAccessToken(access_token);
const idartist = '6e3pZKXUxrPfnUPJ960Hd9';



const getSpotify = location => {
    
    return new Promise ( async ( resolve , reject ) => {
        try {
            console.log('------------------------promise---------------------------');
            const track = await axios.get(`https://api.spotify.com/v1/albums/${idtrack}/tracks&access_token=${access_token}`);
            console.log('-----------------------test track--------------------------');
            console.log(track)
            }
        catch ( error ){
            reject ( error );
        }
    });
}

const getRelatedArtists=artist_id =>{
    spotifyApi.getArtistRelatedArtists(artist_id)
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });
  console.log("Something else ?>")
}

const searchArtist=name =>{
    spotifyApi.searchArtists(name)
    .then(function(data) {
      console.log('Search artists by', name, data.body);
    }, function(err) {
      console.error(err);
    });

}

const getTrackFeatures = async (id) => {
    const response = await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, { params:{}, headers: { 'Authorization': 'Bearer '.concat(access_token) } }).then(response => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log('error 3 ' + error);
          });
};

const getTrackKey = async (id) => {
    const response = await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, { params:{}, headers: { 'Authorization': 'Bearer '.concat(access_token) } }).then(response => {
            //key
            let key_dict=["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab","A","A#/Bb","B"];
            if (response.data.key!=-1)
                key=key_dict[response.data.key];
            else
                key="not detected";
            
            //mode : maor or minor
            let mode="minor";
            if (response.data.mode===1)
                mode="major";

            //display
            console.log(key,mode);
          })
          .catch((error) => {
            console.log('error 3 ' + error);
          });
};

const getRecommendations = async (id,key) => {
    let key_dict=["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab","A","A#/Bb","B"];
    let key_number=key_dict.indexOf(key);
    const response = await axios.get(`https://api.spotify.com/v1/recommendations?seed_tracks=${id}&min_popularity=50&key=${key_number}`, { params:{}, headers: { 'Authorization': 'Bearer '.concat(access_token) } }).then(response => {
            for(var i =0; i<response.data.tracks.length;i++)
            {
                console.log(response.data.tracks[i].name,response.data.tracks[i].artists[0].name);
            }
          })
          .catch((error) => {
            console.log('error 3 ' + error);
          });
};

const export_functions={
    'getTrackFeatures':getTrackFeatures,
    'searchArtist':searchArtist,
    'getRelatedArtists':getRelatedArtists,
    'getSpotify':getSpotify,
    'getTrackKey':getTrackKey,
    'getRecommendations':getRecommendations
};
module.exports = export_functions;