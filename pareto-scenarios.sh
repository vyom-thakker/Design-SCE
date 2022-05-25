
#gmax=8.4
#gmin=2.5
#cmax=1.3
#cmin=0.1

#gmax=9.2
#gmin=0.71
#cmax=0.45
#cmin=0.1

gmax=1.8
gmin=4
cmax=1.8
cmin=0.1

for i in 6 5 4 3 2 1
do
	for j in 6 5 4 3 2 1
	do
        gams RP4.gms --file=$1 --fileS=6$i$j$1 --docc=$cmax-\(\($i*$cmax\)/6\)+\(\($i*$cmin\)/6\) --gwpC=$gmax*1-\(\($j*$gmax\)/6\)-\(\($j*$gmin\)/6\) -optfile=1
    done
done

sh CleanData.sh pareto$1.txt


python triagPlot3d.py $1
python triagPlot2d.py $1

mv pareto2d$1.svg ./$1/
mv pareto3d$1.svg ./$1/
