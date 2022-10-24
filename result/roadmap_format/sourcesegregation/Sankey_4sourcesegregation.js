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
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0167, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.4329, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.4171, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.3222, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0025, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.0338, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0014, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1394, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0834, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8425, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0832, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0001, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0011, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":-1.2653, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.7771, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.7488, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.5784, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0046, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.2798, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.4274, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0699, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.2546, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.4119, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0824, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.214, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.3181, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0463, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0036, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0007, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0003, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0834, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0001, "optimal":"yes"} ]}; 
