file=$1
filename="pareto"
filename="$filename$file"
mkdir $file
gams RP4.gms --gwpC=8.3019 --costC=2.6488 --file=$file --fileS=1 
gams RP4.gms --gwpC=8.3019 --costC=2.9425 --file=$file --fileS=2 
gams RP4.gms --gwpC=8.3019 --costC=3.2363 --file=$file --fileS=3 
gams RP4.gms --gwpC=8.3019 --costC=3.53 --file=$file --fileS=4 
gams RP4.gms --gwpC=8.3019 --costC=3.8238 --file=$file --fileS=5 
gams RP4.gms --gwpC=8.3019 --costC=4.1175 --file=$file --fileS=6 
gams RP4.gms --gwpC=9.5411 --costC=2.6488 --file=$file --fileS=7 
gams RP4.gms --gwpC=9.5411 --costC=2.9425 --file=$file --fileS=8 
gams RP4.gms --gwpC=9.5411 --costC=3.2363 --file=$file --fileS=9 
gams RP4.gms --gwpC=9.5411 --costC=3.53 --file=$file --fileS=10 
gams RP4.gms --gwpC=9.5411 --costC=3.8238 --file=$file --fileS=11 
gams RP4.gms --gwpC=9.5411 --costC=4.1175 --file=$file --fileS=12 
gams RP4.gms --gwpC=10.7804 --costC=2.6488 --file=$file --fileS=13 
gams RP4.gms --gwpC=10.7804 --costC=2.9425 --file=$file --fileS=14 
gams RP4.gms --gwpC=10.7804 --costC=3.2363 --file=$file --fileS=15 
gams RP4.gms --gwpC=10.7804 --costC=3.53 --file=$file --fileS=16 
gams RP4.gms --gwpC=10.7804 --costC=3.8238 --file=$file --fileS=17 
gams RP4.gms --gwpC=10.7804 --costC=4.1175 --file=$file --fileS=18 
gams RP4.gms --gwpC=12.0196 --costC=2.6488 --file=$file --fileS=19 
gams RP4.gms --gwpC=12.0196 --costC=2.9425 --file=$file --fileS=20 
gams RP4.gms --gwpC=12.0196 --costC=3.2363 --file=$file --fileS=21 
gams RP4.gms --gwpC=12.0196 --costC=3.53 --file=$file --fileS=22 
gams RP4.gms --gwpC=12.0196 --costC=3.8238 --file=$file --fileS=23 
gams RP4.gms --gwpC=12.0196 --costC=4.1175 --file=$file --fileS=24 
gams RP4.gms --gwpC=13.2589 --costC=2.6488 --file=$file --fileS=25 
gams RP4.gms --gwpC=13.2589 --costC=2.9425 --file=$file --fileS=26 
gams RP4.gms --gwpC=13.2589 --costC=3.2363 --file=$file --fileS=27 
gams RP4.gms --gwpC=13.2589 --costC=3.53 --file=$file --fileS=28 
gams RP4.gms --gwpC=13.2589 --costC=3.8238 --file=$file --fileS=29 
gams RP4.gms --gwpC=13.2589 --costC=4.1175 --file=$file --fileS=30 
gams RP4.gms --gwpC=14.4981 --costC=2.6488 --file=$file --fileS=31 
gams RP4.gms --gwpC=14.4981 --costC=2.9425 --file=$file --fileS=32 
gams RP4.gms --gwpC=14.4981 --costC=3.2363 --file=$file --fileS=33 
gams RP4.gms --gwpC=14.4981 --costC=3.53 --file=$file --fileS=34 
gams RP4.gms --gwpC=14.4981 --costC=3.8238 --file=$file --fileS=35 
gams RP4.gms --gwpC=14.4981 --costC=4.1175 --file=$file --fileS=36 
sed -i -e 's/\s\+//g' $filename.txt
python triagPlot3d.py $file sensitivity
