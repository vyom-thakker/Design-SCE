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
{"source":"Households", "target":"Curbside Collection", "value":2.1523, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2899, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1585, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1732, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.381, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.7776, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.5811, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.9777, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0589, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.16, "optimal":"yes"} ]}; 
