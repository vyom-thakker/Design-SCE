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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6299, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.002, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5718, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0507, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1009, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4709, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1601, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.259, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0518, "optimal":"yes"} ]}; 
