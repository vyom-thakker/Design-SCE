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
{"source":"Households", "target":"Curbside Collection", "value":0.3231, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3916, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2946, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.026000000000000002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.052000000000000005, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2426, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0825, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1334, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0267, "optimal":"yes"} ]}; 
