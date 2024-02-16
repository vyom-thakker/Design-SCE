let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6097, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.105, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5559, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0491, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0981, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3955, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.043, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.015, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2175, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1345, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0435, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"LABS from chemical recycling of PE", "target":"Value-chain Upstream", "value":0.043, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.015, "optimal":"yes"} ]}; 