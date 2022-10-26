file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=2.6374 --costC=0.8234 --file=$file --fileS=1$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=2.6374 --costC=1.9505 --file=$file --fileS=2$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=2.6374 --costC=3.0775 --file=$file --fileS=3$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=2.6374 --costC=4.2046 --file=$file --fileS=4$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=2.6374 --costC=5.3317 --file=$file --fileS=5$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=5.8924 --costC=0.8234 --file=$file --fileS=6$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=5.8924 --costC=1.9505 --file=$file --fileS=7$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=5.8924 --costC=3.0775 --file=$file --fileS=8$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=5.8924 --costC=4.2046 --file=$file --fileS=9$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=5.8924 --costC=5.3317 --file=$file --fileS=10$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=9.1474 --costC=0.8234 --file=$file --fileS=11$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=9.1474 --costC=1.9505 --file=$file --fileS=12$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=9.1474 --costC=3.0775 --file=$file --fileS=13$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=9.1474 --costC=4.2046 --file=$file --fileS=14$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=9.1474 --costC=5.3317 --file=$file --fileS=15$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=12.4023 --costC=0.8234 --file=$file --fileS=16$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=12.4023 --costC=1.9505 --file=$file --fileS=17$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=12.4023 --costC=3.0775 --file=$file --fileS=18$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=12.4023 --costC=4.2046 --file=$file --fileS=19$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=12.4023 --costC=5.3317 --file=$file --fileS=20$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=15.6573 --costC=0.8234 --file=$file --fileS=21$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=15.6573 --costC=1.9505 --file=$file --fileS=22$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=15.6573 --costC=3.0775 --file=$file --fileS=23$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=15.6573 --costC=4.2046 --file=$file --fileS=24$file -optFile=1 --s143pyhdpe=100 
gams main.gms --gwpC=15.6573 --costC=5.3317 --file=$file --fileS=25$file -optFile=1 --s143pyhdpe=100 
sh ./src/CleanData.sh pareto$file.txt 
python ./src/triagPlot3d.py $file 
python ./src/triagPlot2d.py $file 
 mv *$file.* ./$file/
 mv $file ./result/ 
