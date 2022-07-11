let dataV={"nodes": [
{"name":"Landfill"},
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
{"source":"Households", "target":"Curbside Collection", "value":0.61, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1047, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5562, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0491, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0982, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.45799999999999996, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2519, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1557, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0504, "optimal":"yes"} ]}; 
