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
 {"source":"PP", "target":"Households", "value":0.6943, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.8747, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.2640000000000002, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.305, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.0642, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1822, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.4594, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":1.2405, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.4226, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0368, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":1.1536, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0868, "optimal":"yes"} ]}; 
