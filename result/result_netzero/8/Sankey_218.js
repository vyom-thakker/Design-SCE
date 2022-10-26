let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0131, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7016, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0013, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0104, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0011, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0018, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0086, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0029, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0047, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0009, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0013, "optimal":"yes"} ]}; 
