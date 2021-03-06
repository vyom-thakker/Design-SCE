let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":2.0732, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.1631, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.9708, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2655, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.7969, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1586, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3172, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.3718, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.10800000000000001, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.4938, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.7545, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1235, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0367, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0594, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0119, "optimal":"yes"} ]}; 
