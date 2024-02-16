let dataV={"nodes": [
{"name":"Landfill"},
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
{"source":"Households", "target":"Curbside Collection", "value":0.5881, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1266, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5362, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0473, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0946, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4416, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2429, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1501, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0486, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 
