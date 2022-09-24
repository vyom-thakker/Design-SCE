in1=s151wind
in2=s152solar
in3=s153bioet


gams RP4.gms --file=$in1 --fileS=maxDoC$in1 --$in1=100
gams RP4.gms --file=$in1 --fileS=minGWP$in1 --$in1=100 --docc=0
gams RP4.gms --file=$in1 --fileS=minLCC$in1 --$in1=100 --docc=0 --gwpc=50


gams RP4.gms --file=$in2 --fileS=maxDoC$in2 --$in2=100
gams RP4.gms --file=$in2 --fileS=minGWP$in2 --$in2=100 --docc=0
gams RP4.gms --file=$in2 --fileS=minLCC$in2 --$in2=100 --docc=0 --gwpc=50


gams RP4.gms --file=$in3 --fileS=maxDoC$in3 --$in3=100
gams RP4.gms --file=$in3 --fileS=minGWP$in3 --$in3=100 --docc=0
gams RP4.gms --file=$in3 --fileS=minLCC$in3 --$in3=100 --docc=0 --gwpc=50











