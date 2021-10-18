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
 {"source":"Incineration", "target":"Landfill", "value":0.0014, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0265, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.1133, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0317, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.1081, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0285, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0025, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0285, "optimal":"yes"} ]}; 
