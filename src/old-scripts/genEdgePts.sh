gams $1.gms --file=$2 --fileS=maxDoC$3
gams $1.gms --file=$2 --fileS=minGWP$3 --docc=0
gams $1.gms --file=$2 --fileS=minLCC$3 --docc=0 --gwpC=40
