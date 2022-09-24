let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6283, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0864, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5729, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0506, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1011, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4717, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1604, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2595, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0519, "optimal":"yes"} ]}; 
