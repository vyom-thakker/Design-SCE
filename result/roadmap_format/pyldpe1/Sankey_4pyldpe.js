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
{"source":"Households", "target":"Curbside Collection", "value":0.6279, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0868, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0018, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5706, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0505, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1007, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4699, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2584, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1598, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0517, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 
