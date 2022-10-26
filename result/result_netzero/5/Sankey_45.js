let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"rPLA"},
{"name":"Lumber"},
{"name":"Clay reycled PLA"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7032, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.067, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6788, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0914, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6189, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0546, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1092, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4653, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0009, "optimal":"yes"} , 
{"source":"Segregation", "target":"Clay reycled PLA", "value":0.0434, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0003, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2559, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1579, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0512, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0007, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0001, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Clay reycled PLA", "target":"Value-chain Upstream", "value":0.0434, "optimal":"yes"} ]}; 
