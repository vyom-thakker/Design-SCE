let dataV={"nodes": [
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPLA"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.6618, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4932, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.3386, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2946, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":2.7493, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":2.5569, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.1925, "optimal":"yes"} ]}; 
