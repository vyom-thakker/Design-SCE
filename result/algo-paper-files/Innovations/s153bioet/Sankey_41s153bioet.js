let dataV={"nodes": [
{"name":"Pyrolysis"},
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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0007, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.2988, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4159, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0037, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.268, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.024, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0473, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2207, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.075, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1214, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0243, "optimal":"yes"} ]}; 
