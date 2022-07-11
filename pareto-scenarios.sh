
#gmax=2.2
#gmin=2.5
#cmax=0.9
#cmin=0.1

#gmax=8.4
#gmin=2.5
#cmax=1.3
#cmin=0.1

#gmax=9.2
#gmin=0.71
#cmax=0.45
#cmin=0.1

#gmax=1.8
#gmin=4
#cmax=1.8
#cmin=0.1

#gmax=3.6
#gmin=3.6
#cmax=1.6
#cmin=0.17

#all_inn
gmax=9.1
gmin=2.76
cmax=1.24
cmin=0.1

#onlyBioPE
gmax=14
gmin=2.5
cmax=0.45
cmin=0

#onlyBioPE
gmax=11
gmin=1.9
cmax=0.47
cmin=0



for i in $(seq 1 1 $2)
do
    for j in {$(seq 1 1 $2)
	do
        gams main.gms --file=$1 --fileS=$2$i$j$1 --docc=$cmax-\(\($i*$cmax\)/$2\)+\(\($i*$cmin\)/$2\) --gwpC=$gmax*1-\(\($j*$gmax\)/$2\)+\(\(\($j\)*$gmin\)/$2\) -optfile=1
    done
done

sh ./src/CleanData.sh pareto$1.txt


python ./src/triagPlot3d.py ./$1
python ./src/triagPlot2d.py ./$1

mv pareto2d$1.svg ./$1/
mv pareto3d$1.svg ./$1/

mv pareto$1.txt ./$1/
mv $1 ./result/
