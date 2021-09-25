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
{"source":"Households", "target":"Curbside Collection", "value":1.6425, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7996, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.4976, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1322, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2643, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.2332, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.2448, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.6783, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.1991, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.111, "optimal":"yes"} ]}; 
