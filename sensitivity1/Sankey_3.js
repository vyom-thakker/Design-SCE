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
 {"source":"Incineration", "target":"Landfill", "value":0.0012, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.216, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0268, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.1892, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0241, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0022, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0241, "optimal":"yes"} ]}; 
