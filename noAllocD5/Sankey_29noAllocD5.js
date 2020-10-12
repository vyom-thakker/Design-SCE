let dataV={"nodes": [
{"name":"Landfill"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":0.0001, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":8.3289, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":7.3402, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.9887, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":3.5616, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.0089, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.5906, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.5311, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":2.4778, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":2.4431, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0322, "optimal":"yes"} ]}; 
