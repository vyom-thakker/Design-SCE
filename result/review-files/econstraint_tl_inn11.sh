file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=-0.4905 --costC=0.1885 --file=$file --fileS=1$file -optFile=1 -optfile=1 
gams main.gms --gwpC=-0.4905 --costC=2.4231 --file=$file --fileS=2$file -optFile=1 -optfile=1 
gams main.gms --gwpC=-0.4905 --costC=4.6577 --file=$file --fileS=3$file -optFile=1 -optfile=1 
gams main.gms --gwpC=-0.4905 --costC=6.8922 --file=$file --fileS=4$file -optFile=1 -optfile=1 
gams main.gms --gwpC=198.4084 --costC=0.1885 --file=$file --fileS=5$file -optFile=1 -optfile=1 
gams main.gms --gwpC=198.4084 --costC=2.4231 --file=$file --fileS=6$file -optFile=1 -optfile=1 
gams main.gms --gwpC=198.4084 --costC=4.6577 --file=$file --fileS=7$file -optFile=1 -optfile=1 
gams main.gms --gwpC=198.4084 --costC=6.8922 --file=$file --fileS=8$file -optFile=1 -optfile=1 
gams main.gms --gwpC=397.3073 --costC=0.1885 --file=$file --fileS=9$file -optFile=1 -optfile=1 
gams main.gms --gwpC=397.3073 --costC=2.4231 --file=$file --fileS=10$file -optFile=1 -optfile=1 
gams main.gms --gwpC=397.3073 --costC=4.6577 --file=$file --fileS=11$file -optFile=1 -optfile=1 
gams main.gms --gwpC=397.3073 --costC=6.8922 --file=$file --fileS=12$file -optFile=1 -optfile=1 
gams main.gms --gwpC=596.2061 --costC=0.1885 --file=$file --fileS=13$file -optFile=1 -optfile=1 
gams main.gms --gwpC=596.2061 --costC=2.4231 --file=$file --fileS=14$file -optFile=1 -optfile=1 
gams main.gms --gwpC=596.2061 --costC=4.6577 --file=$file --fileS=15$file -optFile=1 -optfile=1 
gams main.gms --gwpC=596.2061 --costC=6.8922 --file=$file --fileS=16$file -optFile=1 -optfile=1 
sh ./src/CleanData.sh pareto$file.txt 
python ./src/triagPlot3d.py $file 
python ./src/triagPlot2d.py $file 
 mv *$file.* ./$file/
 mv $file ./result/ 
