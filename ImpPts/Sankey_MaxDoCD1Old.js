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
{"source":"Households", "target":"Curbside Collection", "value":2.3675, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3189, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1585, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1905, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.381, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.7776, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.6399, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.9777, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.16, "optimal":"yes"} ]}; 
