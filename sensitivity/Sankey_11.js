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
{"source":"Households", "target":"Curbside Collection", "value":2.3456, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3118, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.3525, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1887, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.4152, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.9373, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.2459, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":1.0655, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.4515, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1744, "optimal":"yes"} ]}; 
