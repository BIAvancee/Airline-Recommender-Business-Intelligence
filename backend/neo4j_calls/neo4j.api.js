let neo4j = require('neo4j-driver');
const { userInfo } = require('os');
let { creds } = require("../config/config.js");
let driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic(creds.neo4jusername, creds.neo4jpw));

Top_Airlines= async function (){
    return new Promise((resolve , reject) => {
   
  
})
}


exports.get_airports = async function () {
    let country= "Greenland";
    let session = driver.session();
    const airports = await session.run('MATCH (n:Airport {country:$country}) RETURN n.name ', {country:country});
    session.close();
    return (airports);
};
exports.find_airlines = async function (user1) {

    let session = driver.session();    
    const airlines = await session.run(`MATCH (r:Route) - [rby:by] ->(a:Airline) 
                                        WHERE EXISTS {  MATCH (r) - [rfrom:from]-> (a1:Airport {country: $country})
                                            WHERE EXISTS {
                                                MATCH (r) - [rto:to]-> (a2:Airport)
                                            }
                                        }
                                        return DISTINCT a.name,a2.country`, {
       airport:airport,
       airportD:airportD,

   });
    session.close();
 
};

exports.create_user = async function (email,airport,airportD) {
    let session = driver.session();
    let user = "No User Was Created";
    try {
         user = await session.run('MERGE (n:user {email:$email, airport_source:$airport,airport_destination:$airportD}) RETURN n', {
            email: email,
            airport:airport,
            airportD:airportD
        });
    }
    catch (err) {
        console.error(err);
        return user;
    }
    return user.records[0].get(0).properties.email,user.records[0].get(0).properties.airport,user.records[0].get(0).properties.airportD;
}

exports.getAll =async function(session, name) {
   
  };
  
  
  