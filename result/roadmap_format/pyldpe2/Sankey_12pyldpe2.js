let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPLA"},
{"name":"Lumber"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.3728, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3728, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.3728, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.1864, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7435, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5614, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6779, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0598, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":-1.6947, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.6779, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.6779, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.6779, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.3389, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.244, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.3728, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.061, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.2305, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.3728, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0746, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0925, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.3728, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.1583, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0542, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.2644, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0508, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0237, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ]}; 