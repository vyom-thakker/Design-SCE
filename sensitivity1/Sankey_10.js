let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0025, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.5306, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.1593, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0355, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.658, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0319, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0029, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0319, "optimal":"yes"} ]}; 
