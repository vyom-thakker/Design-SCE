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
 {"source":"PP", "target":"Households", "value":1.0928, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.5657, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.4616, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1969, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.3326, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1176, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.7231, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.3743, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.6653, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0578, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.3481, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0262, "optimal":"yes"} ]}; 
