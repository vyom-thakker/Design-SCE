
gmax=4.8
gmin=2.5
cmax=1.3
cmin=0.1

for i in  6 5 4 3 2 1
do
	for j in 6 5 4 3 2 1
	do
        gams RP4.gms --file=$1 --fileS=$i$j$1 --docc=$cmax-\(\($i*$cmax\)/6\)+\(\($i*$cmin\)/6\) --gwpC=$gmax*1-\(\($j*$gmax\)/6\)-\(\($j*$gmin\)/6\) -optfile=1
    done
done

sh CleanData.sh pareto$1.txt


python triagPlot3d.py $1

