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
{"source":"Households", "target":"Curbside Collection", "value":0.6075, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1073, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5539, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0489, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.5539, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.3046, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1883, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0609, "optimal":"yes"} ]}; 
