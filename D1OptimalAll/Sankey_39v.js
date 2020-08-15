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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0021, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3668, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3479, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0103, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3221, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0295, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0569, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2653, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0902, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1459, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0292, "optimal":"yes"} ]}; 
