file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=2.2218 --costC=0.18 --file=$file --fileS=1$file -optFile=1 --s142pyldpe=100 --s153bioet=100 
gams main.gms --gwpC=2.2218 --costC=0.7354 --file=$file --fileS=2$file -optFile=1 --s142pyldpe=100 --s153bioet=100 
gams main.gms --gwpC=2.2218 --costC=1.2909 --file=$file --fileS=3$file -optFile=1 --s142pyldpe=100 --s153bioet=100 
gams main.gms --gwpC=3.346 --costC=0.18 --file=$file --fileS=4$file -optFile=1 --s142pyldpe=100 --s153bioet=100 
gams main.gms --gwpC=3.346 --costC=0.7354 --file=$file --fileS=5$file -optFile=1 --s142pyldpe=100 --s153bioet=100 
gams main.gms --gwpC=3.346 --costC=1.2909 --file=$file --fileS=6$file -optFile=1 --s142pyldpe=100 --s153bioet=100 
gams main.gms --gwpC=4.4701 --costC=0.18 --file=$file --fileS=7$file -optFile=1 --s142pyldpe=100 --s153bioet=100 
gams main.gms --gwpC=4.4701 --costC=0.7354 --file=$file --fileS=8$file -optFile=1 --s142pyldpe=100 --s153bioet=100 
gams main.gms --gwpC=4.4701 --costC=1.2909 --file=$file --fileS=9$file -optFile=1 --s142pyldpe=100 --s153bioet=100 
sh ./src/CleanData.sh pareto$file.txt 
python ./src/triagPlot3d.py $file 
python ./src/triagPlot2d.py $file 
 mv *$file.* ./$file/
 mv $file ./result/ 
