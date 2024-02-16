let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.1027, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.612, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0936, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0083, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0165, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0771, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0227, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0424, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0035, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0085, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 