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
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.6524, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0001, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.3616, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8252, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.189, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7523, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0664, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1328, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3986, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.2209, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2192, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1355, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0438, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Lactic acid from acid hydrolysis", "target":"Value-chain Upstream", "value":0.2209, "optimal":"yes"} ]}; 