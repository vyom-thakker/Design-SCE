let dataV={"nodes": [
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Clinker"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6172, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0975, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5627, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0497, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.5627, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.3095, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Clinker", "value":0.0042, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1872, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0619, "optimal":"yes"} ]}; 
