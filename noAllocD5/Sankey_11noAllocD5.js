let dataV={"nodes": [
{"name":"Landfill"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name":"Compost"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":3.7226, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":0.6784, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.8786, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5224, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.5363, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.3121, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.6241, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.4489, "optimal":"yes"} , 
{"source":"Segregation", "target":"Compost", "value":2.4632, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.4426, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0058, "optimal":"yes"} ]}; 
