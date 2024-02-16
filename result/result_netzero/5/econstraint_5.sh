file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=2.6374 --costC=0.8234 --file=$file --fileS=1$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=2.6374 --costC=0.9262 --file=$file --fileS=2$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=2.6374 --costC=1.029 --file=$file --fileS=3$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=2.6374 --costC=1.1317 --file=$file --fileS=4$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=2.6374 --costC=1.2345 --file=$file --fileS=5$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.0542 --costC=0.8234 --file=$file --fileS=6$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.0542 --costC=0.9262 --file=$file --fileS=7$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.0542 --costC=1.029 --file=$file --fileS=8$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.0542 --costC=1.1317 --file=$file --fileS=9$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.0542 --costC=1.2345 --file=$file --fileS=10$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.4711 --costC=0.8234 --file=$file --fileS=11$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.4711 --costC=0.9262 --file=$file --fileS=12$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.4711 --costC=1.029 --file=$file --fileS=13$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.4711 --costC=1.1317 --file=$file --fileS=14$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.4711 --costC=1.2345 --file=$file --fileS=15$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.888 --costC=0.8234 --file=$file --fileS=16$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.888 --costC=0.9262 --file=$file --fileS=17$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.888 --costC=1.029 --file=$file --fileS=18$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.888 --costC=1.1317 --file=$file --fileS=19$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=3.888 --costC=1.2345 --file=$file --fileS=20$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=4.3048 --costC=0.8234 --file=$file --fileS=21$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=4.3048 --costC=0.9262 --file=$file --fileS=22$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=4.3048 --costC=1.029 --file=$file --fileS=23$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=4.3048 --costC=1.1317 --file=$file --fileS=24$file -optFile=1 --s147claypla=100 
gams main.gms --gwpC=4.3048 --costC=1.2345 --file=$file --fileS=25$file -optFile=1 --s147claypla=100 
sh ./src/CleanData.sh pareto$file.txt 
python ./src/triagPlot3d.py $file 
python ./src/triagPlot2d.py $file 
 mv *$file.* ./$file/
 mv $file ./result/ 