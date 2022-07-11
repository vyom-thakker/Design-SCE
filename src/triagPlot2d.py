
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.tri as mtri
from mpl_toolkits.mplot3d import Axes3D
import pandas as pd
import sys
from matplotlib import cm
from matplotlib.colors import ListedColormap,LinearSegmentedColormap


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


names_val1=['Cost','DoC','GWP','TotPlastics(kg)','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','LABS from chemical recycling of PE','C4 Gas Mixture Pyrolysis','Light Liquid Fuel Pyrolysis','Clay reycled PLA','Lipase based PLA recycling','Lactic acid from acid hydrolysis','Me-Lactate from alcoholysis','Clinker','Lumber']
names_val=['Cost','DoC','GWP']

        #https://fabrizioguerrieri.com/blog/surface-graphs-with-irregular-dataset/

#data=pd.read_csv("pareto"+sys.argv[2]+".txt", sep=',',header =None,names=['Cost','DoC','MassConsumed','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','GWP'])

data=pd.read_csv("./pareto"+sys.argv[1]+".txt", sep=',',header =None,names=names_val,usecols=[1,2,3])

#data=data.append(data1)

x = data['Cost']
y = data['GWP']
z = data['DoC']


fig,ax=plt.subplots()

scatter=ax.scatter(y,z,s=x*100, c=x,cmap=orange_blue, alpha=0.7,edgecolors='black')
plt.vlines(x = 0, ymin = 0, ymax = max(z), colors = 'red',label='Net-zero', linestyle='dashed',alpha=0.7)

ax.annotate('Net-zero\nEmissions',xy=(0,max(z)*0.85),xycoords='data',xytext=(0.3*max(y),max(z)*0.85),textcoords='data', arrowprops=dict(arrowstyle="->",
                        connectionstyle="angle3,angleA=5,angleB=45"))

#for i in range(0,len(y)):
#    if y[i]<=0:
#        #ax.annotate("Nzero",(x[i],y[i],z[i]), xytext=(x[i]*(1-0.05), y[i]*(1-0.03), z[i]*(1-0.03)), arrowprops = dict(  arrowstyle="->", connectionstyle="angle3,angleA=0,angleB=-90"))
#       ax.text(x[i],y[i],z[i],"  -ve", size=7, zorder=1,color='k')

legend1=ax.legend(*scatter.legend_elements(num=5),loc="lower right",title="LCC\n(\$/house-yr)")
ax.add_artist(legend1)

#ax.set_xlim([-3,10])
#ax.set_ylim([0,1.4])


ax.set_xlabel('Global Warming Potential (kgCO2eq/house-yr)')
ax.set_ylabel('Circularity\n (Fraction of economic value regenerated)')
plt.savefig("./pareto2d"+sys.argv[1]+".svg",format='svg')
plt.show()












