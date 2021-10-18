let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0042, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.5198, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0459, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4738, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0414, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0037, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0414, "optimal":"yes"} ]}; 
