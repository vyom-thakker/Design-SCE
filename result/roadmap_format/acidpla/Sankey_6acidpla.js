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
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0002, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.4739, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.1325, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.9647, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.3643, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.207, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0011, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.2425, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1098, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2193, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3086, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0863, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.6282, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0001, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1697, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1049, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0339, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0101, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0475, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0218, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0069, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0011, "optimal":"yes"} ,
{"source":"Lactic acid from acid hydrolysis", "target":"Value-chain Upstream", "value":0.6282, "optimal":"yes"} ]}; 