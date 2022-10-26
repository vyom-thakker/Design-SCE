let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
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
 {"source":"HDPE", "target":"Households", "value":1.7532, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0412, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.3665, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.9013, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0024, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2573, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.7335, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.153, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.002, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3063, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.1822, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0273, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.2424, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0323, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.43, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0656, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.1002, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0164, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0093, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.015, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.003, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0897, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.1333, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0194, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"C4 Gas Mixture Pyrolysis", "target":"Value-chain Upstream", "value":0.0323, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.43, "optimal":"yes"} ]}; 
