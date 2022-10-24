let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPLA"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0617, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.3728, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3728, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.3728, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.1864, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.1446, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0054, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1549, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.3073, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6748, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0921, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0014, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.003, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0006, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":-1.6947, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.6779, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.6779, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.6779, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.3389, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.244, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.3728, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.061, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.2305, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.3728, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0746, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.2508, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.3728, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0542, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.2644, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0508, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0237, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.3073, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0014, "optimal":"yes"} ]}; 
