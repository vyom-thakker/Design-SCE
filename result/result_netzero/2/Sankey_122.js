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
{"source":"Households", "target":"Curbside Collection", "value":0.4216, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2932, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3843, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0339, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0678, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3165, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1076, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1741, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0348, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 
