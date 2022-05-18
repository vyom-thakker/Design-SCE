let dataV={"nodes": [
{"name":"Landfill"},
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
{"source":"Households", "target":"Curbside Collection", "value":0.1977, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5171, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1802, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0159, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0318, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1484, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0075, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0816, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Clinker", "value":0.043, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0163, "optimal":"yes"} ]}; 
