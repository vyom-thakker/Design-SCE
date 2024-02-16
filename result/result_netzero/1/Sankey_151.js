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
 {"source":"HDPE", "target":"Households", "value":0.4128, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6041, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0014, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8974, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1209, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8182, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0722, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1444, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0009, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.4233, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1779, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0004, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0005, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"LABS from chemical recycling of PE", "target":"Value-chain Upstream", "value":0.4233, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.1779, "optimal":"yes"} ]}; 