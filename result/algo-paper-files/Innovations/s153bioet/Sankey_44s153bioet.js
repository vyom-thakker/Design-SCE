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
{"source":"Households", "target":"Curbside Collection", "value":0.296, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4187, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2699, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0238, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0476, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2223, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0756, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1223, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0245, "optimal":"yes"} ]}; 
