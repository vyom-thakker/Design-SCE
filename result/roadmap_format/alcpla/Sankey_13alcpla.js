let dataV={"nodes": [
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
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0847, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.63, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0772, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0068, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0136, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0636, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0216, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.035, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.007, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 
