file=$1
filename=$file
#filename="pareto"
#filename="$filename$file"
sed -i -e 's/\s\+//g' $filename
#sed -i '1i Cost,DoC,TotPlastics(kg),HDPE,LDPE,PP,PLA,PHA,Paper,Reprocess,Pyrolysis,Landfill,Incineration,GWP' $filename
#sed -i '1i Cost,DoC,GWP,TotPlastics(kg),HDPE,LDPE,PP,PLA,PHA,Paper,Reprocess,Pyrolysis,Landfill,Incineration,LABS from chemical recycling of PE,C4 Gas Mixture Pyrolysis,Light Liquid Fuel Pyrolysis,Clay reycled PLA,Lipase based PLA recycling,Lactic acid from acid hydrolysis,Me-Lactate from alcoholysis,Clinker,Lumber' $filename
