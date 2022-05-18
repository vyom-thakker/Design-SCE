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
{"source":"Households", "target":"Curbside Collection", "value":0.3174, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3974, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2893, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0255, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0511, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2383, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0235, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1311, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0575, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0262, "optimal":"yes"} ]}; 
