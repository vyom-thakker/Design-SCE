in1=s140labs
in2=s142pyldpe
in3=s143pyhdpe
in4=s144pypp
in5=s147claypla
in6=s149acidpla
in7=s150alcpla


gmax=9.285
gmin=2.784
cmax=3.676
cmin=0.7843

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
        gams RP4.gms --file=$in1 --fileS=$i$in1 --costc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($i*$gmax*0.9\)/5\)+\(\($i*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in1.txt



gmax=4.977
gmin=2.784
cmax=1.416
cmin=0.7843

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in2 --fileS=$i$in2 --costc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($i*$gmax*0.9\)/5\)+\(\($i*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in2.txt



gmax=17.5
gmin=2.784
cmax=5.829
cmin=0.7843

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in3 --fileS=$i$in3 --costc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($i*$gmax*0.9\)/5\)+\(\($i*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in3.txt



gmax=6.515
gmin=2.784
cmax=1.956
cmin=0.7843

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in4 --fileS=$i$in4 --costc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($i*$gmax*0.9\)/5\)+\(\($i*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in4.txt

gmax=4.971
gmin=2.784
cmax=1.393
cmin=0.7843

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in5 --fileS=$i$in5 --costc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($i*$gmax*0.9\)/5\)+\(\($i*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in5.txt


gmax=4.358
gmin=2.784
cmax=4.17
cmin=0.7843

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in6 --fileS=$i$in6 --costc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($i*$gmax*0.9\)/5\)+\(\($i*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in6.txt


gmax=3.69
gmin=2.784
cmax=3.9
cmin=0.7843

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams RP4.gms --file=$in7 --fileS=$i$in7 --costc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($i*$gmax*0.9\)/5\)+\(\($i*$gmin\)/5\) -optfile=1
	done
done

sh CleanData.sh pareto$in7.txt



