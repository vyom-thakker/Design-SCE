let dataV={"nodes": [
{"name":"Landfill"},
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
{"name":"Lumber"},
{"name":"Clay reycled PLA"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0086, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6507, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0378, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.2344, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8154, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1162, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0046, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7386, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0656, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1304, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0056, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4248, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0247, "optimal":"yes"} , 
{"source":"Segregation", "target":"Clay reycled PLA", "value":0.1531, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0031, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.002, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2337, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1444, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0467, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0136, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0091, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.002, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Clay reycled PLA", "target":"Value-chain Upstream", "value":0.1531, "optimal":"yes"} ]}; 
