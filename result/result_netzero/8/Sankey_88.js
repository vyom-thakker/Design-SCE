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
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.2474, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5619, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.1532, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0022, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8503, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1145, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0008, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7743, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0684, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1367, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.1635, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3714, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.1013, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0015, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0589, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0899, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0147, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1263, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2043, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0409, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0375, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0557, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0081, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0011, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0002, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0008, "optimal":"yes"} ]}; 
