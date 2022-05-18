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
{"source":"Households", "target":"Curbside Collection", "value":0.5345, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1802, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4873, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.043, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.086, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4013, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0951, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2207, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0414, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0441, "optimal":"yes"} ]}; 
