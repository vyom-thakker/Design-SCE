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
 {"source":"LDPE", "target":"Households", "value":0.3574, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0529, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3044, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0482, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0043, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0085, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0397, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0135, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0219, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0044, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 
