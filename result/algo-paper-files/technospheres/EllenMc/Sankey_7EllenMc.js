let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0001, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0043, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7104, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0019, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0014, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0005, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0014, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0005, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0002, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0002, "optimal":"yes"} ]}; 
