let dataV={"nodes": [
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
{"name":"Clay reycled PLA"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0154, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7062, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0016, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0205, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6053, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1384, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5519, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0487, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0974, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0094, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4316, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0009, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0037, "optimal":"yes"} , 
{"source":"Segregation", "target":"Clay reycled PLA", "value":0.0088, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0034, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0052, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0008, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1467, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2374, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0475, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0004, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0005, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0029, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0006, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0003, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Clay reycled PLA", "target":"Value-chain Upstream", "value":0.0088, "optimal":"yes"} ]}; 