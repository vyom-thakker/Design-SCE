file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=-0.1516 --costC=0.8968 --file=$file --fileS=1$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=-0.1516 --costC=0.9422 --file=$file --fileS=2$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=-0.1516 --costC=0.9876 --file=$file --fileS=3$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=-0.1516 --costC=1.0329 --file=$file --fileS=4$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=2.0786 --costC=0.8968 --file=$file --fileS=5$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=2.0786 --costC=0.9422 --file=$file --fileS=6$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=2.0786 --costC=0.9876 --file=$file --fileS=7$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=2.0786 --costC=1.0329 --file=$file --fileS=8$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=4.3088 --costC=0.8968 --file=$file --fileS=9$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=4.3088 --costC=0.9422 --file=$file --fileS=10$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=4.3088 --costC=0.9876 --file=$file --fileS=11$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=4.3088 --costC=1.0329 --file=$file --fileS=12$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=6.539 --costC=0.8968 --file=$file --fileS=13$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=6.539 --costC=0.9422 --file=$file --fileS=14$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=6.539 --costC=0.9876 --file=$file --fileS=15$file -optFile=1 --s142pyldpe=100 
gams main.gms --gwpC=6.539 --costC=1.0329 --file=$file --fileS=16$file -optFile=1 --s142pyldpe=100 
sh ./src/CleanData.sh pareto$file.txt 
python ./src/triagPlot3d.py $file 
python ./src/triagPlot2d.py $file 
 mv *$file.* ./$file/
 mv $file ./result/ 
