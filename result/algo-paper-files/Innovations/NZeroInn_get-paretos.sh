in1=s151wind
in2=s152solar
in3=s153bioet


gmax=9.426
gmin=0.73
cmax=0.473
cmin=0.1

for i in 5 4 3 2 1
do
	for j in 5 4 3 2 1
	do
        gams RP4.gms --file=$in1 --fileS=$i$j$in1 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1 --$in1=1000
	done
done

sh CleanData.sh pareto$in1.txt



gmax=9.48
gmin=0.9
cmax=0.473
cmin=0.1

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in2 --fileS=$i$j$in2 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1 --$in2=1000
	done
done

sh CleanData.sh pareto$in2.txt



gmax=13.5
gmin=2.533
cmax=0.47
cmin=0.1

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in3 --fileS=$i$j$in3 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1 --$in3=1000
	done
done

sh CleanData.sh pareto$in3.txt




python triagPlot3d-animate.py $in1
python triagPlot3d-animate.py $in2
python triagPlot3d-animate.py $in3


