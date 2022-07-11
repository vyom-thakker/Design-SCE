let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
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
{"source":"Households", "target":"Curbside Collection", "value":0.5214, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1933, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4754, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.042, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0839, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3915, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0167, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2153, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1164, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0431, "optimal":"yes"} ]}; 
