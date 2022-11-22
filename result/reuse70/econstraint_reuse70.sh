file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=1.8462 --costC=0.5764 --file=$file --fileS=1$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=1.8462 --costC=1.3157 --file=$file --fileS=2$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=1.8462 --costC=2.0549 --file=$file --fileS=3$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=1.8462 --costC=2.7941 --file=$file --fileS=4$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=4.2247 --costC=0.5764 --file=$file --fileS=5$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=4.2247 --costC=1.3157 --file=$file --fileS=6$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=4.2247 --costC=2.0549 --file=$file --fileS=7$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=4.2247 --costC=2.7941 --file=$file --fileS=8$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=6.6031 --costC=0.5764 --file=$file --fileS=9$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=6.6031 --costC=1.3157 --file=$file --fileS=10$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=6.6031 --costC=2.0549 --file=$file --fileS=11$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=6.6031 --costC=2.7941 --file=$file --fileS=12$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=8.9816 --costC=0.5764 --file=$file --fileS=13$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=8.9816 --costC=1.3157 --file=$file --fileS=14$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=8.9816 --costC=2.0549 --file=$file --fileS=15$file -optFile=1 --fufraction=0.7 
gams main.gms --gwpC=8.9816 --costC=2.7941 --file=$file --fileS=16$file -optFile=1 --fufraction=0.7 
sh ./src/CleanData.sh pareto$file.txt 
python ./src/triagPlot3d.py $file 
python ./src/triagPlot2d.py $file 
 mv *$file.* ./$file/
 mv $file ./result/ 
