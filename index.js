const osmosis = require( "osmosis" ), fs = require( "fs" ),

        MongoClient = require( "mongodb" ).MongoClient,
        url = "mongodb://localhost:27017/",
        mongoClient = new MongoClient( url, { useNewUrlParser: true });         // create host connection

var json = {}, element = {}, i = 0;

osmosis
    .get( "https://www.winnerauto.ua/cars/all_cars/" )                          // request to http(s)://...
    .find( ".goodsBlock" )                                                      // find needed class
    .set({
        name: ".link-goods", price: ".price-container b"                        // create needed item via classes
                    
    })
    .data(( data ) => {                                                         // work with on data
        json[ "vehicle_" + i ] = { name: data.name, price: data.price }; i++;
    })
    .done( () => {
        fs.writeFileSync( "data.json", JSON.stringify( json ), ( err ) => {     // write data to needed file
            if ( err ) throw err;                             
        });

        mongoClient.connect(( err, client ) => {                                // write data to mongodb
            if ( err ) { throw err } 
            else {
                const db = client.db( "NewDB" );
                const collection = db.collection( "post" );
                collection.insertOne( json, function( err, result ) {
                    if ( err ) throw err;
                    client.close();
                });
            }
        });
    });