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
{"source":"Households", "target":"Curbside Collection", "value":2.3474, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.31, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1402, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1889, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3777, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.7625, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0595, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.9694, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.5749, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1586, "optimal":"yes"} ]}; 
