let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0003, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0217, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.0014, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0064, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.0167, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0057, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0057, "optimal":"yes"} ]}; 
