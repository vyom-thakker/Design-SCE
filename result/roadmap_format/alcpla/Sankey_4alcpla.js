let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.6051, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0013, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.6328, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.0921, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1471, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.9957, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0879, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1757, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4004, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0009, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.4187, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2202, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1361, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.044, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0005, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0003, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Me-Lactate from alcoholysis", "target":"Value-chain Upstream", "value":0.4187, "optimal":"yes"} ]}; 