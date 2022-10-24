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
{"source":"Households", "target":"Curbside Collection", "value":0.4651, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2497, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0106, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4113, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0374, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0726, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3387, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1152, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1863, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0373, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0106, "optimal":"yes"} ]}; 