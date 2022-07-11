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
{"source":"Households", "target":"Curbside Collection", "value":0.2244, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4903, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2046, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0181, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0361, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1685, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.013999999999999999, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0927, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0432, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0185, "optimal":"yes"} ]}; 
