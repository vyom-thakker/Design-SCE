let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.011, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7037, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0015, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0082, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0009, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0015, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0004, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0049, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0015, "optimal":"yes"} ,
{"source":"C4 Gas Mixture Pyrolysis", "target":"Value-chain Upstream", "value":0.0004, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.0049, "optimal":"yes"} ]}; 
