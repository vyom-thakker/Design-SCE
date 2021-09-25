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
{"source":"Households", "target":"Curbside Collection", "value":0.7825, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.6596, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7135, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.063, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1259, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.5875, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0752, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.3231, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.1363, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0529, "optimal":"yes"} ]}; 
