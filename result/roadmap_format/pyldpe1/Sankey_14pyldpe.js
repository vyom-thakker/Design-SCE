let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Clinker"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3505, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3642, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3196, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0282, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0564, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.205, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0032, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0419, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0428, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1128, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Clinker", "value":0.0269, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0226, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"C4 Gas Mixture Pyrolysis", "target":"Value-chain Upstream", "value":0.0032, "optimal":"yes"} ,
{"source":"Light Liquid Fuel Pyrolysis", "target":"Value-chain Upstream", "value":0.0419, "optimal":"yes"} ]}; 
