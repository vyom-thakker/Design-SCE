
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.tri as mtri
from mpl_toolkits.mplot3d import Axes3D
import pandas as pd
import sys
from matplotlib import cm
from matplotlib.colors import ListedColormap,LinearSegmentedColormap


font = {'family':'calibri'};

matplotlib.rc('font',**font);

new_inferno = cm.get_cmap('inferno', 5)

# modified hsv in 256 color class
hsv_modified = cm.get_cmap('hsv', 256)
# create new hsv colormaps in range of 0.3 (green) to 0.7 (blue)
newcmp = ListedColormap(hsv_modified(np.linspace(0.3, 0.7, 256)))

# define top and bottom colormaps
top = cm.get_cmap('Oranges_r', 128) # r means reversed version
bottom = cm.get_cmap('Blues', 128)
# combine it all
newcolors = np.vstack((top(np.linspace(0, 1, 128)),
                       bottom(np.linspace(0, 1, 128))))
# create a new colormaps with a name of OrangeBlue
orange_blue = ListedColormap(newcolors, name='OrangeBlue')


names_val1=['Cost','DoC','GWP','TotPlastics(kg)','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','LABS from chemical recycling of PE','C4 Gas Mixture Pyrolysis','Light Liquid Fuel Pyrolysis','Clay reycled PLA','Lipase based PLA recycling','Lactic acid from acid hydrolysis','Me-Lactate from alcoholysis','Clinker','Lumber']
names_val=['Cost','DoC','GWP']

        #https://fabrizioguerrieri.com/blog/surface-graphs-with-irregular-dataset/

#data=pd.read_csv("pareto"+sys.argv[2]+".txt", sep=',',header =None,names=['Cost','DoC','MassConsumed','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','GWP'])

data=pd.read_csv("pareto"+sys.argv[1]+".txt", sep=',',header =None,names=names_val,usecols=[1,2,3])

#data=data.append(data1)

x = data['Cost']
y = data['GWP']
z = data['DoC']


print(z)
triang = mtri.Triangulation(x, y)

#fig = plt.figure()
#ax = fig.add_subplot(1,1,1)

#ax.triplot(triang, c="#D3D3D3", marker='.', markerfacecolor="#DC143C",
#    markeredgecolor="black", markersize=10)

#ax.set_xlabel('X')
#ax.set_ylabel('Y')
#plt.show()


#isBad = np.where((x<1) | (x>99) | (y<1) | (y>99), True, False)

#mask = np.any(isBad[triang.triangles],axis=1)
#triang.set_mask(mask)

fig = plt.figure()
ax = fig.add_subplot(1,1,1, projection='3d')

ax.plot_trisurf(triang, z, cmap=orange_blue, alpha=0.75)
ax.scatter(x,y,z, marker='.', s=10, c="black", alpha=0.7)

#for i in range(0,len(y)):
 #   if y[i]<=0:
        #ax.annotate("Nzero",(x[i],y[i],z[i]), xytext=(x[i]*(1-0.05), y[i]*(1-0.03), z[i]*(1-0.03)), arrowprops = dict(  arrowstyle="->", connectionstyle="angle3,angleA=0,angleB=-90"))
#       ax.text(x[i],y[i],z[i],"  -ve", size=7, zorder=1,color='k')

X1, Z1=np.meshgrid(np.linspace(min(x),max(x),num=10),np.linspace(min(z),max(z),num=10))
Y1=0

#ax.plot_surface(X1,Y1,Z1,color='red',alpha=0.5)

ax.view_init(elev=22,azim=-115)

ax.set_xlabel('Life Cycle Cost\n ($/house-yr)',labelpad=10,rotation=0)
ax.set_ylabel('Global Warming Potential\n (kgCO2eq/house-yr)',labelpad=10,rotation=0)
ax.set_zlabel('Circularity',labelpad=10,rotation=0)
plt.savefig("pareto3d"+sys.argv[1]+".svg",format='svg')
plt.show()
















