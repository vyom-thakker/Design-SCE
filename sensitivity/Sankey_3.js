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
{"source":"Households", "target":"Curbside Collection", "value":2.1499, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2923, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.9601, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.173, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.346, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.6142, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0965, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.8878, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.4846, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1453, "optimal":"yes"} ]}; 
