file=$1
filename="pareto"
filename="$filename$file"
mkdir $file
gams RP4-new.gms --gwpC=3.5707 --costC=0.6938 --file=$file --fileS=20 
gams RP4-new.gms --gwpC=3.5707 --costC=1.0318 --file=$file --fileS=21 
gams RP4-new.gms --gwpC=3.5707 --costC=1.3699 --file=$file --fileS=22 
gams RP4-new.gms --gwpC=3.5707 --costC=1.708 --file=$file --fileS=23 
gams RP4-new.gms --gwpC=3.5707 --costC=2.046 --file=$file --fileS=24 
gams RP4-new.gms --gwpC=4.3682 --costC=0.3557 --file=$file --fileS=25 
gams RP4-new.gms --gwpC=4.3682 --costC=0.6938 --file=$file --fileS=26 
gams RP4-new.gms --gwpC=4.3682 --costC=1.0318 --file=$file --fileS=27 
gams RP4-new.gms --gwpC=4.3682 --costC=1.3699 --file=$file --fileS=28 
gams RP4-new.gms --gwpC=4.3682 --costC=1.708 --file=$file --fileS=29 
gams RP4-new.gms --gwpC=4.3682 --costC=2.046 --file=$file --fileS=30 
gams RP4-new.gms --gwpC=5.1658 --costC=0.3557 --file=$file --fileS=31 
gams RP4-new.gms --gwpC=5.1658 --costC=0.6938 --file=$file --fileS=32 
gams RP4-new.gms --gwpC=5.1658 --costC=1.0318 --file=$file --fileS=33 
gams RP4-new.gms --gwpC=5.1658 --costC=1.3699 --file=$file --fileS=34 
gams RP4-new.gms --gwpC=5.1658 --costC=1.708 --file=$file --fileS=35 
gams RP4-new.gms --gwpC=5.1658 --costC=2.046 --file=$file --fileS=36 
sed -i -e 's/\s\+//g' $filename.txt
python triagPlot3d.py $file sensitivity1
