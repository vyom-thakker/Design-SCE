file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=2.9229 --costC=0.8234 --file=$file --fileS=1$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=2.9229 --costC=2.3949 --file=$file --fileS=2$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=2.9229 --costC=3.9665 --file=$file --fileS=3$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=2.9229 --costC=5.538 --file=$file --fileS=4$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=7.4913 --costC=0.8234 --file=$file --fileS=5$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=7.4913 --costC=2.3949 --file=$file --fileS=6$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=7.4913 --costC=3.9665 --file=$file --fileS=7$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=7.4913 --costC=5.538 --file=$file --fileS=8$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=12.0597 --costC=0.8234 --file=$file --fileS=9$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=12.0597 --costC=2.3949 --file=$file --fileS=10$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=12.0597 --costC=3.9665 --file=$file --fileS=11$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=12.0597 --costC=5.538 --file=$file --fileS=12$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=16.6281 --costC=0.8234 --file=$file --fileS=13$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=16.6281 --costC=2.3949 --file=$file --fileS=14$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=16.6281 --costC=3.9665 --file=$file --fileS=15$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=16.6281 --costC=5.538 --file=$file --fileS=16$file -optFile=1 --s143pyhdpe=100 
sh ./src/CleanData.sh pareto$file.txt 
python ./src/triagPlot3d.py $file 
python ./src/triagPlot2d.py $file 
 mv *$file.* ./$file/
 mv $file ./result/ 
