let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"Lumber"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0027, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":1.2248, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.264, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.221, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.5068, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.203, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0137, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.3574, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1212, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2396, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1726, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.1445, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0264, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.3523, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0949, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0587, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.019, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0134, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0795, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0401, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0116, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0137, "optimal":"yes"} ,
{"source":"C4 Gas Mixture Pyrolysis", "target":"Value-chain Upstream", "value":0.0264, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.3523, "optimal":"yes"} ]}; 
