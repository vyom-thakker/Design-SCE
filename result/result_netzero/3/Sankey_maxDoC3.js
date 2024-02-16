let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":2.6864, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3675, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3189, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1585, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1905, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.381, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0587, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.7821, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"C4 Gas Mixture Pyrolysis", "target":"Value-chain Upstream", "value":0.0587, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.7821, "optimal":"yes"} ]}; 