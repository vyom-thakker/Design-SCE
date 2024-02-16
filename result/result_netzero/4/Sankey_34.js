let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.6893, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.045, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6472, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0872, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5901, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0521, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1041, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4561, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0045, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0191, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2508, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1551, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0502, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"C4 Gas Mixture Pyrolysis", "target":"Value-chain Upstream", "value":0.0045, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.0191, "optimal":"yes"} ]}; 