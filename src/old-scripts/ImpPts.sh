file=$1
gams RP4.gms --file=ImpPts --fileS=MaxDoC$file
gams RP4.gms --docc=0 --costc=100 --file=ImpPts --fileS=MinGWP$file
gams RP4.gms --docc=0 --gwpc=100 --file=ImpPts --fileS=MinCost$file
