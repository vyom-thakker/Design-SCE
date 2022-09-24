from sys import *
import numpy as np
file1=open("sensitivityScript.sh","a+");
commands=["\n"];



for x in range(1,16):
  commands.extend("gams rp4.gms --q"+str(x)+"=0.7 --file=sensitivity --fileS=30pd1q"+str(x)+" parmFile=moreOptions.txt\n");
  commands.extend("gams rp4.gms --q"+str(x)+"=0.9 --file=sensitivity --fileS=10pd1q"+str(x)+" parmFile=moreOptions.txt\n");
  commands.extend("gams rp4.gms --q"+str(x)+"=1.1 --file=sensitivity --fileS=10nd1q"+str(x)+" parmFile=moreOptions.txt\n");
  commands.extend("gams rp4.gms --q"+str(x)+"=1.3 --file=sensitivity --fileS=30nd1q"+str(x)+" parmFile=moreOptions.txt\n");
for x in range(1,16):
  commands.extend("gams rp5.gms --q"+str(x)+"=0.7 --file=sensitivity --fileS=30pd2q"+str(x)+" parmFile=moreOptions.txt\n");
  commands.extend("gams rp5.gms --q"+str(x)+"=0.9 --file=sensitivity --fileS=10pd2q"+str(x)+" parmFile=moreOptions.txt\n");
  commands.extend("gams rp5.gms --q"+str(x)+"=1.1 --file=sensitivity --fileS=10nd2q"+str(x)+" parmFile=moreOptions.txt\n");
  commands.extend("gams rp5.gms --q"+str(x)+"=1.3 --file=sensitivity --fileS=30nd2q"+str(x)+" parmFile=moreOptions.txt\n");
#for x in range(1,16):
#  commands.extend("gams rp6.gms --q"+str(x)+"=0.9 --file=sensitivity --fileS=10pd3q"+str(x)+" parmFile=moreOptions.txt\n");
#  commands.extend("gams rp6.gms --q"+str(x)+"=1.1 --file=sensitivity --fileS=10nd3q"+str(x)+" parmFile=moreOptions.txt\n");
#  commands.extend("gams rp6.gms --q"+str(x)+"=0.7 --file=sensitivity --fileS=30pd3q"+str(x)+" parmFile=moreOptions.txt\n");
#  commands.extend("gams rp6.gms --q"+str(x)+"=1.3 --file=sensitivity --fileS=30nd3q"+str(x)+" parmFile=moreOptions.txt\n");
#for x in range(1,16):
#  commands.extend("gams rp7.gms --q"+str(x)+"=0.9 --file=sensitivity --fileS=10pd4q"+str(x)+" parmFile=moreOptions.txt\n");
#  commands.extend("gams rp7.gms --q"+str(x)+"=1.1 --file=sensitivity --fileS=10nd4q"+str(x)+" parmFile=moreOptions.txt\n");
#  commands.extend("gams rp7.gms --q"+str(x)+"=0.7 --file=sensitivity --fileS=30pd4q"+str(x)+" parmFile=moreOptions.txt\n");
#  commands.extend("gams rp7.gms --q"+str(x)+"=1.3 --file=sensitivity --fileS=30nd4q"+str(x)+" parmFile=moreOptions.txt\n");
file1.writelines(commands);
file1.close();
