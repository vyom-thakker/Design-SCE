let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.0385, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4037, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.8586, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.164, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.328, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.5306, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.4173, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.8418, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.1337, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1377, "optimal":"yes"} ]}; 
