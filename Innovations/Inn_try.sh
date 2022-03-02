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
        #gams RP4.gms --file=$in1 --fileS=$i$in1 --costc=$cmax-$i*$cmax/5+$i*$cmin/5 --gwpC=$gmax-$i*$gmax/5+$i*$gmin/5 -optfile=1
        echo $cmax-\(\(${i}*${cmax}\)/5\)+\(\(${i}*${cmin}\)/5\)
        echo $gmax-$i*$gmax/5+$i*$gmin/5
	done
done

