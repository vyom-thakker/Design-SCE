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
 {"source":"PP", "target":"Households", "value":0.2957, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.1838, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.0664, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.413, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.7958, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2467, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.1957, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":2.1067, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.18, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0157, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":1.9592, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.1475, "optimal":"yes"} ]}; 
