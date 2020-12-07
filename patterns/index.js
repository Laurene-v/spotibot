//index.js : definitions of all required patterns of our chatbot
//returns a list of dictionnaries


//console.log('test index pattern---------------------')

const patternDict = [{
    pattern:'\\b(?<greeting>Hi| Hello |Hey )\\b', //'\\b(?< greeting >Hi| Hello |Hey )\\b' , '\\b(Hi|Hello|Hey)\\b'
    intent: 'Hello'
    },{
    pattern:'test (?<song_title>[A-Za-z\\s]+) by (?<artist>[A-Za-z\\s]+)',
    intent: 'test is working'
    },{
    pattern:'[Mm]usic (?<artist>[A-Za-z\\s]+)',
    intent:'RelatedArtist'
    },{
    pattern:'\\b(bye|exit)\\b',
    intent: 'Exit'
    },{
    pattern:'\\b([Hh]ow are you|[Hh]ow is it going)\\b',
    intent:'HOW_ARE_YOU'
    },{
    pattern:'[Mm]y name is|[Ii] am (?<name>[A-Za-z\\s]+)',
    intent:'USER_NAME'
    },{
    pattern:'\\b([Ww]hat is your name|[Ww]hat\'s your name)\\b',
    intent:'TELL_NAME'
    },{
    pattern:'[Hh]elp',
    intent:'HELP'
    },{
    pattern: '([Ss]ongs|[Tt]racks|[Mm]usics) like (?<song_title>[A-Za-z\\s]+) by (?<artist>[A-Za-z\\s]+) in (?<key>(C|C#|Db|D|D#|Eb|E|F|F#|Gb|G|G#|Ab|A|A#|Bb|B)) ',
    intent:'SONG_RECOMMENDATION'
    },{
    pattern: 'popularity of (?<song_title>[A-Za-z\\s]+) by (?<artist>[A-Za-z\\s]+)',
    intent:'POPULARITY'
    },{
    pattern: 'preview of (?<song_title>[A-Za-z\\s]+) by (?<artist>[A-Za-z\\s]+)',
    intent:'PREVIEW'
    },{
    pattern: 'album of (?<song_title>[A-Za-z\\s]+) by (?<artist>[A-Za-z\\s]+)',
    intent:'ALBUM'
    },{
    pattern: 'key (is|of) (?<song_title>[A-Za-z\\s]+) by (?<artist>[A-Za-z\\s]+)',
    intent:'KEY'
    },{
    pattern: 'features',
    intent:'FEATURES'
    }

    ];
    
module.exports = patternDict;
