
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.tri as mtri
from mpl_toolkits.mplot3d import Axes3D
import pandas as pd
import sys
from matplotlib import cm
import matplotlib.colors as colors
from matplotlib.colors import ListedColormap,LinearSegmentedColormap
from matplotlib import style
#style.use('ggplot')

#font = {'family':'Arial'};

#matplotlib.rc('font',**font);

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


names_val=['Cost','DoC','GWP']

data=pd.read_csv("pareto"+sys.argv[1]+".txt", sep=',',header =None,names=names_val,usecols=[1,2,3])

#data=data.append(data1)

x = data['Cost']
y = data['DoC']
z=np.zeros(len(x))

dx=0.1*np.ones(len(x))
dy=0.1*np.ones(len(y))
dz = data['GWP']

offset = dz + np.abs(dz.min())
fracs = offset.astype(float)/offset.max()
norm = colors.Normalize(fracs.min(), fracs.max())
color_values = cm.twilight(norm(fracs.tolist()))


fig = plt.figure()
ax = fig.add_subplot(1,1,1, projection='3d')

#ax.bar3d(x3, y3, z3, dx, dy, dz)
ax.bar3d(x,y,z,dx,dy,dz,color=color_values)
ax.set_zlim(-5,5)

X1, Y1=np.meshgrid(np.linspace(min(x),max(x),num=10),np.linspace(min(y),max(y),num=10))
Z1=0*X1

ax.plot_surface(X1,Y1,Z1,color='black',alpha=0.6)

ax.set_xlabel('Life Cycle Cost\n ($/house-yr)',labelpad=10,rotation=0)
ax.set_ylabel('Circularity',labelpad=10,rotation=0)
ax.set_zlabel('Global Warming potential',labelpad=10,rotation=0)
plt.savefig("pareto3dbar"+sys.argv[1]+".svg",format='svg')
plt.show()
















