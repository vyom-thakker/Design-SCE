file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=2.4491 --costC=0.18 --file=$file --fileS=1$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=2.4491 --costC=1.5193 --file=$file --fileS=2$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=2.4491 --costC=2.8586 --file=$file --fileS=3$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=2.4491 --costC=4.198 --file=$file --fileS=4$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=6.2333 --costC=0.18 --file=$file --fileS=5$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=6.2333 --costC=1.5193 --file=$file --fileS=6$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=6.2333 --costC=2.8586 --file=$file --fileS=7$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=6.2333 --costC=4.198 --file=$file --fileS=8$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=10.0175 --costC=0.18 --file=$file --fileS=9$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=10.0175 --costC=1.5193 --file=$file --fileS=10$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=10.0175 --costC=2.8586 --file=$file --fileS=11$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=10.0175 --costC=4.198 --file=$file --fileS=12$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=13.8017 --costC=0.18 --file=$file --fileS=13$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=13.8017 --costC=1.5193 --file=$file --fileS=14$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=13.8017 --costC=2.8586 --file=$file --fileS=15$file -optFile=1 --s153bioet=100 
gams main.gms --gwpC=13.8017 --costC=4.198 --file=$file --fileS=16$file -optFile=1 --s153bioet=100 
sh ./src/CleanData.sh pareto$file.txt 
python ./src/triagPlot3d.py $file 
python ./src/triagPlot2d.py $file 
 mv *$file.* ./$file/
 mv $file ./result/ 
