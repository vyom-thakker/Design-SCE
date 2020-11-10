import pandas as pd
import matplotlib
matplotlib.use("agg");
import matplotlib.pyplot as plt
import numpy as np
#pd.options.display.float_format='{:.4f}'.format;

names=pd.read_excel("techMatrix3.xlsx",skiprows=range(2,132),header=None,usecols=range(2,139));
s=pd.read_csv("scalingVector.csv",skiprows=[0],header=None,usecols=[1]);
losshotspot=pd.read_csv("losshotspot.csv",skiprows=[0],header=None,usecols=[1]);
h=[0]*137;
f=[0]*137;
sumH=0.0;
for j in range(137):
    h[j]=losshotspot.iloc[j,0];
    sumH=1;

count=0;
for j in range(137):
    f[j]=100*h[j];
    if abs(f[j])>2:
        count=count+1;


f_sig=[0]*count;
f_name=[0]*count;
f_id=[0]*count;
k=0;
for j in range(137):
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

#fig,ax=plt.subplots();
#plt.bar(f_id,f_sig);
#ax.set_ylabel="circularitydrop";
#plt.title("GWP ");
#plt.text(0,0,labe,ha='left',va='bottom',transform=ax.transAxes);
#plt.text(1,1,labe,ha='right',va='top',transform=ax.transAxes);

exp=[0]*count;
exp[np.argmax(f_sig)]=0.1;

labels=f_name;
wrapped_labels = [ label.replace(',', '\n') for label in labels ]
sizes=f_sig;
explode=exp;
fig1,ax1=plt.subplots();
ax1.pie(sizes, explode=explode, labels=wrapped_labels, autopct='%1.1f%%',
                shadow=True, startangle=90)
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.savefig('circularityfig.png');
plt.savefig('circularityfig.svg')
#plt.show();


