let dataV={"nodes": [
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Clinker"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.5242, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1905, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.478, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0422, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.478, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0829, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2629, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Clinker", "value":0.0796, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0526, "optimal":"yes"} ]}; 
