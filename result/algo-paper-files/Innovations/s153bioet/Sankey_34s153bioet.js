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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0009, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.4121, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3026, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0045, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3703, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0332, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0654, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3049, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1037, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1677, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0335, "optimal":"yes"} ]}; 
