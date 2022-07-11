
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.tri as mtri
from mpl_toolkits.mplot3d import Axes3D
import pandas as pd
import sys

font = {'family':'monospace','weight':'normal','size':8};

matplotlib.rc('font',**font);


#https://fabrizioguerrieri.com/blog/surface-graphs-with-irregular-dataset/

names_val=['Cost','DoC','GWP']


data=pd.read_csv("pareto"+sys.argv[1]+".txt", sep=',',header =None,names=names_val,usecols=[1,2,3])
x = data['Cost']
y = data['GWP']
z = data['DoC']

triang = mtri.Triangulation(x, y)




plt.tight_layout()
fig = plt.figure()
ax = fig.add_subplot(1,1,1, projection='3d')

ax.plot_trisurf(triang, z, color='red', alpha=0.6)
ax.scatter(x,y,z, marker='.', s=1, c="black", alpha=0.7)
ax.view_init(elev=60, azim=-45)


data=pd.read_csv("pareto"+sys.argv[2]+".txt", sep=',',header =None,names=names_val,usecols=[1,2,3])
x = data['Cost']
y = data['GWP']
z = data['DoC']

triang = mtri.Triangulation(x, y)
ax.plot_trisurf(triang, z, color='green', alpha=0.5)
ax.scatter(x,y,z, marker='.', s=1, c="black", alpha=0.7)
ax.view_init(elev=60, azim=-45)

data=pd.read_csv("pareto"+sys.argv[3]+".txt", sep=',',header =None,names=names_val,usecols=[1,2,3])
x = data['Cost']
y = data['GWP']
z = data['DoC']

triang = mtri.Triangulation(x, y)

ax.plot_trisurf(triang, z, color='blue', alpha=0.6 )
ax.scatter(x,y,z, marker='.', s=1, c="black", alpha=0.7)

ax.view_init(elev=60, azim=-45)

data=pd.read_csv("pareto"+sys.argv[4]+".txt", sep=',',header =None,names=names_val,usecols=[1,2,3])
x = data['Cost']
y = data['GWP']
z = data['DoC']

triang = mtri.Triangulation(x, y)

ax.plot_trisurf(triang, z, color='yellow', alpha=0.3 )
ax.scatter(x,y,z, marker='.', s=1, c="black", alpha=0.7)

ax.view_init(elev=60, azim=-45)
data=pd.read_csv("pareto"+sys.argv[5]+".txt", sep=',',header =None,names=names_val,usecols=[1,2,3])
x = data['Cost']
y = data['GWP']
z = data['DoC']

triang = mtri.Triangulation(x, y)

ax.plot_trisurf(triang, z, color='cyan', alpha=0.2 )
ax.scatter(x,y,z, marker='.', s=1, c="black", alpha=0.7)

ax.view_init(elev=22, azim=-135)

ax.set_xlabel('Life Cycle Cost\n ($/house-yr)',labelpad=20,rotation=0)
ax.set_ylabel('Global Warming Potential\n (kgCO2eq/house-yr)',labelpad=20,rotation=0)
ax.set_zlabel('Circularity',labelpad=20,rotation=0)
plt.savefig("paretoall.svg",format='svg')
plt.show()
















