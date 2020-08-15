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
{"source":"Households", "target":"Curbside Collection", "value":0.2215, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4932, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.20199999999999999, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0178, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0357, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1663, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0915, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0566, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0183, "optimal":"yes"} ]}; 
