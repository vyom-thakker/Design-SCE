let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPLA"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.3046, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0003, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.3834, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3488, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3395, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1415, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.189, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.378, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1998, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.071, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.4925, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1099, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0679, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.022, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0001, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0001, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0554, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0107, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.005, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Me-Lactate from alcoholysis", "target":"Value-chain Upstream", "value":1.4925, "optimal":"yes"} ]}; 
