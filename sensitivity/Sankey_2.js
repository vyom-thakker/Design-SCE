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
{"source":"Households", "target":"Curbside Collection", "value":1.5212, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.921, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.3869, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1224, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2448, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.1421, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0732, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.6282, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.3379, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1028, "optimal":"yes"} ]}; 
