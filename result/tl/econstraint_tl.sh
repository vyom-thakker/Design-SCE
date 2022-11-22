file=$1
filename="pareto"
filename="$filename$file"

gams main-tl.gms --gwpC=27.1307 --costC=0.8717 --file=$file --fileS=1$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=27.1307 --costC=1.2643 --file=$file --fileS=2$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=27.1307 --costC=1.6569 --file=$file --fileS=3$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=27.1307 --costC=2.0494 --file=$file --fileS=4$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=86.8973 --costC=0.8717 --file=$file --fileS=5$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=86.8973 --costC=1.2643 --file=$file --fileS=6$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=86.8973 --costC=1.6569 --file=$file --fileS=7$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=86.8973 --costC=2.0494 --file=$file --fileS=8$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=146.6639 --costC=0.8717 --file=$file --fileS=9$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=146.6639 --costC=1.2643 --file=$file --fileS=10$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=146.6639 --costC=1.6569 --file=$file --fileS=11$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=146.6639 --costC=2.0494 --file=$file --fileS=12$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=206.4305 --costC=0.8717 --file=$file --fileS=13$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=206.4305 --costC=1.2643 --file=$file --fileS=14$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=206.4305 --costC=1.6569 --file=$file --fileS=15$file -optFile=1 -optfile=1
gams main-tl.gms --gwpC=206.4305 --costC=2.0494 --file=$file --fileS=16$file -optFile=1 -optfile=1
sh ./src/CleanData.sh pareto$file.txt
python ./src/triagPlot3d.py $file
python ./src/triagPlot2d.py $file
 mv *$file.* ./$file/
 mv $file ./result/
