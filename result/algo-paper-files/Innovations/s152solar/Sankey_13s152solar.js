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
{"source":"Households", "target":"Curbside Collection", "value":0.5656, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1491, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5157, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0455, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.091, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4246, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0114, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2336, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.133, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0467, "optimal":"yes"} ]}; 
