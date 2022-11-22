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
 {"source":"LDPE", "target":"Households", "value":0.5003, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.4409, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0594, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.402, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0355, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.071, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.331, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1821, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1126, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0364, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 
