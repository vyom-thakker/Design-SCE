import numpy as np
import matplotlib.pyplot as plt
import matplotlib.tri as mtri
from mpl_toolkits.mplot3d import Axes3D
import pandas as pd
import sys

#https://fabrizioguerrieri.com/blog/surface-graphs-with-irregular-dataset/

data=pd.read_csv("paretoEdgePts_"+sys.argv[2]+".txt", sep=',',header =None,names=['Cost','DoC','MassConsumed','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','GWP'])

data1=pd.read_csv("pareto"+sys.argv[1]+".txt", sep=',',header =None,names=['Cost','DoC','MassConsumed','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','GWP'])

data=data.append(data1)

x = data['Cost']
y = data['GWP']
z = data['DoC']

triang = mtri.Triangulation(x, y)

#fig = plt.figure()
#ax = fig.add_subplot(1,1,1)

#ax.triplot(triang, c="#D3D3D3", marker='.', markerfacecolor="#DC143C",
#    markeredgecolor="black", markersize=10)

#ax.set_xlabel('X')
#ax.set_ylabel('Y')
#plt.show()


isBad = np.where((x<1) | (x>99) | (y<1) | (y>99), True, False)

mask = np.any(isBad[triang.triangles],axis=1)
triang.set_mask(mask)

fig = plt.figure()
ax = fig.add_subplot(1,1,1, projection='3d')

ax.plot_trisurf(triang, z, cmap='jet')
ax.scatter(x,y,z, marker='.', s=10, c="black", alpha=0.5)
ax.view_init(elev=60, azim=-45)

ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
plt.savefig("pareto"+sys.argv[1]+".svg",format='svg')
plt.show()
















