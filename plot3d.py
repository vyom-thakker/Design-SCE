
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import pandas as pd
import sys

data=pd.read_csv("impPoints_values.txt", sep=',',header =None,names=['Cost','DoC','MassConsumed','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','GWP'])

fig = plt.figure(figsize=(8, 6))
ax = fig.add_subplot(111, projection="3d")
x=[];
y=[];
z=[];
for i in [int(sys.argv[1])-1,int(sys.argv[2])-1,int(sys.argv[3])-1]:
    x.extend([data.iloc[i,0]]);
    y.extend([data.iloc[i,13]]);
    z.extend([data.iloc[i,1]]);


ax.plot_trisurf(x,y,z)
#plt.show()


#fig = plt.figure()
#ax = fig.add_subplot(111, projection='3d')



ax.scatter(x, y, z, c='b', marker='o',label="D1 Old");


x=[];
y=[];
z=[];
for i in [int(sys.argv[1])-1,int(sys.argv[2])-1,int(sys.argv[4])-1]:
    x.extend([data.iloc[i,0]]);
    y.extend([data.iloc[i,13]]);
    z.extend([data.iloc[i,1]]);


ax.plot_trisurf(x,y,z,color='r');
#plt.show()


#fig = plt.figure()
#ax = fig.add_subplot(111, projection='3d')



ax.scatter(x, y, z, c='r', marker='o',label="D1 New");





x=[];
y=[];
z=[];
for i in [int(sys.argv[1])-1,int(sys.argv[2])-1,int(sys.argv[5])-1]:
    x.extend([data.iloc[i,0]]);
    y.extend([data.iloc[i,13]]);
    z.extend([data.iloc[i,1]]);


print(y)


ax.plot_trisurf(x,y,z,color='g');
#plt.show()


#fig = plt.figure()
#ax = fig.add_subplot(111, projection='3d')



ax.scatter(x, y, z, c='g', marker='o',label="D2");


 #x=[];
 #y=[];
 #z=[];
 #for i in [int(sys.argv[1])-1,int(sys.argv[2])-1,int(sys.argv[6])-1]:
     #x.extend([data.iloc[i,0]]);
     #y.extend([data.iloc[i,13]]);
     #z.extend([data.iloc[i,1]]);
 #
 #
 #ax.plot_trisurf(x,y,z,color='y');
 ##plt.show()
 #
 #
 ##fig = plt.figure()
 ##ax = fig.add_subplot(111, projection='3d')
 #
 #
 #
 #ax.scatter(x, y, z, c='y', marker='o',label="D5");

ax.legend();



plt.show();
