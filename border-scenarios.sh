#arg 1 folder name (also paretoNAME.txt) arg2(optional) can be -optfile=1 to skip local search
mkdir $1
gams main.gms --file=$1 --fileS=maxDoC$1 $2
gams main.gms --file=$1 --fileS=minGWP$1 --docc=0 $2
gams main.gms --file=$1 --fileS=minLCC$1 --docc=0 --gwpc=50 $2











