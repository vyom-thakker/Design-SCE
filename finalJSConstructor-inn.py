import pandas as pd
import sys
filejs=open(sys.argv[1].split('.')[0]+'.js',"a+");
nodenames=pd.read_csv("Nodes.csv");
linkvals=pd.read_csv(sys.argv[1]);
filejs.writelines("let dataV={\"nodes\": [\n");
listnodepresent=[0]*(len(nodenames));
for i in range(len(linkvals)):
    if(linkvals.iloc[i,2]=="Undf"):
        linkvals.iloc[i,2]=0;



for i in range(len(linkvals)):
    if(linkvals.iloc[i,2]!=0):
        for j in range(len(nodenames)):
            if linkvals.iloc[i,0]==nodenames.iloc[j,0]:
                listnodepresent[j]+=1;
            if linkvals.iloc[i,1]==nodenames.iloc[j,0]:
                listnodepresent[j]+=1;



for i in range(len(nodenames)):
    if listnodepresent[i]>0:# or sum(listnodepresent[i+1:len(listnodepresent)-1])==0:
        if i == len(nodenames)-1:
            filejs.writelines("{\"name\": \""+nodenames.iloc[i,0]+"\"},\n{\"name\":\"LCUpstream\"} \n],\n \"links\": [\n ");
        else:
            filejs.writelines("{\"name\":\""+nodenames.iloc[i,0]+"\"},\n");

lineinn=""
for i in range(len(linkvals)):
    if linkvals.iloc[i,2]!=0 and linkvals.iloc[i,0]=="Segregation" and (linkvals.iloc[i,1][0]!="r" and linkvals.iloc[i,1]!="Landfill" and linkvals.iloc[i,1]!="Incineration"):
        lineinn+=",\n{\"source\":\""+linkvals.iloc[i,1]+"\", ";
        lineinn+="\"target\":\""+"LCUpstream"+"\", ";
        lineinn+="\"value\":"+str(linkvals.iloc[i,2])+", ";
        lineinn+="\"optimal\":\""+"yes"+"\"} ";
    if linkvals.iloc[i,2]!=0 and linkvals.iloc[i,1]=="Households":
        lineinn+=",\n{\"source\":\"LCUpstream\", ";
        lineinn+="\"target\":\""+linkvals.iloc[i,0]+"\", ";
        lineinn+="\"value\":"+str(0.001)+", ";
        lineinn+="\"optimal\":\""+"yes"+"\"} ";

for i in range(len(linkvals)):
    if linkvals.iloc[i,2]!=0:
        linename="{\"source\":\""+linkvals.iloc[i,0]+"\", ";
        linename+="\"target\":\""+linkvals.iloc[i,1]+"\", ";
        linename+="\"value\":"+str(linkvals.iloc[i,2])+", ";
        linename+="\"optimal\":\""+"yes"+"\"} ";
        if i == len(linkvals)-1 or sum(linkvals.iloc[i+1:len(linkvals)-1,2])==0:
            filejs.writelines(linename+lineinn+"]}; \n")
        else:
            filejs.writelines(linename+", \n")
