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
{"name":"Lumber"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0197, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7078, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0024, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0017, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6448, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0869, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5879, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0519, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1038, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0131, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0137, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0016, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0011, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.025, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.3278, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0017, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0072, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.003, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0012, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0076, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0047, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0015, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0009, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0006, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0009, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0002, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"C4 Gas Mixture Pyrolysis", "target":"Value-chain Upstream", "value":0.025, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.3278, "optimal":"yes"} ]}; 
