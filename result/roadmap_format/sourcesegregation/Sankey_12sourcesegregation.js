let dataV={"nodes": [
{"name":"Pyrolysis"},
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
{"name":"Lumber"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0149, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.2865, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3925, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.4353, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9809, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0012, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1323, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0746, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8049, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0789, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0001, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0009, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":-1.2087, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.518, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.7096, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.7869, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.1865, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.2849, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0466, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0358, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.3903, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.2055, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0781, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.2912, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.4328, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.063, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0746, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0001, "optimal":"yes"} ]}; 
