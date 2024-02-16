let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0056, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0096, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5941, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.6863, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.0569, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0002, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2328, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0281, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.9299, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.085, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1642, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0057, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3528, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.4075, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0031, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.002, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.194, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1199, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0388, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0281, "optimal":"yes"} ,
{"source":"Me-Lactate from alcoholysis", "target":"Value-chain Upstream", "value":0.4075, "optimal":"yes"} ]}; 