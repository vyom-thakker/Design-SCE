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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0018, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0155, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6992, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0091, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0032, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0012, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0006, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0026, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0009, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0014, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0003, "optimal":"yes"} ]}; 
