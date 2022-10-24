
#arg 1 folder name (also paretoNAME.txt) arg2(optional) can be -optfile=1 to skip local search or innovations included --sINNNO=100 (UB) and arg 3 is intermediate pareto points
mkdir $1
gams main.gms --file=$1 --fileS=maxDoC$1 $2
gams main.gms --file=$1 --fileS=minGWP$1 --docc=0 $2
gams main.gms --file=$1 --fileS=minLCC$1 --docc=0 --gwpc=50 $2

python ./src/gen_eCons_script.py $1 $2 $3

sh econstraint_$1.sh $1
