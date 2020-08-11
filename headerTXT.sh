file=$1
filename="pareto"
filename="$filename$file"
sed -i -e 's/\s\+//g' $filename.txt
sed -i '1i Cost,DoC,TotPlastics(kg),HDPE,LDPE,PP,PLA,PHA,Paper,Reprocess,Pyrolysis,Landfill,Incineration,GWP' $filename.txt
