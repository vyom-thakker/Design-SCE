let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPP"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.2705, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6063, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0646, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8296, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1117, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7564, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0667, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1335, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0427, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3735, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.15, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0158, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0235, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0034, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"LABS from chemical recycling of PE", "target":"Value-chain Upstream", "value":0.3735, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.15, "optimal":"yes"} ]}; 