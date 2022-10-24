let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0016, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0008, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7143, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0014, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0891, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6274, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0081, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0715, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0072, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0126, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0587, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.02, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0323, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0065, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0081, "optimal":"yes"} ,
{"source":"Me-Lactate from alcoholysis", "target":"Value-chain Upstream", "value":0.0001, "optimal":"yes"} ]}; 