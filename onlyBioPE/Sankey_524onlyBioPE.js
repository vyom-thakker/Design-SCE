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
{"source":"Households", "target":"Curbside Collection", "value":0.4789, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2359, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4366, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0385, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0771, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3595, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1222, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1977, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0395, "optimal":"yes"} ]}; 
