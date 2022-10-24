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
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0018, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.037, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5163, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0425, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.9566, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.3257, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2268, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0091, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.1977, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1067, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2114, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0235, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.328, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.027, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.6077, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0085, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0129, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0021, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0018, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1804, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1097, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0361, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.01, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0149, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0022, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0091, "optimal":"yes"} ,
{"source":"Me-Lactate from alcoholysis", "target":"Value-chain Upstream", "value":0.6077, "optimal":"yes"} ]}; 