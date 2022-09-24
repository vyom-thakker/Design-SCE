in1=s140labs
in2=s142pyldpe
in3=s143pyhdpe
in4=s144pypp
in5=s147claypla
in6=s149acidpla
in7=s150alcpla



gmax=3.69
gmin=2.784
cmax=0.75
cmin=0.4

for i in 1 2
do
	for j in 1 2
	do
		gams RP4.gms --file=$in7 --fileS=$i$j$in7 --docc=$cmax*0.9-\(\($i*$cmax*0.9\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax*0.9-\(\($j*$gmax*0.9\)/5\)+\(\($j*$gmin\)/5\) -optfile=1
	done
done


