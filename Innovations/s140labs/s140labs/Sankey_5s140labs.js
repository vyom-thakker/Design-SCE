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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0019, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0745, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6402, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0093, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0568, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.006, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.01, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0468, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0159, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0257, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0051, "optimal":"yes"} ]}; 
