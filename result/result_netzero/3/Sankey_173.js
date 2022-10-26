let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.3954, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.4994, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.195, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9604, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1294, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8756, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0773, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1545, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0062, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3304, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.129, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0084, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1124, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0022, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0034, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0006, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1123, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1817, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0363, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0477, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.071, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0103, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"C4 Gas Mixture Pyrolysis", "target":"Value-chain Upstream", "value":0.0084, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.1124, "optimal":"yes"} ]}; 
