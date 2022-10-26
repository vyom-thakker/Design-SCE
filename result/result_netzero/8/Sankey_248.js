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
 {"source":"Pyrolysis", "target":"Losses", "value":0.013, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":1.3694, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0754, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.486, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0029, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.6937, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0103, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2295, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0645, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0154, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.4505, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1363, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0004, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Landfill", "value":0.0001, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0084, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0012, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2575, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.8509, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0468, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.302, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0018, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.3063, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.468, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0766, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0159, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0258, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0052, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.1117, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.1661, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0242, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0014, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0003, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0645, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0004, "optimal":"yes"} ]}; 
