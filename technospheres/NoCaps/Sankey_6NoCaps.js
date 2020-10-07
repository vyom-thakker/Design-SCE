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
{"source":"Households", "target":"Curbside Collection", "value":0.0562, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6586, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0512, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0045, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0422, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0375, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0046, "optimal":"yes"} ]}; 
