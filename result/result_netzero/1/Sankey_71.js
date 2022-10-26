let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPP"},
{"name":"Compost"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.1512, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6741, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0002, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0019, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7291, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0982, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0004, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6644, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0587, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1173, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Compost", "value":0.0013, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3615, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.137, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Compost", "target":"Value-chain Upstream", "value":0.0013, "optimal":"yes"} ,
{"source":"LABS from chemical recycling of PE", "target":"Value-chain Upstream", "value":0.3615, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.137, "optimal":"yes"} ]}; 
