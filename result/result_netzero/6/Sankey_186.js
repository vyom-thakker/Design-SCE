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
{"name":"rPLA"},
{"name":"Lumber"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0343, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.409, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0599, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.5271, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.7851, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2453, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0024, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.6247, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1436, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2868, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0226, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2695, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0395, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.011, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.9954, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0124, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0081, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.002, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1483, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0916, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0297, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0217, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0146, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0032, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0085, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0016, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0008, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0024, "optimal":"yes"} ,
{"source":"Lactic acid from acid hydrolysis", "target":"Value-chain Upstream", "value":0.9954, "optimal":"yes"} ]}; 