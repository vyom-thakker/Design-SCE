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
 {"source":"Incineration", "target":"Landfill", "value":0.0044, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.5198, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.044, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5215, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0437, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0035, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0437, "optimal":"yes"} ]}; 
