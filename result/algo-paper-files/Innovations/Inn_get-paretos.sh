in1=$1

gmax=9.285
gmin=2.9
cmax=3.676
cmin=0.7843

for i in 1 2 3 4 5 6 7
do
	for j in 1 2 3 4 5 6 7
	do
        if $i==$j
        then
            echo "$i$j"
        else
            gams RP4.gms --file=$in1 --fileS=$i$j$in1 --costc=$cmax-\(\($i*$cmax\)/5\)+\(\($i*$cmin\)/5\) --gwpC=$gmax-\(\($j*$gmax\)/5\)+\(\($j*$gmin\)/5\) -optfile=1
	    fi
    done
done

sh CleanData.sh pareto$in1.txt
