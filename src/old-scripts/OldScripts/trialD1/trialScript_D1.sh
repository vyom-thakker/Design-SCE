file=$1
filename="pareto"
filename="$filename$file"
mkdir $file
gams rp4.gms --gwpC=-4.7994 --costC=0.7842 --file=$file --fileS=1$file --fileS1=1g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=-4.7994 --costC=1.8616 --file=$file --fileS=2$file --fileS1=2g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=-4.7994 --costC=2.939 --file=$file --fileS=3$file --fileS1=3g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=-4.7994 --costC=4.0163 --file=$file --fileS=4$file --fileS1=4g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=-4.7994 --costC=5.0937 --file=$file --fileS=5$file --fileS1=5g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=-0.0473 --costC=0.7842 --file=$file --fileS=6$file --fileS1=6g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=-0.0473 --costC=1.8616 --file=$file --fileS=7$file --fileS1=7g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=-0.0473 --costC=2.939 --file=$file --fileS=8$file --fileS1=8g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=-0.0473 --costC=4.0163 --file=$file --fileS=9$file --fileS1=9g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=-0.0473 --costC=5.0937 --file=$file --fileS=10$file --fileS1=10g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=4.7048 --costC=0.7842 --file=$file --fileS=11$file --fileS1=11g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=4.7048 --costC=1.8616 --file=$file --fileS=12$file --fileS1=12g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=4.7048 --costC=2.939 --file=$file --fileS=13$file --fileS1=13g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=4.7048 --costC=4.0163 --file=$file --fileS=14$file --fileS1=14g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=4.7048 --costC=5.0937 --file=$file --fileS=15$file --fileS1=15g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=9.457 --costC=0.7842 --file=$file --fileS=16$file --fileS1=16g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=9.457 --costC=1.8616 --file=$file --fileS=17$file --fileS1=17g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=9.457 --costC=2.939 --file=$file --fileS=18$file --fileS1=18g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=9.457 --costC=4.0163 --file=$file --fileS=19$file --fileS1=19g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=9.457 --costC=5.0937 --file=$file --fileS=20$file --fileS1=20g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=14.2091 --costC=0.7842 --file=$file --fileS=21$file --fileS1=21g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=14.2091 --costC=1.8616 --file=$file --fileS=22$file --fileS1=22g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=14.2091 --costC=2.939 --file=$file --fileS=23$file --fileS1=23g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=14.2091 --costC=4.0163 --file=$file --fileS=24$file --fileS1=24g$file parmfile=moreOptions.txt
gams rp4.gms --gwpC=14.2091 --costC=5.0937 --file=$file --fileS=25$file --fileS1=25g$file parmfile=moreOptions.txt
sed -i -e 's/\s\+//g' $filename.txt
sed -i '1i Cost,DoC,TotPlastics(kg),HDPE,LDPE,PP,PLA,PHA,Paper,Reprocess,Pyrolysis,Landfill,Incineration,GWP' $filename.txt
