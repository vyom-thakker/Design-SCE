let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3641, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0034, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2899, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.3707, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1902, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0033, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.419, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.9549, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.7038, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":1.0752, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1759, "optimal":"yes"} ]}; 