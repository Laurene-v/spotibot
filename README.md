README SPOTIBOT :

------------------------
ZHONG Fanny
VAUGRANTE Laurène
IBO 5
------------------------

Our chatbot Spotibot gives the user information on music tracks that the user sends him (popularity, preview, album or key), and gives out other recommendations of songs similar to this track the user likes.
For this purpose, it uses the Spotify for Developers API.

How it should be tested : 
We simply run this chatbot through nodejs after installing the required modules (axios, xregexp to recognize the user intent, and the api wrapper spotify-web-api-node used for some functions to simplify the use the original Spotify API) 

If the access token has expired, we need to request a new one on the Spotify website (for instance at https://developer.spotify.com/console/get-available-genre-seeds/
).

Types of questions answered by the chatbot : 

- what is the popularity of [song] by [artist] ?
- give me a preview of [song] by [artist] ?
- what is the album of [song] by [artist] ?
- in what key is [song] by [artist] ?
- Songs like [song] by [artist] in [key]?

(as well as greetings and simple conversation topics like "how are you" or "what's your name")

Examples used in the demo video :

give me a preview of Perempuan by Osvaldorio
what is the popularity of psycho by red velvet
what is the album of ghostin by Ariana Grande
in what key is Arabella by Arctic Monkeys
give me songs like Arabella by Arctic Monkeys in G


Other ideas regarding our chatbot:
We had also managed to have an Authentification part where the user could login into his own Spotify account and get information from there.
That would have also avoided him to create a new access token everytime.
We had also started to create a link to Facebook using the Messenger app, where the user could ask his questions through there and not through Nodejs.
