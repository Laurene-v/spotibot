'use strict' ;

//console.log('test app---------------------')
//import { createInterface } from 'readline'; // for reading inputs
const Readline = require ('readline'); // for reading inputs
const rl = Readline.createInterface({ // for reading inputs
    input:process.stdin ,
    output:process.stdout ,
    terminal:false
})

const axios = require('axios');
const matcher = require ('./matcher'); 
//const getAuth = require ('./auth'); 
rl. setPrompt ('---Welcome to the Spotify chatbot--- > ');
rl. prompt ();

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: 'fda5bf9983844014ad9c6056b528c048',
    clientSecret: '5756ce394e7349b795b42ad43aaec2dc',
    redirectUri: 'http://localhost:8888/callback'
  });

const accessToken ='BQARi5cWQCIqghBJfYDRmc5Qulr1Z6gEkrQ5rtc-bcpVKEldSLhdu7mc4x1EXR5t9X9irkvQwZWP-GUz8Fs0qYH0Dw_TlT0x_H8DNSfySJjYUAihZCfBqQbLeR1YtqLDuprQxQHIhMiCPyPaGr6-uWMjUavHDalxodIh';
spotifyApi.setAccessToken(accessToken);
const idartist = '6e3pZKXUxrPfnUPJ960Hd9';

const getTrackFeatures = require('./spotify');
const getSpotify = require('./spotify');
const getRelatedArtists=require('./spotify');
const searchArtist=require('./spotify');
const export_functions=require('./spotify');

