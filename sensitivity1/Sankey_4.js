let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0003, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.0145, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0066, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.0079, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.006, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.006, "optimal":"yes"} ]}; 
