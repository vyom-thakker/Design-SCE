

for i in 1 2 3 4 5
do
	for j in 1 2 3 4 5
	do
		gams $1.gms --file=$2 --fileS=Pareto$2$i$j --costc=$4-$4/$i+$3/$i --gwpC=$6-$6/$j+$5/$j
	done
done


