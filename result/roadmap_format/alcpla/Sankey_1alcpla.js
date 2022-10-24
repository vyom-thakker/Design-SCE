let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.4807, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.3603, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0317, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.8093, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0289, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0026, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0051, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0062, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0176, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0034, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0021, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0007, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Me-Lactate from alcoholysis", "target":"Value-chain Upstream", "value":0.0176, "optimal":"yes"} ]}; 