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
{"name":"rPP"},
{"name":"rPLA"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.4977, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5725, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0085, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0287, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9697, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1378, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8841, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.078, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.156, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0397, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0056, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0189, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.415, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1766, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0143, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0218, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0036, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0021, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0031, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0147, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0028, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0013, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"LABS from chemical recycling of PE", "target":"Value-chain Upstream", "value":0.415, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.1766, "optimal":"yes"} ]}; 