from sys import *
import numpy as np
file1=open("defaultSensitivityVal.gms","a+");
commands=["\n"];



for x in range(1,16):
  commands.extend("$if not set q"+str(x)+" $set q"+str(x)+" 1\n");

file1.writelines(commands);
file1.close();
