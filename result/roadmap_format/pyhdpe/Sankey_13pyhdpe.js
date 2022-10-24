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
{"source":"Households", "target":"Curbside Collection", "value":0.0832, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6315, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0758, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0067, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0134, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0625, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0212, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0344, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0069, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 
