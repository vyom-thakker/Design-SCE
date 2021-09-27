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
 {"source":"LDPE", "target":"Households", "value":0.6497, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.5726, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0771, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5221, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0461, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0921, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4777, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2627, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1624, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0525, "optimal":"yes"} ]}; 
