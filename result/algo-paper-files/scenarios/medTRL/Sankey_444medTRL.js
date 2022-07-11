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
{"source":"Households", "target":"Curbside Collection", "value":0.6241, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0907, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.569, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0502, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1004, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4686, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2577, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1593, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0515, "optimal":"yes"} ]}; 
