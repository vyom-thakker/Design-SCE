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
{"name":"Lumber"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0156, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0029, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.2789, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0095, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.498, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.4573, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0009, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3311, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0782, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1465, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1977, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0008, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.379, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0018, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1768, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.006, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.5836, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0007, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.001, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0002, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0972, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0599, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0194, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0022, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0033, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0005, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0782, "optimal":"yes"} ,
{"source":"Lactic acid from acid hydrolysis", "target":"Value-chain Upstream", "value":1.5836, "optimal":"yes"} ]}; 