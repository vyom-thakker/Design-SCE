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
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.1635, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5512, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1491, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0132, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0263, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1228, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0417, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0675, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0135, "optimal":"yes"} ]}; 
