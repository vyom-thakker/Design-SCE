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
{"source":"Households", "target":"Curbside Collection", "value":1.7651, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6771, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.6093, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.142, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.284, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.3252, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.4165, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.7289, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0606, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1193, "optimal":"yes"} ]}; 
