let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Clay reycled PLA"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.2917, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.4591, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0161, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.7347, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0147, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0013, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0026, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0013, "optimal":"yes"} , 
{"source":"Segregation", "target":"Clay reycled PLA", "value":0.0108, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0007, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0004, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Clay reycled PLA", "target":"Value-chain Upstream", "value":0.0108, "optimal":"yes"} ]}; 