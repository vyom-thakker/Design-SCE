let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0001, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3752, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.6008, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8603, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1159, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7844, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0692, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1384, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2483, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0596, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.2544, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1366, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0844, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0273, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"C4 Gas Mixture Pyrolysis", "target":"Value-chain Upstream", "value":0.0596, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.2544, "optimal":"yes"} ]}; 