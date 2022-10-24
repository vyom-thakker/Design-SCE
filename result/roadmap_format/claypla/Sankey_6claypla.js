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
{"source":"Households", "target":"Curbside Collection", "value":0.4346, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2801, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3962, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.035, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0699, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3263, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0927, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1795, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0182, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0359, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ]}; 