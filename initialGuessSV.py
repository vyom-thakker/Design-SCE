import pandas as pd
import numpy as np
from sys import *
import os


s=pd.read_csv("scalingVector.csv",skiprows=[0],header=None,usecols=[1]);

incfile="";

for i in range(137):
    incfile+="s.l('P"+str(i+1)+"')="+str(round(s.iloc[i,0],2))+";\n";
os.system('rm scalingVector.inc');

file1=open("scalingVector.inc","a+");
file1.write(incfile);
file1.close();
