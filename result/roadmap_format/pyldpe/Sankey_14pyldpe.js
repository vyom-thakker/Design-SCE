let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0021, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.4699, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2449, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0106, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4157, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0378, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0734, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3423, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1164, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1883, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0377, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0106, "optimal":"yes"} ]}; 