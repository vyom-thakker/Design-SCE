let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0044, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.5198, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0328, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0169, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4701, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0296, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0026, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Incineration", "value":0.0145, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0019, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0441, "optimal":"yes"} ]}; 
