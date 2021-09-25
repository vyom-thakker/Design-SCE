let dataV={"nodes": [
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
 {"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.1416, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3005, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1479, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1723, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3791, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.7688, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.6368, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.9728, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1592, "optimal":"yes"} ]}; 
