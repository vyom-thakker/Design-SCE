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
 {"source":"LDPE", "target":"Households", "value":0.5003, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0716, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4287, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0653, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0058, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0115, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0538, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0183, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0296, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0059, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 
