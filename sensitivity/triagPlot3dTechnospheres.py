
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.tri as mtri
from mpl_toolkits.mplot3d import Axes3D
import pandas as pd
import sys

#font = {'family':'sans-serif','weight':'bold','size':12};

#matplotlib.rc('font',**font);


fig = plt.figure()
ax = fig.add_subplot(1,1,1, projection='3d')

data=pd.read_csv("pareto"+sys.argv[1]+".txt", sep=',',header =None,names=['Cost','DoC','MassConsumed','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','GWP'])

data1=pd.read_csv("pareto"+sys.argv[2]+".txt", sep=',',header =None,names=['Cost','DoC','MassConsumed','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','GWP'])

data=data.append(data1)

x = data['Cost']
y = data['GWP']
z = data['DoC']

triang = mtri.Triangulation(x, y)


ax.plot_trisurf(triang, z, color='blue', alpha=0.5 )
ax.scatter(x,y,z, marker='.', s=12, c="black", alpha=0.7)

#ax.view_init(elev=60, azim=-45)

data=pd.read_csv("pareto"+sys.argv[3]+".txt", sep=',',header =None,names=['Cost','DoC','MassConsumed','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','GWP'])


x = data['Cost']
y = data['GWP']
z = data['DoC']

triang = mtri.Triangulation(x, y)


ax.plot_trisurf(triang, z, color='red', alpha=0.5 )
ax.scatter(x,y,z, marker='.', s=12, c="black", alpha=0.7)

ax.view_init(elev=40, azim=60)


ax.set_xlabel('Life Cycle Cost\n ($/house-yr)',rotation=0)
ax.set_ylabel('Global Warming Potential\n (kgCO2eq/house-yr)',rotation=0)
ax.set_zlabel('Circularity\n (Economic Perspective)',rotation=0)
plt.savefig("pareto"+sys.argv[4]+".svg",format='svg')
plt.show()
















