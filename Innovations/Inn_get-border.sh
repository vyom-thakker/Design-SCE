in1=s140labs
in2=s142pyldpe
in3=s143pyhdpe
in4=s144pypp
in5=s147claypla
in6=s149acidpla
in7=s150alcpla

mkdir $in1
gams RP4.gms --file=$in1 --fileS=doc_$in1 --$in1=1000
gams RP4.gms --file=$in1 --fileS=gwp_$in1 --$in1=1000 --docc=0
gams RP4.gms --file=$in1 --fileS=cost$in1 --$in1=1000 --docc=0 --gwpc=40

mkdir $in2
gams RP4.gms --file=$in2 --fileS=doc_$in2 --$in2=1000
gams RP4.gms --file=$in2 --fileS=gwp_$in2 --$in2=1000 --docc=0
gams RP4.gms --file=$in2 --fileS=cost$in2 --$in2=1000 --docc=0 --gwpc=40


mkdir $in3
gams RP4.gms --file=$in3 --fileS=doc_$in3 --$in3=1000
gams RP4.gms --file=$in3 --fileS=gwp_$in3 --$in3=1000 --docc=0
gams RP4.gms --file=$in3 --fileS=cost$in3 --$in3=1000 --docc=0 --gwpc=40

mkdir $in4
gams RP4.gms --file=$in4 --fileS=doc_$in4 --$in4=1000
gams RP4.gms --file=$in4 --fileS=gwp_$in4 --$in4=1000 --docc=0
gams RP4.gms --file=$in4 --fileS=cost$in4 --$in4=1000 --docc=0 --gwpc=40


mkdir $in5
gams RP4.gms --file=$in5 --fileS=doc_$in5 --$in5=1000
gams RP4.gms --file=$in5 --fileS=gwp_$in5 --$in5=1000 --docc=0
gams RP4.gms --file=$in5 --fileS=cost$in5 --$in5=1000 --docc=0 --gwpc=40

mkdir $in6
gams RP4.gms --file=$in6 --fileS=doc_$in6 --$in6=1000
gams RP4.gms --file=$in6 --fileS=gwp_$in6 --$in6=1000 --docc=0
gams RP4.gms --file=$in6 --fileS=cost$in6 --$in6=1000 --docc=0 --gwpc=40

mkdir $in7
gams RP4.gms --file=$in7 --fileS=doc_$in7 --$in7=1000
gams RP4.gms --file=$in7 --fileS=gwp_$in7 --$in7=1000 --docc=0
gams RP4.gms --file=$in7 --fileS=cost$in7 --$in7=1000 --docc=0 --gwpc=40


