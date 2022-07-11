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
{"source":"Households", "target":"Curbside Collection", "value":0.2574, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4573, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2347, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0207, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0414, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1933, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1063, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0657, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0213, "optimal":"yes"} ]}; 