rl.on('line', reply => {
    matcher(reply , cb => {
    //console .log (` Received : ${ reply }`);
    //console.log("matcher")
// do it by yourself
        //console.log("cb :",cb)
    //console.log("cb intent :",cb.intent)
    var username="friendly user"
    //console.log("print test : ", `${cb.entities.city}`)
    switch(cb.intent) {
        
        case undefined:
            console.log("I'm sorry, I couldn't understand what you said. Do you want to listen to new music? >")
        break;
/*
        case "get weather":
            console.log(`In ${cb.entities.city}`, city, time,"it is", username ,">")
        break;*/
        case "test is working":
            
            
            /*
            // Get Elvis' albums
            spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
              function(data) {
                console.log('Artist albums', data.body);
              },
              function(err) {
                console.error(err);
              }
            );
            */

            //console.log("----- some similar artists are : ", searchArtist(`Pomme`) /*, searchArtist(`${cb.entities.artist}`)*/ ,">")
            //console.log(`Please login to your Spotify account on localhost:8888 `, username,getAuth(str))
            /*spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
                if (err) console.error(err);
                else console.log('Artist albums', data);
              });*/

              /*

              spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
                function(data) {
                  console.log('Artist albums', data.body);
                },
                function(err) {
                  console.error(err);
                }
              );*/

              /*

              console.log('---------------------------------------------------');

              spotifyApi.searchTracks('Love')
                .then(function(data) {
                    console.log('Search by "Love"', data.body);
                }, function(err) {
                    console.error(err);
                });
              
                console.log('---------------------------------------------------');
                spotifyApi.getUser('laurene.vaugrante')
                .then(function(data) {
                    console.log('Some information about this user', data.body);
                }, function(err) {
                    console.log('Something went wrong!', err);
                });*/

            //console.log(`Here is the music `, username,getSpotify("test"/*`${cb.entities.city} `*/))
            //console.log(`${cb.entities.city}`, ">")
        break;

        case "RelatedArtist":
            console.log(`Here is music similar to ${cb.entities.artist}, `, username,getRelatedArtists(idartist))
            
        break; 
        case "POPULARITY":
                        
            spotifyApi.searchTracks(`${cb.entities.song_title}`)
              .then(function(data) {
                //console.log(`Search by`,track_name," ", data.body.tracks.items[0]);
                var found=false;
                for (let i=0; i<data.body.tracks.items.length || found==false;i++){
                    if (`${cb.entities.artist}`.toUpperCase()===data.body.tracks.items[i].artists[0].name.toUpperCase())
                    {
                        let popularity_score =data.body.tracks.items[i].popularity;
                        console.log(`Popularity score of ${cb.entities.song_title} by ${cb.entities.artist} : `,popularity_score );
                        found=true;
                        if (popularity_score>=85)
                            console.log("It seems like everybody is listening to this track right now !");
                        else if(popularity_score>=60)
                            console.log("This track is really popular these days !");
                        else if(popularity_score>=40)
                            console.log("Not many people listen to this track apparently !");
                        else if(popularity_score<40)
                            console.log("You have unique tastes, very few people listen to this music !");
                    }
                }
              }, function(err) {
                console.error(err);
              });
        break;
        case "PREVIEW":
            spotifyApi.searchTracks(`${cb.entities.song_title}`)
              .then(function(data) {
                //console.log(`Search by`,track_name," ", data.body.tracks.items[0]);
                var found=false;
                for (let i=0; i<data.body.tracks.items.length || found==false;i++){
                    if (data.body.tracks.items[i]===undefined)
                    {
                        console.log(`Sorry, we didn't find any track matching ${cb.entities.song_title} by ${cb.entities.artist}`);
                        found=true;
                    }

                    else if (`${cb.entities.artist}`.toUpperCase()===data.body.tracks.items[i].artists[0].name.toUpperCase())
                    {
                        console.log(`Listen to this ! --- ${cb.entities.song_title} by ${cb.entities.artist} --- \n`,data.body.tracks.items[i].preview_url,"\n" );
                        found=true;
                    }
                }
              }, function(err) {
                console.error(err);
              });
        break;
        case "ALBUM":
            spotifyApi.searchTracks(`${cb.entities.song_title}`)
              .then(function(data) {
                var found=false;
                
                for (let i=0; i<data.body.tracks.items.length || found==false;i++){
                    if (data.body.tracks.items[i]===undefined)
                    {
                        console.log(`Sorry, we didn't find any track matching ${cb.entities.song_title} by ${cb.entities.artist}`);
                        found=true;
                    }
                    else if (`${cb.entities.artist}`.toUpperCase()===data.body.tracks.items[i].artists[0].name.toUpperCase())
                    {
                        console.log(`${cb.entities.song_title} by ${cb.entities.artist} is from the album`,data.body.tracks.items[i].album.name);
                        console.log("It is the track number",data.body.tracks.items[i].track_number,"on the album.\n");
                        found=true;
                    }
                }
                
              }, function(err) {
                console.error(err);
              });
        break;
        case "FEATURES":
            var id='6rqhFgbbKwnb9MLmUQDhG6';
            export_functions.getTrackFeatures(id);
        break;
        case "KEY":
            spotifyApi.searchTracks(`${cb.entities.song_title}`)
              .then(function(data) {
                var found=false;
                
                for (let i=0; i<data.body.tracks.items.length || found==false;i++){
                    if (data.body.tracks.items[i]===undefined)
                    {
                        console.log(`Sorry, we didn't find any track matching ${cb.entities.song_title} by ${cb.entities.artist}`);
                        found=true;
                    }
                    else if (`${cb.entities.artist}`.toUpperCase()===data.body.tracks.items[i].artists[0].name.toUpperCase())
                    {
                        let id=data.body.tracks.items[i].id;
                        export_functions.getTrackKey(id);
                        found=true;
                    }
                }
                
              }, function(err) {
                console.error(err);
              });
        break;
        case "SONG_RECOMMENDATION":
            spotifyApi.searchTracks(`${cb.entities.song_title}`)
              .then(function(data) {
                var found=false;
                for (let i=0; i<data.body.tracks.items.length || found==false;i++){
                    if (data.body.tracks.items[i]===undefined)
                    {
                        console.log(`Sorry, we didn't find any track matching ${cb.entities.song_title} by ${cb.entities.artist}`);
                        found=true;
                    }
                    else if (`${cb.entities.artist}`.toUpperCase()===data.body.tracks.items[i].artists[0].name.toUpperCase())
                    {
                        let id=data.body.tracks.items[i].id;
                        console.log("\nHere are some nice songs you can listen to !")
                        export_functions.getRecommendations(id,`${cb.entities.key}`);
                        found=true;
                    }
                }
                
              }, function(err) {
                console.error(err);
              });
        break;
        case"HELP":
            console.log("Here is what you can ask :");
            console.log(" - what is the popularity of [song] by [artist] ?");
            console.log(" - give me a preview of [song] by [artist] ?");
            console.log(" - what is the album of [song] by [artist] ?");
            console.log(" - in what key is [song] by [artist] ?");
            console.log(" - Songs like [song] by [artist] in [key]?");
        break;
        case "Exit":
            console.log("Have a nice day! ", username, ">")
        break;

        case "HOW_ARE_YOU":
            console.log("I'm great, thanks for asking, ", username,"! >")
        break;
        case "USER_NAME":
            username= `${cb.entities.name}`;
            console.log("That's a lovely name, ",  username, ">")
        break;

        case "TELL_NAME":
            console.log("My name is Spotibot", ">")
        break;

        default:
            console.log(cb.intent, ">")
    } 

});
} );



