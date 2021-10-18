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
 {"source":"Incineration", "target":"Landfill", "value":0.0024, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.5464, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0981, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0281, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6193, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0277, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0023, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0277, "optimal":"yes"} ]}; 