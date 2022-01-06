from neo4j import GraphDatabase
import pandas as pd

driver = GraphDatabase.driver("bolt://localhost/7687", auth=("neo4j", "12345600"))
session = driver.session()
nodes=session.run("MATCH (x:User) RETURN x")
df = pd.DataFrame (nodes)

