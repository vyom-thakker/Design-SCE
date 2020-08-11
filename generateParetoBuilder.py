#arg 1: scriptname, arg 2: D1/D2/D3/D4, arg 3: meshgrid size

import sys
from sys import *
import numpy as np
file1=open(sys.argv[1]+"_"+sys.argv[2]+".sh","a+");
commands=["file=$1\nfilename=\"pareto\"\nfilename=\"$filename$file\"\nmkdir $file\n"];

import pandas as pd

df=pd.read_csv("paretoEdgePts"+"_"+sys.argv[2]+".txt", sep=',',header =None,names=['Cost','DoC','MassConsumed','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','GWP'])



#print(df)


#x1[0]=17.72;
#x1[30]=127.05;
#x2[0]=0.784;
#x2[30]=9.32;

di=str(int(sys.argv[2][1])+3)

x1=np.linspace(min(df['GWP']),max(df['GWP']),int(sys.argv[3]));
x2=np.linspace(min(df['Cost']),max(df['Cost']),int(sys.argv[3]));

X,Y = np.meshgrid(x1,x2,sparse=True);
k=1;
for x in X[0]:
    for y in Y:
        commands.extend("gams rp"+di+".gms --gwpC="+str(round(x,4))+" --costC="+str(round(y[0],4))+" --file=$file --fileS="+str(k)+"$file --fileS1="+str(k)+"g$file parmfile=moreOptions.txt \n");
        k=k+1;



commands.extend("sed -i -e 's/\s\+//g' $filename.txt\n");
#commands.extend("sed -i '1i Cost,DoC,TotPlastics(kg),HDPE,LDPE,PP,PLA,PHA,Paper,Reprocess,Pyrolysis,Landfill,Incineration,GWP' $filename.txt");
commands.extend("python triagPlot3d.py $file "+sys.argv[2]);


file1.writelines(commands);
file1.close();
