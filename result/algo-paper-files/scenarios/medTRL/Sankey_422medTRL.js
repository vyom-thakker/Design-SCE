let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.2403, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4744, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2191, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0193, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0387, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1804, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0464, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0992, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0149, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0198, "optimal":"yes"} ]}; 
