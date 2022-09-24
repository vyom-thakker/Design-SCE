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
 {"source":"PP", "target":"Households", "value":0.5577, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.3232, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.5389, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.342, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.3149, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2043, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.369, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":1.5373, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.3395, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0295, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":1.4297, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.1076, "optimal":"yes"} ]}; 
