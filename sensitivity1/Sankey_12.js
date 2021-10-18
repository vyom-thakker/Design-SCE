let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0016, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.5623, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0366, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0172, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5834, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0171, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0014, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0171, "optimal":"yes"} ]}; 
