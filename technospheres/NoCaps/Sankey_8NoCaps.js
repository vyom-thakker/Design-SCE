let dataV={"nodes": [
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPP"},
{"name":"rPLA"},
{"name": "Losses"}
],
 "links": [
 {"source":"PP", "target":"Households", "value":1.1079, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.5163, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.4314, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1928, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.305, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1152, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.7331, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.3416, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.6744, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0586, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.3177, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0239, "optimal":"yes"} ]}; 
