const express = require('express');
const router = express.Router();
const neo4j_calls = require('../neo4j_calls/neo4j.api');
let neo4j = require('neo4j-driver');
let { creds } = require("../config/config.js");
let driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic(creds.neo4jusername, creds.neo4jpw));
var air=[];
var  name="";
var equi=[];


//    print(df.head())
  //  return(df)
router.get('/top/:user/:country', async function (req, res, next) {
    let country=req.params.country;
    let airline="";
    let session = driver.session();  
    const user=req.params.user;
    const spawn = require('child_process').spawn;
    console.log("lalla");

    // var df=await session.readTransaction(txc =>
    //   txc.run(`MATCH (u:User) RETURN u.name AS name, u.airline AS airline, toFloat(u.airline_sentiment) AS airline_sentiment `)
    //  ).then(dataframe);
    //  console.log(df);
    const process= await spawn('python3',['/home/fatmach/Documents/Airline-Recommender-Business-Intelligence/backend/neo4j_calls/recommend.py', user]);
    process.stdout.on('data', async function (data){
        data=data.toString();
        console.log(data);
        
          const words=data.split('[');
        let word2=words[1].split(']');
        word2=word2[0];
        const airlines=word2.split(', ');
        air=[];
        for  (variable in airlines) {
            let newvar=airlines[variable];
            newvar=newvar.replace("'","");
            newvar=newvar.replace("'","");
            
            air.push(newvar);
          } 
        
        
});
    process.stderr.on('data', (data) => {
    console.error(data.toString());
  });
 
  console.log("gggggg",air);
  name=air[2];
  console.log(air.length);
  airline=air[2];

    let equipments=await session.readTransaction(txc =>
      txc.run(`match (r:Route)-[:by]->(a:Airline{name:$name, country:$country}) return r.equipment AS eq`,{name:name, country: country})
     ).then(_manyGenres);
     var eq=equipments[0];

     
     if(eq==undefined){
      name=air[3];
      let equipments=await session.readTransaction(txc =>
        txc.run(`match (r:Route)-[:by]->(a:Airline{name:$name}) return r.equipment AS eq`,{name:name})
       ).then(_manyGenres);
       eq=equipments[0];
      airline=air[3];
       console.log("eq non defini");
     }
      let localisation=await session.readTransaction(txc =>
        txc.run(`match (r:Route{equipment:$eq})-[:to]->(a:Airport) where a.country <> $country return Distinct a.country as country`,{eq:eq, country: country})
       ).then(localisations);
     console.log(localisation);
     
     json = { ...localisation };
     console.log(json);
    res.status(200).json(json );
    

})
router.post('/recommend', async function (req, res, next) {
  const rec=req.body;
  
  console.log(rec);
    let session = driver.session();
    let user = "No User Was Created";
    var sentiment="";
    if(rec.rated==1){
      sentiment="negative";
    }
    else if (rec.rated==2){
      sentiment="neutral";
    }
    else{
      sentiment="positive";
    }
    try {
        user = await session.run('Create (n:User {name: $id,  airline:$airline,airline_sentiment:$sentiment}) RETURN n', {
            id: req.body.name,
            sentiment: sentiment,
            airline: rec.airline
        });
        console.log("tryyyyyyyyyyyyyyyy");
    }
    catch (err) {
        console.error(err);
        return user;
    }
    //return user.records[0].get(0).properties.name;

  res.status(200).send("created");

})
router.get('/topdest/:air', async function (req, res, next) {
  const air=req.body.air;
  
})
const dataframe = function (result) {
  //console.log("res",result.records);
return result.records
};
  const _manyGenres = function (result) {
    //console.log("res",result.records);
  return result.records.map(r => r.get('eq'))
};
const localisations = function (result) {
  //console.log("res",result.records);
return result.records.map(r => r.get('country'))
};

router.get('/', async function (req, res, next) {
    res.status(200).send("Root Response from :8080/test_api")
    return 700000;
})

router.get('/neo4j_get', async function (req, res, next) {
    let result = await neo4j_calls.get_airports();
    console.log("RESULT IS", result)
    res.status(200).send({ result })    //Can't send just a Number; encapsulate with {} or convert to String.     
    return { result };
})





module.exports = router;