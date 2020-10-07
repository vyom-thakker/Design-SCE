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
 {"source":"PP", "target":"Households", "value":0.0075, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.1302, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.6466, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4912, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.3247, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2934, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.005, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":2.7329, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0046, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":2.5416, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.1913, "optimal":"yes"} ]}; 
