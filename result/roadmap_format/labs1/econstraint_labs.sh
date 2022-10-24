file=$1
filename="pareto"
filename="$filename$file"

gams main.gms --gwpC=2.9976 --costC=0.7881 --file=$file --fileS=1$file -optFile=1 --s140labs=100
gams main.gms --gwpC=2.9976 --costC=2.2234 --file=$file --fileS=2$file -optFile=1 --s140labs=100
gams main.gms --gwpC=2.7976 --costC=3.6586 --file=$file --fileS=3$file -optFile=1 --s140labs=100
gams main.gms --gwpC=6.0184 --costC=0.7881 --file=$file --fileS=4$file -optFile=1 --s140labs=100
gams main.gms --gwpC=6.0184 --costC=2.2234 --file=$file --fileS=5$file -optFile=1 --s140labs=100
gams main.gms --gwpC=6.0184 --costC=3.6586 --file=$file --fileS=6$file -optFile=1 --s140labs=100
gams main.gms --gwpC=9.2393 --costC=0.7881 --file=$file --fileS=7$file -optFile=1 --s140labs=100
gams main.gms --gwpC=9.2393 --costC=2.2234 --file=$file --fileS=8$file -optFile=1 --s140labs=100
gams main.gms --gwpC=9.2393 --costC=3.6586 --file=$file --fileS=9$file -optFile=1 --s140labs=100
sh ./src/CleanData.sh pareto$file.txt
python ./src/triagPlot3d.py $file
python ./src/triagPlot2d.py $file
