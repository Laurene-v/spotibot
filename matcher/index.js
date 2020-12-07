'use strict';

//console.log('test index matcher-------------------')
const patterns=require('../patterns');
const XRegExp = require('xregexp');

let createEntities = (str , pattern ) => {
    return XRegExp.exec (str , XRegExp ( pattern , "i"))
}

//matcher returns the intent corresponding to the user input
let  matchPattern = (str , cb) => {
    let getResult = patterns.find(item =>{
        //console.log(item)
        if(XRegExp.test(str,XRegExp(item.pattern,"i"))){
            //console.log("intent detected")
            return true;

            }
    });


    if (getResult){//console.log("getresult true")
        return cb({
        intent: getResult.intent,
        entities : createEntities (str , getResult.pattern )});
    }
    else{
        //console.log("else cb :", cb)
        return cb({});
        }
}


//module.exports = createEntities;
module.exports = matchPattern;
/*
let machineKey = `machine_${ machineNumber }`
    let machine = dict[ machineKey ]
    
    if(machine) {
      console.log(`tempurature for machine ${ machineNumber}: ${ machine.temp }`);
    }*/









