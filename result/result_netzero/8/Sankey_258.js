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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":1.3537, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0446, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.5445, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0139, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.7243, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2323, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0027, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.5689, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1387, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2769, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.8938, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0294, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.3595, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0092, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.3218, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.4916, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0804, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.01, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0162, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0032, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.133, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.1977, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0288, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0071, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0014, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0006, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0027, "optimal":"yes"} ]}; 
