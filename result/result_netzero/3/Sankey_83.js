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
 {"source":"HDPE", "target":"Households", "value":0.4502, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3602, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.4142, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0046, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.0377, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1914, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0012, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.9449, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0835, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1668, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.103, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.228, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.2622, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0029, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.006, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0801, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0371, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0566, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0093, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0775, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1254, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0251, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0545, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.1442, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0425, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.021, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0023, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0004, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0002, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"C4 Gas Mixture Pyrolysis", "target":"Value-chain Upstream", "value":0.006, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.0801, "optimal":"yes"} ]}; 