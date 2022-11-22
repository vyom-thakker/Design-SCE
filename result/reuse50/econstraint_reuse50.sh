file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=1.3187 --costC=0.4117 --file=$file --fileS=1$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=1.3187 --costC=0.9398 --file=$file --fileS=2$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=1.3187 --costC=1.4678 --file=$file --fileS=3$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=1.3187 --costC=1.9959 --file=$file --fileS=4$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=3.0176 --costC=0.4117 --file=$file --fileS=5$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=3.0176 --costC=0.9398 --file=$file --fileS=6$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=3.0176 --costC=1.4678 --file=$file --fileS=7$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=3.0176 --costC=1.9959 --file=$file --fileS=8$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=4.7165 --costC=0.4117 --file=$file --fileS=9$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=4.7165 --costC=0.9398 --file=$file --fileS=10$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=4.7165 --costC=1.4678 --file=$file --fileS=11$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=4.7165 --costC=1.9959 --file=$file --fileS=12$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=6.4154 --costC=0.4117 --file=$file --fileS=13$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=6.4154 --costC=0.9398 --file=$file --fileS=14$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=6.4154 --costC=1.4678 --file=$file --fileS=15$file -optFile=1 --fufraction=0.5 
gams main.gms --gwpC=6.4154 --costC=1.9959 --file=$file --fileS=16$file -optFile=1 --fufraction=0.5 
sh ./src/CleanData.sh pareto$file.txt 
python ./src/triagPlot3d.py $file 
python ./src/triagPlot2d.py $file 
 mv *$file.* ./$file/
 mv $file ./result/ 
