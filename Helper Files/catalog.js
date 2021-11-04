import React, { Component, useState, useRef, useEffect } from 'react';
import axios from 'axios';
//To run the code from the command line use node catalog.js
//The commands addproduct and rereadfile simply overwrite the existing file with a new set of data everytime it 
//they executed

//Not sure if this is how this is done, in the tutorial, the two functions werent wrapped in headers
//Reference: newbedev.com/write-add-data-in-json-file-using-node-js


async function startAPI()
{
    //useeffect
    //get https://openapi.etsy.com/v2/listings/active?api_key=4rskcd32mgmwvkcmibb5aqfy
    let key = '4rskcd32mgmwvkcmibb5aqfy';
    const etsy_api = await axios.get("https://openapi.etsy.com/v2/listings/active", {
        api_key: key
    })
    .then(console.log(etsy_api))
}

function addProduct()
{
    var fs = require('fs');
    
    var data = {}
    data.table = []
    for(i=0; i < 26; i++)
    {
        var obj = 
        {
            getListing();
        }
        data.table.push(obj)
    }
    fs.writeFile ("input.json", JSON.stringify(data), function(err)
    {
        if(err) throw err;
        console.log('complete');
    });
}

//Should be used every time you want to add a new property to the json
function rereadFile()
{
    var fs = require('fs');
    fs.readFile('data.json',function(err,content)
    {
        if(err) throw err;
        var parseJson = JSON.parse(content);
        for(i=0;i<11;i++)
        {
            parseJson.table.push({getListing()})
        }
        fs.writeFile('data.json',JSON.stringify(parseJson),function(err)
        {
            if(err) throw err;
        })
    })
}

async function getEtsyListings()
{
    //file to get
    const response = fetch('data.json');
    //wait for the listings to be pulled in
    const listings = await response.json();

    //Pick three random values from the list
    const indexes = [];
    while(indexes.length < 3)
    {
        const index = Math.floor(Math.random() * listings.length);
        //If same index is picked again
        if(!indexes.includes(index))
        {
            indexes.push(index);
        }
    }
}