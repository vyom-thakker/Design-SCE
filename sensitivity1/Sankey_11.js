let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0027, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.5717, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0274, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5443, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0272, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0022, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0272, "optimal":"yes"} ]}; 
