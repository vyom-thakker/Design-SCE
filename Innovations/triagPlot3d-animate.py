
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.tri as mtri
from mpl_toolkits.mplot3d import Axes3D
import pandas as pd
import sys
from matplotlib import animation
from matplotlib import cm


#font = {'family':'Arial'};

#matplotlib.rc('font',**font);

#https://fabrizioguerrieri.com/blog/surface-graphs-with-irregular-dataset/

fig = plt.figure()
ax = fig.add_subplot(1,1,1, projection='3d')

names_val0=['Cost','DoC','MassConsumed','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','GWP']

names_val=['Cost','DoC','GWP','TotPlastics(kg)','HDPE','LDPE','PP','PLA','PHA','Paper','Reprocess','Pyrolysis','Landfill','Incineration','LABS from chemical recycling of PE','C4 Gas Mixture Pyrolysis','Light Liquid Fuel Pyrolysis','Clay reycled PLA','Lipase based PLA recycling','Lactic acid from acid hydrolysis','Me-Lactate from alcoholysis','Clinker','Lumber']

def init():

     data=pd.read_csv("pareto"+"NoPaperEdgePts_D1"+".txt", sep=',',header =None,names=names_val0)

     data1=pd.read_csv("paretot.txt", sep=',',header =None,names=names_val0)

     data=data.append(data1)

     x = data['Cost']
     y = data['GWP']
     z = data['DoC']
     xo=min(x)
     yo=min(y)
     zo=max(z)

     triang = mtri.Triangulation(x, y)
     ax.plot_trisurf(triang, z, color='red' , alpha=1)
     ax.scatter(x,y,z, marker='.', s=30, c="black", alpha=0.7)
     ax.view_init(elev=60, azim=-45)


     data=pd.read_csv("pareto"+sys.argv[1]+".txt", sep=',',header =1,names=names_val)


     x = data['Cost']
     y = data['GWP']
     z = data['DoC']


     triang = mtri.Triangulation(x, y)
     uval=np.sqrt(np.square(max(z)-zo)+np.square(min(y)-yo)+np.square(min(x)-xo));
     uval1=np.sqrt(np.square(max(z)/zo-1)+np.square(min(y)/yo-1)+np.square(min(x)/xo-1));
     uval2=((max(z)/zo-1)+(min(y)/yo-1)+(min(x)/xo-1));
     ax.scatter(xo,yo,zo, marker='+', s=40, c="red", alpha=0.7)
     ax.scatter(min(x),min(y),max(z), marker='*', s=40, c="blue", alpha=0.7)
     ax.plot([xo,min(x)],[yo,min(y)],[zo,max(z)], marker='', linestyle='dashed', alpha=0.7)
     print(uval);
     print(uval1);
     print(uval2);
     ax.plot_trisurf(triang, z, color='blue' , alpha=0.5)
     ax.scatter(x,y,z, marker='.', s=30, c="black", alpha=0.7)
     ax.set_xlabel('LCC',labelpad=10,rotation=0)
     ax.set_ylabel('GWP',labelpad=10,rotation=0)
     ax.set_xlim(0,10)
     ax.set_ylim(0,16)
     ax.set_zlim(0,0.9)
     ax.set_zlabel('Circularity',labelpad=10,rotation=0)
     ax.set_title('Utopia point shift (UU*)='+str(round(uval1,3)))
     return fig,

def animate(i):
    ax.view_init(elev=15,azim=i*4)
    return fig,

ani = animation.FuncAnimation(fig, animate, init_func=init,frames=90, interval=50, blit=True)

fn ="pareto"+sys.argv[1]
ani.save(fn+'.gif',writer='pillow',fps=500/50)
ax.view_init(elev=15,azim=-160)

plt.savefig("pareto"+sys.argv[1]+".svg",format='svg')
#plt.show()
















