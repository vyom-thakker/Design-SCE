filename=$1
cp $filename ./
file2="${filename#*Sankey}"
file1=Sankey$file2
python ./src/finalJSConstructor-inn.py $file1
mv "${file1%%.*}".js ~/code_post2020/CircularSankey_Plotter/SankeyInn.js
rm "$file1"
#echo $file1
#nodejs ~/code_post2020/CircularSankey_Plotter/fileserver.js


