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
{"source":"HDPE", "target":"Households", "value":0.5717, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0474, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0017, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5227, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0427, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0038, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Incineration", "value":0.0014, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0441, "optimal":"yes"} ]}; 
