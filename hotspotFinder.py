import pandas as pd
import numpy as np
pd.options.display.float_format='{:.4f}'.format;

A=pd.read_excel("techMatrix3.xlsx",skiprows=[0,1],header=None,usecols=range(2,139));
names=pd.read_excel("techMatrix3.xlsx",skiprows=range(2,132),header=None,usecols=range(2,139));
B=pd.read_excel("intMatrix3.xlsx",skiprows=[0,1],header=None,usecols=range(2,139));
B.iloc[0,14]=0.0;
B.iloc[0,15]=0.0;

C=pd.read_excel("CharacFactors3.xlsx",skiprows=[0,1,2,3,4,6,7,8,9,10,11],header=None,usecols=range(2,len(B)+1));
s=pd.read_csv("scalingVector.csv",skiprows=[0],header=None,usecols=[1]);
h=[0]*136;
f=[0]*136;
sumH=0.0;
for j in range(136):
    for i in range(len(B)-1):
        h[j]=h[j]+(C.iloc[0,i]*B.iloc[i,j]);
    sumH=sumH+h[j]*s.iloc[j,0];

count=0;
for j in range(136):
    f[j]=h[j]*s.iloc[j,0]*100/abs(sumH);
    if abs(f[j])>2:
        count=count+1;


f_sig=[0]*count;
f_name=[0]*count;
f_id=[0]*count;
k=0;
for j in range(136):
    if abs(f[j])>2:
        f_sig[k]=f[j];
        f_name[k]=names.iloc[0,j];
        f_id[k]=names.iloc[1,j];
        k=k+1;
print(sumH);
print(f_sig);
print(f_name);
print(f_id);

labe="\n\n Total GWP = "+str(sumH)+"\n";
for i in range(count):
    labe=labe+"\n"+f_id[i]+"-"+f_name[i];

import matplotlib.pyplot as plt
fig,ax=plt.subplots();
plt.bar(f_id,f_sig);
ax.set_ylabel="GWP contribution in %";
plt.title("GWP contribution in %");
#plt.text(0,0,labe,ha='left',va='bottom',transform=ax.transAxes);
plt.text(1,1,labe,ha='right',va='top',transform=ax.transAxes);

plt.show();


