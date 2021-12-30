from neo4j import GraphDatabase, basic_auth
driver= GraphDatabase.driver("bolt://localhost:7687",
        auth=basic_auth("neo4j","12345600"))
session=driver.session()

res="""match(sa:SA) return sa.airline as nom,count(sa.airline_sentiment="positive")as np order by np desc limit 1"""
result = session.run(res)
names=[record["nom"] for record in result]
print (names[0])

comp="Virgin America"
result2=session.run("match(r:Route)-[:by]->(a:Airline{name:$name}) return r", name=comp)
routes=[record["r"]["equipment"] for record in result2]

print(routes[0])
destinations=[]
for route in routes:
    result3=session.run("match(r:Route{equipement:$eq})-[:to]->(a:Airport) return a", eq=route)
    destinations.append([record["a"]["country"] for record in result3])
lat1=[x for l in destinations for x in l]
lat1= list(dict.fromkeys(lat1))
print(lat1)