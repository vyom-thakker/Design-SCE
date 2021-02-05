let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"Paper", "target":"Households", "value":6.855, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":6.0413, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.8138, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.6612, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":4.8243, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.4861, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.8515, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":3.9728, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":3.9172, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0516, "optimal":"yes"} ]}; 
