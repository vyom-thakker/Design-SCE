let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPP"},
{"name":"rPLA"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.2614, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6409, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0034, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0139, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8104, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1092, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7387, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0652, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1304, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0022, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0092, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3859, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1536, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0008, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0012, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0072, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0014, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0006, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0001, "optimal":"yes"} ,
{"source":"LABS from chemical recycling of PE", "target":"Value-chain Upstream", "value":0.3859, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.1536, "optimal":"yes"} ]}; 