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
{"source":"Households", "target":"Curbside Collection", "value":1.8167, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6255, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.6564, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1462, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2923, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.364, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.491, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.7502, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1228, "optimal":"yes"} ]}; 
