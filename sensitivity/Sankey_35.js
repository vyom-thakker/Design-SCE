let dataV={"nodes": [
{"name":"Pyrolysis"},
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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0077, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3315, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3259, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0386, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.0794, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1876, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.367, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.7124, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.6165, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.9418, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1541, "optimal":"yes"} ]}; 
