let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":2.6864, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.6042, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3189, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.6118, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2095, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.461, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":2.1509, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.8517, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":1.183, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1936, "optimal":"yes"} ]}; 
