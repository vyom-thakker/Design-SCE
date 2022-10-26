let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0562, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6585, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0511, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0045, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.009, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.029, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0101, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"LABS from chemical recycling of PE", "target":"Value-chain Upstream", "value":0.029, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.0101, "optimal":"yes"} ]}; 
