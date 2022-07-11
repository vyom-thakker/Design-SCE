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
{"source":"Households", "target":"Curbside Collection", "value":0.4753, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2394, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0106, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4206, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0382, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0742, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3464, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1178, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1905, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0381, "optimal":"yes"} ]}; 
