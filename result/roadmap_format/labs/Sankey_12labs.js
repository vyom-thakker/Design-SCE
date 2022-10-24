let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.457, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5931, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9255, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1247, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8438, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0745, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1489, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0041, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.4312, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1839, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0014, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0023, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0005, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"LABS from chemical recycling of PE", "target":"Value-chain Upstream", "value":0.4312, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.1839, "optimal":"yes"} ]}; 
