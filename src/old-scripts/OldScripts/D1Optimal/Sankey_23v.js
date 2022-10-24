let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPLA"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0037, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.3089, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3436, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.3177, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.5871, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":0.0796, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.3001, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0403, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2966, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0178, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.1640000000000001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1046, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0005, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0344, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0046, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2115, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.1862, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2071, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.1915, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.3539, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.048, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.067, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.1024, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0168, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0704, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1139, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0228, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0709, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.1053, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0153, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.2761, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0531, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0248, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.0473, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0006, "optimal":"yes"} ]}; 