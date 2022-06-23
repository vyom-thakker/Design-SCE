let dataV={"nodes": [
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
{"source":"Households", "target":"Curbside Collection", "value":0.5333, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1814, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4863, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0429, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4863, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2674, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1653, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0535, "optimal":"yes"} ]}; 
