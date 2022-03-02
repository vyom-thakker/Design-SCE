in1=s140labs
in2=s142pyldpe
in3=s143pyhdpe
in4=s144pypp
in5=s147claypla
in6=s149acidpla
in7=s150alcpla


gmax=9.285
gmin=2.784
cmax=1.356
cmin=0.05

for i in 5 4 3 2 1
do
	for j in 5 4 3 2 1
	do
        gams RP4.gms --file=$in1 --fileS=$i$j$in1 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in1.txt



gmax=4.977
gmin=2.784
cmax=0.875
cmin=0.05

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in2 --fileS=$i$j$in2 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in2.txt



gmax=17.5
gmin=2.784
cmax=0.652
cmin=0.05

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in3 --fileS=$i$j$in3 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in3.txt



gmax=6.515
gmin=2.784
cmax=0.804
cmin=0.05

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in4 --fileS=$i$j$in4 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in4.txt

gmax=4.971
gmin=2.784
cmax=0.558
cmin=0.05

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in5 --fileS=$i$j$in5 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in5.txt


gmax=4.358
gmin=2.784
cmax=1.34
cmin=0.05

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in6 --fileS=$i$j$in6 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in6.txt


gmax=3.69
gmin=2.784
cmax=0.75
cmin=0.05

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in7 --fileS=$i$j$in7 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in7.txt



