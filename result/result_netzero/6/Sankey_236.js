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
{"name":"Dropoff"},
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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0049, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0058, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3708, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0855, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.7094, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.9014, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0001, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2701, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0244, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.7043, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.153, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3008, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0038, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2397, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0553, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.1047, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0021, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0014, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1318, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0815, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0264, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0304, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0205, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0044, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0002, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0244, "optimal":"yes"} ,
{"source":"Lactic acid from acid hydrolysis", "target":"Value-chain Upstream", "value":1.1047, "optimal":"yes"} ]}; 
