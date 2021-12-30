import pandas as pd
import numpy as np
import csv
import os  

column_name=["_unit_id,_golden", "_unit_state","_trusted_judgments","_last_judgment_at","airline_sentiment","airline_sentiment:confidence", "negativereason","negativereason:confidence","airline", "airline_sentiment_gold", "name","negativereason_gold","retweet_count","text","tweet_coord", "tweet_created","tweet_id","tweet_location","user_timezone"]
with open("/home/fatmach/Documents/BIAProject/recommend/Airline-Sentiment-2-w-AA.csv", encoding="utf8", errors='ignore') as f:
  write=csv.DictReader(f)
  l=list(write)
df=pd.DataFrame(l)
df['idPersonne'] = np.random.randint(0,20, size=len(df))

print(df.head)
df['airline'].value_counts()

def chaine_vide(chaine):
  chaine=""
  return chaine
df['text']=df['text'].apply(lambda x: chaine_vide(x))
df['tweet_created']=df['tweet_created'].apply(lambda x: chaine_vide(x))
df['tweet_coord']=df['tweet_coord'].apply(lambda x:chaine_vide(x))

os.makedirs('folder/subfolder', exist_ok=True) 
df.to_csv('folder/subfolder/sa.csv', index=False)
print(df.head())
