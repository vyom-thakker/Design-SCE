let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0008, "optimal":"yes"} , 
{"source":"Incineration", "target":"Landfill", "value":0.0014, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0203, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.4218, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0041, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0135, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0016, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0135, "optimal":"yes"} ]}; 
