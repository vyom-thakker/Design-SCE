#arg 1: scriptname, arg 2: D1/D2/D3/D4, arg 3: meshgrid size

import sys
from sys import *
import numpy as np
file1=open("econstraint_"+sys.argv[1]+".sh","a+");

commands=["file=$1\nfilename=\"pareto\"\nfilename=\"$filename$file\"\n\n"];
import pandas as pd

df=pd.read_csv("pareto"+sys.argv[1]+".txt", sep=',',usecols=[0,1,2],header =None,names=['Cost','DoC','GWP'])


if min(df['GWP'])<0:
    x1=np.linspace(min(df['GWP'])*0.9,max(df['GWP'])*0.95,int(sys.argv[3]));
    x2=np.linspace(min(df['Cost'])*1.05,max(df['Cost'])*0.95,int(sys.argv[3]));
else:
    x1=np.linspace(min(df['GWP'])*1.05,max(df['GWP'])*0.95,int(sys.argv[3]));
    x2=np.linspace(min(df['Cost'])*1.05,max(df['Cost'])*0.95,int(sys.argv[3]));

X,Y = np.meshgrid(x1,x2,sparse=True);
k=1;
for x in X[0]:
    for y in Y:
        #commands.extend("gams RP"+di+".gms --gwpC="+str(round(x,4))+" --costC="+str(round(y[0],4))+" --file=$file parmfile=moreOptions.txt \n");
        commands.extend("gams main.gms --gwpC="+str(round(x,4))+" --costC="+str(round(y[0],4))+" --file=$file --fileS="+str(k)+"$file -optFile=1 "+sys.argv[2]+" \n");
        k=k+1;

commands.extend("sh ./src/CleanData.sh pareto$file.txt \npython ./src/triagPlot3d.py $file \npython ./src/triagPlot2d.py $file \n mv *$file.* ./$file/\n mv $file ./result/ \n")

file1.writelines(commands);
file1.close();
