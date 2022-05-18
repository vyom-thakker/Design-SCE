let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3231, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3916, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0013, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.293, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.026, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0517, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2413, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0781, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1327, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.004, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0265, "optimal":"yes"} ]}; 
