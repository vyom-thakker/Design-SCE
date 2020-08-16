let dataV={"nodes": [
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0501, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6647, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0456, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.004, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0376, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0335, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0041, "optimal":"yes"} ]}; 
