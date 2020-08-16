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
 {"source":"PP", "target":"Households", "value":0.2826, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.2267, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.0928, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4166, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.8198, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2488, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.187, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":2.1351, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.1721, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.015, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":1.9856, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.1495, "optimal":"yes"} ]}; 
