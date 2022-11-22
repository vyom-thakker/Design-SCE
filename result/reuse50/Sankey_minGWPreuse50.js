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
 {"source":"LDPE", "target":"Households", "value":0.3574, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3149, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0424, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2871, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0253, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0507, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2365, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1301, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0804, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.026, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 
