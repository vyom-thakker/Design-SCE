let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPLA"},
{"name":"Lumber"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0046, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0005, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7144, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0014, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.42, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0002, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.296, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.023, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3551, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0338, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0627, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2918, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0006, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0001, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0979, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1605, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0014, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0321, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0004, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.023, "optimal":"yes"} ]}; 