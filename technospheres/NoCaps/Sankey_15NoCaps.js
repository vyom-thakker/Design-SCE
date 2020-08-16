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
 {"source":"PP", "target":"Households", "value":0.8328, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.4198, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.9852, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2674, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.81, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1597, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.551, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.9395, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.507, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0441, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.8737, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0658, "optimal":"yes"} ]}; 
