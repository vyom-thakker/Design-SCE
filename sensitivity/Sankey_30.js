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
 {"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3675, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2899, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.3744, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1905, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.4191, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.9553, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.7039, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":1.0754, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.176, "optimal":"yes"} ]}; 
