file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=-1 --costC=0.7634 --file=$file --fileS=1$file -optFile=1 --s140labs=0
gams main.gms --gwpC=-1 --costC=0.8801 --file=$file --fileS=2$file -optFile=1 --s140labs=0
gams main.gms --gwpC=-1 --costC=0.9968 --file=$file --fileS=3$file -optFile=1 --s140labs=0
gams main.gms --gwpC=-1 --costC=1.1135 --file=$file --fileS=4$file -optFile=1 --s140labs=0
gams main.gms --gwpC=1.0692 --costC=0.7634 --file=$file --fileS=5$file -optFile=1 --s140labs=0
gams main.gms --gwpC=1.0692 --costC=0.8801 --file=$file --fileS=6$file -optFile=1 --s140labs=0
gams main.gms --gwpC=1.0692 --costC=0.9968 --file=$file --fileS=7$file -optFile=1 --s140labs=0
gams main.gms --gwpC=1.0692 --costC=1.1135 --file=$file --fileS=8$file -optFile=1 --s140labs=0
gams main.gms --gwpC=3.269 --costC=0.7634 --file=$file --fileS=9$file -optFile=1 --s140labs=0
gams main.gms --gwpC=3.269 --costC=0.8801 --file=$file --fileS=10$file -optFile=1 --s140labs=0
gams main.gms --gwpC=3.269 --costC=0.9968 --file=$file --fileS=11$file -optFile=1 --s140labs=0
gams main.gms --gwpC=3.269 --costC=1.1135 --file=$file --fileS=12$file -optFile=1 --s140labs=0
gams main.gms --gwpC=5.4689 --costC=0.7634 --file=$file --fileS=13$file -optFile=1 --s140labs=0
gams main.gms --gwpC=5.4689 --costC=0.8801 --file=$file --fileS=14$file -optFile=1 --s140labs=0
gams main.gms --gwpC=5.4689 --costC=0.9968 --file=$file --fileS=15$file -optFile=1 --s140labs=0
gams main.gms --gwpC=5.4689 --costC=1.1135 --file=$file --fileS=16$file -optFile=1 --s140labs=0
sh ./src/CleanData.sh pareto$file.txt
python ./src/triagPlot3d.py $file
python ./src/triagPlot2d.py $file
 mv *$file.* ./$file/
 mv $file ./result/
