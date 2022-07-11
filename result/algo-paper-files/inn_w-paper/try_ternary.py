
import pandas as pd
import plotly.express as px
names_val=['Cost','DoC','GWP','TotPlastics(kg)','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','LABS from chemical recycling of PE','C4 Gas Mixture Pyrolysis','Light Liquid Fuel Pyrolysis','Clay reycled PLA','Lipase based PLA recycling','Lactic acid from acid hydrolysis','Me-Lactate from alcoholysis','Clinker','Lumber']


df=pd.read_csv("paretoinn_w-paper.txt", sep=',',header =0,names=names_val)
df["GWP"]=df["GWP"]/max(df["GWP"])
df["Cost"]=df["Cost"]/max(df["Cost"])
df["DoC"]=df["DoC"]/max(df["DoC"])

print(df)

fig = px.scatter_ternary(df, a="Cost", b="GWP", c="DoC")
fig.show()
